
import {Electrodomestico} from './Electrodomestico.js'
import { Factura } from './Factura.js'
import {Nevera} from './Nevera.js'
import {Televisor} from './Televisor.js'
import {Inventario} from '/Inventario.js'

console.log(new Electrodomestico("A","Nacional"))
let elec=new Electrodomestico("A","Nacional")
let tv=new Televisor("A","Nacional",40,true)
let nev=new Nevera("A","Nacional",120)
console.log("hola")
console.log(elec.preciofinal())
console.log(tv.preciofinal())
console.log(nev.preciofinal())

var inv=new Inventario();
inv.agregaraInventario(5,elec);
inv.agregaraInventario(5,tv);
inv.agregaraInventario(5,nev);
console.log(inv)

var fac=new Factura();
fac.agregaraFactura(3,elec);
fac.agregaraFactura(2,nev);
console.log(fac)
inv.reducirInventario(fac)
console.log(inv)


