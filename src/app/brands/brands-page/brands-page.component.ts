import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Company } from '../models/company.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CompaniesBlockComponent } from '../companies-block/companies-block.component';
import { Brands } from '../models/brands.model';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-brands-page',
	templateUrl: './brands-page.component.html',
	standalone: true,
	imports: [CompaniesBlockComponent, AsyncPipe, CommonModule, FormsModule],
	styleUrl: './brands-page.component.css',
})
export class brandsPageComponent implements OnInit {
	selectedTab: 'IMFS' | 'IFL' = 'IMFS';
	searchTerm: string = '';
	filteredImfsBrands: any[] = [];
	filteredIfLBrands: any[] = [];
	isShow: boolean = false;
	topPosToStartShowing = 100;
	imfsData: any = {
		date: '01.02.2024',
		type: 'IMFS BRANDS',
		brands: [
			{
				company: 'M/S. ENRICA ENTERPRISES PVT. LTD.',
				products: [
					{
						name: 'GOLDEN GRAPE ORDINARY BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'OLD KING XXXX RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: "MEN'S CLUB DELUXE BRANDY",
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'BAGPIPER MEDIUM WHISKY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'NO.1 MC DOWELL MEDIUM WHISKY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: "NO.1 MC DOWELL'S FINE BRANDY",
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'HONEY BEE FINE BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'M/S. ENRICA ENTERPRISES PVT. LTD.',
				products: [
					{
						name: 'MCDOWELL CELEBRATION PREMIUM',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: "MCDOWELL'S GREEN LABEL WHISKY",
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: "MCDOWELL'S VSOP BRANDY",
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: "MCDOWELL'S CENTURY WHISKY",
						prices: {
							'1000 ml': 840,
							'750 ml': 420,
							'375 ml': 210,
							'180 ml': null,
						},
					},
					{
						name: 'ENRICA VSOP Select Brandy',
						prices: {
							'1000 ml': 840,
							'750 ml': 420,
							'375 ml': 210,
							'180 ml': null,
						},
					},
					{
						name: 'VSOP EXSHAW GOLD BRANDY',
						prices: {
							'1000 ml': 880,
							'750 ml': 440,
							'375 ml': 220,
							'180 ml': null,
						},
					},
					{
						name: 'ENRICA Old Indie Classic Dark Rum',
						prices: {
							'1000 ml': 880,
							'750 ml': 440,
							'375 ml': 220,
							'180 ml': null,
						},
					},
					{
						name: 'ENRICA PREMIUM FRENCH BRANDY',
						prices: {
							'1000 ml': 920,
							'750 ml': 460,
							'375 ml': 230,
							'180 ml': null,
						},
					},
					{
						name: 'ENRICA Platinum Reserve XO Brandy',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
					{
						name: 'SIGNATURE RARE PREMIUM WHISKY',
						prices: {
							'1000 ml': 1390,
							'750 ml': 1040,
							'375 ml': 520,
							'180 ml': 260,
						},
					},
					{
						name: 'ROYAL CHALLENGE DELUXE WHISKY',
						prices: {
							'1000 ml': 1390,
							'750 ml': 1040,
							'375 ml': 520,
							'180 ml': 260,
						},
					},
					{
						name: 'LOUIS VERNANT XO BLENDED PREMIUM BRANDY',
						prices: {
							'1000 ml': 1080,
							'750 ml': 540,
							'375 ml': 270,
							'180 ml': null,
						},
					},
					{
						name: 'ANTIQUITY BLUE SUPER PREMIUM WHISKY',
						prices: {
							'1000 ml': 1400,
							'750 ml': 700,
							'375 ml': 350,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'M/S. SAFIL',
				products: [
					{
						name: 'DIAMOND BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'DIAMOND WHISKY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'DIAMOND XXX RUM',
						prices: {
							'1000 ml': 750,
							'750 ml': 560,
							'375 ml': 280,
							'180 ml': 140,
						},
					},
					{
						name: 'SAFL SUPER STAR BDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'SAFL SUPER STAR WHY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'SAFL SUPER STAR XXX RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'DIAMOND ORDINARY GIN',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'MGM MEDIUM VODKA',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'MGM ORANGE MEDIUM VODKA',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'MGM APPLE MEDIUM VODKA',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'MGM WHITE MEDIUM RUM',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'MGM NO.1 VSOP BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'SPECIAL APPOINTMENT',
				products: [
					{
						name: 'DELUXE BRANDY',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'MGM',
				products: [
					{
						name: "RICHMAN'S DELUXE XXX RUM",
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: "RICHMAN'S NO.1 GRAPE BRANDY",
						prices: {
							'1000 ml': 840,
							'750 ml': 420,
							'375 ml': 210,
							'180 ml': null,
						},
					},
					{
						name: 'MAGIC MOMENTS PREMIUM GRAIN VODKA',
						prices: {
							'1000 ml': 920,
							'750 ml': 460,
							'375 ml': 230,
							'180 ml': null,
						},
					},
					{
						name: 'GOLD VSOP PREMIUM BRANDY',
						prices: {
							'1000 ml': 1230,
							'750 ml': 920,
							'375 ml': 460,
							'180 ml': 230,
						},
					},
					{
						name: 'INDIAN CHALLENGE PREMIUM WHISKY',
						prices: {
							'1000 ml': 1040,
							'750 ml': 520,
							'375 ml': 260,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'CLOVIS',
				products: [
					{
						name: 'XO FRENCH GRAPE BRANDY',
						prices: {
							'1000 ml': 1120,
							'750 ml': 560,
							'375 ml': 280,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'MGM',
				products: [
					{
						name: 'GOLD RESERVE FRENCH BRANDY',
						prices: {
							'1000 ml': 1650,
							'750 ml': 1240,
							'375 ml': 620,
							'180 ml': 310,
						},
					},
				],
			},
			{
				company: 'HOBSONS',
				products: [
					{
						name: 'XR PURE FRENCH GRAPE BRANDY',
						prices: {
							'1000 ml': 1840,
							'750 ml': 920,
							'375 ml': 460,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'M/S. MIDAS GOLDEN DISTILLERIES (P) LTD',
				products: [
					{
						name: "BINNIE'S DELUXE BRANDY",
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'CAPTON RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'CAPTON BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'JET BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'JET SELECT XXX RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: "OFFICER'S CHOICE CLASSIC WHISKY",
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: "OFFICER'S CHOICE NO.1 CLASSIC BRANDY",
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'OLD ADMIRAL SELECT VSOP BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'DAY NIGHT BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'McD',
				products: [
					{
						name: 'RARE OLD CASK XXX RUM',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'ROYAL VSOP BRANDY',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'SEA BREEZE',
				products: [
					{
						name: 'BRANDY',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'BAGPIPER',
				products: [
					{
						name: 'GOLD RARE WHISKY',
						prices: {
							'1000 ml': 840,
							'750 ml': 420,
							'375 ml': 210,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'ARABIAN NIGHT',
				products: [
					{
						name: 'RESERVE PREMIUM XXX RUM',
						prices: {
							'1000 ml': 840,
							'750 ml': 420,
							'375 ml': 210,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: "McDOWELL'S",
				products: [
					{
						name: 'NO.1 RESERVE PRE. WHISKY',
						prices: {
							'1000 ml': 880,
							'750 ml': 440,
							'375 ml': 220,
							'180 ml': null,
						},
					},
					{
						name: 'VINTAGE GOLD BLENDED MALT WHISKY',
						prices: {
							'1000 ml': 1230,
							'750 ml': 920,
							'375 ml': 460,
							'180 ml': 230,
						},
					},
				],
			},
			{
				company: 'ARISTOCRAT',
				products: [
					{
						name: 'PREMIUM VSOP BRANDY',
						prices: {
							'1000 ml': 880,
							'750 ml': 440,
							'375 ml': 220,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'CENTURIAN',
				products: [
					{
						name: 'FRENCH VSOP BRANDY',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'KYRON',
				products: [
					{
						name: 'PREMIUM BRANDY',
						prices: {
							'1000 ml': 1080,
							'750 ml': 540,
							'375 ml': 270,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'M/S. MIDAS GOLDEN DISTILLERIES (P) LTD',
				products: [
					{
						name: "BINNIE'S DELUXE BRANDY",
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'CAPTON RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'CAPTON BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'JET BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'JET SELECT XXX RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: "OFFICER'S CHOICE CLASSIC WHISKY",
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: "OFFICER'S CHOICE NO.1 CLASSIC BRANDY",
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'OLD ADMIRAL SELECT VSOP BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'DAY NIGHT BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'McD',
				products: [
					{
						name: 'RARE OLD CASK XXX RUM',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'ROYAL VSOP BRANDY',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'SEA BREEZE',
				products: [
					{
						name: 'BRANDY',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'BAGPIPER',
				products: [
					{
						name: 'GOLD RARE WHISKY',
						prices: {
							'1000 ml': 840,
							'750 ml': 420,
							'375 ml': 210,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'ARABIAN NIGHT',
				products: [
					{
						name: 'RESERVE PREMIUM XXX RUM',
						prices: {
							'1000 ml': 840,
							'750 ml': 420,
							'375 ml': 210,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: "McDOWELL'S",
				products: [
					{
						name: 'NO.1 RESERVE PRE. WHISKY',
						prices: {
							'1000 ml': 880,
							'750 ml': 440,
							'375 ml': 220,
							'180 ml': null,
						},
					},
					{
						name: 'VINTAGE GOLD BLENDED MALT WHISKY',
						prices: {
							'1000 ml': 1230,
							'750 ml': 920,
							'375 ml': 460,
							'180 ml': 230,
						},
					},
				],
			},
			{
				company: 'JOIE DE FRANC',
				products: [
					{
						name: 'VSOP DELUXE BRANDY',
						prices: {
							'1000 ml': 880,
							'750 ml': 440,
							'375 ml': 220,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'ARISTOCRAT',
				products: [
					{
						name: 'PREMIUM VSOP BRANDY',
						prices: {
							'1000 ml': 880,
							'750 ml': 440,
							'375 ml': 220,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'CENTURIAN',
				products: [
					{
						name: 'FRENCH VSOP BRANDY',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'KYRON',
				products: [
					{
						name: 'PREMIUM BRANDY',
						prices: {
							'1000 ml': 1080,
							'750 ml': 540,
							'375 ml': 270,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'M/S. EMPEE DISTILLERIES LTD',
				products: [
					{
						name: 'MC LENE ORDINARY BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'OLD SECRET XXX RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'OLD CHEF DELUXE BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'CLUB ROYAL WHISKY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'OLD SECRET BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'POWER APPLE VODKA',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'POWER ORANGE VODKA',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'ALL GOLD VSOP BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'SNJ NO.1 SUPER STRONG BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'EL CANSO DARK XXX RUM',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'EMPEES PREMIUM GOLD WHY',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'EMPEES NAPOLEAN BRANDY',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'BRIHANS PREMIUM WHISKY',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'BRIHANS NAPOLEON PREMIUM BRANDY',
						prices: {
							'1000 ml': 840,
							'750 ml': 420,
							'375 ml': 210,
							'180 ml': null,
						},
					},
					{
						name: 'ELCANSO PREMIUM DELUXE V.S.O.P. BRANDY',
						prices: {
							'1000 ml': 880,
							'750 ml': 440,
							'375 ml': 220,
							'180 ml': null,
						},
					},
					{
						name: 'CARTE ROYALE XO PREMIUM BRANDY',
						prices: {
							'1000 ml': 920,
							'750 ml': 460,
							'375 ml': 230,
							'180 ml': null,
						},
					},
					{
						name: 'CHEVALIER DE PARIS XL PREMIUM BRANDY',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
					{
						name: 'VASCO 1498 PREMIUM BRANDY',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'M/S. Transworld Breweries & Distilleries Pvt Ltd',
				products: [
					{
						name: 'GOLDEN EAGLE DOCTOR ORDINARY BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'OLD MONK DELUX RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'VORION NO.1 INDIAN BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'REJISION NO.1 INDIAN CLASSIC XXX',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'TRIPLE CROWN VSOP BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: "BRIGADIER'S NO.1 DELUXE WHISKY",
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: "BRIGADIER'S NO.1 BRANDY",
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'KADAMARK ORIGINAL BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'OLD NAPOLEON VSOP DELUXE BRANDY',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'OLD MONK PREMIUM XXX RUM',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'OLD MONK GOLD RESERVE PREMIUM',
						prices: {
							'1000 ml': 840,
							'750 ml': 420,
							'375 ml': 210,
							'180 ml': null,
						},
					},
					{
						name: 'IMPERIAL VS RESERVE BRANDY',
						prices: {
							'1000 ml': 880,
							'750 ml': 440,
							'375 ml': 220,
							'180 ml': null,
						},
					},
					{
						name: 'OLD MARINA VSOP SUPERIOR BRANDY',
						prices: {
							'1000 ml': 920,
							'750 ml': 460,
							'375 ml': 230,
							'180 ml': null,
						},
					},
					{
						name: 'MONK LEMON ORIGINAL CITRUS',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
					{
						name: 'MAGIC MOMENTS PREMIUM CHOCOLATE VODKA',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
					{
						name: 'MARCEL XO FRENCH BRANDY',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
					{
						name: 'VODKA SPICE PREMIUM',
						prices: {
							'1000 ml': 1040,
							'750 ml': 520,
							'375 ml': 260,
							'180 ml': null,
						},
					},
					{
						name: 'VODKA BLUE PREMIUM',
						prices: {
							'1000 ml': 1040,
							'750 ml': 520,
							'375 ml': 260,
							'180 ml': null,
						},
					},
					{
						name: 'BRANDI VSOP PREMIUM',
						prices: {
							'1000 ml': 1040,
							'750 ml': 520,
							'375 ml': 260,
							'180 ml': null,
						},
					},
					{
						name: 'WASSUP TRENDY VODKA',
						prices: {
							'1000 ml': 1080,
							'750 ml': 540,
							'375 ml': 270,
							'180 ml': null,
						},
					},
					{
						name: "GEO'S CLOVIS XO FRENCH GRAPE BRANDY",
						prices: {
							'1000 ml': 1120,
							'750 ml': 560,
							'375 ml': 280,
							'180 ml': null,
						},
					},
					{
						name: 'SIPPING SPIRITS RESOLUTE PINK VODKA',
						prices: {
							'1000 ml': 1240,
							'750 ml': 620,
							'375 ml': 310,
							'180 ml': null,
						},
					},
					{
						name: 'GRANDIS BLUE ULTRA PREMIUM BRANDY',
						prices: {
							'1000 ml': 1240,
							'750 ml': 620,
							'375 ml': 310,
							'180 ml': null,
						},
					},
					{
						name: 'GRAPPE RESERVA VERY SPECIAL PREMIUM FRENCH GRAPE BRANDY',
						prices: {
							'1000 ml': 1760,
							'750 ml': 880,
							'375 ml': 440,
							'180 ml': null,
						},
					},
					{
						name: 'MANSION HOUSE RESERVE BRANDY',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
					{
						name: 'HICHKI GIN',
						prices: {
							'1000 ml': 1240,
							'750 ml': null,
							'375 ml': 310,
							'180 ml': null,
						},
					},
					{
						name: 'OLD MONK GOLD RESERVE SUPER PREMIUM RUM',
						prices: {
							'1000 ml': 920,
							'750 ml': 460,
							'375 ml': 230,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'M/S. SNJ DISTILLERS (F) LTD',
				products: [
					{
						name: 'TOP STAR SPECIAL BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'OLD CHEF STRONG XXX RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'OLD CHEF DELUXE BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'BLACK CAT SPECIAL BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'TOP STAR SPECIAL WHISKY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'TOP STAR STRONG XXX RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'SNJ NO.1 SUPER STRONG BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'SNJ NO.1 XO STRONG BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'ANACONDA NO.1 EXTRA VSOP BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'ACTIVATOR VANILLA VODKA',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'ROLE MODEL SUPERIOR DARK RUM',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: "BRIHAN'S SUPERIOR GRAPE BRANDY",
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'BEJOIS NAPOLEON RESERVE BRANDY',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'FRENCH XO PLUS PREMIUM BRANDY',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'THE DUTCHMAN EXCLUSIVE PREMIUM BRANDY',
						prices: {
							'1000 ml': 880,
							'750 ml': 440,
							'375 ml': 220,
							'180 ml': null,
						},
					},
					{
						name: 'ROYAL PALACE PREMIUM BLENDED',
						prices: {
							'1000 ml': 880,
							'750 ml': 440,
							'375 ml': 220,
							'180 ml': null,
						},
					},
					{
						name: 'HOBBS XO FRENCH BRANDY',
						prices: {
							'1000 ml': 920,
							'750 ml': 460,
							'375 ml': 230,
							'180 ml': null,
						},
					},
					{
						name: 'SNJ VSOP PREMIUM FRENCH BRANDY',
						prices: {
							'1000 ml': 960,
							'750 ml': 480,
							'375 ml': 240,
							'180 ml': null,
						},
					},
					{
						name: 'ERISTOFF TRIPLE DISTILLED PREMIUM',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
					{
						name: 'KING LOUIS XIV XO FRENCH BRANDY',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
					{
						name: 'MORPHEUS XO BLENDED PREMIUM BRANDY',
						prices: {
							'1000 ml': 1040,
							'750 ml': 520,
							'375 ml': 260,
							'180 ml': null,
						},
					},
					{
						name: 'MAGIC MOMENTS PREMIUM APPLE VODKA',
						prices: {
							'1000 ml': 1040,
							'750 ml': 520,
							'375 ml': 260,
							'180 ml': null,
						},
					},
					{
						name: 'BOLS XO EXCELLENCE BRANDY',
						prices: {
							'1000 ml': 1080,
							'750 ml': 540,
							'375 ml': 270,
							'180 ml': null,
						},
					},
					{
						name: 'BACARDI CLASSIC SUPERIOR RUM',
						prices: {
							'1000 ml': 1080,
							'750 ml': 540,
							'375 ml': 270,
							'180 ml': null,
						},
					},
					{
						name: 'BRITISH EMPIRE PREMIUM MATURED',
						prices: {
							'1000 ml': 1080,
							'750 ml': 540,
							'375 ml': 270,
							'180 ml': null,
						},
					},
					{
						name: 'BACARDI LEMON-ORIGINAL CITRUS',
						prices: {
							'1000 ml': 1080,
							'750 ml': 540,
							'375 ml': 270,
							'180 ml': null,
						},
					},
					{
						name: 'BACARDI APPLE-ORIGINAL APPLE RUM',
						prices: {
							'1000 ml': 1080,
							'750 ml': 540,
							'375 ml': 270,
							'180 ml': null,
						},
					},
					{
						name: 'AFTER DARK FINE GRAIN WHISKY',
						prices: {
							'1000 ml': 1120,
							'750 ml': 560,
							'375 ml': 280,
							'180 ml': null,
						},
					},
					{
						name: 'BACARDI BLACK ORIGINAL PREMIUM',
						prices: {
							'1000 ml': 1120,
							'750 ml': 560,
							'375 ml': 280,
							'180 ml': null,
						},
					},
					{
						name: 'JUNO SUPERIOR PINK VODKA',
						prices: {
							'1000 ml': 1120,
							'750 ml': 560,
							'375 ml': 280,
							'180 ml': null,
						},
					},
					{
						name: 'JUNO FINE ORANGE VODKA',
						prices: {
							'1000 ml': 1120,
							'750 ml': 560,
							'375 ml': 280,
							'180 ml': null,
						},
					},
					{
						name: 'SIGNOUT PREMIUM CLASSIC BRANDY',
						prices: {
							'1000 ml': 1320,
							'750 ml': 660,
							'375 ml': 330,
							'180 ml': null,
						},
					},
					{
						name: 'MORPHEUS BLUE XO + BRANDY',
						prices: {
							'1000 ml': 1400,
							'750 ml': 700,
							'375 ml': 350,
							'180 ml': null,
						},
					},
					{
						name: 'JUNO PURE DISTILLED VODKA',
						prices: {
							'1000 ml': 1040,
							'750 ml': 520,
							'375 ml': 260,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'M/S. SHIVA DISTILLERIES PRIVATE LTD',
				products: [
					{
						name: 'MONITOR ORD 3D GOLD RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'MONITOR DELUXE BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'MONITOR DELUXE WHISKY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'COSMOPOLITAN MEDIUM WHISKY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'OAK VAT MATURED RUM',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'CARDINAL GRAPE BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'GOLD MAKER WHITE MED RUM',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'ARIZONA PREMIUM APPLE VODKA',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'CARDINAL NO.1 WHISKY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'CLASSIC GRANDEE PREMIUM RUM',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'CARDINAL NO.1 VSOP PREMIUM BRANDY',
						prices: {
							'1000 ml': 840,
							'750 ml': 420,
							'375 ml': 210,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'M/S. ACCORD DISTILLERS & BREWERS PVT. LTD.',
				products: [
					{
						name: 'HONIEY DAY BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'OLD MONSTER XXX RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'HONIEY DAY DELUXE BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'ARABIAN PRIDE DELUXE XXX RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'HONIEY DAY SUPER FINE WHISKY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'ACCORD NO.1 BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'ACCORD NO.1 BLENDED WHISKY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'EVENING WALKER SUPER FINE BLENDED FRENCH BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'CARRIBEAN KICK XXX RUM',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: "ACCORD'S FINE DISTILLED ORANGE VODKA",
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: "ACCORD'S PREMIUM FRENCH BRANDY",
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'WONDERLAND SPECIAL VSOP BRANDY',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'KING NAPOLEON XO BRANDY',
						prices: {
							'1000 ml': 840,
							'750 ml': 420,
							'375 ml': 210,
							'180 ml': null,
						},
					},
					{
						name: "BLENDER'S MAGIC VSOP BRANDY",
						prices: {
							'1000 ml': 880,
							'750 ml': 440,
							'375 ml': 220,
							'180 ml': null,
						},
					},
					{
						name: 'ROYAL ACCORD PRE.GOLD FRENCH BRANDY',
						prices: {
							'1000 ml': 880,
							'750 ml': 440,
							'375 ml': 220,
							'180 ml': null,
						},
					},
					{
						name: 'ROVAL ACCORD BLUE XR FRENCH BRANDY',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
					{
						name: 'HOLANDAS SPANISH VSOP BRANDY',
						prices: {
							'1000 ml': 1040,
							'750 ml': 520,
							'375 ml': 260,
							'180 ml': null,
						},
					},
					{
						name: 'ANCIENT CASK PREMIUM XXX RUM',
						prices: {
							'1000 ml': 1040,
							'750 ml': 520,
							'375 ml': 260,
							'180 ml': null,
						},
					},
					{
						name: 'SCOTTISH ROYAL FINEST BLENDED SCOTCH WHISKY',
						prices: {
							'1000 ml': 1040,
							'750 ml': 520,
							'375 ml': 260,
							'180 ml': null,
						},
					},
					{
						name: 'VISIONARY MONKS AUTHENTIC PURE XO BRANDY',
						prices: {
							'1000 ml': 1080,
							'750 ml': 540,
							'375 ml': 270,
							'180 ml': null,
						},
					},
					{
						name: 'AGE DE OAK VSOP PREMIUM BRANDY',
						prices: {
							'1000 ml': 1320,
							'750 ml': 660,
							'375 ml': 330,
							'180 ml': null,
						},
					},
					{
						name: 'Henry X Special Reserve Brandy XO',
						prices: {
							'1000 ml': 2680,
							'750 ml': 1340,
							'375 ml': 670,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'M/S. GOLDEN VATS (P) LTD.',
				products: [
					{
						name: 'GOLDEN CHOICE DELUXE BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: "SEAMEN'S PRIDE CLASSIC BRANDY",
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'ONE MAN ARMY XXX RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'TROPICANA VSOP BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'GOLDEN VATS NO.1 BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'ROMAN CASTLE GRAPE BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'GOLD FINGER PREMIUM BRANDY',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'STALLION STRIDE DARK RUM',
						prices: {
							'1000 ml': 800,
							'750 ml': 400,
							'375 ml': 200,
							'180 ml': null,
						},
					},
					{
						name: 'ROYAL NAPOLEON VSOP BRANDY',
						prices: {
							'1000 ml': 840,
							'750 ml': 420,
							'375 ml': 210,
							'180 ml': null,
						},
					},
					{
						name: 'Golden XO No.1 Premium Brandy',
						prices: {
							'1000 ml': 880,
							'750 ml': 440,
							'375 ml': 220,
							'180 ml': null,
						},
					},
					{
						name: 'NARA LEMON SUPER PREMIUM',
						prices: {
							'1000 ml': 960,
							'750 ml': 480,
							'375 ml': 240,
							'180 ml': null,
						},
					},
					{
						name: 'BLACK & GOLD PREMIUM FRENCH VSOP BRANDY',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
					{
						name: 'SAINT LOUIS FRENCH BRANDY',
						prices: {
							'1000 ml': 1080,
							'750 ml': 540,
							'375 ml': 270,
							'180 ml': null,
						},
					},
					{
						name: 'FLORENCE XO PREMIUM BRANDY',
						prices: {
							'1000 ml': 1120,
							'750 ml': 560,
							'375 ml': 280,
							'180 ml': null,
						},
					},
					{
						name: 'PETER SCOT PREMIUM MALT WHISKY',
						prices: {
							'1000 ml': 1400,
							'750 ml': 700,
							'375 ml': 350,
							'180 ml': null,
						},
					},
					{
						name: 'LE CHARANTE XO FRENCH BRANDY',
						prices: {
							'1000 ml': 1870,
							'750 ml': 1400,
							'375 ml': 700,
							'180 ml': null,
						},
					},
				],
			},
			{
				company: 'M/S. KALS DISTILLERIES (P) LTD.',
				products: [
					{
						name: 'BLACK PEARL BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'BLACK PEARL XXX RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'MAGNUS CHOICE VSOP BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'COPPER BARREL VSOP BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'COPPER BARREL DELUXE XXX RUM',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'ALS NAPOLEAN PREMIUM FRENCH BRANDY',
						prices: {
							'1000 ml': 840,
							'750 ml': 420,
							'375 ml': 210,
							'180 ml': null,
						},
					},
					{
						name: 'LA MARTINE VSOP PREMIUM BRANDY',
						prices: {
							'1000 ml': 1170,
							'750 ml': 880,
							'375 ml': 440,
							'180 ml': 220,
						},
					},
					{
						name: '1848 PREMIUM XO BRANDY',
						prices: {
							'1000 ml': 1330,
							'750 ml': 1000,
							'375 ml': 500,
							'180 ml': 250,
						},
					},
					{
						name: 'ASPIRA LEMON TWIST RUM',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
					{
						name: 'ASPIRA BERRY BLAST RUM',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
					{
						name: '1848 PREMIUM GRAIN WHISKY',
						prices: {
							'1000 ml': 1040,
							'750 ml': 520,
							'375 ml': 260,
							'180 ml': null,
						},
					},
					{
						name: 'ONIGE FUSION VSOP PREMIUM BRANDY',
						prices: {
							'1000 ml': 1440,
							'750 ml': 1080,
							'375 ml': 540,
							'180 ml': 270,
						},
					},
					{
						name: 'ASIO TRIPLE SELECT VODKA',
						prices: {
							'1000 ml': 1490,
							'750 ml': 1120,
							'375 ml': 560,
							'180 ml': 280,
						},
					},
				],
			},
			{
				company: 'M/S. KALS DISTILLERIES (P) LTD.',
				products: [
					{
						name: 'BLACK PEARL BRANDY',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'BLACK PEARL XXX RUM',
						prices: {
							'1000 ml': 560,
							'750 ml': 280,
							'375 ml': 140,
							'180 ml': null,
						},
					},
					{
						name: 'MAGNUS CHOICE VSOP BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'COPPER BARREL VSOP BRANDY',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'COPPER BARREL DELUXE XXX RUM',
						prices: {
							'1000 ml': 680,
							'750 ml': 340,
							'375 ml': 170,
							'180 ml': null,
						},
					},
					{
						name: 'ALS NAPOLEAN PREMIUM FRENCH BRANDY',
						prices: {
							'1000 ml': 840,
							'750 ml': 420,
							'375 ml': 210,
							'180 ml': null,
						},
					},
					{
						name: 'LA MARTINE VSOP PREMIUM BRANDY',
						prices: {
							'1000 ml': 1170,
							'750 ml': 880,
							'375 ml': 440,
							'180 ml': 220,
						},
					},
					{
						name: '1848 PREMIUM XO BRANDY',
						prices: {
							'1000 ml': 1330,
							'750 ml': 1000,
							'375 ml': 500,
							'180 ml': 250,
						},
					},
					{
						name: 'ASPIRA LEMON TWIST RUM',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
					{
						name: 'ASPIRA BERRY BLAST RUM',
						prices: {
							'1000 ml': 1000,
							'750 ml': 500,
							'375 ml': 250,
							'180 ml': null,
						},
					},
					{
						name: '1848 PREMIUM GRAIN WHISKY',
						prices: {
							'1000 ml': 1040,
							'750 ml': 520,
							'375 ml': 260,
							'180 ml': null,
						},
					},
					{
						name: 'ONIGE FUSION VSOP PREMIUM BRANDY',
						prices: {
							'1000 ml': 1440,
							'750 ml': 1080,
							'375 ml': 540,
							'180 ml': 270,
						},
					},
					{
						name: 'ASIO TRIPLE SELECT VODKA',
						prices: {
							'1000 ml': 1490,
							'750 ml': 1120,
							'375 ml': 560,
							'180 ml': 280,
						},
					},
				],
			},
			{
				
			}
		],
	};

	iflData: any = {
		date: '19.07.2023',
		type: 'Imported Foreign Liquor/Wine/Beer',
		brands: [
			{
				company: 'M/s. VINSPRI DISTRIBUTORS PVT LTD',
				products: [
					{
						name: 'STOLICHNAYA VODKA',
						prices: {
							'750 ml': 2090,
						},
					},
					{
						name: 'Monte Pacifico Merlot',
						prices: {
							'375 ml': 1040,
							'750 ml': 1880,
						},
					},
					{
						name: 'Monte Pacifico Chardonnay',
						prices: {
							'750 ml': 1860,
							'375 ml': 1040,
						},
					},
					{
						name: 'John Barr Reserve',
						prices: {
							'750 ml': 2470,
						},
					},
					{
						name: 'Jura 10 YO',
						prices: {
							'700 ml': 6950,
						},
					},
					{
						name: 'Codorniu Clasico Brut',
						prices: {
							'750 ml': 2450,
						},
					},
					{
						name: 'Veranza Blanco',
						prices: {
							'750 ml': 1810,
						},
					},
					{
						name: 'Veranza Tinto',
						prices: {
							'750 ml': 1810,
						},
					},
					{
						name: 'MONTE PACIFICO CABERNET SAUVIGNON RESERVA',
						prices: {
							'750 ml': 2790,
						},
					},
					{
						name: 'CASA EL UNICO TEMPRANILLO',
						prices: {
							'750 ml': 2370,
						},
					},
					{
						name: 'CASA EL UNICO CHARDONNAY',
						prices: {
							'750 ml': 2370,
						},
					},
					{
						name: "BARRHEAD'S ONE SPEYSIDE SINGLE MALT SCOTCH WHISKY",
						prices: {
							'750 ml': 2980,
						},
					},
					{
						name: "M. Chapoutier - IGP Pays d'Oc 'Marius' White",
						prices: {
							'750 ml': 3090,
						},
					},
					{
						name: "M. Chapoutier - IGP Pays d'Oc 'Marius' Red",
						prices: {
							'750 ml': 3090,
						},
					},
					{
						name: 'Henkell Trocken Brut',
						prices: {
							'750 ml': 2980,
						},
					},
					{
						name: '1 Heart Pinot Noir',
						prices: {
							'750 ml': 2750,
						},
					},
					{
						name: '1 Heart Riesling',
						prices: {
							'750 ml': 2750,
						},
					},
					{
						name: 'Liqueur Amaro Montenegro',
						prices: {
							'750 ml': 4510,
						},
					},
					{
						name: 'Jura 12 YO',
						prices: {
							'700 ml': 8620,
						},
					},
					{
						name: 'Vodka Stolichnaya Gold',
						prices: {
							'750 ml': 4740,
						},
					},
					{
						name: 'Elit Vodka',
						prices: {
							'750 ml': 7680,
						},
					},
					{
						name: 'Coopers Pale Ale',
						prices: {
							'375 ml': 470,
						},
					},
					{
						name: 'Coopers Best Extra Stout',
						prices: {
							'375 ml': 470,
						},
					},
					{
						name: 'Dos Flamous Blanco Tequila',
						prices: {
							'750 ml': 4700,
						},
					},
					{
						name: 'Monte Pacifico Reserva Pinot Noir',
						prices: {
							'750 ml': 3100,
						},
					},
					{
						name: 'Torresella Pinot Grigio Veneto',
						prices: {
							'750 ml': 3170,
						},
					},
					{
						name: 'Torresella Merlot Veneto',
						prices: {
							'750 ml': 3040,
						},
					},
					{
						name: 'Ventisquero Reserva Pinot Noir, Casablanca Valley',
						prices: {
							'750 ml': 3470,
						},
					},
				],
			},
			{
				company: 'M/s. Penguin Overseas',
				products: [
					{
						name: 'GINEBRA SAN MIGUEL PREMIUM BLACK GIN',
						prices: {
							'750 ml': 2050,
						},
					},
					{
						name: 'EMPERADOR BRANDY',
						prices: {
							'750 ml': 2040,
						},
					},
					{
						name: 'VIU MANENT MERLOT RESERVA WINE',
						prices: {
							'750 ml': 1810,
						},
					},
					{
						name: 'VIU MANENT CABERNET SAUVIGNON RESERVA WINE',
						prices: {
							'750 ml': 1810,
						},
					},
					{
						name: 'VIU MANENT CHARDONNAY RESERVA WINE',
						prices: {
							'750 ml': 1810,
						},
					},
					{
						name: 'VIU MANENT SAUVIGNON BLANC RESERVA WINE',
						prices: {
							'750 ml': 1810,
						},
					},
					{
						name: 'JINRO CHAMISUL SOJU WINE',
						prices: {
							'360 ml': 620,
						},
					},
					{
						name: 'SINGHA BEER',
						prices: {
							'330 ml': 300,
						},
					},
					{
						name: 'SINGHA BEER (CAN)',
						prices: {
							'330 ml': 290,
							'490 ml': 400,
						},
					},
					{
						name: 'ROCHE MAZET CABERNET SAUVIGNON WINE',
						prices: {
							'750 ml': 1740,
						},
					},
					{
						name: 'ROCHE MAZET MERLOT WINE',
						prices: {
							'750 ml': 1740,
						},
					},
					{
						name: 'ROCHE MAZET CHARDONNAY WINE',
						prices: {
							'750 ml': 1740,
						},
					},
					{
						name: 'ROCHE MAZET PINOT NOIR WINE',
						prices: {
							'750 ml': 1740,
						},
					},
					{
						name: 'Kavalan Distillery Select Single Malt Whisky',
						prices: {
							'700 ml': 7950,
						},
					},
					{
						name: 'Ron Barcelo Blanco Rum',
						prices: {
							'750 ml': 1720,
							'350 ml': 900,
						},
					},
					{
						name: 'Ron Barcelo Dorado Rum',
						prices: {
							'750 ml': 1760,
							'350 ml': 920,
						},
					},
					{
						name: 'Ron Barcelo Gran Imperial Rum',
						prices: {
							'750 ml': 4270,
						},
					},
					{
						name: 'Moskovskaya Vodka',
						prices: {
							'700 ml': 1680,
							'350 ml': 930,
						},
					},
					{
						name: 'ROCHE MAZET CHARDONNAY BRUT',
						prices: {
							'750 ml': 2000,
						},
					},
					{
						name: 'VIU MANENT RESERVA MALBEC ROSE WINE',
						prices: {
							'750 ml': 1810,
						},
					},
					{
						name: 'Le Mire Rosso Toscana Red Wine',
						prices: {
							'750 ml': 1730,
						},
					},
					{
						name: 'Le Mire Bianco Toscana White Wine',
						prices: {
							'750 ml': 1730,
						},
					},
					{
						name: 'Borgo Alla Terra Chianti DoCG Red Wine',
						prices: {
							'750 ml': 2310,
						},
					},
					{
						name: 'Cune Crianza 2017 Red Wine',
						prices: {
							'750 ml': 2100,
						},
					},
					{
						name: 'Cune Rosado 2020 Rose Wine',
						prices: {
							'750 ml': 1920,
						},
					},
					{
						name: 'Silver Swan Vodka',
						prices: {
							'700 ml': 2270,
						},
					},
					{
						name: 'Red Horse Beer (CAN)',
						prices: {
							'500 ml': 340,
						},
					},
					{
						name: 'Borgo Alla Terra Toscana Wine',
						prices: {
							'750 ml': 2470,
						},
					},
				],
			},
			{
				company: 'M/s. ASK AGENCIES & INVESTMENTS (P) LTD',
				products: [
					{
						name: 'MOET & CHANDON CHAMPAGNE WINE (ASK)',
						prices: {
							'750 ml': 10620,
						},
					},
					{
						name: 'HENNESSY VS COGNAC BRANDY (ASK)',
						prices: {
							'700 ml': 7230,
						},
					},
					{
						name: 'BELVEDERE VODKA (ASK)',
						prices: {
							'700 ml': 5360,
						},
					},
					{
						name: 'GLENMORANGE THE ORIGINAL 10 YO SINGLE MALT WHISKY (ASK)',
						prices: {
							'750 ml': 7000,
						},
					},
					{
						name: 'Hennessy VSOP Cognac Brandy',
						prices: {
							'700 ml': 14570,
						},
					},
					{
						name: 'Hennessy XO Cognac Brandy',
						prices: {
							'700 ml': 39180,
						},
					},
					{
						name: 'Glenmorangie Lasanta Single Malt Scotch Whisky',
						prices: {
							'750 ml': 8250,
						},
					},
					{
						name: 'BUFFALO TRACE KENTUCKY STRAIGHT BOURBON WHISKEY',
						prices: {
							'750 ml': 6300,
						},
					},
					{
						name: 'Glenmorangie Quinta Ruban Single Malt Scotch Whisky',
						prices: {
							'750 ml': 9500,
						},
					},
					{
						name: 'Glenmorangie Necta Dor Single Malt Scotch Whisky',
						prices: {
							'750 ml': 10600,
						},
					},
				],
			},
			{
				company: 'M/s. Fairmacs Shipstores Pvt. Ltd.',
				products: [
					{
						name: 'BEEHIVE VSOP BRANDY',
						prices: {
							'1000 ml': 3610,
						},
					},
					{
						name: 'GOLD NAPOLEAN BRANDY',
						prices: {
							'1000 ml': 2200,
						},
					},
					{
						name: 'LORD KINGSLEY BLENDED SCOTCH WHISKY',
						prices: {
							'1000 ml': 2600,
						},
					},
					{
						name: 'TEACHERS HIGHLAND CREAM BLENDED SCOTCH WHISKY',
						prices: {
							'1000 ml': 3290,
						},
					},
					{
						name: 'JIM BEAM WHITE BOURBON WHISKY',
						prices: {
							'1000 ml': 3380,
						},
					},
					{
						name: "MAKER'S MARK KENTUCKY STRAIGHT BOURBON",
						prices: {
							'750 ml': 6300,
						},
					},
					{
						name: 'ARDMORE HIGHLAND SINGLE MALT SCOTCH WHISKY',
						prices: {
							'700 ml': 4810,
						},
					},
					{
						name: 'BOWMORE ISLAY SINGLE MALT SCOTCH WHISKY 12 YRS',
						prices: {
							'700 ml': 5520,
						},
					},
					{
						name: 'LAPHROAIG 10 YO SINGLE ISLAY MALT SCOTCH WHISKY',
						prices: {
							'750 ml': 6830,
						},
					},
					{
						name: 'VODKA KIPRINSKY',
						prices: {
							'1000 ml': 1920,
						},
					},
					{
						name: 'SIR EDWARDS SMOKY BLENDED SCOTCH WHISKY',
						prices: {
							'1000 ml': 2960,
						},
					},
					{
						name: 'GIN KINGSTON',
						prices: {
							'1000 ml': 2250,
						},
					},
					{
						name: 'SIR EDWARDS FINEST SCOTCH WHISKY',
						prices: {
							'1000 ml': 3110,
						},
					},
					{
						name: 'Jim Beam Black Kentucky Straight Bourbon Whiskey',
						prices: {
							'750 ml': 4160,
						},
					},
					{
						name: 'Monkey Shoulder Blended Malt Scotch Whisky',
						prices: {
							'700 ml': 5630,
						},
					},
					{
						name: 'Hendricks Gin',
						prices: {
							'700 ml': 5780,
						},
					},
					{
						name: 'GLENFIDDICH 12 Yrs SINGLE MALT SCOTCH WHISKY',
						prices: {
							'700 ml': 6450,
						},
					},
					{
						name: 'GLENFIDDICH 15 Yrs SINGLE MALT SCOTCH WHISKY',
						prices: {
							'700 ml': 9570,
						},
					},
					{
						name: 'STANGEN WEISS BIER',
						prices: {
							'500 ml': 270,
						},
					},
					{
						name: 'The Vamazakli Distillers Reserve Single Malt Japanese Whisky',
						prices: {
							'700 ml': 18750,
						},
					},
					{
						name: 'Hibiki Japanese Harmony Blended Japanese Whisky',
						prices: {
							'700 ml': 18750,
						},
					},
					{
						name: 'Roku Gin',
						prices: {
							'700 ml': 6370,
						},
					},
					{
						name: 'GRANTS TRIPLE WOOD BLENDED SCOTCH WHISKY',
						prices: {
							'750 ml': 2180,
						},
					},
					{
						name: 'LAPHROAIG SELECT ISLAY SINGLE MALT SCOTCH WHISKY',
						prices: {
							'750 ml': 7240,
						},
					},
					{
						name: 'Bardinet VSOP Finest Brandy',
						prices: {
							'1000 ml': 3170,
						},
					},
					{
						name: 'Bardinet XO Finest Brandy',
						prices: {
							'700 ml': 3480,
						},
					},
					{
						name: 'SUNTORY WHISKY TOKI',
						prices: {
							'700 ml': 5360,
						},
					},
					{
						name: 'BEEHIVE HONEY FLAVOURED EXTRA SMOOTH BRANDY',
						prices: {
							'1000 ml': 4200,
						},
					},
					{
						name: 'STANGEN IPA BEER',
						prices: {
							'500 ml': 300,
						},
					},
					{
						name: 'BOWMORE 15 YO ISLAY SINGLE MALT SCOTCH WHISKY',
						prices: {
							'700 ml': 9920,
						},
					},
					{
						name: 'LIQUEUR TRIPLE SEC',
						prices: {
							'700 ml': 2980,
						},
					},
					{
						name: 'Tequila Teresa Del Castillo Silver',
						prices: {
							'700 ml': 3750,
						},
					},
				],
			},
			{
				company: 'M/s. ASPRI SPIRITS PVT LTD, NEW DELHI',
				products: [
					{
						name: 'NAPOLEAN FRENCH SPIRITS SYRENS',
						prices: {
							'700 ml': 1830,
							'1000 ml': 2440,
						},
					},
					{
						name: 'ZONIN PROSECCO WINE',
						prices: {
							'750 ml': 3560,
						},
					},
					{
						name: 'LAMBRUSCO EMILIA IGT AMABILE RED',
						prices: {
							'750 ml': 2140,
						},
					},
					{
						name: 'MOLINARI SAMBUCA EXTRA LIQUOR',
						prices: {
							'750 ml': 3930,
						},
					},
					{
						name: 'JACK DANIEL TENNESSEE WHISKY',
						prices: {
							'750 ml': 5220,
						},
					},
					{
						name: 'JACK DANIEL TENNESSEE HONEY',
						prices: {
							'750 ml': 5220,
						},
					},
					{
						name: 'FINLANDIA VODKA',
						prices: {
							'750 ml': 2900,
						},
					},
					{
						name: 'TWO OCEANS PINOTAGE WINE',
						prices: {
							'750 ml': 1890,
						},
					},
					{
						name: 'TWO OCEANS SHIRAZ WINE',
						prices: {
							'750 ml': 1890,
						},
					},
					{
						name: 'TWO OCEANS CHARDONNAY WINE',
						prices: {
							'750 ml': 1890,
						},
					},
					{
						name: 'BLACK TOWER RIESLING WHITE WINE',
						prices: {
							'750 ml': 2420,
						},
					},
					{
						name: 'BLACK TOWER DORNFELDER PINOT NOIR RED WINE',
						prices: {
							'750 ml': 2420,
						},
					},
					{
						name: 'MATEUS ROSE WINE',
						prices: {
							'750 ml': 2100,
						},
					},
					{
						name: 'TWO OCEANS SAUVIGNON BLANC WHITE WINE',
						prices: {
							'750 ml': 1910,
						},
					},
					{
						name: 'BARTON & GUESTIER MERLOT',
						prices: {
							'750 ml': 2290,
						},
					},
					{
						name: 'BARTON & GUESTIER CABERNET SAUVIGNON',
						prices: {
							'750 ml': 2290,
						},
					},
					{
						name: 'FRONTERA MERLOT',
						prices: {
							'750 ml': 2090,
						},
					},
					{
						name: 'FRONTERA SHIRAZ',
						prices: {
							'750 ml': 2090,
						},
					},
					{
						name: 'SCOTTISH LEADER BLENDED SCOTCH WHISKY',
						prices: {
							'720 ml': 2429,
							'1000 ml': 3120,
						},
					},
					{
						name: 'GENTLEMAN JACK',
						prices: {
							'750 ml': 6930,
						},
					},
					{
						name: "Tito's Handmade Vodka",
						prices: {
							'750 ml': 4070,
						},
					},
					{
						name: 'Zonin Chardonnay Wine',
						prices: {
							'750 ml': 2210,
						},
					},
					{
						name: 'Zonin Merlot Wine',
						prices: {
							'750 ml': 2210,
						},
					},
					{
						name: 'Freixent Cordon Negro Brut Sparkling Wine',
						prices: {
							'750 ml': 2460,
						},
					},
					{
						name: 'Bush Ballad Shiraz',
						prices: {
							'750 ml': 1690,
						},
					},
					{
						name: 'Bush Ballad Chardonnay',
						prices: {
							'750 ml': 1690,
						},
					},
					{
						name: 'JACK DANIELS SINGLE BARREL SELECT TENNESSEE WHISKEY',
						prices: {
							'750 ml': 12130,
						},
					},
				],
			},
			{
				company: 'M/s. ASPRI SPIRITS PVT LTD, NEW DELHI',
				products: [
					{
						name: 'Amsterdam Navigator',
						prices: {
							'500 ml': 290,
						},
					},
					{
						name: 'Triple Sec Liqueur Fauconnier',
						prices: {
							'750 ml': 2030,
						},
					},
					{
						name: 'Golden Sparrow Pinot Grigio',
						prices: {
							'750 ml': 2390,
						},
					},
					{
						name: 'Mia Red Wine',
						prices: {
							'750 ml': 2280,
						},
					},
					{
						name: 'Mia White Wine',
						prices: {
							'750 ml': 2280,
						},
					},
					{
						name: 'Jack Daniel Tennessee Fire Whiskey',
						prices: {
							'750 ml': 3380,
						},
					},
					{
						name: 'Woodford Reserve Kentucky Straight Bourbon Whiskey',
						prices: {
							'750 ml': 8210,
						},
					},
					{
						name: 'Peroni Nastro Azzurro Beer',
						prices: {
							'330 ml': 300,
						},
					},
					{
						name: 'JAGERMEISTER LIQUEUR',
						prices: {
							'375 ml': 2260,
						},
					},
					{
						name: 'BORN WEST CABERNET SAUVIGNON',
						prices: {
							'750 ml': 2820,
						},
					},
					{
						name: 'ZONIN ASTI DOCG DOLCE',
						prices: {
							'750 ml': 3540,
						},
					},
					{
						name: 'BARTON & GUESTIER CUVEE SPECIALE VIN ROUGE',
						prices: {
							'750 ml': 2500,
						},
					},
					{
						name: 'NEDERBURG PINOTAGE',
						prices: {
							'750 ml': 3430,
						},
					},
					{
						name: 'NEDERBURG SHIRAZ',
						prices: {
							'750 ml': 3430,
						},
					},
					{
						name: 'WOLF BLASS BILYARA SHIRAZ',
						prices: {
							'750 ml': 3130,
						},
					},
					{
						name: 'BRANDY VECCHIA ROMAGNA CLASSICA',
						prices: {
							'700 ml': 3030,
						},
					},
					{
						name: 'APERITIF SELECT',
						prices: {
							'700 ml': 3430,
						},
					},
					{
						name: 'Black Velvet',
						prices: {
							'750 ml': 3310,
						},
					},
					{
						name: "Burnett's Gin",
						prices: {
							'750 ml': 3530,
						},
					},
					{
						name: 'Evan Williams Black',
						prices: {
							'750 ml': 4630,
						},
					},
					{
						name: 'Roberto Cavalli Vodka',
						prices: {
							'1000 ml': 9280,
						},
					},
					{
						name: 'Roberto Cavalli Vodka Night Edition',
						prices: {
							'1000 ml': 9970,
						},
					},
					{
						name: 'Black Tower Rose',
						prices: {
							'750 ml': 3200,
						},
					},
					{
						name: 'Barefoot Cabernet Sauvignon',
						prices: {
							'750 ml': 2910,
						},
					},
					{
						name: 'Barefoot Shiraz',
						prices: {
							'750 ml': 2910,
						},
					},
					{
						name: 'JACK DANIEL TENNESSEE APPLE',
						prices: {
							'750 ml': 5220,
						},
					},
					{
						name: 'TEQUILA EL JIMADOR BLANCO',
						prices: {
							'750 ml': 4880,
						},
					},
				],
			},
			{
				company: 'RADELAN DISTRIBUTORS PVT. LTD.',
				products: [
					{
						name: 'NAPOLEAN BRANDY XO DE GOUEMET',
						prices: {
							'700 ml': 2240,
						},
					},
					{
						name: 'CAMAS SYRAH WINE',
						prices: {
							'750 ml': 1530,
						},
					},
					{
						name: 'SENORITA SAUVIGNON BLANC WHITE WINE',
						prices: {
							'750 ml': 1620,
						},
					},
					{
						name: 'SENORITA CABERNET SAUVIGNON RED WINE',
						prices: {
							'750 ml': 1620,
						},
					},
					{
						name: 'CASCO VIEJO SILVER TEQUILA',
						prices: {
							'750 ml': 2310,
						},
					},
					{
						name: 'SENORITA CHARDONNAY WINE',
						prices: {
							'750 ml': 1620,
						},
					},
					{
						name: 'SENORITA MERLOT WINE',
						prices: {
							'750 ml': 1620,
						},
					},
					{
						name: 'CAMAS MERLOT WINE',
						prices: {
							'750 ml': 1530,
						},
					},
					{
						name: 'CAMAS CHARDONNAY WINE',
						prices: {
							'750 ml': 1530,
						},
					},
					{
						name: 'XENTA ABSENTA LIQUEUR',
						prices: {
							'700 ml': 6730,
						},
					},
					{
						name: 'Meukow VS (Cognac)',
						prices: {
							'700 ml': 5450,
						},
					},
					{
						name: 'Butlers Triple Sec',
						prices: {
							'750 ml': 2300,
						},
					},
					{
						name: 'Zappa Sambuca',
						prices: {
							'750 ml': 2300,
						},
					},
					{
						name: 'Just Roberto Chianti DOCG',
						prices: {
							'750 ml': 1620,
						},
					},
					{
						name: 'Just Roberto Pinot Grigio - Trebbianno IGT',
						prices: {
							'750 ml': 1590,
						},
					},
					{
						name: 'Just Roberto Merlot IGT',
						prices: {
							'750 ml': 1370,
						},
					},
					{
						name: 'Just Roberto Prosseco',
						prices: {
							'750 ml': 2010,
						},
					},
					{
						name: 'Charles Roux Blanc de Blancs Brut',
						prices: {
							'750 ml': 1750,
						},
					},
					{
						name: 'Corona Extra Beer',
						prices: {
							'355 ml': 330,
						},
					},
					{
						name: 'Hoegaarden Beer',
						prices: {
							'330 ml': 320,
						},
					},
					{
						name: 'Taiwan Beer',
						prices: {
							'500 ml': 290,
						},
					},
					{
						name: 'Tamerlane Blended Scotch Whisky',
						prices: {
							'750 ml': 2190,
						},
					},
					{
						name: 'Budweiser Beer',
						prices: {
							'500 ml': 330,
							'340 ml': 290,
						},
					},
				],
			},
			{
				company: 'Indospirit Distribution Ltd.',
				products: [
					{
						name: "Ballentine's Aged 12 Years Blended Scotch Whisky",
						prices: {
							'750 ml': 4210,
						},
					},
					{
						name: 'Absolut Elyx',
						prices: {
							'750 ml': 4510,
						},
					},
					{
						name: 'Absolut Raspberri',
						prices: {
							'750 ml': 2670,
						},
					},
					{
						name: 'Absolut Lime',
						prices: {
							'750 ml': 2670,
						},
					},
					{
						name: 'Campo Viejo Tempranillo',
						prices: {
							'750 ml': 2280,
						},
					},
					{
						name: 'Campo Viejo Viura Tempranillo Blanco',
						prices: {
							'750 ml': 2280,
						},
					},
					{
						name: 'Jameson Irish Whiskey Caskmates',
						prices: {
							'750 ml': 3640,
						},
					},
					{
						name: "Ballantine's Blended Scotch Whisky Aged 17 Years",
						prices: {
							'750 ml': 8520,
						},
					},
					{
						name: 'Kahlua Coffee Liqueur',
						prices: {
							'750 ml': 2860,
						},
					},
					{
						name: 'Jacobs Creek Merlot',
						prices: {
							'750 ml': 1760,
						},
					},
					{
						name: 'Chivas Regal Aged 15 Years Blended Scotch Whisky',
						prices: {
							'750 ml': 7260,
						},
					},
					{
						name: 'The Glenlivet Single Malt Scotch Whisky 15 Years Old',
						prices: {
							'700 ml': 8540,
						},
					},
					{
						name: 'The Glenlivet Single Malt Scotch Whisky 18 Years Old',
						prices: {
							'700 ml': 13880,
						},
					},
					{
						name: 'Martell Extra Old XO Cognac',
						prices: {
							'700 ml': 20270,
						},
					},
					{
						name: 'Ricard Aperitif Anise',
						prices: {
							'750 ml': 2620,
						},
					},
					{
						name: 'Royal Salute 21 Years Old Blended Scotch Whisky',
						prices: {
							'700 ml': 20760,
						},
					},
					{
						name: 'Aberlour Highland Single Malt Scotch Whisky 12 Years Old',
						prices: {
							'700 ml': 6610,
						},
					},
					{
						name: 'Aberlour Highland Single Malt Scotch Whisky 16 Years Old',
						prices: {
							'700 ml': 10960,
						},
					},
					{
						name: 'G.H. Mumm Brut Cordon Rouge',
						prices: {
							'750 ml': 10210,
						},
					},
					{
						name: 'Absolut Vodka',
						prices: {
							'750 ml': 2590,
						},
					},
					{
						name: "Ballantine's Finest Blended Scotch Whisky",
						prices: {
							'750 ml': 2670,
						},
					},
					{
						name: 'Jameson Irish Whiskey',
						prices: {
							'750 ml': 3270,
						},
					},
					{
						name: 'Absolut Citron',
						prices: {
							'750 ml': 2760,
						},
					},
					{
						name: 'Absolut Mandrin',
						prices: {
							'750 ml': 2760,
						},
					},
					{
						name: 'Absolut Grapefruit',
						prices: {
							'750 ml': 2750,
						},
					},
					{
						name: 'The Glengarry Highland Blended Scotch Whisky',
						prices: {
							'750 ml': 460,
						},
					},
					{
						name: 'The Glengrant Single Malt Scotch Whisky Aged 18 Years',
						prices: {
							'750 ml': 11490,
						},
					},
					{
						name: 'The Glengrant Single Malt Scotch Whisky Aged 12 Years',
						prices: {
							'750 ml': 5770,
						},
					},
					{
						name: 'Bull Dog London Dry Gin',
						prices: {
							'750 ml': 3360,
						},
					},
					{
						name: 'Wild Turkey Kentucky Straight Bourbon Whiskey',
						prices: {
							'750 ml': 4190,
						},
					},
					{
						name: 'Cinzano Vermouth Rosso',
						prices: {
							'750 ml': 2110,
						},
					},
					{
						name: 'Cinzano Prossecco',
						prices: {
							'750 ml': 2440,
						},
					},
					{
						name: 'Buen Amigo Tequila Silver',
						prices: {
							'750 ml': 3040,
						},
					},
					{
						name: 'Tom & Mew London Dry Gin',
						prices: {
							'700 ml': 2570,
						},
					},
				],
			},
			{
				company: 'S.V. Distributors Pvt. Ltd.',
				products: [
					{
						name: 'Grey Goose Vodka Original',
						prices: {
							'750 ml': 5630,
						},
					},
					{
						name: 'Bombay Sapphire Distilled London Dry Gin',
						prices: {
							'750 ml': 2800,
						},
					},
					{
						name: 'Camino Real Blanco',
						prices: {
							'750 ml': 2690,
						},
					},
					{
						name: 'Camino Real Gold',
						prices: {
							'750 ml': 2790,
						},
					},
					{
						name: "Dewar's White Label Blended Scotch Whisky",
						prices: {
							'750 ml': 2570,
						},
					},
					{
						name: "Dewar's 12 Years Old Double Aged Blended Scotch Whisky",
						prices: {
							'750 ml': 3660,
						},
					},
					{
						name: "Dewar's 15 Years Old Double Aged Blended Scotch Whisky",
						prices: {
							'750 ml': 4890,
						},
					},
					{
						name: 'Aberfeldy Single Highland Malt Scotch Whisky Aged 12 Years',
						prices: {
							'750 ml': 6350,
						},
					},
					{
						name: 'Bacardi Carta Blanca Rum',
						prices: {
							'1000 ml': 3300,
						},
					},
					{
						name: 'Martini Rosso',
						prices: {
							'1000 ml': 1810,
						},
					},
					{
						name: 'Martini Blanco',
						prices: {
							'1000 ml': 1810,
						},
					},
					{
						name: 'Martini Prosecco',
						prices: {
							'750 ml': 2280,
						},
					},
					{
						name: "Dewar's 18 Years Old Double Aged Blended Scotch Whisky",
						prices: {
							'750 ml': 8320,
						},
					},
					{
						name: "Dewar's Signature 25YO Blended Scotch Whisky",
						prices: {
							'750 ml': 24850,
						},
					},
					{
						name: 'Aberfeldy Single Highland Malt Scotch Whisky Aged 21 Years',
						prices: {
							'750 ml': 18810,
						},
					},
					{
						name: 'Bacardi Ocho',
						prices: {
							'750 ml': 3730,
						},
					},
					{
						name: 'ST REMY BRANDY VSOP',
						prices: {
							'700 ml': 3600,
						},
					},
					{
						name: 'COINTREAU',
						prices: {
							'700 ml': 4460,
						},
					},
				],
			},
			{
				company: 'BRINDCO ENTERPRISES PVT LTD',
				products: [
					{
						name: 'J & B Rare Whisky',
						prices: {
							'750 ml': 2700,
						},
					},
					{
						name: 'Johnnie Walker Black Label Whisky',
						prices: {
							'750 ml': 4700,
						},
					},
					{
						name: 'Johnnie Walker Red Label Whisky',
						prices: {
							'750 ml': 2570,
						},
					},
					{
						name: 'Gordon Gin',
						prices: {
							'750 ml': 2250,
						},
					},
					{
						name: 'Smirnoff Red Vodka',
						prices: {
							'1000 ml': 1700,
						},
					},
					{
						name: 'Baileys Irish Creme Liquor',
						prices: {
							'750 ml': 3050,
						},
					},
					{
						name: 'Tanqueray London Dry Gin',
						prices: {
							'750 ml': 2690,
						},
					},
					{
						name: 'Talisker 10 Years Old Scotch Whisky',
						prices: {
							'750 ml': 5980,
						},
					},
					{
						name: 'Glenkinchie 12 Years Old Scotch Whisky',
						prices: {
							'750 ml': 6030,
						},
					},
					{
						name: 'Ciroc Vodka',
						prices: {
							'750 ml': 3780,
						},
					},
					{
						name: 'Ketel One Vodka',
						prices: {
							'750 ml': 2840,
						},
					},
					{
						name: 'Johnnie Walker Gold Label Scotch Whisky',
						prices: {
							'750 ml': 6140,
						},
					},
					{
						name: 'Johnnie Walker Blue Label Scotch Whisky',
						prices: {
							'750 ml': 21520,
						},
					},
					{
						name: 'Johnnie Walker Double Black Scotch Whisky',
						prices: {
							'750 ml': 5480,
						},
					},
					{
						name: 'Caolila 12 YO Malt Whisky',
						prices: {
							'750 ml': 6450,
						},
					},
					{
						name: 'Lagavulin 16 YO Malt Whisky',
						prices: {
							'750 ml': 9300,
						},
					},
					{
						name: 'Cragganmore Malt Whisky',
						prices: {
							'750 ml': 6230,
						},
					},
					{
						name: 'Dalwhinnie Malt Whisky',
						prices: {
							'750 ml': 5990,
						},
					},
					{
						name: 'Vat 69 Blended Scotch Whisky',
						prices: {
							'750 ml': 1990,
						},
					},
					{
						name: 'Black & White Blended Scotch Whisky',
						prices: {
							'750 ml': 2090,
						},
					},
					{
						name: 'Hopper Blonde Beer',
						prices: {
							'330 ml': 250,
							'500 ml': 320,
						},
					},
					{
						name: 'Hopper WitBier Beer',
						prices: {
							'330 ml': 250,
							'500 ml': 360,
						},
					},
					{
						name: 'Singleton Blended Scotch Whisky',
						prices: {
							'750 ml': 5820,
						},
					},
					{
						name: 'Buho Strong Can Beer',
						prices: {
							'500 ml': 280,
						},
					},
					{
						name: 'Buho Witbier Can Beer',
						prices: {
							'500 ml': 300,
						},
					},
					{
						name: "Baron Philippe de Rothschild Cadet D'OC Sauvignon Blanc",
						prices: {
							'750 ml': 2130,
						},
					},
					{
						name: "Baron Philippe de Rothschild Cadet D'OC Chardonnay",
						prices: {
							'750 ml': 2100,
						},
					},
					{
						name: "Baron Philippe de Rothschild Cadet D'OC Merlot",
						prices: {
							'750 ml': 2100,
						},
					},
					{
						name: "Baron Philippe de Rothschild Cadet D'OC Cabernet Sauvignon",
						prices: {
							'750 ml': 2100,
						},
					},
					{
						name: 'IGP Ardeche Les Terrasses Merlot (Red Wine)',
						prices: {
							'750 ml': 1740,
						},
					},
					{
						name: 'Bodega Norton Merlot',
						prices: {
							'750 ml': 2220,
						},
					},
					{
						name: 'Baron Philippe de Rothschild Mas Andes Sauvignon Blanc',
						prices: {
							'750 ml': 2220,
						},
					},
					{
						name: 'Baron Philippe de Rothschild Mas Andes Cabernet Sauvignon',
						prices: {
							'750 ml': 1960,
						},
					},
					{
						name: 'Baron Philippe de Rothschild Mas Andes Merlot',
						prices: {
							'750 ml': 1960,
						},
					},
					{
						name: "Lindeman's Premier Selection Chardonnay",
						prices: {
							'750 ml': 2060,
						},
					},
					{
						name: "Lindeman's Premier Selection Shiraz Cabernet",
						prices: {
							'750 ml': 2060,
						},
					},
					{
						name: 'Guinness Can Beer',
						prices: {
							'440 ml': 490,
						},
					},
					{
						name: 'Johnnie Walker Red Limited Edition Design Blended Scotch Whisky',
						prices: {
							'750 ml': 3180,
						},
					},
					{
						name: 'Johnnie Walker Black Limited Edition Design Blended Scotch Whisky',
						prices: {
							'750 ml': 5340,
						},
					},
					{
						name: 'Taliskar Storm Single Malt Scotch Whisky',
						prices: {
							'700 ml': 9230,
						},
					},
					{
						name: 'Taliskar Skye Single Malt Scotch Whisky',
						prices: {
							'700 ml': 9210,
						},
					},
				],
			},
			{
				company: 'AGNETTA INTERNATIONAL PVT. LTD.',
				products: [
					{
						name: 'Estrella Damm Beer',
						prices: {
							'330 ml': 280,
						},
					},
					{
						name: 'Zila Bicchoo Strong Beer',
						prices: {
							'500 ml': 290,
						},
					},
				],
			},
			{
				company: 'M/s. Klassic Business Advisory Pvt. Ltd.',
				products: [
					{
						name: 'Lotte Chum Churum Soju Wine',
						prices: {
							'360 ml': 700,
						},
					},
					{
						name: 'CINQUENA RED WINE TEMPRANILLO',
						prices: {
							'750 ml': 1820,
						},
					},
					{
						name: 'CINQUENA WHITE WINE',
						prices: {
							'750 ml': 1820,
						},
					},
					{
						name: 'NAPOLEON CLASSIC BRANDY',
						prices: {
							'1000 ml': 2680,
						},
					},
					{
						name: 'CINQUENA ROSE WINE',
						prices: {
							'750 ml': 1820,
						},
					},
				],
			},
			{
				company: 'M/s. SVL IMPEX PVT LTD',
				products: [
					{
						name: 'BHUTANESE RED RICE LAGER BEER',
						prices: {
							'330 ml': 230,
						},
					},
					{
						name: 'BHUTANESE WHEAT BEER',
						prices: {
							'330 ml': 230,
						},
					},
					{
						name: 'LOUIS BARON VSOP NAPOLEON BRANDY',
						prices: {
							'700 ml': 3970,
						},
					},
					{
						name: "FORT GLEN BLENDED SCOTCH WHISKY DISTILLER'S RESERVE",
						prices: {
							'750 ml': 2880,
						},
					},
				],
			},
			{
				company: 'M/s. Sunlight Spirits Pvt. Ltd.',
				products: [
					{
						name: 'KEYSTONE BLENDED SCOTCH WHISKY',
						prices: {
							'1000 ml': 3540,
						},
					},
					{
						name: 'RON LUPE',
						prices: {
							'1000 ml': 3070,
						},
					},
					{
						name: 'ROYAL ARMY RUM',
						prices: {
							'1000 ml': 2480,
						},
					},
					{
						name: 'BEACH CLUB VODKA',
						prices: {
							'1000 ml': 2480,
						},
					},
					{
						name: 'BARON DE AGUILAS RED WINE',
						prices: {
							'750 ml': 2040,
						},
					},
					{
						name: 'BARON DE AGUILAS SWEET WINE',
						prices: {
							'750 ml': 2150,
						},
					},
					{
						name: 'SWAGGER GRAPE BRANDY',
						prices: {
							'1000 ml': 3230,
						},
					},
					{
						name: 'FALCON BRANDY',
						prices: {
							'1000 ml': 3140,
						},
					},
				],
			},
			{
				company: 'M/s. Angus Dundee India Pvt. Ltd.',
				products: [
					{
						name: 'Glen Parker Spey Side Single Malt Scotch Whisky',
						prices: {
							'1000 ml': 6210,
							'700 ml': 4900,
						},
					},
					{
						name: "Parker's Blended Scotch Whisky",
						prices: {
							'1000 ml': 2740,
							'700 ml': 2270,
						},
					},
					{
						name: 'TOMINTOUL TLATH SPEYSIDE GLENLIVET SINGLE MALT SCOTCH WHISKY',
						prices: {
							'1000 ml': 8770,
						},
					},
				],
			},
			{
				company: 'M/S. UNITED BREWERIES LTD.',
				products: [
					{
						name: 'Heineken Lager Beer',
						prices: {
							'330 ml': 310,
						},
					},
				],
			},
			{
				company: 'M/s. SRI NANDHITHA TRADERS',
				products: [
					{
						name: 'Den-En-Gold',
						prices: {
							'720 ml': 4190,
						},
					},
					{
						name: 'Grand Bleu',
						prices: {
							'700 ml': 3140,
						},
					},
				],
			},
			{
				company: 'M/S. SATYARUDHRA IMPORTS AND EXPORTS PVT. LTD',
				products: [
					{
						name: 'CASACA SHIRAZ WINE',
						prices: {
							'750 ml': 2060,
						},
					},
					{
						name: 'CASACA CABERNET SAUVIGNON WINE',
						prices: {
							'750 ml': 2060,
						},
					},
					{
						name: 'CASACA PREMIUM SHIRAZ WINE',
						prices: {
							'750 ml': 2670,
						},
					},
					{
						name: 'CASACA PREMIUM CHARDONNAY WINE',
						prices: {
							'750 ml': 2180,
						},
					},
					{
						name: 'PINK TWINKLES WINE',
						prices: {
							'750 ml': 2140,
						},
					},
					{
						name: 'RAISIN CRUSH WINE',
						prices: {
							'750 ml': 2140,
						},
					},
					{
						name: 'CASACA MERLOT WINE',
						prices: {
							'750 ml': 2100,
						},
					},
					{
						name: 'CASACA CABERNET MERLOT WINE',
						prices: {
							'750 ml': 2100,
						},
					},
				],
			},
			{
				company: 'M/s. Anradh Global Traders LLP',
				products: [
					{
						name: 'Stalinskaya Vodka Blue 45%',
						prices: {
							'750 ml': 3140,
						},
					},
					{
						name: 'Stalinskaya Vodka Silver 40%',
						prices: {
							'750 ml': 2690,
						},
					},
					{
						name: 'Wembley Dry Gin 40%',
						prices: {
							'700 ml': 3150,
						},
					},
					{
						name: 'STALINSKAYA RED VODKA',
						prices: {
							'750 ml': 2590,
						},
					},
				],
			},
			{
				company: 'M/s. Belgium Craft Brew Pvt. Ltd.',
				products: [
					{
						name: 'Communiti Belgian Wheat',
						prices: {
							'330 ml': 250,
						},
					},
					{
						name: 'Communiti Irish Ale',
						prices: {
							'330 ml': 250,
						},
					},
				],
			},
			{
				company: 'M/s. MIMCO INTERNATIONAL (TUTICORIN)',
				products: [
					{
						name: 'CHIVAS REGAL AGED 12 YO BLENDED SCOTCH',
						prices: {
							'750 ml': 5340,
						},
					},
					{
						name: 'BEEFEATER LONDON DRY GIN',
						prices: {
							'750 ml': 2610,
						},
					},
					{
						name: 'MARTEL VS SINGLE DISTILLERY FINE COGNAC',
						prices: {
							'700 ml': 5210,
						},
					},
					{
						name: "JACOB'S CREEK SHIRAZ CABERNET",
						prices: {
							'750 ml': 2180,
						},
					},
					{
						name: "JACOB'S CREEK CHARDONNAY",
						prices: {
							'750 ml': 2180,
						},
					},
					{
						name: 'CHIVAS REGAL AGED 18 YO BLENDED SCOTCH GOLD SIGNATURE',
						prices: {
							'700 ml': 8310,
						},
					},
					{
						name: 'MARTEL VSOP AGED IN RED BARREL COGNAC',
						prices: {
							'700 ml': 6600,
						},
					},
					{
						name: "JACOB'S CREEK CHARDONNAY PINOT NOIR",
						prices: {
							'750 ml': 2910,
						},
					},
				],
			},
			{
				company: 'M/s. ICY INDOBEV PVT. LTD.',
				products: [
					{
						name: 'Marin Brandy',
						prices: {
							'700 ml': 3210,
						},
					},
				],
			},
			{
				company: 'M/s. SULA VINEYARDS PVT. LTD.',
				products: [
					{
						name: 'Torres 5 Solera Imperial Brandy',
						prices: {
							'700 ml': 2510,
						},
					},
				],
			},
			{
				company: 'M/s. MYSTIQUE ASSOCIATES',
				products: [
					{
						name: 'St Nicolaus Vodka',
						prices: {
							'700 ml': 1670,
						},
					},
				],
			},
			{
				company: 'M/s. MAGPIE TRADING AGENCIES PVT. LTD.',
				products: [
					{
						name: 'DORDOGNE VSOP FRENCH SPIRIT',
						prices: {
							'1000 ml': 2270,
						},
					},
					{
						name: 'MAGPIE GOLD SCOTCH WHISKEY',
						prices: {
							'1000 ml': 2560,
						},
					},
				],
			},
			{
				company: 'M/s. CIRO TRADE PVT. LTD.',
				products: [
					{
						name: 'Brunonia Premium Wheat Beer',
						prices: {
							'500 ml': 310,
						},
					},
					{
						name: 'J.OPPMANN GOLD NUGGET SPARKLING WINE XTRA DRY',
						prices: {
							'750 ml': 7570,
						},
					},
					{
						name: 'J.OPPMANN SPARKLING WINE SEMI DRY',
						prices: {
							'750 ml': 4650,
							'200 ml': 1470,
						},
					},
					{
						name: 'J.OPPMANN SPARKLING WINE PRIVAT',
						prices: {
							'750 ml': 5380,
							'200 ml': 1720,
						},
					},
					{
						name: 'J.OPPMANN SECCO FRIZZANTE ROSE DRY',
						prices: {
							'750 ml': 5610,
						},
					},
					{
						name: 'Becksteiner Winzer Schwarz Riesling QbA',
						prices: {
							'750 ml': 4120,
						},
					},
					{
						name: 'Becksteiner Winzer SUSS rot QbA SuB',
						prices: {
							'750 ml': 3720,
						},
					},
					{
						name: 'Becksteiner Winzer Riesling Kabinett Feinherb',
						prices: {
							'750 ml': 4320,
						},
					},
					{
						name: 'Becksteiner Winzer SUSS WeiB QbA SuB',
						prices: {
							'750 ml': 3720,
						},
					},
					{
						name: 'Brunonia Premium Lager Beer',
						prices: {
							'500 ml': 350,
						},
					},
				],
			},
			{
				company: 'M/s. CHENAB IMPEX PVT. LTD.',
				products: [
					{
						name: 'MANCURA ETNIA CABERNET SAUVIGNON',
						prices: {
							'750 ml': 1890,
						},
					},
					{
						name: 'MANCURA ETNIA CARMENERE',
						prices: {
							'750 ml': 1890,
						},
					},
					{
						name: 'MANCURA ETNIA MERLOT',
						prices: {
							'750 ml': 1890,
						},
					},
					{
						name: 'MANCURA ETNIA ROSE',
						prices: {
							'750 ml': 1890,
						},
					},
					{
						name: 'MANCURA ETNIA SAUVIGNON BLANC',
						prices: {
							'750 ml': 1890,
						},
					},
					{
						name: 'MANCURA ETNIA CHARDONNAY',
						prices: {
							'750 ml': 1890,
						},
					},
					{
						name: "SIRENTE MONTEPULCIANO D'ABRUZZO DOP",
						prices: {
							'750 ml': 2250,
						},
					},
					{
						name: 'LESPIRIT DE BACCHUS BORDEAUX',
						prices: {
							'750 ml': 2350,
						},
					},
					{
						name: 'CAPE DREAMS SHIRAZ',
						prices: {
							'750 ml': 2140,
						},
					},
					{
						name: 'CAPE DREAMS PINOTAGE',
						prices: {
							'750 ml': 2140,
						},
					},
					{
						name: 'Cavino Nemea Agiorgitiko PDO Red',
						prices: {
							'750 ml': 2180,
						},
					},
					{
						name: 'Cavino Naoussa Xinomavro PDO Red',
						prices: {
							'750 ml': 2180,
						},
					},
					{
						name: 'Michel Torino Coleccion Malbec',
						prices: {
							'750 ml': 2380,
						},
					},
					{
						name: "Vignerons de L'Enclave Clef de L'Enclave Cotes Du Rhone",
						prices: {
							'750 ml': 2660,
						},
					},
					{
						name: 'Yalumba Y Series Shiraz',
						prices: {
							'750 ml': 3180,
						},
					},
					{
						name: 'Paul Mas Cabernet Sauvignon',
						prices: {
							'750 ml': 2580,
						},
					},
					{
						name: 'Paul Mas Syrah',
						prices: {
							'750 ml': 2580,
						},
					},
					{
						name: 'Paul Mas Merlot',
						prices: {
							'750 ml': 2580,
						},
					},
					{
						name: 'Paul Mas Pinot Noir',
						prices: {
							'750 ml': 2580,
						},
					},
				],
			},
			{
				company: 'M/s. SONARYS CO-BRANDS PVT. LTD.',
				products: [
					{
						name: 'DUPORT NAPOLEON VSOP FINE SPIRIT',
						prices: {
							'1000 ml': 2280,
						},
					},
					{
						name: 'SAINT LOUIS PURE GRAPE BRANDY VSOP',
						prices: {
							'700 ml': 2860,
						},
					},
					{
						name: 'LA VIEILLE FERME BLANC',
						prices: {
							'750 ml': 2690,
						},
					},
					{
						name: 'LA VIEILLE FERME ROUGE',
						prices: {
							'750 ml': 2690,
						},
					},
					{
						name: 'LA VIEILLE FERME ROSE',
						prices: {
							'750 ml': 2690,
						},
					},
					{
						name: 'Pasqua Sangiovese di Pugalia IGT',
						prices: {
							'750 ml': 2590,
						},
					},
					{
						name: "Pasqua Montepulciano d'Abruzzo DOC",
						prices: {
							'750 ml': 2590,
						},
					},
					{
						name: 'Pasqua Chianti DOCG',
						prices: {
							'750 ml': 3580,
						},
					},
					{
						name: 'IWAI MARS WHISKY',
						prices: {
							'750 ml': 6300,
						},
					},
					{
						name: 'IWAI TRADITION MARS WHISKY',
						prices: {
							'750 ml': 8980,
						},
					},
				],
			},
			{
				company: 'M/s. AESUN BEVERAGES',
				products: [
					{
						name: 'DRUK PREMIUM LAGER BEER',
						prices: {
							'500 ml': 230,
						},
					},
					{
						name: 'DRUK SUPREME PREMIUM LAGER BEER',
						prices: {
							'500 ml': 240,
						},
					},
					{
						name: 'DRUK 11000 PREMIUM STRONG BEER',
						prices: {
							'500 ml': 230,
						},
					},
				],
			},
			{
				company: 'M/s. Highland Food and Beverages',
				products: [
					{
						name: 'DON AZUS TEQUILA',
						prices: {
							'1000 ml': 2660,
						},
					},
					{
						name: 'LE-COOP BRANDY',
						prices: {
							'1000 ml': 2670,
						},
					},
					{
						name: 'JOHN REGAL (12) APRICOT BRANDY',
						prices: {
							'1000 ml': 3030,
						},
					},
					{
						name: 'JOHN REGAL (12) CHERRY BRANDY',
						prices: {
							'1000 ml': 3030,
						},
					},
					{
						name: 'JOHN REGAL (12) PLUM BRANDY',
						prices: {
							'1000 ml': 3030,
						},
					},
					{
						name: 'Don Azus Gold Tequila',
						prices: {
							'1000 ml': 2870,
						},
					},
					{
						name: 'Finesse Whisky',
						prices: {
							'1000 ml': 2870,
						},
					},
					{
						name: 'Country Rose Whisky',
						prices: {
							'1000 ml': 2870,
						},
					},
				],
			},
			{
				company: 'M/s. Monika Alcobev Limited',
				products: [
					{
						name: 'Tequila Jose Cuervo Especial Silver',
						prices: {
							'750 ml': 4070,
						},
					},
					{
						name: 'Tequila Jose Cuervo Especial Reposado',
						prices: {
							'750 ml': 4180,
						},
					},
					{
						name: 'Russian Standard Vodka Gold',
						prices: {
							'700 ml': 2630,
						},
					},
					{
						name: "LUCIFER'S GOLD WHISKY",
						prices: {
							'700 ml': 2800,
						},
					},
					{
						name: 'EL VOLQUETE RED',
						prices: {
							'750 ml': 1830,
						},
					},
					{
						name: 'EL VOLQUETE WHITE',
						prices: {
							'750 ml': 1830,
						},
					},
					{
						name: 'Schwartzhog Herbal Liqueur',
						prices: {
							'1000 ml': 4140,
						},
					},
					{
						name: 'The Kraken Black Spiced Rum',
						prices: {
							'700 ml': 6200,
						},
					},
					{
						name: 'Absente 49',
						prices: {
							'700 ml': 4140,
						},
					},
					{
						name: 'Bushmills Original',
						prices: {
							'700 ml': 3540,
						},
					},
					{
						name: 'Viva El Ron White Rum',
						prices: {
							'700 ml': 2030,
						},
					},
					{
						name: 'Bushmills 12 Years Old Single Malt',
						prices: {
							'700 ml': 6680,
						},
					},
					{
						name: '19:59 Merlot',
						prices: {
							'750 ml': 2120,
						},
					},
					{
						name: '19:50 Pinot Noir',
						prices: {
							'750 ml': 2280,
						},
					},
				],
			},
			{
				company: 'MS. PKGS SPIRITS PRIVATE LIMITED',
				products: [
					{
						name: 'St. Rhine VSOP Cape Brandy',
						prices: {
							'750 ml': 3950,
						},
					},
					{
						name: 'St. Rhine VS Cape Brandy',
						prices: {
							'750 ml': 3650,
						},
					},
					{
						name: 'Silver Volk Vodka',
						prices: {
							'1000 ml': 2350,
						},
					},
				],
			},
			{
				company: 'MS. PKGS SPIRITS PRIVATE LIMITED',
				products: [
					{
						name: 'St. Rhine VSOP Cape Brandy',
						prices: {
							'750 ml': 3950,
						},
					},
					{
						name: 'St. Rhine VS Cape Brandy',
						prices: {
							'750 ml': 3650,
						},
					},
					{
						name: 'Silver Volk Vodka',
						prices: {
							'1000 ml': 2350,
						},
					},
					{
						name: 'Black Smoke 12 Years Blended Whisky',
						prices: {
							'1000 ml': 3710,
						},
					},
					{
						name: 'Beau Cape 5 Years Blended VSOP Brandy',
						prices: {
							'1000 ml': 2580,
						},
					},
				],
			},
			{
				company: 'M/s. CRAFTBEV PRODUCTS AND SERVICES LLP',
				products: [
					{
						name: 'STARA MYSLIVECKA RYE WHISKY',
						prices: {
							'700 ml': 1940,
						},
					},
					{
						name: 'AKRON NAPOLEON',
						prices: {
							'700 ml': 1940,
						},
					},
				],
			},
			{
				company: 'M/s. Fragrant Spirits Pvt. Ltd.',
				products: [
					{
						name: 'Desert Stallion Blended Scotch Whisky',
						prices: {
							'1000 ml': 2840,
						},
					},
					{
						name: 'Parakar VS Brandy',
						prices: {
							'700 ml': 2340,
						},
					},
					{
						name: 'Brandy Cronus VS',
						prices: {
							'1000 ml': 3140,
						},
					},
					{
						name: 'Brandy Royal Commission',
						prices: {
							'1000 ml': 3140,
						},
					},
				],
			},
			{
				company: 'M/s. Maarvel Imports',
				products: [
					{
						name: 'OLD PARTNER WHISKY',
						prices: {
							'1000 ml': 2700,
						},
					},
					{
						name: 'REGIS MORE BRANDY',
						prices: {
							'1000 ml': 2750,
						},
					},
				],
			},
			{
				company: 'M/s. Brewdifer Traders LLP',
				products: [
					{
						name: 'Vodkoff',
						prices: {
							'1000 ml': 2360,
						},
					},
				],
			},
		],
	};

	imfsBeer:any={

	}

	brands$: Observable<Brands> = new Observable();
	companies$: Observable<Company[]> = new Observable();

	constructor(private config: ConfigService) {
		this.filteredImfsBrands = this.imfsData.brands;
		this.filteredIfLBrands = this.iflData.brands;
	}
	
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
	ngOnInit() {
		this.getPageData('pages', 2);
		this.getBlockData('companies');
	}

	getPageData(database: string, id?: number) {
		this.brands$ = this.config.getSettings(database, id).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}

	getBlockData(database: string) {
		this.companies$ = this.config.getSettings(database).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}

	selectTab(tab: 'IMFS' | 'IFL') {
		this.selectedTab = tab;
		this.filterProducts();
	}

	filterProducts() {
		if (this.selectedTab === 'IMFS') {
		  if (!this.imfsData || !this.imfsData.brands) {
			console.error('IMFS data or brands are missing');
			return; // Exit function if data is not available
		  }
		  console.log('IMFS Data Before Filtering:', this.imfsData.brands);
		  this.filteredImfsBrands = this.filterBrands(this.imfsData.brands);
		  console.log('Filtered IMFS Brands:', this.filteredImfsBrands);
		} else {
		  if (!this.iflData || !this.iflData.brands) {
			console.error('IFL data or brands are missing');
			return; // Exit function if data is not available
		  }
		  console.log('IFL Data Before Filtering:', this.iflData.brands);
		  this.filteredIfLBrands = this.filterBrands(this.iflData.brands);
		  console.log('Filtered IFL Brands:', this.filteredIfLBrands);
		}
	  }
	  
	  filterBrands(brands: any[]) {
		if (!brands || !Array.isArray(brands)) {
		  console.error('Brands are not an array:', brands);
		  return []; // Return an empty array if brands is invalid
		}
	  
		console.log('Brands Before Filtering:', brands);
		const filtered = brands
		  .map(company => ({
			...company,
			products: company.products.filter(product =>
			  product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
			),
		  }))
		  .filter(company => company.products.length > 0);
	  
		console.log('Brands After Filtering:', filtered);
		return filtered;
	  }
	  
	clearSearch() {
		this.searchTerm = '';
		this.filterProducts();
	}
}
