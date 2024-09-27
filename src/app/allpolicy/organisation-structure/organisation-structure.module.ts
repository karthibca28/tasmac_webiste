import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationStructureComponent } from './organisation-structure.component';
import { NgxOrgChartModule } from 'ngx-org-chart';

@NgModule({
  declarations: [OrganisationStructureComponent],
  imports: [CommonModule, NgxOrgChartModule],
  exports: [OrganisationStructureComponent]
})
export class OrganisationStructureModule {}
