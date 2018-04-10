import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatTooltipModule,
  MatCardModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSelectModule
} from '@angular/material';

const modules: Array<any> = [
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatTooltipModule,
  MatCardModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSelectModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
