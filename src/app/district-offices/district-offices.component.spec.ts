import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictOfficesComponent } from './district-offices.component';

describe('DistrictOfficesComponent', () => {
  let component: DistrictOfficesComponent;
  let fixture: ComponentFixture<DistrictOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictOfficesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistrictOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
