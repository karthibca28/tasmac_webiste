import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
	selector: 'app-suppliers',
	templateUrl: './suppliers.component.html',
	styleUrls: ['./suppliers.component.css'],
	standalone: true,
	imports: [CommonModule],

  animations: [
    trigger('fadeInAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ])
    ])
  ]

})
export class SuppliersComponent implements OnInit {

	currentSection = 'distilleries';
	
	distilleries = [
		{
			slNo: 1,
			name: 'ENRICA ENTERPRISES PVT. LIMITED',
			location: 'No.5, Bye Pass Road, Poonamallee, Chennai 600 056',
			phoneNo: '28202555',
		},
		{
			slNo: 2,
			name: 'MOHAN BREWERIES & DISTILLERIES LIMITED',
			location: 'No.112, M.M. Nagar, Valasaravakkam, Chennai 600 087',
			phoneNo: '28291238',
		},
		{
			slNo: 3,
			name: 'SHIVA DISTILLERIES PVT. LIMITED',
			location:
				'45, Mettupalayam Road, Narasimha Naicken Palayam, Coimbatore 641 031',
			phoneNo: '28474300',
		},
		{
			slNo: 4,
			name: 'EMPEE DISTILLERIES LIMITED',
			location:
				'Mevaloorkuppam Village, Sriperumbudur Taluk, Kancheepuram Dist. 602 105',
			phoneNo: '28522510',
		},
		{
			slNo: 5,
			name: 'SOUTHERN AGRIFURANE INDUSTRIES PVT. LIMITED (SAFIL)',
			location: 'Valuda Reddy Village, Villupuram District 605 602',
			phoneNo: '28475967',
		},
		{
			slNo: 6,
			name: 'MIDAS GOLDEN DISTILLERIES PVT. LIMITED',
			location:
				'2/207, Padappai, Pushpagiri Road, Sirumathur Village, Sriperumbudur Taluk, Kancheepuram Dist. 601 301',
			phoneNo: '28216465',
		},
		{
			slNo: 7,
			name: 'ACCORD BREWERIES AND DISTILLERIES LTD',
			location: 'Nathanallur Village, Kancheepuram Taluk & District 631 605',
			phoneNo: '28344195',
		},
		{
			slNo: 8,
			name: 'SNJ DISTILLERS PVT. LTD.',
			location:
				'56/1, Kallapiranpuram Village & Post, Madurantagam Taluk, Kancheepuram District 603 308',
			phoneNo: '24320706',
		},
		{
			slNo: 9,
			name: 'KALS DISTILLERIES PVT. LTD.',
			location:
				'Kallakkottai Village, Gandarvakottai Taluk, Pudukottai District 622 302',
			phoneNo: '24345254',
		},
		{
			slNo: 10,
			name: 'GOLDEN VATS PVT. LTD.',
			location:
				'Karnavur Village, Mannargudi Taluk, Tiruvarur District 614 014',
			phoneNo: '64524144',
		},
		{
			slNo: 11,
			name: 'KALS BEVERAGES PVT. LTD.',
			location:
				'SF.No.103/2, Mavuthampathi Village, Navakkarai (Post), Coimbatore 641 105',
			phoneNo: '28110187',
		},
	];

	breweries = [
		{
			slNo: 1,
			name: 'UNITED BREWERIES LTD. (ARANVOYAL)',
			location:
				'Mount Tiruvallur High Road, Aranvoyal Village, Thiruvallur District 602 025',
			phoneNo: '27621187',
		},
		{
			slNo: 2,
			name: 'MOHAN BREWERIES & DISTILLERIES LTD.',
			location: 'No.112, M.M. Nagar, Valasaravakkam, Chennai 600 087',
			phoneNo: '28291238',
		},
		{
			slNo: 3,
			name: 'UNITED BREWERIES LTD. (KUTHAMBAKKAM)',
			location:
				'788/2, Kuthambakkam, Thirumazhisai, Thiruvallur District 602 107',
			phoneNo: '26811154',
		},
		{
			slNo: 4,
			name: 'SNJ BREWERIES LTD.',
			location:
				'23, Moosivakkam, Padalam Kootu Road, Madurantagam Taluk, Kancheepuram District 603 308',
			phoneNo: '24320616',
		},
		{
			slNo: 5,
			name: 'KALS BREWERIES PVT. LTD.',
			location: 'Kunnathur Village, Illapur Taluk, Pudukkottai District.',
			phoneNo: '24345264',
		},
		{
			slNo: 6,
			name: 'APPOLLO DISTILLERIES PVT. LTD.',
			location:
				'Billakuppam Village, Sidharaja Kandigai Post, Gummidipoondi Taluk, Thiruvallur District 601 201',
			phoneNo: '27997267',
		},
		{
			slNo: 7,
			name: 'ACCORD BREWERIES AND DISTILLERIES LTD',
			location: 'Elayanarvellore village, Kancheepuram Taluk',
			phoneNo: '28346506',
		}
		// {
		// 	slNo: 8,
		// 	name: '	Tropical Breweries Private Ltd',
		// 	location: 'Thervoy Kandigai, Thiruvallur District',
		// 	phoneNo: '',
		// },
	];

	constructor() {}

	ngOnInit(): void {}

	activeTab = 'distilleries'; // Default active tab

	showSection(section: string): void {
		this.currentSection = section;
	  }
}
