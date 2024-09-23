import { Observable, throwError, catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { Image } from '../models/image.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ImageBlockComponent } from '../image-block/image-block.component';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-gallery-page',
	templateUrl: './gallery-page.component.html',
	standalone: true,
	imports: [ImageBlockComponent, AsyncPipe, FormsModule, CommonModule],
})
export class GalleryPageComponent implements OnInit {
	// images$: Observable<Image[]> = new Observable();

	images = [
		{ id: 0, image: 'assets/images/gallery-images/samuga_neethi(01).jpeg' },
		{ id: 1, image: 'assets/images/gallery-images/samuga_neethi(02).jpeg' },
		{ id: 2, image: 'assets/images/gallery-images/samuga_neethi(03).jpeg' }
	]

	gallery = [
		{ id: 0, image: 'assets/images/gallery-images/amb1.jpg' },
		{ id: 1, image: 'assets/images/gallery-images/board.jpg' },
		{ id: 2, image: 'assets/images/gallery-images/Chairman.jpg' }
	]

	constructor(private config: ConfigService) { }

	ngOnInit() {
		// this.getBlockData('images');
	}

	// getBlockData(database: string) {
	// 	this.images$ = this.config.getSettings(database).pipe(
	// 		catchError(error => {
	// 			console.error('Error fetching feature data:', error);
	// 			return throwError(error);
	// 		})
	// 	);
	// }
}
