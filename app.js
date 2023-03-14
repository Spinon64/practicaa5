let obj = {
    nombre: "Carlos",
    edad: 44,
    apellido: "Ulibarri",
    keypress: function (){
        console.log("Se ha presionado una tecla");
    },
    mouseOver: function (){
        console.log("El puntero del mouse era arriba");
    }
}

console.log(obj.nombre);
console.log(obj["nombre"]);

let myKey = "nombre"
console.log(obj[myKey]);

myKey = "keypress";
console.log(obj[myKey]());
myKey = "mouseOver";
console.log(obj[myKey]());

let myArray = [];

myArray.push(4);
myArray.push("una cadena");
myArray.push(obj);
myArray.push(function (){
    console.log("hola desde el array");
})
console.log(myArray);



let funcArray = [];

funcArray.push (() =>{
    console.log("Function 1");
});

funcArray.push(() => {
    console.log("Function 2");
});

funcArray.push(() => {
    console.log("Function 3");
});

funcArray.forEach((item) => {
    item();
})

/* En el array se habian agregado 3 funciones, y con ayuda
 del forEach se fue recorriendo cada posicion y asi imprimiendo las funciones
 cuando ejecutamos el node app */