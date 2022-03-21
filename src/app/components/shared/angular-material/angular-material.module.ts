import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material

import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatTableModule
  ],
  exports: [
    MatSliderModule,
    MatTableModule
  ]
})
export class AngularMaterialModule { }
