import { Component, Input, SimpleChanges } from '@angular/core';
import { Image } from '../models/image.model';
@Component({
    selector: 'app-image-block',
    templateUrl: './image-block.component.html',
    standalone: true,
})
export class ImageBlockComponent {
    @Input() Image: any
    images:any

    ngOnChanges(changes: SimpleChanges) {
        if (changes['dynamicData']) {
            this.images = this.Image
            console.log(this.images)
        }
    }
}
