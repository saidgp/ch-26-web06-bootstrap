function fecha (){
// Solicitamos los valores del usuario
let dia = document.getElementById("dia").value;
dia=parseInt(dia,10);
let mes = document.getElementById("mes").value; 
let anio = document.getElementById("año").value; 

let date = (`${dia} ${mes} ${anio}`);

console.log(date);
let Xmas95 = new Date(`date + 23:15:30`);
console.log(Xmas95);
let weekday = Xmas95.getDay();


 switch(weekday){
    case 0:
    console.log("Domingo");
    break;
    case 1:
    console.log("Lunes");
    break;
    case 2:
    console.log("Martes");
    break;
    case 3:
    console.log("Miercoles");
    break;
    case 4:
    console.log("Jueves");
    break;
    case 5:
    console.log("Viernes");
    break;
    case 6:
    console.log("Sabado");
    break;
} 
}