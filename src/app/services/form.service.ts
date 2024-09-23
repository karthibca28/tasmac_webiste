import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  baseUrl = ''
  hrmsUrl =''

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl
    this.hrmsUrl = environment.hrmsUrl
  }

  getAllBrands() {
    return this.http.post(`${this.baseUrl}liquor/get-brandList`, '')
  }

  getAllLiquoreProducts() {
    return this.http.post(`${this.baseUrl}liquor/get-productList`, '')
  }

  getLiquoreProductsByBrandId(data:any){
    return this.http.post(`${this.baseUrl}liquor/get-productListByBrand`,data)
  }

  getSupplierByTypes(data:any){
    return this.http.post(`${this.baseUrl}supplier/get-supplierListProductionType`,data)
  }

  getAllDistrict(){
    return this.http.post(`${this.baseUrl}rv-shop/get-districtList`,'')
  }
  getAllTaluk(){
    return this.http.post(`${this.baseUrl}rv-shop/get-talukList`,'')
  }
  getAllShopNo(){
    return this.http.post(`${this.baseUrl}rv-shop/get-shopList`,'')
  }
  getShopLocationByShopNo(data:any){
    return this.http.post(`${this.baseUrl}rv-shop/get-shopListBy-ShopNumber`,data)
  }
  getShopLocationByTaluk(data:any){
    return this.http.post(`${this.baseUrl}rv-shop/get-shopListBy-TalukId`,data)
  }
  getShopLocationByDistrict(data:any){
    return this.http.post(`${this.baseUrl}rv-shop/get-shopListBy-DistrictId`,data)
  }

  getStaffByOffice(staffType:any){
    return this.http.get(`${this.hrmsUrl}shared/lp/staffs?officeTypeId=${staffType}`)
  }
}
