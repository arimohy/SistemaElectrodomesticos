export class Electrodomestico{
    constructor(consumo, procedencia) {
        this.consumo = consumo;
        this.procedencia = procedencia;
    }
    //metodos
    calcPrecioBase() {
        let preciobase=0;
        let consumo=(this.consumo).toUpperCase()
        if(this.procedencia="Nacional"){
            preciobase=250000
        }
        else if(this.procedencia="Importado"){
            preciobase=350000
        }
        
        switch(consumo){
            case "A":
                preciobase+=450000
                break
            case "B":
                preciobase+=350000
                break
            case "C":
                preciobase+=250000
                break
        }
        return preciobase;
    }

    preciofinal(){
        return this.calcPrecioBase()
    }
}