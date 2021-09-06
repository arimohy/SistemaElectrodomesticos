import {Electrodomestico} from './Electrodomestico.js'
import {Nevera} from './Nevera.js'
import {Televisor} from './Televisor.js'
import { Factura } from './Factura.js'
export class Inventario{
    constructor(){
        this.listaInventario=[]
    }
    agregaraInventario(cant,obj){
        let elemento={'cantidad':cant,
        'electrodomestico':obj}
        this.listaInventario.push(elemento)
    }
    reducirInventario(factura){
        
        //let e = this.listaInventario.find(ele => ele.electrodomestico === producto.electrodomestico);
        factura.listaFactura.forEach(li=>{
            //console.log(li.electrodomestico)
            this.listaInventario.forEach(element => {
                //if(element[electrodomestico]==
                //console.log(element.electrodomestico)
                if(li.electrodomestico===element.electrodomestico){
                    //console.log("es igual")
                    element.cantidad=element.cantidad-li.cantidad;
                }
            });
        });
        
        
    }
}