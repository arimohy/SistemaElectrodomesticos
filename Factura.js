import {Electrodomestico} from './Electrodomestico.js'
import {Nevera} from './Nevera.js'
import {Televisor} from './Televisor.js'
import { Inventario } from './Inventario.js'
export class Factura{
    constructor(){
        this.listaFactura=[]
        this.total=0
    }
    agregaraFactura(cant,obj){
        let elemento={'cantidad':cant,
        'electrodomestico':obj,
        'subtotal':obj.preciofinal()*cant
    }
        this.listaFactura.push(elemento)
        this.calcularTotal();
    }
    calcularTotal(){
        this.total=this.listaFactura.reduce((sum,value)=>(typeof value.subtotal=="number"? sum+value.subtotal:sum),0);
    }


}