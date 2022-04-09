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


//arrays

let listaProductos = [tortaYogurtyArandanos, browniesMelcochudos, cookieBars, muffins];

let carrito = [];

//variables

let producto 
let cantidad 
let seleccion 

//funciones  

let menu = () => {
seleccion = parseInt(prompt(`¡Bienvenidos a Lu Postres+Tortas! Los productos que tenemos disponibles son:\n\n1. ${listaProductos[0].nombre} \n2. ${listaProductos[1].nombre} \n3 ${listaProductos[2].nombre} \n4 ${listaProductos[3].nombre}. \n\n Digite el numero del producto que desea comprar o "Cancel" para salir.`));
if (seleccion >= 5 || seleccion <=0) {
    alert(`Escoge un número de la lista inicial.`)
    menu()    
}
seleccion--
nombreProducto = listaProductos[seleccion].nombre 
return nombreProducto
}

let cantidadProductos = () => {
    producto=menu()
    cantidad = prompt(`El valor unitario de ${producto} es de ${listaProductos[seleccion].precio} pesos. Ingresa la cantidad que deseas añadir al carrito`)
    subTotalProducto = listaProductos[seleccion].precio * cantidad;
     carrito.push({producto, cantidad, subTotalProducto});
    if (confirm`¡Añadido exitosamente! Deseas agregar otro producto?` === true){
        cantidadProductos();
    } else {
        alert(`Puedes verificar los productos que añadiste al carrito a través de la consola. Sí no añadiste ningún producto, omite este mensaje.`)
    }
}




// let nombreProductos = listaProductos.forEach(producto => {
//     console.log(producto.nombre)
// })


let keyword = 40000
let buscar = listaProductos.filter(el => {
    return el.precio > (keyword)
    
    
})



let existe = listaProductos.some(el =>{
   return el.nombre == `Cookie bar`;
})


console.log(existe)


