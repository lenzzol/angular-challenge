import { DropdownModel } from "app/models/dropdown-model";

export class Manufacturer implements DropdownModel {
    id: number;
    name: string;
    manufacturModels: Model[];
    
    constructor(manufacturerId: number, manufacturerName: string, manufacturerModels: Model[]){
        this.id = manufacturerId;
        this.name = manufacturerName;
        this.manufacturModels = manufacturerModels;
    }
}


export class Model implements DropdownModel {
    id: number;
    name: string;
    modelImage: string;

    constructor(modelId: number, modelImage: string, modelName: string) {
        this.id = modelId;
        this.name = modelName;
        this.modelImage = modelImage;
    }
}