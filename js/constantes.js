export const PI = Math.PI; //Exportar sólo PI

export let usuario = "Emilio";

let password = "qwerty";
//export default password;

//export default let password = "qwerty"; //Error en una sola línea en dos lineas para no
//export default const password = "qwerty"; //Error en una sola línea en dos lineas para no

const hello = () => console.log("Hola");

/*
export default function saludar() {
    console.log("Hola Módulos + ES6") //Sólo puedes tener una exportación default!
}


export function saludar() {
    console.log("Hola Módulos + ES6") //Sólo puedes tener una exportación default!
}

*/

export default class Saludar{
    constructor(){
        console.log("Hola Clases + ES6")
    }
}
