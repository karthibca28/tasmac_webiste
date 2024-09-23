import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormService } from '../services/form.service';
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
	supplierType: string = 'Distellery'
	supplierDetails: any
	constructor(private formService: FormService) { }

	ngOnInit(): void {
		this.getSupplierByTypes()
	}
	filterSupplier(supplierData:any){
		this.supplierType = supplierData
		this.getSupplierByTypes()
	}

	getSupplierByTypes() {
		const value = {
			p_supplierProductionType: this.supplierType
		}
		this.formService.getSupplierByTypes(value).subscribe((res: any) => {
			this.supplierDetails = res.data.slice(0,-1)
		})
	}

	showSection(section: string): void {

	}
}
