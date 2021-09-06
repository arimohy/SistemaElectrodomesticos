import {Electrodomestico} from './Electrodomestico.js'
export class Nevera extends Electrodomestico{
    constructor(consumo, procedencia,capacidad){
        super(consumo, procedencia)
        this.capacidad=capacidad;
    }
    getincreCapacidad(){
        if(this.capacidad>120){
            let nro=Math.trunc((this.capacidad-120)/10);
            return calcPrecioBase*0.05*nro;
        }
        else{
            return 0;
        }
    }
    preciofinal(){
        return super.calcPrecioBase()+this.getincreCapacidad()
    }
}