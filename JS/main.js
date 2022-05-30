//constructores

class Producto {
    constructor(id, nombre, categoria, gramos, precio, stock, imagen, descripcion, sabores=[]){
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.gramos = parseFloat(gramos);
        this.precio = parseFloat(precio);
        this.stock = parseFloat(stock);
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.sabores = sabores;
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

const browniesMelcochudos = new Producto ("l", "Brownies melcochudos", "antojos", 20, 33000, 10, "./images/brownie.png", "Su consistencia melcochuda, su toque crunchie y sus chips de chocolate extra los hace únicos. Perfectos para acompanar con helado y endulzar a tus conocidos.")

const cookieBars = new Producto ("m","Cookie bar", "antojos", 20, 33000, 10, "./images/cookiebar.png", "Estos cuadritos cargados de amor son perfectos para probar algo diferente y dejarse cautivar con su capa crujiente u su cuerpo blando tipo galleta.", ['Chocolate', 'Chip de Chocolate', 'Avena'])

const muffins = new Producto ("n","Muffins", "antojos", 10, 25000, 10, "./images/muffin.png", "blanditos y esponjosos, asi son nuestros deliciosos muffins.", ['Manzana', 'Chocolate', 'Zanahoria'])

const tortaYogurtyArandanos = new Producto ("a", "Torta de Yogurt & Arandanos 800g", "tortas", 800, 31000, 10, "./images/yogurtArandanos.jpg", "La versatilidad del yogurt griego y los arándanos permite alternar distintos sabores para lograr una combinación deliciosa.")

const tortaBanano = new Producto ("b", "Torta de Banano 800g", "tortas", 800, 23000, 10, "./images/banano.jpg", "Hecha sin conservantes ni colorantes artificiales. 100% natural.")

const tortaBananoNutella = new Producto ("c", "Torta de Banano Nutella 800g", "tortas", 800, 28000, 10, "./images/bananoNutella.jpg", "La crema de avellanas(Nutella) potencializa el sabor de nuestros bananos que son seleccionados cuidadosamente para hacer de esta torta una experiencia única de sabor.") 

const tortaBananoMora = new Producto ("d","Torta de Banano Mora 800g", "tortas", 800, 24000, 10, "./images/bananoMora.jpg", "Usamos moras frescas como topping para resaltar el conjunto de ingredientes que componen nuestra torta.")

const tortaZanahoria = new Producto ("e","Torta de Zanahoria 800g", "tortas", 800, 23000, 10, "./images/zanahoria.jpg", "La torta de zanahoria es estupenda para la hora de postre, el desayuno o la merienda.")

const tortaNaranjayAmapola = new Producto ("f","Torta de Naranja & Amapola 800g", "tortas", 800, 23000, 10, "./images/naranjaAmapola.jpg", "Suave y esponjosa con matices de amapola, aquella que conquista el paladar de todo el que la prueba.")

const tortaChocolate = new Producto ("g","Torta de Chocolate 800g", "tortas", 800, 23000, 10, "./images/chocolate.jpg", "Debido a sus componentes, el chocolate es un ingrediente natural que se transforma en una rica opción para aportarle mayor energía a tus días." )

const pieDeLimon = new Producto ("j","Pie de Limón 10 porciones", "postres", 8, 55000, 10, "./images/pieDeLimon.jpg", "La combinación del dulce merengue, las gotas cítricas del limón y la crocancia de nuestra galleta da como resultado el contraste perfecto.")

const cheesecakeFresaOFrutosRojos = new Producto ("k","Cheesecake Fresa o Frutos Rojos 12 porciones", "postres", 12, 75000, 10, "./images/cheesecake.jpg","De la cocina inspiradora de Lu sale el gusto de brindar felicidad en forma de cheesecake. Su técnica es mezclar amor, hornear con pasión y entregar el corazón en cada porción.", ['Frutos rojos', 'Fresa'])

//arrays

// let listaProductos = [tortaYogurtyArandanos, tortaBananoNutella, tortaBananoMora, tortaZanahoria, tortaNaranjayAmapola, tortaChocolate, tortaBanano, pieDeLimon, cheesecakeFresaOFrutosRojos, browniesMelcochudos, cookieBars, muffins];
let  listaProductos = []
let listaDeAntojos = []
let bodegadeProductos = [];

//variables

let filtros = {
    categoria: 'tortas',
    orden: 'destacados',
    busqueda: ""  
}

let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
let carrito = true
const abrirCarro = document.getElementById('btnToggle');
const cerrarCarro = document.getElementById('btn__close')
const carro = document.getElementById('cart');
const cartList = document.getElementById('cartList');
const mostrarTortas = document.getElementById('tortas');
const mostrarPostres = document.getElementById('postres');
const selector = document.getElementById('filtros')
const categoriasGrid = document.querySelector('.categoria__grid')
const categoriaAntojos = document.querySelector('#categoria__antojos')
const busquedaPersonalizada = document.getElementsByClassName('container__search')[0]
let btnAgregarProducto

//funciones  

const setTotal = () =>{
    let total = 0
    document.querySelectorAll('#cartList .producto__cantidad').forEach(el =>{
        total += el.dataset.precio * el.value
    })
    document.querySelector(".total__price").innerHTML=`$${total}`
}

let menu = () => {
    let seleccion = parseInt(prompt(`¡Bienvenidos a Lu Postres+Tortas! Los productos que tenemos disponibles son:\n\n1. ${listaProductos[0].nombre} \n2. ${listaProductos[1].nombre} \n3 ${listaProductos[2].nombre} \n4 ${listaProductos[3].nombre}. \n\n Digite el numero del producto que desea comprar o "Cancel" para salir.`));
    if (seleccion >= 5 || seleccion <=0) {
        alert(`Escoge un número de la lista inicial.`)
        menu()    
    }
    seleccion--
    return seleccion
}

const buscarProducto = (producto, array) => {
    let filtro = array.filter(el => el.nombre.toLowerCase().includes(producto.toLowerCase()))
    return filtro;

}

const buscarCategoria = (tipoProducto, array) => {
    console.log(array)
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
        `<div class="categoria__tarjeta ancestro">
        <img src="${el.imagen}" alt="${el.nombre}">
        <h3>${el.nombre}</h3>
        <p>$${el.precio}</p>
        `+(el.sabores.length > 0 ? `<select class="select__btn" name="sabor" id="">
        <option value="">Seleccionar</option>
        `+el.sabores.map(el => `<option value="${el}">${el}</option>`)+`
        </select>`: `` )+`
        <button class="categoria__btn" id="${el.nombre}"`+(el.sabores.length > 0 ? " disabled" : "")+`>Agregar</button>
        </div>`)
       
    })
    
    Array.from(document.getElementsByClassName('select__btn')).forEach( e => {
        e.addEventListener('change', seleccionarSabor)
        
    })

    Array.from(document.getElementsByClassName('categoria__btn')).forEach( e => {
        e.onclick = agregarAlCanasto
    })
    
    return false;
}


