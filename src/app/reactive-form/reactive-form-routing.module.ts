import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonUsePageComponent } from './pages/common-use-page/common-use-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'common-use',
  },
  {
    path: 'common-use',
    component: CommonUsePageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
