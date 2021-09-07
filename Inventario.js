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
                console.log(li.electrodomestico.leer())
                console.log(element.electrodomestico.leer())
                if(li.electrodomestico.leer()===element.electrodomestico.leer()){
                    console.log("si es igual")
                    if(element.cantidad-li.cantidad>=0){
                        element.cantidad=element.cantidad-li.cantidad;
                    }
                    else{
                        window.alert("No se pudo procesar factura por que contiene ** "+li.electrodomestico.leer()+"** y este no se tiene en inventario,revice el inventario y vuelta a rellenar la factura gracias");
                    }
                }
                else{
                    console.log("no son iguales")
                }
            });
        });
        
        
    }
}