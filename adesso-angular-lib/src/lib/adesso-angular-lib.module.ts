import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule, MatTableModule, MatTabsModule } from '@angular/material';
import { TabbedGridComponent } from './tabbed-grid/tabbed-grid.component';
import { CustomTemplateDirective } from './custom-template.directive';

@NgModule({
  imports: [
    CommonModule,
    MatSortModule,
    MatTabsModule,
    MatTableModule,
  ],
  declarations: [
    TabbedGridComponent,
    CustomTemplateDirective,
  ],
  exports: [
    TabbedGridComponent,
    CustomTemplateDirective,
  ]
})
export class AdessoAngularLibModule { }
