window.addEventListener('load', ()=> { /*escuchamos cuando se carga el documento */

/*creamos dos contantes y nos guardamos los elementos que necesitamos*/
    const display = document.querySelector('.display');
    const buttons = document.getElementsByClassName('k-button');
/*creamos otra constante para convertir el htmlCollection a Array */

    const keyarray = Array.from(buttons)
/*iteramos por nuestro nuevo array de botones */
    keyarray.forEach( (button) => { 

        /*a cada boton le agregamos un listener */
        button.addEventListener('click', ()=> {
            calculadora(button, display)
        })
        })
})

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;

        default:
            actualizar(display, button)
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML) /*tomar el string y resolverlo*/
}

function actualizar(display, button) {
    if(display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display) {
    display.innerHTML = 0;
}