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

const browniesMelcochudos = new Producto ("Brownies melcochudos", "brownies", 20, 33000, 10, "./images/brownie.png", "Su consistencia melcochuda, su toque crunchie y sus chips de chocolate extra los hace únicos. Perfectos para acompanar con helado y endulzar a tus conocidos.")

const cookieBars = new Producto ("Cookie bar", "galletas", 20, 33000, 10, "./images/cookiebar.png", "Estos cuadritos cargados de amor son perfectos para probar algo diferente y dejarse cautivar con su capa crujiente u su cuerpo blando tipo galleta.")

const muffins = new Producto ("Muffins", "muffins", 10, 25000, 10, "./images/muffin.png", "blanditos y esponjosos, asi son nuestros deliciosos muffins.")

const tortaYogurtyArandanos = new Producto ("Torta de Yogurt & Arandanos 800g", "tortas", 800, 31000, 10, "./images/yogurtArandanos.jpg", "La versatilidad del yogurt griego y los arándanos permite alternar distintos sabores para lograr una combinación deliciosa.")

const tortaBanano = new Producto ("Torta de Banano 800g", "tortas", 800, 23000, 10, "./images/banano.jpg", "Hecha sin conservantes ni colorantes artificiales. 100% natural.")

const tortaBananoNutella = new Producto ("Torta de Banano Nutella 800g", "tortas", 800, 28000, 10, "./images/bananoNutella.jpg", "La crema de avellanas(Nutella) potencializa el sabor de nuestros bananos que son seleccionados cuidadosamente para hacer de esta torta una experiencia única de sabor.") 

const tortaBananoMora = new Producto ("Torta de Banano Mora 800g", "tortas", 800, 24000, 10, "./images/bananoMora.jpg", "Usamos moras frescas como topping para resaltar el conjunto de ingredientes que componen nuestra torta.")

const tortaZanahoria = new Producto ("Torta de Zanahoria 800g", "tortas", 800, 23000, 10, "./images/zanahoria.jpg", "La torta de zanahoria es estupenda para la hora de postre, el desayuno o la merienda.")

const tortaNaranjayAmapola = new Producto ("Torta de Naranja & Amapola 800g", "tortas", 800, 23000, 10, "./images/naranjaAmapola.jpg", "Suave y esponjosa con matices de amapola, aquella que conquista el paladar de todo el que la prueba.")

const tortaChocolate = new Producto ("Torta de Chocolate 800g", "tortas", 800, 23000, 10, "./images/chocolate.jpg", "Debido a sus componentes, el chocolate es un ingrediente natural que se transforma en una rica opción para aportarle mayor energía a tus días." )

const pieDeLimon = new Producto ("Pie de Limón 10 porciones", "postres", 8, 55000, 10, "./images/pieDeLimon.jpg", "La combinación del dulce merengue, las gotas cítricas del limón y la crocancia de nuestra galleta da como resultado el contraste perfecto.")

const cheesecakeFresaOFrutosRojos = new Producto ("Cheesecake Fresa o Frutos Rojos 12 porciones", "postres", 12, 75000, 10, "./images/cheesecake.jpg","De la cocina inspiradora de Lu sale el gusto de brindar felicidad en forma de cheesecake. Su técnica es mezclar amor, hornear con pasión y entregar el corazón en cada porción.")




//arrays

let listaProductos = [tortaYogurtyArandanos, tortaBananoNutella, tortaBananoMora, tortaZanahoria, tortaNaranjayAmapola, tortaChocolate, tortaBanano, pieDeLimon, cheesecakeFresaOFrutosRojos];

let listaDeAntojos = [browniesMelcochudos, cookieBars, muffins]

let bodegadeProductos = [];

//variables

let filtros = {
    categoria: 'tortas',
    orden: 'destacados',
    busqueda: ""  
}

let carrito = true
const abrirCarro = document.getElementById('btnToggle');
const cerrarCarro = document.getElementById('btn__close')
const carro = document.getElementById('cart');
const mostrarTortas = document.getElementById('tortas');
const mostrarPostres = document.getElementById('postres');
const selector = document.getElementById('filtros')
const categoriasGrid = document.querySelector('.categoria__grid')
const categoriaAntojos = document.querySelector('#categoria__antojos')

const busquedaPersonalizada = document.getElementsByClassName('container__search')[0]


//funciones  

