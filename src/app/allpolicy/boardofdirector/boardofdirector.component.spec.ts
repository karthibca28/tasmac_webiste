import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardofdirectorComponent } from './boardofdirector.component';

describe('BoardofdirectorComponent', () => {
  let component: BoardofdirectorComponent;
  let fixture: ComponentFixture<BoardofdirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardofdirectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardofdirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
