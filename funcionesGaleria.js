// JavaScript source code
function mostrarOcultar() {
    $(".fotoPerfil").animate({ height: 'toggle' });

}

window.onload = function () {/*hace que se cargue la funci�n lo que predetermina que div estar� oculto hasta llamar a la funci�n nuevamente*/
    
    mostrarMenu('fotoPerfil');

}

function mostrarMenu(id) {
    if (document.getElementById) { //se obtiene el id
        var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
        el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    }

}

function ocultarMenu(id) {
    if (document.getElementById) { //se obtiene el id
        var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
        if (el.style.display == 'block') {
            el.style.display = 'none';
        }//damos un atributo display:none que oculta el div
    }

}