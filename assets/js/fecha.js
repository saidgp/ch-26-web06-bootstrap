function fecha (){
// Solicitamos los valores del usuario
let dia = document.getElementById("dia").value;
let mes = document.getElementById("mes").value; 
let anio = document.getElementById("año").value; 

const guessElem = document.getElementById('guess');

let date = (` ${mes} ${dia} ${anio}`);

console.log(date);
let Xmas95 = new Date([date]);
console.log(Xmas95);
let weekday = Xmas95.getDay();
console.log(weekday);


 switch(weekday){
    case 0:
        guessElem.innerHTML=("Este dia fue Domingo y no fue dia laborable");
    break;

    case 1:
        guessElem.innerHTML=("Este dia fue Lunes y si fue dia laborable");
    break;

    case 2:
        guessElem.innerHTML=("Este dia fue Martes y si fue dia laborable");
    break;

    case 3:
        guessElem.innerHTML=("Este dia fue Miercoles y si fue dia laborable");
    break;

    case 4:
        guessElem.innerHTML=("Este dia fue Jueves y si fue dia laborable");
    break;

    case 5:
        guessElem.innerHTML=("Este dia fue Viernes y si fue dia laborable");
    break;

    case 6:
        guessElem.innerHTML=("Este dia fue Sabado y no fue dia laborable" );
    break;
    
    default:
        guessElem.innerHTML=("Has escrito una fecha invalida, por favor elige otra");
    break;
} 
}