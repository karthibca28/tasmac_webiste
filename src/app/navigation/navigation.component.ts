import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ConfigService } from '../shared/services/config.service';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css'],
	standalone: true,
	imports: [CommonModule, NavmenuComponent, RouterModule],
})
export class NavigationComponent implements OnInit {
	menu: { id: number; title: string; link: string }[];

	menuOpen: boolean;
	database = 'menu';

	menuItems = [
		{ id: 1, title: 'Home', link: '/home' },
		{ id: 3, title: 'Our Presence', link: '/offices' },
		{
			id: 4,
			title: 'TASMAC at a Glance',
			isDropdown: true,
			subMenu: [
				{ id: 11, title: 'Profile', link: '/profile' },
				{ id: 12, title: 'Organization', link: '/organisation-structure' },
				{ id: 13, title: 'Board of Directors', link: '/boardofdirector' }
			]
		},
		{ id: 6, title: 'Stock Availability', link: '/stock-availability' },
		{ id: 6, title: 'Products', link: '/brands' },
		{ id: 8, title: 'Suppliers', link: '/suppliers' },
		{ id: 9, title: 'Shop Locator', link: '/shoplocator' },
		{ id: 2, title: 'About', link: '/about' },
		{ id: 10, title: 'Contact', link: '/contact' }
	];

	constructor(
		private location: Location,
		private config: ConfigService
	) { }

	ngOnInit() {
		this.menuOpen = false;
		this.getMenu();
	}
	showDropdown(menuItem: any, show: boolean) {
		menuItem.showDropdown = show;
	}

	toggleMenu(status: boolean) {
		this.menuOpen = status;
	}

	getMenu() {
		this.config.getSettings(this.database).subscribe(setting => {
			this.menu = setting;
		});
	}
}
