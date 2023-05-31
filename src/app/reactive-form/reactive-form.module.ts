import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormComponent, FormArrayComponent, FormGroupArrayComponent } from './pages/dynamic-form';
import { BasicComponent as BasicValidationComponent, CustomValidatorComponent, ErrorStateComponent } from './pages/validation';
import { BasicComponent } from './pages';


@NgModule({
  declarations: [
    FormArrayComponent,
    FormGroupArrayComponent,
    DynamicFormComponent,
    CustomValidatorComponent,
    ErrorStateComponent,
    BasicComponent,
    BasicValidationComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ReactiveFormModule { }
