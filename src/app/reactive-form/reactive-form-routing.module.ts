import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent, FormArrayComponent, FormGroupArrayComponent } from './pages/dynamic-form';
import { BasicComponent as BasicValidationComponent, CustomValidatorComponent, ErrorStateComponent } from './pages/validation';
import { BasicComponent } from './pages';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'common',
  },
  {
    path: 'basic',
    component: BasicComponent,
  },
  {
    path: 'dynamic-form',
    children: [
      {
        path: '',
        component: DynamicFormComponent,
      },
      {
        path: 'form-array',
        component: FormArrayComponent,
      },
      {
        path: 'form-group-array',
        component: FormGroupArrayComponent,
      },
    ],
  },
  {
    path: 'validation',
    children: [
      {
        path: 'basic',
        component: BasicValidationComponent,
      },
      {
        path: 'custom-validator',
        component: CustomValidatorComponent,
      },
      {
        path: 'error-state',
        component: ErrorStateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
