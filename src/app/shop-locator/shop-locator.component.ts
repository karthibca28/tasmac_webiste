import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as L from 'leaflet';
import 'leaflet.markercluster'; // Import leaflet.markercluster

interface Shop {
  slNo: number;
  srmOffice: string;
  dmOffice: string;
  rvShopsNo: number;
  district: string;
  taluk: string;
  area: string;
  latitude: number;
  longitude: number;
  address: string;
}

@Component({
  selector: 'app-shop-locator',
  templateUrl: './shop-locator.component.html',
  styleUrls: ['./shop-locator.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ShopLocatorComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement: ElementRef;

  latitude = 13.0827; // Default latitude for Chennai
  longitude = 80.2707; // Default longitude for Chennai
  searchTerm = '';
  selectedDistrict = '';
  selectedTaluk = '';
  selectedRvShopNo = '';
  isShow: boolean = false;
  topPosToStartShowing = 100;
  map: L.Map;
  markers: L.MarkerClusterGroup;
  shops: Shop[] = [];
  filteredShops: Shop[] = [];

  districts: string[] = [];
  taluks: string[] = [];
  rvShopNos: string[] = [];

  defaultAmbatturShop: Shop = {
    slNo: 8848,
    srmOffice: '',
    dmOffice: '',
    rvShopsNo: 8848,
    district: 'Ambattur',
    taluk: '',
    area: 'Ayanampakkam',
    latitude: 13.0878,
    longitude: 80.1777,
    address: 'No.64, Keesan Nagar, Ayanampakkam, Ch-95'
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

  ngOnInit(): void {
    this.loadShopData();
    this.initMap();
  }

  loadShopData(): void {
    fetch('assets/tasmac-shops.json')
      .then(response => response.json())
      .then((data: Shop[]) => {
        this.shops = data.filter(shop => this.isValidShop(shop));
        this.districts = [...new Set(this.shops.map(shop => shop.district))].sort();
        this.taluks = [...new Set(this.shops.map(shop => shop.taluk))].sort();
        this.rvShopNos = [...new Set(this.shops.map(shop => shop.rvShopsNo.toString()))].sort();
        this.filteredShops = this.shops;
        this.filterShops(); // Apply default filters
      })
      .catch(error => console.error('Error loading shop data:', error));
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
  
    // Create a custom icon
    const customIcon = L.icon({
      iconUrl: 'assets/images/location-png.png',
      iconSize: [30, 30], 
    });
  
    shops.forEach(shop => {
      if (this.isValidShop(shop)) {
        const popupContent = `
          <b>Shop ${shop.rvShopsNo}</b><br>
          ${shop.address}<br>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${shop.latitude},${shop.longitude}" 
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
        console.warn(`Invalid location for shop ${shop.rvShopsNo}: (${shop.latitude}, ${shop.longitude})`);
      }
    });
  
    if (this.markers.getLayers().length > 0) {
      this.map.fitBounds(this.markers.getBounds());
    }
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
      .bindPopup(`<b>Shop ${this.defaultAmbatturShop.rvShopsNo}</b><br>${this.defaultAmbatturShop.address}`)
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
        <b>Nearest Shop ${nearestShop.rvShopsNo}</b><br>
        ${nearestShop.address}<br>
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

  filterShops(): void {
    this.filteredShops = this.shops.filter(shop =>
      (this.searchTerm === '' || 
      shop.area.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      shop.address.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (this.selectedDistrict === '' || shop.district === this.selectedDistrict) &&
      (this.selectedTaluk === '' || shop.taluk === this.selectedTaluk) &&
      (this.selectedRvShopNo === '' || shop.rvShopsNo.toString() === this.selectedRvShopNo)
    );

    this.addShopMarkers(this.filteredShops);

    if (this.filteredShops.length > 0) {
      this.map.fitBounds(this.markers.getBounds());
    }
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedDistrict = '';
    this.selectedTaluk = '';
    this.selectedRvShopNo = '';
    this.filteredShops = this.shops;
    this.addShopMarkers(this.filteredShops);

    this.map.locate({ setView: true, maxZoom: 16 });
  }

  filterTaluk(){
    if(this.selectedDistrict == ""){
     this.loadShopData() 
    }
    else{
      fetch('assets/tasmac-shops.json')
      .then(response => response.json())
      .then((data: Shop[]) => {
        this.shops = data.filter(shop => this.isValidShop(shop));
        this.taluks = [...new Set(this.shops.filter(f=>f.district == this.selectedDistrict).map(shop => shop.taluk))].sort();
        this.rvShopNos = [...new Set(this.shops.filter(f=>f.district == this.selectedDistrict).map(shop => shop.rvShopsNo.toString()))].sort();
      })
      .catch(error => console.error('Error loading shop data:', error));
    }
  }

  filterShopByTaluk(){
    if(this.selectedTaluk == ""){
      this.rvShopNos = [...new Set(this.shops.filter(f=>f.district == this.selectedDistrict).map(shop => shop.rvShopsNo.toString()))].sort();
    }
    else{
      fetch('assets/tasmac-shops.json')
      .then(response => response.json())
      .then((data: Shop[]) => {
        this.shops = data.filter(shop => this.isValidShop(shop));
        this.rvShopNos = [...new Set(this.shops.filter(f=>f.taluk == this.selectedTaluk).map(shop => shop.rvShopsNo.toString()))].sort();
      })
      .catch(error => console.error('Error loading shop data:', error));
    }
  }
}
