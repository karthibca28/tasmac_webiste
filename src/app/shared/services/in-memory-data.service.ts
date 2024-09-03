import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const pages = [
			{
				id: 1,
				name: 'intro',
				tagline: 'EXPLORE',
				title: 'Tender,Retail Prices,Excise Duty/VAT Structure,View Import & Export Permit',
				description:
					'TASMAC procures IMFS and Beer stocks locally from 11 IMFS manufacturers and 7 Beer manufacturers in the State. It also procures wine locally from one manufacturer. It also procures scotch, Whisky and few wine brands from other states. TASMAC also engages in retail sale of Foreign Liquor.Distribution of IMFS & BEER items to the licensees is being done through the 43 depots of TASMAC located throughout the State.',
			},
			{
				id: 2,
				name: 'client',
				tagline: 'Products',
				title: 'Our Products Whiskey , Beer , Rum',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
			},
			{
				id: 3,
				name: 'services',
				tagline: 'BELIEVING',
				title: 'Focusing On What Matters Most',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
			},
			{
				id: 4,
				name: 'organization',
				tagline: 'ORGANIZATION',
				title: 'Our Board Directors',
				description: 'The Board of Directors of TASMAC with the following members takes policy decision and monitors the functioning of TASMAC.',
			},
			{
				id: 5,
				name: 'pricing',
				tagline: 'YOUR CHOICE',
				title: 'We have the right package for you',
				description: '',
			},
			{
				id: 6,
				name: 'footer',
				tagline: 'Copyright © 2024 TASMAC | All Rights Reserved. | Designed & Developed by',
				developer: 'Tasmac @2024',
				developerlink: 'https://www.tasmac.co.in/',
			},
			{
				id: 7,
				name: 'header',
				 tagline: 'Tamilnadu State Marketing Corporation Ltd.(TASMAC) (A Government of Tamilnadu Undertaking)' ,
				 title:  `<b>Tamil Nadu State Marketing Corporation Limited (TASMAC)</b> is a company incorporated under the Companies Act, 1956 on 23.05.1983. It is wholly owned by Govt. of Tamilnadu with Registered Office in Chennai. TASMAC is vested with the exclusive privilege of <b>wholesale supply of IMFL</b> for the whole State of Tamil Nadu as per Section 17 (C) (1-A) (a) of the Tamil Nadu Prohibition Act, 1937 (Tamil Nadu Act X of 1937). It has taken over the <b>wholesale distribution of Indian Made Foreign Liquor</b> from the Private Sector in the whole state of Tamil Nadu during May 1983. The exclusive privilege of <b>Retail Vending of IMFS</b> was granted to TASMAC under Sec.17 (C) (1-B) of the Tamil Nadu Prohibition Act, 1937. TASMAC is doing the retail business also successfully with effect from 29.11.2003.`
,
				// buttontext: 'START CREATING TODAY',
				// buttonlink: '/home',
				// image: 'recept.jpg',
			},
			{
				id: 8,
				name: 'suppliers',
				tagline: 'Suppliers for Tasmac',
				title: 'suppliers',
				description: 'suppliers',
			},
			{
				id: 9,
				name: 'contact',
				tagline: ' Tasmac contact',
				title: 'contact',
				description: 'contact',
			},
		];
		const features = [
			{
				id: 1,
				// icon: 'users',
				title: 'Tenders',
				description:
					'Explore the latest tender opportunities and procurement notices from our organization. Stay updated with the current bids and contracts available for suppliers and contractors in various sectors. Our transparent and competitive tendering process ensures equal opportunities for all participants.',
					link:'http://www.tenders.tn.gov.in/innerpage.asp?choice=cr7&id=136'
			},
			{
				id: 2,
				// icon: 'folder',
				title: ' Maximum Retail Prices',
				description:
					'Access the latest list of Maximum Retail Prices (MRP) for a wide range of products. This section ensures consumers are informed about the price limits set by authorities to prevent overpricing and protect consumer interests.',
					link:'/brands'

			},
			{
				id: 3,
				// icon: 'bolt',
				title: 'Excise Duty/VAT Structure',
				description:
					'Understand the current excise duty and VAT (Value Added Tax) structure applicable to various products and services. This section provides detailed information on tax rates, exemptions, and compliance requirements, helping businesses and consumers navigate the tax landscape effectively.',
					link:'https://www.tasmac.co.in/forms/taxes_and_duty_2024-03-01.pdf'

			},
			{
				id: 4,
				// icon: 'question',
				title: 'Vigiliance & Anti Corruption',
				description:
					'Committed to promoting transparency and accountability, our Vigilance and Anti-Corruption wing is dedicated to preventing and addressing corrupt practices. This section provides resources, guidelines, and contact information for reporting corruption and unethical activities, ensuring a fair and just environment.',
					link:'https://www.dvac.tn.gov.in/'

			},
			{
				id: 5,
				// icon: 'globe',
				title: 'Online Import Permit (IFL)',
				description:
					'Apply and manage your import permits online with ease. This section provides a streamlined process for obtaining the necessary permits for importing goods, ensuring compliance with regulatory requirements and facilitating smooth trade operations.',
					link:'https://importpermit-liquor.cpe.tn.gov.in/#/login'

			},
			{
				id: 6,
				// icon: 'globe',
				title: 'Online Export Permit -Beer',
				description:
					'Simplify your export process with our online export permit system. This section offers a convenient way to apply for and track export permits, ensuring that your goods meet all regulatory standards and facilitating efficient international trade.',
					link:'https://exportpermit-beer.cpe.tn.gov.in/#/login'

			},
			
		];

		const images = [
			{ id: 1, name: 'Chairman.jpg' },
			{ id: 2, name: 'mdroom.jpg' },
			{ id: 3, name: 'board.jpg' },
			{ id: 4, name: 'miniconf.jpg' },
			{ id: 5, name: 'amb1.jpg' },
			{ id: 6, name: 'nam1.jpg' },
			{ id: 7, name: 'tir1.jpg' },
			{ id: 8, name: 'siv2.jpg' },
			{ id: 9, name: 'tut2.jpg' },

		];
		const menu = [
			{ id: 1, title: 'Home', link: '/home' },
			{ id: 3, title: 'Our Presence', link: '/offices' },
			// { id: 3, title: 'Services', link: '/services' },
			// { id: 4, title: 'Gallery', link: '/gallery' },
			// { id: 5, title: 'Organisation', link: '/organization' },
			{ id: 6, title: 'Products', link: '/brands' },
			// { id: 7, title: 'Pricing', link: '/pricing' },
			{ id: 8, title: 'Suppliers', link: '/suppliers' },
			{ id: 9, title: 'Shop Locator', link: '/shoplocator' },
			{ id: 2, title: 'About', link: '/about' },
			{ id: 10, title: 'Contact', link: '/contact' },

		];
		const companies = [
			{
				id: 1,
				name: 'Tree',
				weblink: 'products.jpg',
				logo: 'products.jpg',
			},
			// {
			// 	id: 2,
			// 	name: 'Fingerprint',
			// 	weblink: 'brand2.jpg',
			// 	logo: 'brand2.jpg',
			// },
			// {
			// 	id: 3,
			// 	name: 'The Man',
			// 	weblink: 'brand3.jpg',
			// 	logo: 'brand3.png',
			// },
			// {
			// 	id: 4,
			// 	name: 'Mustache',
			// 	weblink: 'brand4.png',
			// 	logo: 'brand4.png',
			// },
			// {
			// 	id: 5,
			// 	name: 'Goat',
			// 	weblink: 'brand5.jpg',
			// 	logo: 'brand5.jpg',
			// },
			// {
			// 	id: 6,
			// 	name: 'Justice',
			// 	weblink: 'brand6.jpg',
			// 	logo: 'brand6.jpg',
			// },
			// {
			// 	id: 7,
			// 	name: 'Ball',
			// 	weblink: 'brand7.jpg',
			// 	logo: 'brand7.jpg',
			// },
			// {
			// 	id: 8,
			// 	name: 'Cold',
			// 	weblink: 'brand8.jpg',
			// 	logo: 'brand8.jpg',
			// },
			// {
			// 	id: 9,
			// 	name: 'Cold',
			// 	weblink: 'brand9.png',
			// 	logo: 'brand9.png',
			// },
		];
		const feedback = [
			{
				id: 1,
				name: 'John Doe',
				userimage: 'user-1.jpg',
				comments:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
				company: 'ABC',
			},
			{
				id: 2,
				name: 'Roslyn Doe',
				userimage: 'user-2.jpg',
				comments:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
				company: 'Happy Customer',
			},
			{
				id: 3,
				name: 'Thomas Doe',
				userimage: 'user-3.jpg',
				comments:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
				company: 'Happy Customer',
			},
		];
		const plans = [
			{
				id: 1,
				title: 'PERSONAL',
				subtitle: 'The standard version',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				price: '19',
				currency: '₹',
				downloads: '5 Downloads',
				extensions: '2 Extensions',
				tutorials: 'Tutorials',
				support: 'Forum Support',
				updates: '1 year free updates',
				buttontext: 'BUY TODAY',
				buttonlink: '#',
				featured: false,
			},
			{
				id: 2,
				title: 'STUDENT',
				subtitle: 'Most popular choice',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				price: '29',
				currency: '₹',
				downloads: '15 Downloads',
				extensions: '5 Extensions',
				tutorials: 'Tutorials with files',
				support: 'Forum Support',
				updates: '2 year free updates',
				buttontext: 'BUY TODAY',
				buttonlink: '#',
				featured: true,
			},
			{
				id: 3,
				title: 'BUSINESS',
				subtitle: 'For the whole team',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				price: '49',
				currency: '₹',
				downloads: 'Unlimited Downloads',
				extensions: 'Unlimited Downloads',
				tutorials: 'HD Video Tutorials',
				support: 'Chat Support',
				updates: 'Lifetime free updates',
				buttontext: 'BUY TODAY',
				buttonlink: '#',
				featured: false,
			},
		];
		const websites = [
			{
				id: 1,
				link: 'https://facebook.com/',
				title: 'Facebook',
				target: '_blank',
				username: 'Thor',
				icon: 'facebook',
			},
			// {
			//   id: 2,
			//   link: "https://googleplus.com/",
			//   title: "Google+",
			//   target: "_blank",
			//   username: "+jagmohan",
			//   icon: "google-plus",
			// },
			{
				id: 3,
				link: 'https://twitter.com/',
				title: 'Twitter',
				target: '_blank',
				username: 'joker',
				icon: 'twitter',
			},
			{
				id: 4,
				link: 'https://instagram.com/',
				title: 'Instagram',
				target: '_blank',
				username: 'superman',
				icon: 'instagram',
			},
			// {
			//   id: 5,
			//   link: "https://behance.com/",
			//   title: "Behance",
			//   target: "_blank",
			//   username: "jagmohan",
			//   icon: "behance",
			// },
		];

		return {
			menu,
			pages,
			features,
			images,
			companies,
			feedback,
			plans,
			websites,
		};
	}
}
