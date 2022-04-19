//constructores

class Producto {
    constructor(nombre, categoria, gramos, precio, stock, imagen, descripcion){
        this.nombre = nombre;
        this.categoria = categoria;
        this.gramos = parseFloat(gramos);
        this.precio = parseFloat(precio);
        this.stock = parseFloat(stock);
        this.descripcion = descripcion;
        this.vendido = false;
        this.imagen = imagen;
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

const browniesMelcochudos = new Producto ("Brownies melcochudos", "brownies", 20, 33000, 10, "./images/bananoNutella.jpg", "Su consistencia melcochuda, su toque crunchie y sus chips de chocolate extra los hace únicos. Perfectos para acompanar con helado y endulzar a tus conocidos.")

const cookieBars = new Producto ("Cookie bar", "galletas", 20, 33000, 10, "./images/bananoNutella.jpg", "Estos cuadritos cargados de amor son perfectos para probar algo diferente y dejarse cautivar con su capa crujiente u su cuerpo blando tipo galleta.")

const muffins = new Producto ("Muffins", "muffins", 10, 25000, 10, "./images/bananoNutella.jpg", "blanditos y esponjosos, asi son nuestros deliciosos muffins.")

const tortaYogurtyArandanos = new Producto ("Torta de Yogurt & Arandanos", "tortas", 800, 31000, 10, "./images/yogurtArandanos.jpg", "La versatilidad del yogurt griego y los arándanos permite alternar distintos sabores para lograr una combinación deliciosa.")

const tortaBanano = new Producto ("Torta de Banano", "tortas", 800, 23000, 10, "./images/banano.jpg", "Hecha sin conservantes ni colorantes artificiales. 100% natural.")

const tortaBananoNutella = new Producto ("Torta de Banano Nutella", "tortas", 800, 28000, 10, "./images/bananoNutella.jpg", "La crema de avellanas(Nutella) potencializa el sabor de nuestros bananos que son seleccionados cuidadosamente para hacer de esta torta una experiencia única de sabor.") 

const tortaBananoMora = new Producto ("Torta de Banano Mora", "tortas", 800, 24000, 10, "./images/bananoMora.jpg", "Usamos moras frescas como topping para resaltar el conjunto de ingredientes que componen nuestra torta.")

const tortaZanahoria = new Producto ("Torta de Zanahoria", "tortas", 800, 23000, 10, "./images/zanahoria.jpg", "La torta de zanahoria es estupenda para la hora de postre, el desayuno o la merienda.")

const tortaNaranjayAmapola = new Producto ("Torta de Naranja & Amapola", "tortas", 800, 23000, 10, "./images/naranjaAmapola.jpg", "Suave y esponjosa con matices de amapola, aquella que conquista el paladar de todo el que la prueba.")

const tortaChocolate = new Producto ("Torta de Chocolate", "tortas", 800, 23000, 10, "./images/chocolate.jpg", "Debido a sus componentes, el chocolate es un ingrediente natural que se transforma en una rica opción para aportarle mayor energía a tus días." )

const pieDeLimon = new Producto ("Pie de Limón", "postres", 8, 55000, 10, "./images/pieDeLimon.jpg", "La combinación del dulce merengue, las gotas cítricas del limón y la crocancia de nuestra galleta da como resultado el contraste perfecto.")

const cheesecakeFresaOFrutosRojos = new Producto ("Cheesecake Fresa o Frutos Rojos", "postres", 12, 75000, 10, "./images/cheesecake.jpg","De la cocina inspiradora de Lu sale el gusto de brindar felicidad en forma de cheesecake. Su técnica es mezclar amor, hornear con pasión y entregar el corazón en cada porción.")

const carrito = {
    oculto: true,
    top: 0,
    right: -400
}

//arrays

let listaProductos = [tortaYogurtyArandanos, tortaBananoNutella, tortaBananoMora, tortaZanahoria, tortaNaranjayAmapola, tortaChocolate, tortaBanano, pieDeLimon, cheesecakeFresaOFrutosRojos];

let bodegadeProductos = [];

//variables

let producto 
let cantidad 
let seleccion 
let arrayPrecios = listaProductos.map(obj => ({nombre: obj.nombre, precio: obj.precio}))
let abrirCarro = document.getElementById('btnToggle');
let cerrarCarro = document.getElementById('btn__close')
let carro = document.getElementById('cart');
let mostrarTortas = document.getElementById('tortas');
let mostrarPostres = document.getElementById('postres');
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

let agregarAlCarrito = () => {
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

const buscarProducto = (producto, array) => {
    let filtro = array.filter(el => el.nombre.includes(producto))
    return filtro;

}

const buscarCategoria = (tipoProducto, array) => {
    let filtro = array.filter(el => el.categoria.includes(tipoProducto))
    return filtro;

}

const ordenarPrecio = (array, orden) => {
    if (orden === `menorAMayor`) {
       let menorAMayor = array.sort((a, b) => a.precio - b.precio)
       return menorAMayor
    } else if (orden === `mayorAMenor`) {
        let mayorAMenor = array.sort((a, b) => b.precio - a.precio)
        return mayorAMenor
    }
}

const aplicarDescuento = (array, porcentaje) => {
    let descuento = array.forEach(el =>{
    let nuevoPrecio = (el.precio * porcentaje) + el.precio;
    console.log(`El producto es ${el.nombre} y su nuevo precio es de ${nuevoPrecio}`)
})
}

abrirYCerrar = () =>{
    if (carrito.oculto){
        carro.style.right = 0
        carrito.oculto = false 
    } else {
        carro.style.right = ""
        carrito.oculto = true 
    }
    return false;
}

abrirCarro.onclick = abrirYCerrar;
cerrarCarro.onclick = abrirYCerrar;




const categoriasGrid = document.querySelector('.categoria__grid')

categoriasGrid.innerHTML = ""

// const mapProductos = listaProductos.map( el => {
//     categoriasGrid.insertAdjacentHTML('beforeend', `<div class="categoria__tarjeta">
//     <img src="${el.imagen}" alt="${el.nombre}">
//     <h3>${el.nombre}</h3>
//     <p>$${el.precio}</p>
// </div>`)
// })

// const seleccionCategorias = () =>{
//     if (mostrarTortas.onclick == true){
//         buscarCategoria("tortas", listaProductos)
//         filtro.map( el => {
//             categoriasGrid.insertAdjacentHTML('beforeend', `<div class="categoria__tarjeta">
//             <img src="${el.imagen}" alt="${el.nombre}">
//             <h3>${el.nombre}</h3>
//             <p>$${el.precio}</p>
//         </div>`)
//         })
//     }
// }


// const btnTorta = () =>{
//     let filtro = buscarCategoria("tortas", listaProductos)
//     filtro.map( el => {
//         categoriasGrid.insertAdjacentHTML('beforeend', `<div class="categoria__tarjeta">
//         <img src="${el.imagen}" alt="${el.nombre}">
//         <h3>${el.nombre}</h3>
//         <p>$${el.precio}</p>
//     </div>`)
//     })
    
// }


// const btnPostre = () =>{
//     let filtro = buscarCategoria("postres", listaProductos)
//     filtro.map( el => {
//         categoriasGrid.insertAdjacentHTML('beforeend', `<div class="categoria__tarjeta">
//         <img src="${el.imagen}" alt="${el.nombre}">
//         <h3>${el.nombre}</h3>
//         <p>$${el.precio}</p>
//     </div>`)
//     })
    
// }


const seleccioncategorias = (categoria)=>{
    categoriasGrid.innerHTML = ""
    let filtro = buscarCategoria(categoria, listaProductos)
    filtro.map( el  => {
        categoriasGrid.insertAdjacentHTML('beforeend', 
        `<div class="categoria__tarjeta">
        <img src="${el.imagen}" alt="${el.nombre}">
        <h3>${el.nombre}</h3>
        <p>$${el.precio}</p>
        </div>`)
    })
    return false;
}


seleccioncategorias('torta');

mostrarPostres.onclick = ()=> seleccioncategorias('postres');
mostrarTortas.onclick = () =>seleccioncategorias('tortas');