//constructores

class Producto {
    constructor(nombre, categoria, gramos, precio, stock, descripcion){
        this.nombre = nombre;
        this.categoria = categoria;
        this.gramos = parseFloat(gramos);
        this.precio = parseFloat(precio);
        this.stock = parseFloat(stock);
        this.descripcion = descripcion;
        this.vendido = false;
    }
    comprar(cantidad){
        this.vendido = true;
        if((this.vendido === true) && (this.stock >= 1) && (cantidad <= this.stock) && (cantidad > 0)){
            this.stock = this.stock - cantidad;
            alert("Su producto se ha añadido al carrito.");
        } else if(cantidad > this.stock){
            alert(`En el momento solamente tenemos disponible ${this.stock}. Elige una cantidad igual o menor.`);
        }else if(this.stock <= 0){
            alert("Fuera de stock");
        } 
        else {
            alert("Cantidad no valida. Por favor, ingrese la cantidad que desea llevar");
        }
    }
    descuento(porcentaje){
        let nuevoPrecio = this.precio - (this.precio * porcentaje);
        alert(`Has comprado un/a ${this.nombre} que tiene un descuento del ${porcentaje}%. nuevo precio:${nuevoPrecio} `)
    }
    
}


//productos 

const tortaYogurtyArandanos = new Producto ("Torta Yogurt & Arandanos", "Tortas", 800, 31000, 10, "La versatilidad del yogurt griego y los arándanos permite alternar distintos sabores para lograr una combinación deliciosa.")

const browniesMelcochudos = new Producto ("Brownies Melcochudos", "Brownies", 20, 33000, 60, "Su consistencia melcochuda, su toque crunchie y sus chips de chocolate extra los hace únicos. Perfectos para acompanar con helado y endulzar a tus conocidos.")

const cookieBars = new Producto ("Cookie bar", "Galletas", 20, 33000, 40, "Estos cuadritos cargados de amor son perfectos para probar algo diferente y dejarse cautivar con su capa crujiente u su cuerpo blando tipo galleta.")

const muffins = new Producto ("Muffins", "Muffins", 10, 25000, 30, "Blanditos y esponjosos, asi son nuestros deliciosos muffins.")


//funciones

let anadirAlCarrito = () =>{
    let menu = parseInt(prompt(`¡Bienvenidos a Lu Postres+Tortas!\nLos productos que tenemos disponibles son:\n\n1. ${browniesMelcochudos.nombre} \n2. ${muffins.nombre} \n3 ${tortaYogurtyArandanos.nombre} \n4 ${cookieBars.nombre}. \n\n Digite el numero del producto que desea comprar o 5 para salir.`));
    let cantidad 
    let producto 
    switch (menu){
        case 1:
            producto= browniesMelcochudos;
            break; 
        case 2:
            producto = muffins;
            break; 
        case 3:
            producto = tortaYogurtyArandanos;
            break;
        case 4:
            producto = cookieBars;  
            break;
        case 5:
            alert("Gracias por visitarnos. ¡Qué tengas buen día!") 
            break;       
        default:
            alert("Ingrese uno de los números del listado")
            anadirAlCarrito()
            break;
    }
    if (confirm(`${producto.nombre}\nPrecio: ${producto.precio} \nDescripcion: \n${producto.descripcion} \nGramos: ${producto.gramos} \nCategoria: ${producto.categoria}. \n\nPresione "Ok" para continuar con su compra o "Cancel" para elegir otro producto.`)){
        do {
                cantidad = (prompt(`Ingrese la cantidad que desea adquirir`));     
        } while (isNaN(cantidad)); 
            producto.comprar(cantidad)  
        } else {
            if (confirm(`Desea comprar elegir producto?`)){
                anadirAlCarrito()

            }
        }


}
 
anadirAlCarrito()


