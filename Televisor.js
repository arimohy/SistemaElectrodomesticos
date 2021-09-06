import {Electrodomestico} from './Electrodomestico.js'
export class Televisor extends Electrodomestico{
    constructor(consumo, procedencia,tamaño,sintonidorTDT){
        super(consumo, procedencia)
        this.tamaño=tamaño
        this.sintonidorTDT=sintonidorTDT
    

    }

    getincreTamaño(){
        if(this.tamaño>40){
            return super.calcPrecioBase()*0.3
        }
        else{
            return 0
        }
    }
    getincreSintonizador(){
        if(this.sintonidorTDT){
            return 250000
        }
        else{
            return 0
        }
    }
    preciofinal(){
        return super.calcPrecioBase()+this.getincreTamaño()+this.getincreSintonizador()
    }
}