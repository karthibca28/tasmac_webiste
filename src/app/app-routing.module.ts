import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		loadComponent: () =>
			import('./home/home-page/home-page.component').then(
				mod => mod.HomePageComponent
			),
	},
	{
		path: 'about',
		loadComponent: () =>
			import('./abouts/about.component').then(
				mod => mod.AboutComponent
			),
	},
	{
		path: 'services',
		loadComponent: () =>
			import('./services/services-page/services-page.component').then(
				mod => mod.ServicesPageComponent
			),
	},
	{
		path: 'testimonials',
		loadComponent: () =>
			import('./testimonial/testimonial-page/testimonial-page.component').then(
				mod => mod.TestimonialPageComponent
			),
	},
	{
		path: 'gallery',
		loadComponent: () =>
			import('./gallery/gallery-page/gallery-page.component').then(
				mod => mod.GalleryPageComponent
			),
	},
	{
		path: 'brands',
		loadComponent: () =>
			import('./brands/brands-page/brands-page.component').then(
				mod => mod.brandsPageComponent
			),
	},
	{
		path: 'pricing',
		loadComponent: () =>
			import('./pricing/pricing-page/pricing-page.component').then(
				mod => mod.PricingPageComponent
			),
	},
	{
		path: 'contact',
		loadComponent: () =>
			import('./contact/contact.component').then(
				mod => mod.ContactComponent
			),
	},
	{
		path: 'suppliers',
		loadComponent: () =>
			import('./suppliers/suppliers.component').then(
				mod => mod.SuppliersComponent
			),
	},
	{
		path: 'organization',
		loadComponent: () =>
			import('./organisation/organization.component').then(
				mod => mod.OrganizationComponent
			),
	},
	{
		path: 'shoplocator',
		loadComponent: () =>
			import('./shop-locator/shop-locator.component').then(
				mod => mod.ShopLocatorComponent
			),
	},
	{
		path: 'offices',
		loadComponent: () =>
			import('./offices/offices.component').then(
				mod => mod.OfficesComponent
			),
	},
	
	{
		path: '404',
		loadChildren: () =>
			import('./notfound/notfound-page/notfound-page.component').then(
				mod => mod.NotfoundPageComponent
			),
	},
	{ path: '**', redirectTo: '/404' },
];

@NgModule({
	imports: [CommonModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
	declarations: [],
})
export class AppRoutingModule {}
