function changeName(){
    // obtener nombre cliente 
     document.getElementById("greeting").innerHTML= "Hello " + getName();
    // ibtener referencia de label H1
  
    // camniar el nombre
  
  
  }
  
  function getName(){
    const clientName = prompt("Escribe tu nombre ");
    return clientName;
  }