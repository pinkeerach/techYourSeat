import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [CommonModule, FlexLayoutModule, MaterialModule],
  declarations: []
})
export class SharedModule {}
