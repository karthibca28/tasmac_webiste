import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-office-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './office-details.component.html',
  styleUrl: './office-details.component.css'
})
export class OfficeDetailsComponent {
  @Input() officeData: any;


  hasColumnData(column: string): boolean {
    return this.officeData.offices.some(office => office[column]);
  }
  
}
