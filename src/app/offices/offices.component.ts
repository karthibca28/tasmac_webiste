import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { OfficeDetailsComponent } from '../office-details/office-details.component';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../services/form.service';

@Component({
	selector: 'app-offices',
	standalone: true,
	imports: [CommonModule, OfficeDetailsComponent],
	templateUrl: './offices.component.html',
	styleUrl: './offices.component.css'
})
export class OfficesComponent implements OnInit {
	@Input() officeData: any;
	selectedOfficeData: any;
	selectedOfficeType: number = 1
	isShow: boolean = false;
	topPosToStartShowing = 100;
	staffDetails: any

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
	constructor(private activatedRoute: ActivatedRoute, private formService: FormService) { }
	ngOnInit() {
		this.activatedRoute.queryParams.subscribe((params: any) => {
			if (params.offices) {
				this.getStaffByOffice(parseInt(params.offices))
			}
		});
		this.getStaffByOffice(this.selectedOfficeType)
	}

	getStaffByOffice(staffType: number) {
		this.selectedOfficeType = staffType
		// console.log(staffType)
		// if (staffType === 1) {
		// 	this.staffDetails = [
		// 		{
		// 			"name": "Christuraj",
		// 			"email": null,
		// 			"designation": "MANAGING DIRECTOR",
		// 			"office": "CHENNAI EGMORE"
		// 		},
		// 		{
		// 			"name": "Dr. S.SANGEETHA, BSMS",
		// 			"email": "sangeetha0106@tn.gov.in",
		// 			"designation": "District Revenue Officer / General Manager (Wholesale & Admin)",
		// 			"office": "CHENNAI EGMORE"
		// 		},
		// 		{
		// 			"name": "Thiru. T.RAMADURAIMURUGAN",
		// 			"email": "ramaduraimurugan1904@tn.gov.in",
		// 			"designation": "District Revenue Officer / General Manager (RV)",
		// 			"office": "CHENNAI EGMORE"
		// 		},
		// 		{
		// 			"name": "Thiru. M.JOTHI SHANKAR",
		// 			"email": "jothishankar1705@tn.gov.in",
		// 			"designation": "Deputy General Manager (Purchase & Sales)",
		// 			"office": "CHENNAI EGMORE"
		// 		}
		// 	]
		// }
		// if (staffType == 2) {
		// 	this.staffDetails = [
		// 		{
		// 			"name": "Sathyanaranan",
		// 			"email": null,
		// 			"designation": "Senior Regional Manager",
		// 			"office": "Chennai Region"
		// 		},
		// 		{
		// 			"name": "Govindarasu",
		// 			"email": null,
		// 			"designation": "Senior Regional Manager",
		// 			"office": "Coimbatore Region"
		// 		},
		// 		{
		// 			"name": "ELAVARASAN",
		// 			"email": "elavarasan1105@tn.gov.in",
		// 			"designation": "Senior Regional Manager",
		// 			"office": "Madurai Region"
		// 		},
		// 		{
		// 			"name": "ARAVINDAN",
		// 			"email": "aravindan0105@tn.gov.in",
		// 			"designation": "Senior Regional Manager",
		// 			"office": "Salem SRM"
		// 		},
		// 		{
		// 			"name": "Senthilkhumari",
		// 			"email": "senthi4venki@gmail.com",
		// 			"designation": "Senior Regional Manager",
		// 			"office": "Trichy Region"
		// 		}

		// 	]
		// }
		// if (staffType == 3) {
		// 	this.staffDetails = [
		// 		{
		// 			"name": "R.Punitha",
		// 			"email": "punitha0506@tn.gov.in",
		// 			"designation": "District Manager",
		// 			"office": "CHENNAI EGMORE"
		// 		},
		// 		{
		// 			"name": "Siyamsundhar",
		// 			"email": "siyamsundhar1704@tn.gov.in",
		// 			"designation": "District Manager",
		// 			"office": "CHENNAI EGMORE"
		// 		},
		// 		{
		// 			"name": "SakthiPremChandair",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "CHENNAI EGMORE"
		// 		},
		// 		{
		// 			"name": "RENUKA",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Tiruvallur(E)"
		// 		},
		// 		{
		// 			"name": "MUTHUKRISHNAN",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Perambalur"
		// 		},
		// 		{
		// 			"name": "VENKATESAN",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Madurai(S)"
		// 		},
		// 		{
		// 			"name": "ayyappan",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Pudukkottai"
		// 		},
		// 		{
		// 			"name": "PANNEER SELVAM",
		// 			"email": "panneerselvam1505@tn.gov.in",
		// 			"designation": "District Manager",
		// 			"office": "Salem"
		// 		},
		// 		{
		// 			"name": "RAVIKUMAR",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Tirunelveli"
		// 		},
		// 		{
		// 			"name": "PUSHBALATHA",
		// 			"email": "pushpalatha2306@tn.gov.in",
		// 			"designation": "District Manager",
		// 			"office": "Chennai(N)"
		// 		},
		// 		{
		// 			"name": "Kandan",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Cuddalore"
		// 		},
		// 		{
		// 			"name": "GUNASEKARAN",
		// 			"email": "gunasekaran2507@tn.gov.in",
		// 			"designation": "District Manager",
		// 			"office": "Erode"
		// 		},
		// 		{
		// 			"name": "VASSUNDHRADEVI",
		// 			"email": "vassundharadevims@gmail.com",
		// 			"designation": "District Manager",
		// 			"office": "Tiruvannamalai"
		// 		},
		// 		{
		// 			"name": "MURUGAN",
		// 			"email": "smmurugan2012@gmail.com",
		// 			"designation": "District Manager",
		// 			"office": "Dindigul"
		// 		},
		// 		{
		// 			"name": "MATHISELVAN",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Ramanathapuram"
		// 		},
		// 		{
		// 			"name": "DHEEPACHITRA",
		// 			"email": "dheepachitra2105@tn.gov.in",
		// 			"designation": "District Manager",
		// 			"office": "Ooty"
		// 		},
		// 		{
		// 			"name": "RAVICHANDRAN",
		// 			"email": "ravichandran2005@tn.gov.in",
		// 			"designation": "District Manager",
		// 			"office": "Virudhunagar"
		// 		},
		// 		{
		// 			"name": "beo",
		// 			"email": "beothangadurai2702@tn.gov.in",
		// 			"designation": "District Manager",
		// 			"office": "Arakonam"
		// 		},
		// 		{
		// 			"name": "Kesavan",
		// 			"email": "kesavan0405@tn.gov.in",
		// 			"designation": "District Manager",
		// 			"office": "Dharmapuri"
		// 		},
		// 		{
		// 			"name": "PRABU VENKATESHWARAN",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Chennai(S)"
		// 		},
		// 		{
		// 			"name": "Mageswari",
		// 			"email": "magihhv2017@gmail.com",
		// 			"designation": "District Manager",
		// 			"office": "Kanchipuram(N)"
		// 		},
		// 		{
		// 			"name": "SURESH KANNAN",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Sivagangai"
		// 		},
		// 		{
		// 			"name": "RAMESH",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Madurai(N)"
		// 		},
		// 		{
		// 			"name": "Srinivasan",
		// 			"email": "tascbcbe@gmail.com",
		// 			"designation": "District Manager",
		// 			"office": "Coimbatore(N)"
		// 		},
		// 		{
		// 			"name": "KANAGA MANICKAM",
		// 			"email": "",
		// 			"designation": "District Manager",
		// 			"office": "Namakkal"
		// 		},
		// 		{
		// 			"name": "Muthuraman",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Tiruvallur(W)"
		// 		},
		// 		{
		// 			"name": "SOUNDARAPANDIAN",
		// 			"email": "soundarapandian1107@tn.gov.in",
		// 			"designation": "District Manager",
		// 			"office": "Tiruvarur"
		// 		},
		// 		{
		// 			"name": "SATHYAN",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Vellore"
		// 		},
		// 		{
		// 			"name": "IYYAPPAN",
		// 			"email": "",
		// 			"designation": "District Manager",
		// 			"office": "Tuticorin"
		// 		},
		// 		{
		// 			"name": "CHENGIZHKHAN",
		// 			"email": "dmtasmackrishnagiri@gmail.com",
		// 			"designation": "District Manager",
		// 			"office": "Krishnagiri"
		// 		},
		// 		{
		// 			"name": "JOTHISANKAR",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Coimbatore(S)"
		// 		},
		// 		{
		// 			"name": "UDHAYA SANKAR",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Trichy"
		// 		},
		// 		{
		// 			"name": "VIJAYASHANMUGAM",
		// 			"email": "vijayashanmugam2009@gmail.com",
		// 			"designation": "District Manager",
		// 			"office": "Karur"
		// 		},
		// 		{
		// 			"name": "TAMILMANI",
		// 			"email": "kathirtamil6@gmail.com",
		// 			"designation": "District Manager",
		// 			"office": "Thanjavur"
		// 		},
		// 		{
		// 			"name": "Chokkanathan",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Villupuram"
		// 		},
		// 		{
		// 			"name": "Chokkanathan",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Villupuram"
		// 		},
		// 		{
		// 			"name": ".Chokkanathan",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Villupuram"
		// 		},
		// 		{
		// 			"name": "RAJAGOPAL",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Tiruppur"
		// 		},
		// 		{
		// 			"name": "SIRAJUDDEEN",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Theni"
		// 		},
		// 		{
		// 			"name": "SIRAJUDDEEN",
		// 			"email": "sirajudeen0502@tn.gov.in",
		// 			"designation": "District Manager",
		// 			"office": "Theni"
		// 		},
		// 		{
		// 			"name": "GUNASEELI",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Nagapattinam"
		// 		},
		// 		{
		// 			"name": "saravanan",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Nagarcoil"
		// 		},
		// 		{
		// 			"name": "RAJARAJAN ",
		// 			"email": null,
		// 			"designation": "District Manager",
		// 			"office": "Kanchipuram(S)"
		// 		}
		// 	]
		// }
		// if (staffType == 4) {
		// 	this.staffDetails = [
		// 		{
		// 			"name": "MAYAKRISHNAN",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Perambalur"
		// 		},
		// 		{
		// 			"name": "SUNDARA MURUGAN",
		// 			"email": "sundaramuruganchelliah15967@gmail.com",
		// 			"designation": "Depot Manager",
		// 			"office": "Madurai Urban"
		// 		},
		// 		{
		// 			"name": "BANUMATHI",
		// 			"email": "banumathiri@gmail.com",
		// 			"designation": "Depot Manager",
		// 			"office": "Karur"
		// 		},
		// 		{
		// 			"name": "ABDUL NAZEER",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Theni"
		// 		},
		// 		{
		// 			"name": "PANNEERSELVI",
		// 			"email": "punitharavinth@gmail.com",
		// 			"designation": "Depot Manager",
		// 			"office": "KRISHNAGIRI"
		// 		},
		// 		{
		// 			"name": "ABDUL RASHIK",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Thirumazhisai - III"
		// 		},
		// 		{
		// 			"name": "pARIMALADEVI",
		// 			"email": "parimaladevi1205@tn.gov.in",
		// 			"designation": "Depot Manager",
		// 			"office": "Erode"
		// 		},
		// 		{
		// 			"name": "SWAMINATHAN",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Ramanathapuram"
		// 		},
		// 		{
		// 			"name": "ASHOKKUMAR",
		// 			"email": "aspreethisu@gmail.com",
		// 			"designation": "Depot Manager",
		// 			"office": "Sivagangai"
		// 		},
		// 		{
		// 			"name": "Arul Vallavan Arogyadas",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Thirumazhisai - II"
		// 		},
		// 		{
		// 			"name": "SEKAR",
		// 			"email": "sekarvijan72@gmail.com",
		// 			"designation": "Depot Manager",
		// 			"office": "Nagercoil"
		// 		},
		// 		{
		// 			"name": "SINDHUJA",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Ambattur III"
		// 		},
		// 		{
		// 			"name": "selvaprasad",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Tuticorin"
		// 		},
		// 		{
		// 			"name": "Jothibasu",
		// 			"email": "jothibasu81rev@gmail.com",
		// 			"designation": "Depot Manager",
		// 			"office": "Coimbatore (N)"
		// 		},
		// 		{
		// 			"name": "Padmavathy",
		// 			"email": "PADHMAVATHIKANAGARAJ66@GMAIL.COM",
		// 			"designation": "Depot Manager",
		// 			"office": "Coimbatore (S)"
		// 		},
		// 		{
		// 			"name": "sANKAR",
		// 			"email": "vsankar3112@gmail.com",
		// 			"designation": "Depot Manager",
		// 			"office": "Kanchipuram"
		// 		},
		// 		{
		// 			"name": "Mariraja",
		// 			"email": "marirajtnv@gmail.com",
		// 			"designation": "Depot Manager",
		// 			"office": "Tirunelveli"
		// 		},
		// 		{
		// 			"name": "RAJESH",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Arakkonam"
		// 		},
		// 		{
		// 			"name": "VIJAYAKUMAR",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Thirumazhisai - I"
		// 		},
		// 		{
		// 			"name": "Senthil Kumar",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Thiruvallur"
		// 		},
		// 		{
		// 			"name": "Babu",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Tiruppur"
		// 		},
		// 		{
		// 			"name": " ISHWARYAA",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Pudukkottai"
		// 		},
		// 		{
		// 			"name": "kanchana",
		// 			"email": "kanchana1105@tn.gov.in",
		// 			"designation": "Depot Manager",
		// 			"office": "Ambattur II"
		// 		},
		// 		{
		// 			"name": "BENCELA ",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Thiruvarur"
		// 		},
		// 		{
		// 			"name": "ALAMELUMANGAI",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Pollachi"
		// 		},
		// 		{
		// 			"name": "SELLADURAI",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Salem (W)"
		// 		},
		// 		{
		// 			"name": "GOPALAKRISHNAN",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Ambattur I"
		// 		},
		// 		{
		// 			"name": "ANANTHI",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Gobi"
		// 		},
		// 		{
		// 			"name": "KUPPURAJ",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Ooty"
		// 		},
		// 		{
		// 			"name": "RAMESH",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Viluppuram"
		// 		},
		// 		{
		// 			"name": "PALANISAMY",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Dharmapuri"
		// 		},
		// 		{
		// 			"name": "Saravanan",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Vellore"
		// 		},
		// 		{
		// 			"name": "Shanmugam",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Dindigul"
		// 		},
		// 		{
		// 			"name": " INDRA",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Thiruvannamalai"
		// 		},
		// 		{
		// 			"name": "Kathirvel ",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Namakkal"
		// 		},
		// 		{
		// 			"name": "SRIDHAR ",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Salem"
		// 		},
		// 		{
		// 			"name": "MAHALAKSHMI ",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Trichy"
		// 		},
		// 		{
		// 			"name": "SUNDHARAMOORTHY",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Thanjavur"
		// 		},
		// 		{
		// 			"name": "Bhuvaneshwari ",
		// 			"email": null,
		// 			"designation": "Depot Manager",
		// 			"office": "Kangeyam"
		// 		}
		// 	]
		// }
		this.formService.getStaffByOffice(staffType).subscribe((res: any) => {
			this.staffDetails = res.data.staffs.data;
		})
	}

}