const antojos = () => {
    listaDeAntojos.map(el => {
        categoriaAntojos.insertAdjacentHTML('beforeend', 
        `<div class="categoria__tarjeta__antojos ancestro">
        <img src="${el.imagen}" alt="${el.nombre}">
        <h3>${el.nombre}</h3>
        <p>x ${el.gramos} unidades</p>
        <p>$${el.precio}</p>
        `+(el.sabores.length > 0 ? `<select class="select__btn" name="sabor" id="">
        <option value="">Seleccionar</option>
        `+el.sabores.map(el => `<option value="${el}">${el}</option>`)+`
        </select>`: `` )+`
        <button class="categoria__btn" id="${el.nombre}"`+(el.sabores.length > 0 ? " disabled" : "")+`>Agregar</button>
        </div>
        `)
    })
}

const dibujarCarrito = () => {
    cartList.innerHTML = ""
    if (cart.length == 0){
        cartList.insertAdjacentHTML('beforeend', `<p>La canasta está vacia</p>`)
    } else {
        
        cart.map( (el, i)  => {
        cartList.insertAdjacentHTML('beforeend', 
         ` <div class="producto">
    <div class="producto__imagen">
    <img src="${el.producto.imagen}" height="100px;" width="autopx" alt="${el.producto.nombre}">
    </div>
    <div class="producto__info">
        <div class="producto__container__separador">
            <h2 class="producto__nombre">${el.producto.nombre}</h2>
            <span class="producto__sabor">${el.sabor}</span>
            <a href="#" class="producto__eliminar trashIconSize" eliminar="${el.producto.id}">
                <i class="fa-regular fa-trash-can "></i></a>

        </div>
        <div class="producto__personalizacion">
            <label for="cantidad">Cantidad</label>
            <input type="number" min="0" class="producto__cantidad" data-precio="${el.producto.precio}" value="${el.cantidad}" id="cantidad">
        </div>
        <p class="producto__precio">$${el.producto.precio}</p>
    </div>
    `)     
    })}
    localStorage.setItem('cart', JSON.stringify(cart))
    setTotal()
    Array.from(document.getElementsByClassName('producto__eliminar')).forEach( e => {
        e.onclick = eliminarDelCanasto
    })
    Array.from(document.getElementsByClassName('producto__cantidad')).forEach( e => {
        e.addEventListener('change', (e) =>{
            const subtotal = e.target.value * e.target.dataset.precio
            e.target.closest('.producto__info').querySelector('.producto__precio').innerHTML= `$${subtotal}`
            setTotal()
        });
    })
}

