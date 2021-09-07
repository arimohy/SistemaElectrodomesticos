
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
//inv.reducirInventario(fac)
console.log(inv)


const tabla=document.querySelector('#datos tbody')
console.log(tabla)
window.addEventListener("load",(event)=>{
    inv.listaInventario.forEach(element => {
        const row=document.createElement('tr')
        row.innerHTML+=`
        <td>${element.cantidad}</td>
        <td>${element.electrodomestico.leer()}</td>
        <td>${element.electrodomestico.preciofinal()}</td>`;

        tabla.appendChild(row)
    });
    
});

const tabla2=document.querySelector('#datos2 tbody')
console.log(fac)
window.addEventListener("load",(event)=>{
    fac.listaFactura.forEach(element => {
        console.log(element)
        const row2=document.createElement('tr')
        row2.innerHTML+=`
        <td>${element.cantidad}</td>
        <td>${element.electrodomestico.leer()}</td>
        <td>${element.electrodomestico.preciofinal()}</td>
        <td>${element.subtotal}</td>`;

        tabla2.appendChild(row2)
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
//si hace click en el boton de inventario
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
        <td>${element.electrodomestico.leer()}</td>
        <td>${element.electrodomestico.preciofinal()}</td>`;

        tabla.appendChild(row)
    });
});


//
//FACTURA
//
const selectElement2 = document.getElementById('seleccion2');

selectElement2.addEventListener('change', (event) => {
    if(selectElement2.value==1){
        document.getElementById('input21').disabled = false;
        document.getElementById('input22').disabled = false;
        document.getElementById('input23').disabled = true;
        document.getElementById('input4').disabled = true;
        document.getElementById('input5').disabled = true;
    }
    else if(selectElement2.value==2){
        document.getElementById('input21').disabled = false;
        document.getElementById('input22').disabled = false;
        document.getElementById('input23').disabled = false;
        document.getElementById('input24').disabled = false;
        document.getElementById('input25').disabled = true;
    }
    else if(selectElement2.value==3){
        document.getElementById('input21').disabled = false;
        document.getElementById('input22').disabled = false;
        document.getElementById('input23').disabled = true;
        document.getElementById('input24').disabled = true;
        document.getElementById('input25').disabled = false;
    }
    else{
        document.getElementById('input21').disabled = true;
        document.getElementById('input22').disabled = true;
        document.getElementById('input23').disabled = true;
        document.getElementById('input24').disabled = true;
        document.getElementById('input25').disabled = true;
    }
    /*
    var input = document.createElement("input");
    input.type = "text";
    input.className = "form-control"; 
    console.log(input)
    document.getElementById('formulario1').appendChild(input);*/
    
});

const boton2=document.getElementById('boton2')
boton2.addEventListener("click",(event) => {
    var v20=parseInt(document.getElementById('input20').value)
    var v21=document.getElementById('input21').value
    var v22=document.getElementById('input22').value
    var v23=parseInt(document.getElementById('input23').value)
    var v24=document.getElementById('input24').value
    var v25=parseInt(document.getElementById('input25').value)
    if(selectElement2.value==1){
        

        var nuevoelectro=new Electrodomestico(v21,v22)
        fac.agregaraFactura(v20,nuevoelectro);
        
        console.log(fac)
        
    }
    else if(selectElement2.value==2){
        var esverdad=false;
        if(v24==="si"){
            esverdad=true
        }
        var nuevatv=new Televisor(v21,v22,v23,esverdad)
        fac.agregaraFactura(v20,nuevatv);
        console.log(inv)
    }
    else if(selectElement2.value==3){
        var nuevanevera=new Nevera(v21,v22,v25)
        fac.agregaraFactura(v0,nuevanevera);
        console.log(inv)
    }
    else{
        console.log(inv)
    }
    fac.listaFactura.forEach(element => {
        console.log(element)
    });
    tabla2.innerHTML = "";
    fac.listaFactura.forEach(element => {
        console.log(element)
        const row2=document.createElement('tr')
        row2.innerHTML+=`
        <td>${element.cantidad}</td>
        <td>${element.electrodomestico.leer()}</td>
        <td>${element.electrodomestico.preciofinal()}</td>
        <td>${element.subtotal}</td>`;

        tabla2.appendChild(row2)
    });
});

//
//boton terminar boleta
//
const boton3=document.getElementById('boton3')
boton3.addEventListener("click",(event) => {
    inv.reducirInventario(fac)
    fac=new Factura();
    tabla2.innerHTML = "";
    fac.listaFactura.forEach(element => {
        console.log(element)
        const row2=document.createElement('tr')
        row2.innerHTML+=`
        <td>${element.cantidad}</td>
        <td>${element.electrodomestico.leer()}</td>
        <td>${element.electrodomestico.preciofinal()}</td>
        <td>${element.subtotal}</td>`;

        tabla2.appendChild(row2)
    });

    tabla.innerHTML = "";
    inv.listaInventario.forEach(element => {
        const row=document.createElement('tr')
        row.innerHTML+=`
        <td>${element.cantidad}</td>
        <td>${element.electrodomestico.leer()}</td>
        <td>${element.electrodomestico.preciofinal()}</td>`;

        tabla.appendChild(row)
    });

});


