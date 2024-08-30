import { Observable, throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Intro } from './models/intro.model';
import { Feature } from './models/feature.model';
import { catchError } from 'rxjs/operators';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FeatureBlockComponent } from './feature-block/feature-block.component';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [FeatureBlockComponent, AsyncPipe, CommonModule],
  styleUrls:['./about.component.css']
})
export class AboutComponent implements OnInit {
  intro$: Observable<Intro>;
  features$: Observable<Feature[]>;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.loadPageData('pages', 1);
    this.loadFeatureData('features');
  }

  private loadPageData(database: string, id?: number): void {
    this.intro$ = this.config.getSettings(database, id).pipe(
      catchError(error => {
        console.error('Error fetching intro data:', error);
        // Optionally, return a fallback observable or empty object if needed
        return throwError(() => new Error('Failed to load intro data'));
      })
    );
  }

  private loadFeatureData(database: string): void {
    this.features$ = this.config.getSettings(database).pipe(
      catchError(error => {
        console.error('Error fetching feature data:', error);
        // Optionally, return a fallback observable or empty array if needed
        return throwError(() => new Error('Failed to load feature data'));
      })
    );
  }
}
