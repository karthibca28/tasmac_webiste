import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormService } from '../services/form.service';
import { LoaderComponent } from '../loader/loader.component';
import { LoaderService } from '../services/loader.service';
@Component({
	selector: 'app-suppliers',
	templateUrl: './suppliers.component.html',
	styleUrls: ['./suppliers.component.css'],
	standalone: true,
	imports: [CommonModule, LoaderComponent],

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
	supplierType: string = 'Distillery'
	supplierDetails: any
	constructor(private formService: FormService, private loader: LoaderService) { }

	ngOnInit(): void {
		this.getSupplierByTypes()
	}
	filterSupplier(supplierData: any) {
		this.supplierType = supplierData
		this.getSupplierByTypes()
	}

	getSupplierByTypes() {
		this.loader.show();
		const value = {
			p_supplierProductionType: this.supplierType
		}
		this.formService.getSupplierByTypes(value).subscribe((res: any) => {
			this.supplierDetails = res.data
			this.loader.hide();

		}, (error: any) => {
			this.loader.hide();
		})
	}

	showSection(section: string): void {

	}
}
