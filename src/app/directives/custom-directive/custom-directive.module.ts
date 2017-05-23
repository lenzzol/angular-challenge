import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectiveComponent } from './custom-directive.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomDirectiveComponent],
  exports : [CustomDirectiveComponent]
})
export class CustomDirectiveModule { }