//event listeners

const seleccionarSabor = (e) =>{
    e.target.closest(".ancestro").querySelector('.categoria__btn').setAttribute('sabor', e.target.value)
    if(e.target.value != ""){
        e.target.closest(".ancestro").querySelector('.categoria__btn').disabled = false;
    } else{
        e.target.closest(".ancestro").querySelector('.categoria__btn').disabled = true;
    }
}

let eliminarDelCanasto = e => {
    e.preventDefault()
    const producto = cart.find(el => el.producto.id == e.target.closest('a').getAttribute('eliminar'))
    cart= cart.filter((el) => el.producto.id != e.target.closest('a').getAttribute('eliminar') )
    dibujarCarrito()
    Toastify({
        text: `Se ha eliminado ${producto.producto.nombre} exitosamente`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#996ad0"
        //   background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
      
}

const agregarAlCanasto = (e) =>{
    e.preventDefault()
    const existe = cart.find(el => el.producto.nombre === e.target.id && (!e.target.getAttribute('sabor') || el.sabor == e.target.getAttribute('sabor')))
    let producto = buscarProducto(e.target.id, listaProductos)[0]
    if (existe){
        existe.cantidad += 1

    } else{
        cart.push({cantidad: 1,producto: producto, sabor: e.target.getAttribute('sabor') || ''})
    }
    dibujarCarrito()
        
    if(carrito == true){
        abrirCarro.click()
    }
}

//funcion fetch

const iniciar = async () =>{
    const llamadoBd = await fetch('https://juanjacoboviera.github.io/e-commerce-lu/JS/productos.json')
        .then(response => response.json())
        .then(json => {
            listaProductos = json.productos
            listaDeAntojos = [listaProductos.find(el => el.id === "l"), listaProductos.find(el => el.id === "m"),listaProductos.find(el => el.id === "n")]
            console.log(listaProductos, listaDeAntojos)
        })
    
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
        mostrarTortas.style = 'border-bottom: solid 3px #996ad0;'
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
    
    
    console.log("test 1")
    antojos()
    filtroDeProductos()
    dibujarCarrito()
}

iniciar()


