import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUsePageComponent } from './pages/common-use-page/common-use-page.component';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CommonUsePageComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ReactiveFormModule { }
