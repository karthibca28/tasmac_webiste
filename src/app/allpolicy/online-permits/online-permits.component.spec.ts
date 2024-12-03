import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePermitsComponent } from './online-permits.component';

describe('OnlinePermitsComponent', () => {
  let component: OnlinePermitsComponent;
  let fixture: ComponentFixture<OnlinePermitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlinePermitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlinePermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
