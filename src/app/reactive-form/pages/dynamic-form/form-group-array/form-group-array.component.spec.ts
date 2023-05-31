import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupArrayComponent } from './form-group-array.component';

describe('FormGroupArrayComponent', () => {
  let component: FormGroupArrayComponent;
  let fixture: ComponentFixture<FormGroupArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormGroupArrayComponent]
    });
    fixture = TestBed.createComponent(FormGroupArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
