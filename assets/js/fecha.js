function fecha (){
// Solicitamos los valores del usuario
let dia = document.getElementById("dia").value;
dia=parseInt(dia,10);
let mes = document.getElementById("mes").value; 
let anio = document.getElementById("año").value; 

let date = (` ${mes} ${dia} ${anio}`);

console.log(date);
let Xmas95 = new Date([date]);
console.log(Xmas95);
let weekday = Xmas95.getDay();
console.log(weekday);


 switch(weekday){
    case 0:
    console.log("Este dia fue Domingo y no fue dia laborable");
    break;
    case 1:
    console.log("Este dia fue Lunes y si fue dia laborable");
    break;
    case 2:
    console.log("Este dia fue Martes y si fue dia laborable");
    break;
    case 3:
    console.log("Este dia fue Miercoles y si fue dia laborable");
    break;
    case 4:
    console.log("Este dia fue Jueves y si fue dia laborable");
    break;
    case 5:
    console.log("Este dia fue Viernes y si fue dia laborable");
    break;
    case 6:
    console.log("Este dia fue Sabado y no fue dia laborable" );
    break;
    default:
    console.log("Has escrito una fecha invalida, por favor elige otra")
} 
}