import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SideInformationComponent } from './side-information/side-information.component';
import { DesignCardComponent } from './design-card/design-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToolbarComponent,
    SpinnerComponent,
    SideInformationComponent,
    DesignCardComponent
  ],
  exports: [
    ToolbarComponent,
    SpinnerComponent,
    SideInformationComponent,
    DesignCardComponent
  ]
})
export class SharedModule { }
