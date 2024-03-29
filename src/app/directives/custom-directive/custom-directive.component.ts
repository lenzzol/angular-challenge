import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownModel } from "app/models/dropdown-model";

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.sass']
})
export class CustomDirectiveComponent implements OnInit {
  @Input()
  values: DropdownModel[];

  @Output()
  valueChange: EventEmitter<DropdownModel>;

  ngOnInit() {
  }

  select(value: DropdownModel) {
    this.valueChange.emit(value);
  }
}



