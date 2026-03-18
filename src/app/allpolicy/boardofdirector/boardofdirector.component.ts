import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-boardofdirector',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './boardofdirector.component.html',
  styleUrl: './boardofdirector.component.css'
})
export class BoardofdirectorComponent {
  boardData = [
    {
      name: "Thiru. Dheeraj Kumar, IAS",
      description: "The Chairman, TASMAC and Additional Chief Secretary to Government, Home, Prohibition and Excise Department, Secretariat, Chennai – 600 009."
    },
    {
      name: "Thiru. T. Udhayachandran, IAS",
      description: "Additional Chief Secretary to Government, Finance Department, Secretariat, Chennai – 600 009."
    },
    {
      name: "Tmt. Shilpa Prabhakar Satish, IAS",
      description: "Secretary to Government, Commercial Taxes and Registration Department, Secretariat, Chennai – 600 009."
    },
    {
      name: "Tmt. S.P. Karthikaa, IAS",
      description: "Director of Prohibition and Excise, Chepauk, Chennai – 600 005."
    },
    {
      name: "Thiru. T. Christuraj, IAS",
      description: "Managing Director, TASMAC Ltd., Egmore, Chennai – 600 008."
    },
    {
      name: "Thiru. C.R. Balaji",
      description: "Additional Director (BPE), Finance Department, Secretariat, Chennai."
    }
  ];

}
