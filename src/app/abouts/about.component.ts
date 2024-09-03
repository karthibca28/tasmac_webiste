import { Observable, throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Intro } from './models/intro.model';
import { Feature } from './models/feature.model';
import { catchError } from 'rxjs/operators';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FeatureBlockComponent } from './feature-block/feature-block.component';
import { AppModule } from '../app.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [FeatureBlockComponent, AsyncPipe, CommonModule],
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  intro$: Observable<Intro>;
  features$: Observable<Feature[]>;

  constructor(private config: ConfigService, private router: Router) { }

  ngOnInit(): void {
    this.loadPageData('pages', 1);
    this.loadFeatureData('features');
  }

  navigateToBrands() {
    this.router.navigate(['/brands']);
  }
  navigateToEvents() {
    this.router.navigate(['/gallery']);
  }
  navigateToshopLocator() {
    this.router.navigate(['/shoplocator']);
  }
  navigateToshopVat() {
    this.router.navigate(['/suppliers']);
  }
  navigateToVigilance() {
    this.router.navigate(['/suppliers']);
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
  reports = [{ id: "tamil", name: 'Annual Report 2016-17 Tamil',file:"assets/images/files/tasmac-annual-report-2016-2017(tamil).pdf" }, { id: "english", name: 'Annual Report 2016-17 English',file:"assets/images/files/tasmac-annual-report-2016-2017(english).pdf" }]
  forms(reportType: string) {
    if (reportType == 'annual_report') {
      this.reports = [{ id: "tamil", name: 'Annual Report 2016-17 Tamil',file:"assets/images/files/tasmac-annual-report-2016-2017(tamil).pdf" }, { id: "english", name: 'Annual Report 2016-17 English',file:"assets/images/files/tasmac-annual-report-2016-2017(english).pdf" }]
    }
    else {
      this.reports = [{ id: "forms", name: "Trasfer Stock Form",file:"assets/images/files/transfer-stock-form-tasmac.doc" }]
    }
  }
  downloadReport(file:any){

  }
}