let menu = () => {
    let seleccion = parseInt(prompt(`¡Bienvenidos a Lu Postres+Tortas! Los productos que tenemos disponibles son:\n\n1. ${listaProductos[0].nombre} \n2. ${listaProductos[1].nombre} \n3 ${listaProductos[2].nombre} \n4 ${listaProductos[3].nombre}. \n\n Digite el numero del producto que desea comprar o "Cancel" para salir.`));
    if (seleccion >= 5 || seleccion <=0) {
        alert(`Escoge un número de la lista inicial.`)
        menu()    
    }
    seleccion--
    return seleccion
}

let agregarAlCarrito = () => {
    let seleccion=menu()
    let cantidad = prompt(`El valor unitario de ${listaProductos[seleccion].nombre} es de ${listaProductos[seleccion].precio} pesos. Ingresa la cantidad que deseas añadir al carrito`)
    const subTotalProducto = listaProductos[seleccion].precio * cantidad;
    bodegadeProductos.push({producto:listaProductos[seleccion].nombre, cantidad, subTotalProducto});
    if (confirm`¡Añadido exitosamente! Deseas agregar otro producto?` === true){
        agregarAlCarrito();
    } else {
        alert(`Puedes verificar los productos que añadiste al carrito a través de la consola. Sí no añadiste ningún producto, omite este mensaje.`)
    }
}


const buscarProducto = (producto, array) => {
    let filtro = array.filter(el => el.nombre.toLowerCase().includes(producto.toLowerCase()))
    return filtro;

}

const buscarCategoria = (tipoProducto, array) => {
    let filtro = array.filter(el => el.categoria.includes(tipoProducto))
    return filtro;

}

const ordenarProductos = (orden, array) => {
    if (orden === `precio menos a mayor`) {
       let menorAMayor = array.sort((a, b) => a.precio - b.precio)
       return menorAMayor
    } else if (orden === `precio mayor a menor`) {
        let mayorAMenor = array.sort((a, b) => b.precio - a.precio)
        return mayorAMenor
    } else if (orden === `ordenar a-z`){
        let aZ = array.sort((a, b) =>  a.nombre.localeCompare(b.nombre))
        return aZ
    } else if (orden === `ordenar z-a`){
        let zA = array.sort((a, b) => b.nombre.localeCompare(a.nombre))
        return zA
    } else{
        return array
    }
}

const aplicarDescuento = (array, porcentaje) => {
    let descuento = array.forEach(el =>{
    let nuevoPrecio = (el.precio * porcentaje) + el.precio;
    console.log(`El producto es ${el.nombre} y su nuevo precio es de ${nuevoPrecio}`)
})
}

abrirYCerrar = () =>{
    if (carrito){
        carro.style.right = 0
        carrito = false 
    } else {
        carro.style.right = ""
        carrito = true 
    }
    return false;
}

abrirCarro.onclick = abrirYCerrar;
cerrarCarro.onclick = abrirYCerrar;


const filtroDeProductos = ()=>{
    categoriasGrid.innerHTML = ""
    let filtro = buscarCategoria(filtros.categoria, listaProductos)
    filtro = ordenarProductos(filtros.orden, filtro)
    filtro = buscarProducto(filtros.busqueda, filtro)
    filtro.map( el  => {
        categoriasGrid.insertAdjacentHTML('beforeend', 
        `<div class="categoria__tarjeta">
        <img src="${el.imagen}" alt="${el.nombre}">
        <h3>${el.nombre}</h3>
        <p>$${el.precio}</p>
        <button class="categoria__btn">Agregar</button>
        </div>`)
    })
    return false;
}

const antojos = () => {
    listaDeAntojos.map(el => {
        categoriaAntojos.insertAdjacentHTML('beforeend', 
        `<div class="categoria__tarjeta__antojos">
        <img src="${el.imagen}" alt="${el.nombre}">
        <h3>${el.nombre}</h3>
        <p>x ${el.gramos} unidades</p>
        <p>$${el.precio}</p>
        <button class="categoria__btn">Agregar</button>
        </div>
        `)
    })
}

mostrarPostres.onclick = ()=> {
    mostrarTortas.style = ''
    filtros.categoria = 'postres';
    mostrarTortas.style = 'border-bottom: hidden;'
    mostrarPostres.style = 'border-bottom: solid 3px #996ad0;'
    return filtroDeProductos() 
};

mostrarTortas.onclick = ()=> {
    mostrarPostres.style = ''
    filtros.categoria = 'tortas';
    return filtroDeProductos()
};

selector.addEventListener('change', (e) =>{
    filtros.orden = e.target.value;
    return filtroDeProductos()
});

busquedaPersonalizada.addEventListener('keyup', (e) =>{
    filtros.busqueda = e.target.value;
    return filtroDeProductos()
});

filtroDeProductos()
antojos()