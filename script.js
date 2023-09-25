
const input1 = document.querySelector('#calculo1');

const input2 = document.querySelector('#calculo2');


const result = document.querySelector('#result');

const boton = document.querySelector('#btnCalcular');

boton.addEventListener('click', btnOnClick); //Se llama la funcion sin parentesis porque el addEvent se la agrega por defecto


function btnOnClick(){       

    const suma = input1.value + input2.value;
    result.innerText = "El resultado es: " + suma;
}


