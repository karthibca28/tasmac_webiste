import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActRulesComponent } from './act-rules.component';

describe('ActRulesComponent', () => {
  let component: ActRulesComponent;
  let fixture: ComponentFixture<ActRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActRulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
