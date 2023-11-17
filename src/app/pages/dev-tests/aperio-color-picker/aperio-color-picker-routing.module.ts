import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AperioColorPickerPage } from './aperio-color-picker.page';

const routes: Routes = [
  {
    path: '',
    component: AperioColorPickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AperioColorPickerPageRoutingModule {}
