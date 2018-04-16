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
  MatSelectModule,
  MatMenuModule
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
  MatSelectModule,
  MatMenuModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
