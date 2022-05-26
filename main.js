document.getElementById("pechugaPollo").addEventListener("click",comida);
document.getElementById("britishBacon").addEventListener("click",comida);
document.getElementById("pulledPork").addEventListener("click",comida);
document.getElementById("polloSupreme").addEventListener("click",comida);

function comida(e) {
  let btn = e.target;
  document.getElementById("bocatas").innerHTML =
    "bocadillo: <b>" +
    btn.getAttribute("data-nombre") +
    "</b><br>Precio: <b>" +
    btn.getAttribute("data-precio") +
    " €</b>" +
    "</b><br>Ingredientes: <b>" +
    btn.getAttribute("data-descripcion");
}


document.getElementById("cocacola").addEventListener("click",bebida);
document.getElementById("agua").addEventListener("click",bebida);
document.getElementById("fanta").addEventListener("click",bebida);
document.getElementById("cerveza").addEventListener("click",bebida);


function bebida(x) {
  let btn1 = x.target;
  document.getElementById("bebidas").innerHTML =
  "Bebida: <b>" +
    btn1.getAttribute("data-nombre") +
    "</b><br>Precio: <b>" +
    btn1.getAttribute("data-precio") +
    " €</b>"
    
    return btn1.getAttribute("data-precio");
}

    




