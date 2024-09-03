import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiComponent } from './rti.component';

describe('RtiComponent', () => {
  let component: RtiComponent;
  let fixture: ComponentFixture<RtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
