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
      this.filteredStockDetails = res.data.slice(0, -1);
      this.stockDetails = res.data.slice(0, -1);
    })
  }

  getDistrict() {
    this.formService.getAllDistrict().subscribe((res: any) => {
      this.districts = res.data.sort((a: any, b: any) => {
        return a.Revenue_DistrictName?.localeCompare(b.Revenue_DistrictName);
      }).slice(0, -1);
    })
  }

  getAllTaluk() {
    this.formService.getAllTaluk().subscribe((res: any) => {
      this.taluks = res.data.sort((a: any, b: any) => {
        return a.talukaName?.localeCompare(b.talukaName);
      }).slice(0, -1);
    })
  }

  getAllShopNo() {
    this.formService.getAllShopNo().subscribe((res: any) => {
      this.rvShopNos = res.data.sort((a: any, b: any) => {
        return Number(a.RVShopsNo) - Number(b.RVShopsNo);
      }).slice(0, -1);
    })
  }

  getAllBrands() {
    this.formService.getAllBrands().subscribe((res: any) => {
      this.brands = res.data.sort((a: any, b: any) => {
        return a.brandName?.localeCompare(b.brandName);
      }).slice(0, -1);
    })
  }

  filterRvAndTaluk() {
    this.formService.getAllTaluk().subscribe((res: any) => {
      this.taluks = res.data.sort((a: any, b: any) => {
        return a.talukaName?.localeCompare(b.talukaName);
      }).slice(0, -1).filter((f: any) => f.districtId == this.selectedDistrict);
    })
    this.formService.getAllShopNo().subscribe((res: any) => {
      this.rvShopNos = res.data.sort((a: any, b: any) => {
        return Number(a.RVShopsNo) - Number(b.RVShopsNo);
      }).slice(0, -1).filter((f: any) => f.districtId == this.selectedDistrict);;
    })
    const value = {
      "i_DistrictId": this.selectedDistrict
    }
    this.formService.getShopLocationByDistrict(value).subscribe((res: any) => {
      this.filteredShops = res.data.slice(0, -1)
    })
  }

  filterRV() {
    this.formService.getAllShopNo().subscribe((res: any) => {
      this.rvShopNos = res.data.sort((a: any, b: any) => {
        return Number(a.RVShopsNo) - Number(b.RVShopsNo);
      }).slice(0, -1).filter((f: any) => f.talukId == this.selectedTaluk);
    })
    const value = {
      "i_TalukaId": this.selectedTaluk
    }
    this.formService.getShopLocationByTaluk(value).subscribe((res: any) => {
      this.filteredShops = res.data.slice(0, -1)
    })
  }

  getRvShopDetails() {
    const value = {
      "i_ShopNumber": this.selectedRvShopNo
    }
    this.formService.getShopLocationByShopNo(value).subscribe((res: any) => {
      this.filteredShops = res.data.slice(0, -1)
    })
  }
  filteredStockDetails: any
  filteredStockDetailsByDropdown: any
  filterTable() {
    const filteredStockDetails = this.stockDetails.filter(shop => {
      const matchesDistrict = this.selectedDistrict ? shop.districtId === this.selectedDistrict : true;
      const matchesTaluk = this.selectedTaluk ? shop.talukaId === this.selectedTaluk : true;
      const matchesRvShopNo = this.selectedRvShopNo ? shop.shopNumber === this.selectedRvShopNo : true;
      const filteredStock = shop.Stock_details.filter(stock => {
        return this.selectedBrand ? stock.brandId === this.selectedBrand : true;
      });
      return matchesDistrict && matchesTaluk && matchesRvShopNo && filteredStock.length > 0;
    }).map(shop => {
      return {
        ...shop,
        Stock_details: shop.Stock_details.filter(stock => this.selectedBrand ? stock.brandId === this.selectedBrand : true)
      };
    });
    this.filteredStockDetails = filteredStockDetails;
    this.filteredStockDetailsByDropdown = filteredStockDetails
  }

  filterProducts() {
    let searchData: any
    if (this.selectedBrand || this.selectedDistrict || this.selectedRvShopNo || this.selectedTaluk) {
      searchData = this.filteredStockDetailsByDropdown
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
    this.filterTable()
  }

}
