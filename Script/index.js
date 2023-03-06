function darkSide(){
    document.getElementById("InfoJ").style.backgroundColor = "#000000";
    document.getElementById("InfoJ").style.color = '#FFFFFF';
    document.getElementById("Boton").textContent = "Modo Claro";
    document.getElementById("Boton").setAttribute("onclick","lightSide()");
}
function lightSide(){
    document.getElementById("InfoJ").style.backgroundColor = "#FFFFFF";
    document.getElementById("InfoJ").style.color = '#000000';
    document.getElementById("Boton").textContent = "Modo Oscuro";
    document.getElementById("Boton").setAttribute("onclick","darkSide()");
}
