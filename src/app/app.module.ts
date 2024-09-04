import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';
import { brandsPageComponent } from './brands/brands-page/brands-page.component';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Services
import { ConfigService } from './shared/services/config.service';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { OfficeDetailsComponent } from './office-details/office-details.component';
import { DistrictOfficesComponent } from './district-offices/district-offices.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		OfficeDetailsComponent,
		DistrictOfficesComponent,
		brandsPageComponent,
		CommonModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
			dataEncapsulation: false,
			passThruUnknownUrl: true,
		}),
		FooterComponent,
		NavigationComponent,
		NavmenuComponent,
		SocialComponent,
		NgSelectModule,
		RouterModule
	],
	providers: [ConfigService],
	bootstrap: [AppComponent],
})
export class AppModule {}
