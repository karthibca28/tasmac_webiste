import { Component } from '@angular/core';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
  selector: 'app-organisation-structure',
  standalone: true,
  imports: [OrganizationChartModule],
  templateUrl: './organisation-structure.component.html',
  styleUrl: './organisation-structure.component.css'
})
export class OrganisationStructureComponent {
  boardOfDirector = [
    {
      label: 'CHAIRPERSON',
      expanded: true,
      children: [
        {
          label: 'The Principal Secretary to Govt.Home Prohibition & Excise Dept (Director).',
          expanded: false,
        },
        {
          label: 'The Principal Secretary to Govt. Finance Dept (Director).',
          expanded: false,
        },
        {
          label: 'The Secretary to Govt. Commercial Taxes & Registration Dept (Director).',
          expanded: false,
        },
        {
          label: 'The Commissioner of Prohibition & Excise (Director).',
          expanded: false,
        },
        {
          label: 'The Managing Director, Tasmac Ltd.',
          expanded: false,
        }
      ]
    }
  ];

  tasmacOrganisatinStructure = [
    {
      label: 'MANAGING DIRECTOR',
      expanded: true,
      children: [
        {
          label: 'GENERAL MANAGER (WholeSale & Admin)',
          expanded: false,
        },
        {
          label: 'GENERAL MANAGER (Retail Vending)',
          expanded: false,
        },
        {
          label: 'GENERAL MANAGER (Personnel & Welfare)',
          expanded: false,
        },
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
        },
        {
          label: 'COMPANY SECRETARY',
          expanded: false,
        },
        {
          label: 'LAW OFFICER',
          expanded: false,
        },
        {
          label: 'MANAGING DIRECTOR',
          expanded: false,
        },
      ]
    }
  ]

  corporateOrganisatinStructure = [
    {
      label: 'MANAGING DIRECTOR',
      expanded: true,
      children: [
        {
          label: 'GENERAL MANAGER (WholeSale & Admin)',
          expanded: false,
        },
        {
          label: 'GENERAL MANAGER (Retail Vending)',
          expanded: false,
        },
        {
          label: 'GENERAL MANAGER (Personnel & Welfare)',
          expanded: false,
        },
        {
          label: 'COMPANY SECRETARY',
          expanded: false,
        },
        {
          label: 'LAW OFFICER',
          expanded: false,
        },
        {
          label: 'MANAGING DIRECTOR',
          expanded: false,
        },
      ]
    }
  ]
}
