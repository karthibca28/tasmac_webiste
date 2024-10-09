import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Company } from '../models/company.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CompaniesBlockComponent } from '../companies-block/companies-block.component';
import { Brands } from '../models/brands.model';
import { FormsModule } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
	selector: 'app-brands-page',
	templateUrl: './brands-page.component.html',
	standalone: true,
	imports: [CompaniesBlockComponent, AsyncPipe, CommonModule, FormsModule],
	styleUrl: './brands-page.component.css',
})
export class brandsPageComponent implements OnInit {
	selectedTab: number = 0;
	searchTerm: string = '';
	brands: any
	productList: any
	isShow: boolean = false;
	topPosToStartShowing = 100;
	filteredProductList: any = [];

	constructor(private config: ConfigService, private formService: FormService) {
	}

	ngOnInit() {
		this.getAllBrands();
		this.getAllProducts();
	}

	@HostListener('window:scroll')
	checkScroll() {
		const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		this.isShow = scrollPosition >= this.topPosToStartShowing;
	}

	getAllBrands() {
		this.formService.getAllBrands().subscribe((res: any) => {
			this.brands = res.data.sort((a: any, b: any) => {
				return a.BrandName?.localeCompare(b.BrandName);
			}).slice(0, -1);
			this.brands.unshift({ BrandId: 0, BrandName: 'All' })
			console.log(this.brands)
		})
	}

	getAllProducts() {
		this.formService.getAllLiquoreProducts().subscribe((res: any) => {
			this.productList = res.data.slice(0, -1);
			this.filteredProductList = [...this.productList];
		})
	}

	getLiquoreProductsByBrandId(brandId: any) {
		const value = {
			pBrandId: brandId
		}
		this.formService.getLiquoreProductsByBrandId(value).subscribe((res: any) => {
			this.productList = res.data.slice(0, -1);
			this.filteredProductList = [...this.productList];
		})
	}

	getUniqueUnitNames(products: any[]): string[] {
		const unitNames = products.flatMap(product => product.productDetails.map(detail => detail.unitName));
		return [...new Set(unitNames)];
	}

	getMrpByUnitName(productDetails: any, unitName: any){
		const detail = productDetails.find(detail => detail.unitName === unitName);
		const response = detail ? `${detail.mrpPerBottle}Rs` : null;
		return response
	}

	selectTab(tab: any) {
		this.selectedTab = tab.BrandId
		if (tab.BrandId == 0) {
			this.getAllProducts()
			this.clearSearch();
		}
		else {
			this.getLiquoreProductsByBrandId(tab.BrandId)
			this.clearSearch();
		}
	}

	filterProducts() {
		if (this.searchTerm.trim() === '') {
			this.filteredProductList = [...this.productList];
			return;
		}
		const lowerSearchTerm = this.searchTerm.toLowerCase();

		this.filteredProductList = this.productList
			.map(company => {
				const filteredProducts = company.Product_Name.filter(product =>
					product.productName.toLowerCase().includes(lowerSearchTerm)
				);
				return filteredProducts.length > 0 ? { ...company, Product_Name: filteredProducts } : null;
			})
			.filter(company => company !== null);
	}

	clearSearch() {
		this.searchTerm = '';
		this.filterProducts();
	}

	scrollToTop() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}
}
