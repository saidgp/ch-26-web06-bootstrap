window.addEventListener(`load`, ()=>{/* Escuchamos cuando se carga el documento */
    /* Creamos dos constantes y guardamos los elemntes que necesitamos */
    const display = document.querySelector(`.calculator-display`);
    const keypadButtons = document.getElementsByClassName(`keypad-button`);

    /* Creamos otra contante para convertir el HTMLCollection a Array */
    const keypadButtonsArray = Array.from(keypadButtons);

    /* Iteramos por nuestro nuevo array de botones */
keypadButtonsArray.forEach( ( button) =>{

    /* A cada boton le agremgamos un listener */
   button.addEventListener(`click`,()=>{
    calculadora(button, display)
    })
  })
});
function calculadora(button, display){
    switch(button.innerHTML){
      case`C`:
        borrar(display);
        break;
      case `=`:
        calcular(display);
        break;
      default:
        actualizar(display, button);
        break;
    }
}
function calcular (display){
    display.innerHTML  = eval(display.innerHTML)/* Tomar el string, resolverlo y guardarlo en el innerHTML del diplay */
}
function actualizar(display, button){
    if(display.innerHTML == 0){
        display.innerHTML = ``;
    }
    display.innerHTML+= button.innerHTML;
    /* display.innerHTML = display.innerHTML + button.innerHTML */
}

function borrar(display){
    display.innerHTML=0;
}