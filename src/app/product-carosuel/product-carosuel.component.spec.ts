import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarosuelComponent } from './product-carosuel.component';

describe('ProductCarosuelComponent', () => {
  let component: ProductCarosuelComponent;
  let fixture: ComponentFixture<ProductCarosuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCarosuelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCarosuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
