import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ImageComponent } from 'src/app/components/image/image.component';
import { CardComponent } from 'src/app/components/card/card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ImageComponent,
    CardComponent,
  ],
  imports: [
    CommonModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  exports: [
    HeaderComponent,
    ImageComponent,
    CardComponent,
  ]
})
export class SharedModule { }
