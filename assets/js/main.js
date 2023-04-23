console.log("hola desde otro script");
function changeColorTo(color){
    const refName = document.getElementById("name");

    refName.style.color = color;
}

function changeColorP(color, refObj){
    console.log(refObj);
    refObj.style.color = color;
}

function resetColors(){
    const refObjs = document.getElementsByClassName("text-color");
    console.log(refObjs);

    for ( let index = 0; index<refObjs.length; index++) {
        const element= refObjs[index]
        console.log(element);
        element.style.color = "purple";
    }
}