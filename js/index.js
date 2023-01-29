/**PRODUCTOS**/

const productosArray = [
    /**CREMAS HIDRATANTES**/
    {
        id: "CremaNeutrogena",
        titulo: "Gel hidratante facial Neutrogena® Hydro Boost®",
        imagen: "./img/Cremas Hidratantes/Neutrogena.jfif",
        categoria: {
            nombre: "Cremas Hidratantes",
            id: "Cremas"
        },
        precio: 252.00
    },
    {
        id: "CremaElf",
        titulo: "elf Holy Hydration! Crema facial",
        imagen: "./img/Cremas Hidratantes/elf.jfif",
        categoria: {
            nombre: "Cremas Hidratantes",
            id: "Cremas"
        },
        precio: 243.66
    },
    {
        id: "CremaGarnier",
        titulo: "Crema facial Garnier hidratante",
        imagen: "./img/Cremas Hidratantes/Garnier.jfif",
        categoria: {
            nombre: "Cremas Hidratantes",
            id: "Cremas"
        },
        precio: 109.56
    },
    {
        id: "CremaNivea",
        titulo: "Crema con ácido hialurónico Nivea",
        imagen: "./img/Cremas Hidratantes/Nivea.jfif",
        categoria: {
            nombre: "Cremas Hidratantes",
            id: "Cremas"
        },
        precio: 75.00
    },
    {
        id: "CremaAvene",
        titulo: "Eau Thermale Avene - Hydrance Intense suero hidratante",
        imagen: "./img/Cremas Hidratantes/Avene.jfif",
        categoria: {
            nombre: "Cremas Hidratantes",
            id: "Cremas"
        },
        precio: 678.00
    },
    {
        id: "CremaCerave",
        titulo: "Crema Hidratante Cerave",
        imagen: "./img/Cremas Hidratantes/Cerave.jfif",
        categoria: {
            nombre: "Cremas Hidratantes",
            id: "Cremas"
        },
        precio: 249.16
    },
    {
        id: "CremaPosay",
        titulo: "La Roche Posay Toleriane Doble Reparador Facial Mate",
        imagen: "./img/Cremas Hidratantes/LaRoshePosay.png",
        categoria: {
            nombre: "Cremas Hidratantes",
            id: "Cremas"
        },
        precio: 793.25
    },
    {
        id: "CremaPonds",
        titulo: "Pond's Crema Humectante",
        imagen: "./img/Cremas Hidratantes/PONDs.jfif",
        categoria: {
            nombre: "Cremas Hidratantes",
            id: "Cremas"
        },
        precio: 77.85
    },
    //JABONES & EXFOLIANTES
    {
        id: "JabonBioderma",
        titulo: "Bioderma sensibio gel limpiador espumoso",
        imagen: "./img/Jabones y Exfoliantes/Bioderma.jfif",
        categoria: {
            nombre: "Jabones y Exfoliantes",
            id: "JabonesyExfo"
        },
        precio: 178.00
    },
    {
        id: "JabonCerave",
        titulo: "CeraVe Gel Limpiador Espumoso",
        imagen: "./img/Jabones y Exfoliantes/Cerave.jfif",
        categoria: {
            nombre: "Jabones y Exfoliantes",
            id: "JabonesyExfo"
        },
        precio: 303.00
    },
    {
        id: "JabonNatural",
        titulo: "Jabón Facial Tonificante Hierbabuena",
        imagen: "./img/Jabones y Exfoliantes/Naturalmente.png",
        categoria: {
            nombre: "Jabones y Exfoliantes",
            id: "JabonesyExfo"
        },
        precio: 59.00
    }, 
    {
        id: "JabonNeutrogena",
        titulo: "Gel Limpiador Facial Neutrogena Oil free",
        imagen: "./img/Jabones y Exfoliantes/Neutrogena.jfif",
        categoria: {
            nombre: "Jabones y Exfoliantes",
            id: "JabonesyExfo"
        },
        precio: 168.30
    },
    {
        id: "ExfoBody",
        titulo: "The Body Shop Exfoliante corporal British Rose",
        imagen: "./img/Jabones y Exfoliantes/BodyShop.jfif",
        categoria: {
            nombre: "Jabones y Exfoliantes",
            id: "JabonesyExfo"
        },
        precio: 145.00
    },
    {
        id: "ExfoMatcha",
        titulo: "Brooklyn Botany Matcha Green Tea Exfoliante",
        imagen: "./img/Jabones y Exfoliantes/Matcha.jfif",
        categoria: {
            nombre: "Jabones y Exfoliantes",
            id: "JabonesyExfo"
        },
        precio: 546.00
    },
    {
        id: "ExfoEkos",
        titulo: "Jabón Exfoliante Acai Natura",
        imagen: "./img/Jabones y Exfoliantes/Natura.jfif",
        categoria: {
            nombre: "Jabones y Exfoliantes",
            id: "JabonesyExfo"
        },
        precio: 256.00
    },
    {
        id: "ExfoTree",
        titulo: "Exfoliante Corporal de Azúcar Natural Tree Hut",
        imagen: "./img/Jabones y Exfoliantes/TreeHut.png",
        categoria: {
            nombre: "Jabones y Exfoliantes",
            id: "JabonesyExfo"
        },
        precio: 238.00
    },
    //PROTECTORES SOLARES
    {
        id: "ProtectorAvene",
        titulo: "Protector Solar con Color Avene SPF 50+",
        imagen: "./img/Protectores Solares/Avene.jfif",
        categoria: {
            nombre: "Protectores Solares",
            id: "Protector"
        },
        precio: 516.08
    },
    {
        id: "ProtectorBioderma",
        titulo: "Protector Solar Bioderma photoderm SPF 50+",
        imagen: "./img/Protectores Solares/Bioderma.jfif",
        categoria: {
            nombre: "Protectores Solares",
            id: "Protector"
        },
        precio: 439.00
    },
    {
        id: "ProtectorEucerin",
        titulo: "Eucerin Sun Face Photoaging Control FPS50+",
        imagen: "./img/Protectores Solares/Eucerin.jfif",
        categoria: {
            nombre: "Protectores Solares",
            id: "Protector"
        },
        precio: 446.22
    },
    {
        id: "ProtectorHawaiian",
        titulo: "Hawaiian Tropic Duo Defense 50+",
        imagen: "./img/Protectores Solares/Hawaiian.jfif",
        categoria: {
            nombre: "Protectores Solares",
            id: "Protector"
        },
        precio: 238.00
    },
    {
        id: "ProtectorIsdin",
        titulo: "ISDIN Fotoprotector Fusion Fluid SPF 50+",
        imagen: "./img/Protectores Solares/ISDIN.jfif",
        categoria: {
            nombre: "Protectores Solares",
            id: "Protector"
        },
        precio: 455.51
    },
    {
        id: "ProtectorRoche",
        titulo: "Protector Solar Facial La Roche Posay Anthelios SPF 50+",
        imagen: "./img/Protectores Solares/LaRoshe.png",
        categoria: {
            nombre: "Protectores Solares",
            id: "Protector"
        },
        precio: 460.00
    },
    {
        id: "ProtectorNivea",
        titulo: "Nivea Sun Protector Solar Facial",
        imagen: "./img/Protectores Solares/Nivea.jfif",
        categoria: {
            nombre: "Protectores Solares",
            id: "Protector"
        },
        precio: 183.39
    },
    {
        id: "ProtectorShiseido",
        titulo: "CLEAR SUNCARE SCREEN STICK SPF 50+ (PROTECTOR SOLAR)",
        imagen: "./img/Protectores Solares/Shiseido.jfif",
        categoria: {
            nombre: "Protectores Solares",
            id: "Protector"
        },
        precio: 835.00
    }

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">$${producto.precio} MX</p>
                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                    </div>
        `
        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
    console.log(botonesAgregar);
}

cargarProductos(productosArray);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => { 
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const productoCategoria = productosArray.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre; 

            const productosBoton = productosArray.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productosArray);
        }

    })
})

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

let productosEnCarrito;

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productosArray.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id == idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumero();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumero(){
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
}
