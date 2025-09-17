import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { FormService } from '../services/form.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PascalCasePipe } from '../services/pascal-case.pipe';

@Component({
  selector: 'app-stock-availability',
  standalone: true,
  imports: [FormsModule, CommonModule, PascalCasePipe, DropdownModule],
  templateUrl: './stock-availability.component.html',
  styleUrl: './stock-availability.component.css'
})
export class StockAvailabilityComponent {
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  latitude = 13.0827;
  longitude = 80.2707;
  searchTerm = '';
  selectedDistrict = '';
  selectedTaluk = '';
  selectedRvShopNo = '';
  selectedBrand: any
  selectedRvShopNo2 = ''
  isShow: boolean = false;
  topPosToStartShowing = 100;
  map: L.Map;
  markers: L.MarkerClusterGroup;
  filteredShops: any
  districts: any[] = [];
  taluks: any[] = [];
  rvShopNos: any[] = [];
  brands: any[] = []
  stockDetails: any[] = []
  expandedRow: number | null = null;
  filteredStockDetails: any

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.isShow = scrollPosition >= this.topPosToStartShowing;
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  constructor(private formService: FormService) { }

  ngOnInit(): void {
    // this.loadShopData();
    this.getDistrict();
    this.getAllTaluk();
    this.getAllShopNo();
    this.getAllBrands();
    this.getAllStocks();
  }

  toggleExpand(rowIndex: number): void {
    if (this.expandedRow === rowIndex) {
      this.expandedRow = null;
    } else {
      this.expandedRow = rowIndex;
    }
  }

  getAllStocks() {
    this.formService.getAllStockDetails().subscribe((res: any) => {
      this.filteredStockDetails = res.data;
      this.stockDetails = res.data;
    })
  }

  getDistrict() {
    this.formService.getAllDistrict().subscribe((res: any) => {
      this.districts = res.data
    })
  }

  getAllTaluk() {
    this.formService.getAllTaluk().subscribe((res: any) => {
      this.taluks = res.data
    })
  }

  getAllShopNo() {
    this.formService.getAllShopNo().subscribe((res: any) => {
      this.rvShopNos = res.data
    })
  }

  getAllBrands() {
    this.formService.getAllBrands().subscribe((res: any) => {
      this.brands = res.data
    })
  }

  filterRvAndTaluk() {
    this.formService.getAllTaluk().subscribe((res: any) => {
      this.taluks = res.data.filter((f: any) => f.district_code == this.selectedDistrict);
    })
    const value = {
      "i_DistrictId": this.selectedDistrict
    }
    this.formService.getShopLocationByDistrict(value).subscribe((res: any) => {
      this.rvShopNos = res.data
    })
  }

  filterRV() {
    const value = {
      "i_TalukaId": this.selectedTaluk
    }
    this.formService.getShopLocationByTaluk(value).subscribe((res: any) => {
      this.rvShopNos = res.data
    })
  }

  getStockDetailsByDistrict() {
    const data = {
      p_districtId: this.selectedDistrict
    }
    this.formService.getStockDetailsByDistrict(data).subscribe((res: any) => {
      this.filteredStockDetails = res.data;
    })
  }

  getStockDetailsByTaluk() {
    const data = {
      i_DistrictId: this.selectedDistrict,
      i_TalukaId: this.selectedTaluk
    }
    this.formService.getStockDetailsByTaluk(data).subscribe((res: any) => {
      this.filteredStockDetails = res.data;
    })
  }

  filterProducts() {
    let searchData: any
    if (this.selectedBrand || this.selectedDistrict || this.selectedRvShopNo || this.selectedTaluk) {
      searchData = this.filteredStockDetails
    }
    else {
      searchData = this.stockDetails
    }
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
    this.filteredStockDetails = searchData.filter(shop => {
      const matchesDistrict = shop.districtName?.toLowerCase().includes(lowerCaseSearchTerm) || false;
      const matchesTaluk = shop.talukaName?.toLowerCase().includes(lowerCaseSearchTerm) || false;
      const matchesShopNumber = shop.shopNumber.toString().includes(lowerCaseSearchTerm);
      return matchesDistrict || matchesTaluk || matchesShopNumber;
    });
  }

  resetFilters() {
    this.selectedDistrict = '',
      this.selectedTaluk = '',
      this.selectedRvShopNo = ''
    this.selectedBrand = ''
    this.searchTerm = ''
    this.getAllStocks()
  }

}
