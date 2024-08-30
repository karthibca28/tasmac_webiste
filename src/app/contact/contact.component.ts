import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
	infoItems: any[];
	infoItems2: any[];
	contactSections: any[];

	ngOnInit(): void { 
		this.infoItems = [
			{
			  title: 'Complaints',
			  type: 'info',
			  info: [
				{ label: 'Email', value: 'complaints@tasmac.com' },
				{ label: 'Phone', value: '044-285XXXX' }
			  ]
			}
		  ];
		  this.infoItems2 = [
			{
			  title: 'Suggestions',
			  type: 'info',
			  info: [
				{ label: 'Email', value: 'suggestions@tasmac.com' },
				{ label: 'Phone', value: '044-285XXXX' }
			  ]
			}
		  ];
		// this.contactSections = [
		//   {
		// 	title: 'Corporate Office',
		// 	type: 'list',
		// 	items: [
		// 	  { label: 'Chairman', value: '044-28524059' },
		// 	  { label: 'Managing Director', value: '044-28521201' },
		// 	  { label: 'General Manager (Wholesale & Admin)', value: '044-28523129' },
		// 	  { label: 'General Manager (Retail Vending)', value: '044-28542308' },
		// 	  { label: 'General Manager (Finance)', value: '044-28522835' },
		// 	  { label: 'Company Secretary', value: '044-28515977' },
		// 	  { label: 'Control Room', value: '28542303' },

		// 	]
		//   },
		//   {
		// 	title: 'Regional Offices',
		// 	type: 'list',
		// 	items: [
		// 	  { label: 'Chennai', value: '044-28542302' },
		// 	  { label: 'Trichy', value: '0431-2482081' },
		// 	  { label: 'Coimbatore', value: '0422-24316642' },
		// 	  { label: 'Salem', value: '0427-2445934' },
		// 	  { label: 'Madurai', value: '0452-2537225' },
		// 	]
		//   },
		//   {
		// 	title: 'Office Address',
		// 	type: 'info',
		// 	info: [
		// 	  { label: 'Name', value: 'Tamil Nadu State Marketing Corporation Limited' },
		// 	  { label: 'Address', value: 'CMDA Tower-II, IV Floor, Gandhi Irwin Bridge Road, Egmore, Chennai - 600 008' },
		// 	  { label: 'Phone', value: ['044-28521298', '044-28524608', '044-28521970'] },
		// 	  { label: 'Fax', value: '044-28524634' },
		// 	  { label: 'Gram', value: 'TANMARK' },
		// 	]
		//   },
		//   {
		// 	title: 'Website Information Officer',
		// 	type: 'info',
		// 	info: [
		// 	  { label: 'Name', value: 'M. Jothi Shankar' },
		// 	  { label: 'Designation', value: 'Deputy General Manager (Purchase & Sales)' },
		// 	  { label: 'Address', value: '5th Floor, C.M.D.A, Tower - II, Gandhi Irwin Bridge Road, Egmore, Chennai - 600008' },
		// 	  { label: 'Email', value: 'tasmacrv2015@gmail.com' },
		// 	  { label: 'Contact Number', value: '9445029743' }
		// 	]
		//   },
		//   {
		// 	title: 'Complaints',
		// 	type: 'info',
		// 	info: [
		// 	  { label: 'Email', value: 'complaints@tasmac.com' },
		// 	  { label: 'Phone', value: '044-285XXXX' }
		// 	]
		//   },
		//   {
		// 	title: 'Suggestions',
		// 	type: 'info',
		// 	info: [
		// 	  { label: 'Email', value: 'suggestions@tasmac.com' },
		// 	  { label: 'Phone', value: '044-285XXXX' }
		// 	]
		//   }
		// ];
	}
}
