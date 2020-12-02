import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SosanhComponent } from './sosanh.component';

describe('SosanhComponent', () => {
  let component: SosanhComponent;
  let fixture: ComponentFixture<SosanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SosanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SosanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
