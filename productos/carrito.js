function arriba(){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var botonarriba = document.getElementById('arriba');

        if(scroll > 0){
            botonarriba.style.right = 10 + "px";
        }
        else{
            botonarriba.style.right = 10 + "px";
        }
    }
    )
}

arriba();



var boton1 = document.querySelector("#boton1");
var boton2 = document.querySelector("#boton2");
var boton3 = document.querySelector("#boton3");
var boton4 = document.querySelector("#boton4");
var boton5 = document.querySelector("#boton5");

function carrito(nombre, precio){
    contador = 0;
    alert("Producto Añadido Correctamente")
}

boton1.onclick = carrito;
boton2.onclick = carrito;
boton3.onclick = carrito;
boton4.onclick = carrito;
boton5.onclick = carrito;