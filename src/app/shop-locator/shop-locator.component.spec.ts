import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLocatorComponent } from './shop-locator.component';

describe('ShopLocatorComponent', () => {
  let component: ShopLocatorComponent;
  let fixture: ComponentFixture<ShopLocatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopLocatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
