//Constructores

class Productos {
    constructor(nombre, categoria, gramos, precio, stock, descripcion){
        this.nombre = nombre;
        this.categoria = categoria;
        this.gramos = parseFloat(gramos);
        this.precio = parseFloat(precio);
        this.stock = parseFloat(stock);
        this.descripcion = descripcion;
        this.vendido = false;
    }
    vender(cantidad){
        this.vendido = true;
        if((this.vendido === true) && (this.stock >= 1) && (cantidad <= this.stock) && (cantidad > 0)){
            this.stock = this.stock - cantidad;
            return this.stock;
        } else if(cantidad > this.stock){
            alert(`En el momento solamente tenemos disponible ${this.stock}. Elige una cantidad igual o menor.`);
        }else if(this.stock <= 0){
            alert("Fuera de stock");
        } 
        else {
            alert("Cantidad no valida. Por favor, ingrese la cantidad que desea llevar");
        }
    }
    
}

//Productos 

const tortaYogurtyArandanos = new Productos ("Torta Yogurt & Arandanos", "Torta", "800", "31000", "10", "La versatilidad del yogurt griego y los arándanos permite alternar distintos sabores para lograr una combinación deliciosa.")

console.log(tortaYogurtyArandanos.vender(3))

