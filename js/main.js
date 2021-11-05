//Desafío: Incorporar Objetos y Arrays

//Alerta al cargar el sitioweb: Nombre y Apellido
let nombreApellido = prompt("Por favor ingrese su nombre y apellido");
alert("Bienvenido " + nombreApellido + ", en el siguiente simulador tenes la posibilidad de consultar el precio de diferentes productos");

//Constructor de Objeto para Productos

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.agregado = false;
    }
    agregar() {
        this.agregado = true;
        alert(this.nombre + " fue agregado a tu carrito. $" + this.precio + " fueron descontados de tu cuenta.");
    }
}

const producto1 = new Producto ("Producto1", 2500);
const producto2 = new Producto ("Producto2", 4500);
const producto3 = new Producto ("Producto3", 7000);
const producto4 = new Producto ("Producto4", 3000);
const producto5 = new Producto ("Producto5", 9000);
const producto6 = new Producto ("Producto6", 5000);

//Array de Productos
const array = [producto1, producto2, producto3, producto4, producto5, producto6];
array.push(new Producto ("Producto7", 6000)); //Utilizo push para agregar otro objeto a mi array
console.log('La cantidad de posiciones de este array es: ' + array.length);


//Seleccion de producto

let productoUsuario = prompt ("Por favor seleccione su producto").toLowerCase();

const consultaProducto = (producto) => {
    switch (producto) {
        case "producto1":
            alert("El valor del producto seleccionado es de $2500");
            return producto
        case "producto2":
            alert("El valor del producto seleccionado es de $4500");
            return producto
        case "producto3":
            alert ("El valor del producto seleccionado es de $7000");
            return producto
        case "producto4":
            alert("El valor del producto seleccionado es de $3000");
            return producto
        case "producto5":
            alert("El valor del producto seleccionado es de $9000");
            return producto
        case "producto6":
            alert ("El valor del producto seleccionado es de $5000");
            return producto
        case "producto7":
            alert("El valor del producto seleccionado es de $6000");
            return producto
        default:
            alert("El producto seleccionado no es valido");
            return producto                
    }
}

let productoPrecio = consultaProducto(productoUsuario);
console.log(productoPrecio);