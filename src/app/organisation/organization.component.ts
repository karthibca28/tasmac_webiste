import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
  standalone: true,
  imports: [CommonModule, OrganizationChartModule],
})
export class OrganizationComponent {
  selectedTab: string = 'board';

  boardDirectors = [
    {
      name: 'Tmt. P. Amudha, IAS',
      position: 'Chairperson & Director',
      contact: 'Principal Secretary to Government, Home, Prohibition and Excise Department, Secretariat, Chennai - 600009',
      image: 'assets/images/directors/logo.jpg'
    },
    {
      name: 'Thiru. T. Udhayachandran, IAS',
      position: 'Director',
      contact: 'Principal Secretary to Government, Finance Department, Secretariat, Chennai - 600009',
      image: 'assets/images/directors/logo.jpg'
    },
    {
      name: 'Thiru. Brajendra Navnit, IAS',
      position: 'Director',
      contact: 'Principal Secretary to Government, Commercial Taxes and Registration Department, Secretariat, Chennai - 600009',
      image: 'assets/images/directors/logo.jpg'
    },
    {
      name: 'Thiru. J. Jayakanthan, IAS',
      position: 'Director',
      contact: 'Commissioner of Prohibition & Excise, Chepauk, Chennai - 600005',
      image: 'assets/images/directors/logo.jpg'
    },
    {
      name: 'Dr. S. Visakan, IAS',
      position: 'Managing Director',
      contact: 'Managing Director, TASMAC LTD., 4TH Floor, CMDA Tower- II, Egmore, Chennai - 600008',
      image: 'assets/images/directors/logo.jpg'
    }
  ];
  hoDirectors = [
    {
      name: 'Thiru. J. Jayakanthan, IAS',
      position: 'Director',
      contact: 'Commissioner of Prohibition & Excise, Chepauk, Chennai - 600005',
      image: 'assets/images/directors/logo.jpg'
    },
    {
      name: 'Dr. S. Visakan, IAS',
      position: 'Managing Director',
      contact: 'Managing Director, TASMAC LTD., 4TH Floor, CMDA Tower- II, Egmore, Chennai - 600008',
      image: 'assets/images/directors/logo.jpg'
    }
  ];
  srmDirectors = [
    {
      name: 'Thiru. J. Jayakanthan, IAS',
      position: 'Director',
      contact: 'Commissioner of Prohibition & Excise, Chepauk, Chennai - 600005',
      image: 'assets/images/directors/logo.jpg'
    },
    {
      name: 'Dr. S. Visakan, IAS',
      position: 'Managing Director',
      contact: 'Managing Director, TASMAC LTD., 4TH Floor, CMDA Tower- II, Egmore, Chennai - 600008',
      image: 'assets/images/directors/logo.jpg'
    }
  ];

  organizationChart = [
    {
      title: 'CHAIRPERSON',
      description: 'Principal Secretary to Government, Home, Prohibition & Excise Dept.'
    },
    {
      title: 'BOARD OF DIRECTORS',
      description: '',
      members: [
        'Principal Secretary to Government, Finance Dept.',
        'Secretary to Government, Commercial Taxes & Registration Dept.',
        'Managing Director, TASMAC Ltd.',
        'Commissioner of Prohibition & Excise.',
        'Principal Secretary to Government, Home, Prohibition & Excise Dept.'
      ]
    },
    {
      title: 'GENERAL MANAGERS',
      description: '',
      members: [
        'Wholesale & Admin',
        'Retail Vending',
        'Finance',
        'Personnel & Welfare'
      ]
    },
    {
      title: 'Other Roles',
      description: '',
      members: [
        'Deputy General Manager (Purchase & Sales)',
        'Company Secretary',
        'Senior Regional Managers: Chennai, Coimbatore, Madurai, Trichy, Salem',
        'Chief Accounts Officer',
        'District Managers (38)',
        'Depot Managers (43 Depots)',
        'Deputy Collectors – Flying Squad (5 Region)'
      ]
    }
  ];

  tasmacOrganisatinStructure = [
    {
      label: 'SENIOR REGIONAL MANAGERS',
      expanded: true,
      children: [
        {
          label: 'CHENNAI REGION',
          expanded: false,
        },
        {
          label: 'COIMBATORE REGION',
          expanded: false,
        },
        {
          label: 'MADURAI REGION',
          expanded: false,
        },
        {
          label: 'SALEM REGION',
          expanded: false,
        },
        {
          label: 'TRICHY REGION',
          expanded: false,
        },
      ]
    }
  ]

  constructor(private router: Router) { }

  navigateToComplaints() {
    this.router.navigate(['/orgchart']);
  }
}
