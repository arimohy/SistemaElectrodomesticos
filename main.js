
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


const tabla=document.querySelector('#datos tbody')
console.log(tabla)
window.addEventListener("load",(event)=>{
    inv.listaInventario.forEach(element => {
        const row=document.createElement('tr')
        row.innerHTML+=`
        <td>${element.cantidad}</td>
        <td>${element.electrodomestico.leer()}</td>`;

        tabla.appendChild(row)
    });
    
});
const selectElement = document.getElementById('seleccion');

selectElement.addEventListener('change', (event) => {
    if(selectElement.value==1){
        document.getElementById('input1').disabled = false;
        document.getElementById('input2').disabled = false;
        document.getElementById('input3').disabled = true;
        document.getElementById('input4').disabled = true;
        document.getElementById('input5').disabled = true;
    }
    else if(selectElement.value==2){
        document.getElementById('input1').disabled = false;
        document.getElementById('input2').disabled = false;
        document.getElementById('input3').disabled = false;
        document.getElementById('input4').disabled = false;
        document.getElementById('input5').disabled = true;
    }
    else if(selectElement.value==3){
        document.getElementById('input1').disabled = false;
        document.getElementById('input2').disabled = false;
        document.getElementById('input3').disabled = true;
        document.getElementById('input4').disabled = true;
        document.getElementById('input5').disabled = false;
    }
    else{
        document.getElementById('input1').disabled = true;
        document.getElementById('input2').disabled = true;
        document.getElementById('input3').disabled = true;
        document.getElementById('input4').disabled = true;
        document.getElementById('input5').disabled = true;
    }
    /*
    var input = document.createElement("input");
    input.type = "text";
    input.className = "form-control"; 
    console.log(input)
    document.getElementById('formulario1').appendChild(input);*/
    
});

const boton=document.getElementById('boton')
boton.addEventListener("click",(event) => {
    var v0=parseInt(document.getElementById('input0').value)
    var v1=document.getElementById('input1').value
    var v2=document.getElementById('input2').value
    var v3=parseInt(document.getElementById('input3').value)
    var v4=document.getElementById('input4').value
    var v5=parseInt(document.getElementById('input5').value)
    if(selectElement.value==1){
        

        var nuevoelectro=new Electrodomestico(v1,v2)
        inv.agregaraInventario(v0,nuevoelectro);
        
        console.log(inv)
        
    }
    else if(selectElement.value==2){
        var esverdad=false;
        if(v4==="si"){
            esverdad=true
        }
        var nuevatv=new Televisor(v1,v2,v3,esverdad)
        inv.agregaraInventario(v0,nuevatv);
        console.log(inv)
    }
    else if(selectElement.value==3){
        var nuevanevera=new Nevera(v1,v2,v5)
        inv.agregaraInventario(v0,nuevanevera);
        console.log(inv)
    }
    else{
        console.log(inv)
    }
    inv.listaInventario.forEach(element => {
        console.log(element)
    });
    tabla.innerHTML = "";
    inv.listaInventario.forEach(element => {
        const row=document.createElement('tr')
        row.innerHTML+=`
        <td>${element.cantidad}</td>
        <td>${element.electrodomestico.leer()}</td>`;

        tabla.appendChild(row)
    });
});


