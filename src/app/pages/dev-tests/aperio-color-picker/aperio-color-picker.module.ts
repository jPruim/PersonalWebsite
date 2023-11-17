import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AperioColorPickerPageRoutingModule } from './aperio-color-picker-routing.module';

import { AperioColorPickerPage } from './aperio-color-picker.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AperioColorPickerPageRoutingModule,
    SharedModule,
  ],
  declarations: [AperioColorPickerPage]
})
export class AperioColorPickerPageModule {}
