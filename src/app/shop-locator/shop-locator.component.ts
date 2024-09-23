import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as L from 'leaflet';
import 'leaflet.markercluster'; // Import leaflet.markercluster
import { PascalCasePipe } from '../services/pascal-case.pipe';
import { DropdownModule } from 'primeng/dropdown';
import { SearchDropdownComponent } from '../search-dropdown/search-dropdown.component';
import { FormService } from '../services/form.service';

interface Shop {
  slNo: number;
  srmOffice: string;
  dmOffice: string;
  RVShopsNo: number;
  district: string;
  taluk: string;
  area: string;
  latitude: number;
  longitude: number;
  Address: string;
}

@Component({
  selector: 'app-shop-locator',
  templateUrl: './shop-locator.component.html',
  styleUrls: ['./shop-locator.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, PascalCasePipe, DropdownModule, SearchDropdownComponent]
})
export class ShopLocatorComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement: ElementRef;

  latitude = 13.0827; // Default latitude for Chennai
  longitude = 80.2707; // Default longitude for Chennai
  searchTerm = '';
  selectedDistrict = '';
  selectedTaluk = '';
  selectedRvShopNo = '';
  selectedRvShopNo2 = ''
  isShow: boolean = false;
  topPosToStartShowing = 100;
  map: L.Map;
  markers: L.MarkerClusterGroup;
  shops: Shop[] = [];
  filteredShops: Shop[] = [];

  districts: any[] = [];
  taluks: any[] = [];
  rvShopNos: any[] = [];

  defaultAmbatturShop: Shop = {
    slNo: 8848,
    srmOffice: '',
    dmOffice: '',
    RVShopsNo: 8848,
    district: 'Ambattur',
    taluk: '',
    area: 'Ayanampakkam',
    latitude: 13.0878,
    longitude: 80.1777,
    Address: 'No.64, Keesan Nagar, Ayanampakkam, Ch-95'
  };

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
    this.initMap();
    this.getDistrict();
    this.getAllTaluk();
    this.getAllShopNo()

  }

  getDistrict() {
    this.formService.getAllDistrict().subscribe((res: any) => {
      this.districts = res.data.slice(0, -1);
    })
  }

  getAllTaluk() {
    this.formService.getAllTaluk().subscribe((res: any) => {
      this.taluks = res.data.slice(0, -1);
    })
  }

  getAllShopNo() {
    this.formService.getAllShopNo().subscribe((res: any) => {
      this.rvShopNos = res.data.slice(0, -1);
    })
  }

  filterRvAndTaluk() {
    this.formService.getAllTaluk().subscribe((res: any) => {
      this.taluks = res.data.slice(0, -1).filter((f: any) => f.districtId == this.selectedDistrict);
    })
    this.formService.getAllShopNo().subscribe((res: any) => {
      this.rvShopNos = res.data.slice(0, -1).filter((f: any) => f.districtId == this.selectedDistrict);;
    })
    const value = {
      "i_DistrictId": this.selectedDistrict
    }
    this.formService.getShopLocationByDistrict(value).subscribe((res: any) => {
      this.filteredShops = res.data.slice(0, -1)
      this.addShopMarkers(this.filteredShops)
    })
  }

  filterRV() {
    this.formService.getAllShopNo().subscribe((res: any) => {
      this.rvShopNos = res.data.slice(0, -1).filter((f: any) => f.talukId == this.selectedTaluk);
    })
    const value = {
      "i_TalukaId": this.selectedTaluk
    }
    this.formService.getShopLocationByTaluk(value).subscribe((res: any) => {
      this.filteredShops = res.data.slice(0, -1)
      this.addShopMarkers(this.filteredShops)
    })
  }

  getRvShopDetails() {
    const value = {
      "i_ShopNumber": this.selectedRvShopNo
    }
    this.formService.getShopLocationByShopNo(value).subscribe((res: any) => {
      this.filteredShops = res.data.slice(0, -1)
      this.addShopMarkers(this.filteredShops)
    })
  }

  isValidShop(shop: Shop): boolean {
    return !isNaN(shop.latitude) && !isNaN(shop.longitude) &&
      shop.latitude !== null && shop.longitude !== null;
  }

  initMap(): void {
    this.map = L.map(this.mapElement.nativeElement, {
      center: [this.latitude, this.longitude],
      zoom: 10,
      layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })]
    });

    this.markers = L.markerClusterGroup();
    this.map.addLayer(this.markers);

    this.map.locate({ setView: true, maxZoom: 16 });
    this.map.on('locationfound', this.onLocationFound.bind(this));
    this.map.on('locationerror', this.onLocationError.bind(this));
  }


  addShopMarkers(shops: Shop[]): void {
    this.markers.clearLayers();
    const customIcon = L.icon({
      iconUrl: 'assets/images/location-png.png',
      iconSize: [30, 30],
    });

    shops.forEach(shop => {
      if (this.isValidShop(shop)&& shop.latitude && shop.longitude) {
        const popupContent = `
          <b>Shop ${shop.RVShopsNo}</b><br>
          ${shop.Address}<br>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${shop?.latitude},${shop?.longitude}" 
             target="_blank" style="color: blue; text-decoration: none;">
            <i class="fa fa-directions"></i> Get Directions
          </a>
        `;

        // Create the marker with the custom icon
        const marker = L.marker([shop.latitude, shop.longitude], { icon: customIcon })
          .bindPopup(popupContent);

        marker.on('click', () => {
          this.map.setView([shop.latitude, shop.longitude], 16);
        });

        this.markers.addLayer(marker);
      } else {
        console.warn(`Invalid location for shop ${shop.RVShopsNo}: (${shop.latitude}, ${shop.longitude})`);
      }
    });

    if (this.markers.getLayers().length > 0) {
      this.map.fitBounds(this.markers.getBounds());
    }
  }

  navigate(latitude: number, longitude: number) {
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(googleMapsUrl, '_blank');
  }

  resetFilters() {
    this.selectedDistrict = '',
      this.selectedTaluk = '',
      this.selectedRvShopNo = ''
    this.initMap();
  }


  onLocationFound(e: L.LocationEvent): void {
    const customIcon = L.icon({
      iconUrl: 'assets/images/location-png.png',
      iconSize: [30, 30],
    });
    console.log('User location found:', e.latlng);
    const radius = e.accuracy / 2;
    L.marker(e.latlng, { icon: customIcon }).addTo(this.map)
      .bindPopup(`You are within ${radius} meters from this point`).openPopup();
    L.circle(e.latlng, radius).addTo(this.map);
    this.map.setView(e.latlng, 20);
    this.findAndDisplayNearestShop(e.latlng);
  }

  onLocationError(e: L.ErrorEvent): void {
    console.error('Geolocation error:', e.message);
    this.map.setView([this.defaultAmbatturShop.latitude, this.defaultAmbatturShop.longitude], 16);
    L.marker([this.defaultAmbatturShop.latitude, this.defaultAmbatturShop.longitude])
      .bindPopup(`<b>Shop ${this.defaultAmbatturShop.RVShopsNo}</b><br>${this.defaultAmbatturShop.Address}`)
      .addTo(this.map)
      .openPopup();
  }

  findAndDisplayNearestShop(location: L.LatLng): void {
    if (this.shops.length === 0) return;

    let nearestShop: Shop | null = null;
    let minDistance = Infinity;

    this.shops.forEach(shop => {
      const distance = location.distanceTo(L.latLng(shop.latitude, shop.longitude));
      if (distance < minDistance) {
        minDistance = distance;
        nearestShop = shop;
      }
    });

    if (nearestShop) {
      console.log('Nearest shop found:', nearestShop);
      this.map.setView([nearestShop.latitude, nearestShop.longitude], 16);

      const popupContent = `
        <b>Nearest Shop ${nearestShop.RVShopsNo}</b><br>
        ${nearestShop.Address}<br>
        <a href="https://www.google.com/maps/dir/?api=1&destination=${nearestShop.latitude},${nearestShop.longitude}" 
           target="_blank" style="color: blue; text-decoration: none;">
          <i class="fa fa-directions"></i> Get Directions
        </a>
      `;

      L.marker([nearestShop.latitude, nearestShop.longitude])
        .bindPopup(popupContent)
        .addTo(this.map)
        .openPopup();
    }
  }

}
