import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-district-offices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './district-offices.component.html',
  styleUrl: './district-offices.component.css'
})
export class DistrictOfficesComponent {
  @Input() officeData: any;
}

