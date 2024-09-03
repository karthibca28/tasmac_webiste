import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermserviceComponent } from './termservice.component';

describe('TermserviceComponent', () => {
  let component: TermserviceComponent;
  let fixture: ComponentFixture<TermserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
