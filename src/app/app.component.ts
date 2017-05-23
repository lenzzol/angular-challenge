import { Component } from '@angular/core';
import { DropdownModel } from "app/models/dropdown-model";
import { Manufacturer, Model } from "app/models/car-models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  cars : Manufacturer[];
  selectedCar : Manufacturer;
  selectedModel : Model;

  constructor(){
    this.cars = [
      new Manufacturer(1, "Acura", [new Model(1, 'http://blog.caranddriver.com/wp-content/uploads/2015/01/2016-Acura-ILX-A-Spec-130-626x382.jpg', 'ILX'), new Model(2, 'https://cars.usnews.com/static/images/Auto/izmo/i2320625/2017_acura_mdx_angularfront.jpg','MDX')]), 
      new Manufacturer(2, "Ford", [new Model(1, 'https://cars.usnews.com/static/images/Auto/izmo/i6336198/2017_ford_edge_angularfront.jpg', 'Edge'), new Model(2, 'http://blog.caranddriver.com/wp-content/uploads/2016/02/2017-Ford-Escape-with-Sport-1011-626x382.jpg','Escape')]), 
    ];
  }

  onManufacturerSelected(model: DropdownModel) : void{
    console.log("manufacturer event caught");
    this.selectedCar = this.cars.find(x => x.id === model.id);
  }

  onModelSelected(model: DropdownModel) : void {
    console.log("model event caught");
    this.selectedModel = this.selectedCar.manufacturModels.find(x => x.id === model.id);
  }
}
