import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectiveComponent } from './custom-directive.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CustomDirectiveComponent],
  exports : [CustomDirectiveComponent]
})
export class CustomDirectiveModule { }
