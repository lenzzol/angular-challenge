import { Component } from '@angular/core';
import { DropdownModel } from "app/models/dropdown-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  models : DropdownModel[];
  selectedModel : DropdownModel;

  constructor(){
    this.models = [new DropdownModel("Acura"), new DropdownModel('Ford')];
  }
}
