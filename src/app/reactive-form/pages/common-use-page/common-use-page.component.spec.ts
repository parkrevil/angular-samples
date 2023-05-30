import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUsePageComponent } from './common-use-page.component';

describe('CommonUsePageComponent', () => {
  let component: CommonUsePageComponent;
  let fixture: ComponentFixture<CommonUsePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonUsePageComponent]
    });
    fixture = TestBed.createComponent(CommonUsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
