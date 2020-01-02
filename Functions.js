// JavaScript source code

var emoticones = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
    '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨',
    '🧐', '🤓', '😎', '🤩', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '😣', '😖', '😫', '😩', '😢',
    '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑',
    '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '😴', '🤤', '😪', '😵', '🤐', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠'];
var contador = 1;
var tam = 78;
var caracteres = 0;
var saltoPorCarac = 0;
var lineas = 1;
var numContactos = 0;
localStorage.setItem("usuario", 0);

/*if (window.matchMedia("(orientation: portrait)").matches) {
    alert("vertical");
} else {
    alert("horizontal");
}*/

window.addEventListener("orientationchange", () => {
    if (document.getElementById) { //se obtiene el id
        var e = document.getElementById('col-s-1');
        if (e.style.display != 'none') {
            if (window.matchMedia("(orientation: portrait)").matches) {
                
                landscape();
                
            } else {
                
                portrait();
                
            }


        } else {

            if (window.matchMedia("(orientation: portrait)").matches) {
                
                landscapeBig();
                
            } else {
                
                portraitBig();
                
                
            }

        }
    }
});

function modificar() {
    if (document.getElementById) { //se obtiene el id
        var e = document.getElementById('col-s-1');
        if (e.style.display != 'none') {
            if (window.matchMedia("(orientation: portrait)").matches) {
                portraitBig();
            } else {
                landscapeBig();

            }


        } else {

            if (window.matchMedia("(orientation: portrait)").matches) {
                portrait();
            } else {
                landscape();
            }

        }
        $(".col-s-1").animate({ width: 'toggle' });
    }

}

function landscapeBig() {
    $(".col-l").width('100%');
    $("span.titulo").css("margin-left", "-15px");
    $("span.titulo").width('70%');
    $("span.titulo").css("fontSize", "20px");
    $(".envio form textarea").width('75%');
}
function landscape() {
    $("span.titulo").css("margin-left", "0px");
    $("span.titulo").css("fontSize", "18px");
    $(".col-l").width('100%');
    $("span.titulo").width('80%');
    $(".envio form textarea").width('60%');

}
function portraitBig() {
    $("span.titulo").css("margin-left", "0px");
    $(".col-l").width('100%');
    $("span.titulo").css("fontSize", "20px");
    $(".envio form textarea").width('55%');
}
function portrait() {
    $("span.titulo").css("margin-left", "0px");
    $("span.titulo").css("fontSize", "18px");
    $(".col-l").width('100%');
    $(".envio form textarea").width('30%');
}



function modificar2() {
    if (document.getElementById) { //se obtiene el id
        var el = document.getElementById('col-s-1'); //se define la variable "el" igual a nuestro div
        if (el.style.display != 'none') {

            if (window.matchMedia("(orientation: portrait)").matches) {
                portraitBig();
            } else {
                landscapeBig();

            }
            $(".col-s-1").animate({ width: 'toggle' }); 
        }
    }
    

}

function mostrarMenu(id) {
    if (document.getElementById) { //se obtiene el id
        var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
        el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    }

}

function mostrarMenus(id, id2s) {

   
    if (document.getElementById) { //se obtiene el id
        var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
        el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    
        ocultarMenu(id2s)
    }


   
}

window.onload = function () {/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    mostrarMenu('contenedor');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
    mostrarMenu('contenedor2');
    mostrarMenu('buscador');
    mostrarMenu('adjuntarDiv');
    mostrarMenu('adjuntarDiv2');
    addElement();


    /////////////////////////


    var url = "direccion/traer.php?ids=21";
    $.getJSON(url, function (result) {
        $.each(result, function (i, campo) {
            var nombre = campo.nombre;
            var mensaje = campo.mensaje;
            var fecha = new Date(campo.fecha);
            //var fecha = campo.fecha;
            //$("datos-chat").append("<span>"+nombre+"</span>")
            //alert(nombre);
            var divOrigen = document.getElementById('cuerpo');
            var divRepositorio = document.createElement('div');
            divRepositorio.setAttribute("id", "datos-chat");
            
            var newContent = document.createElement('span');
            newContent.setAttribute("style", "color: #C9D952");
            newContent.appendChild(document.createTextNode(nombre));
            divRepositorio.appendChild(newContent);

            var newContent2 = document.createElement('span');
            
            var h = fecha.getHours();
            var m = fecha.getMinutes();
            var fecha = ((h > 12) ? (h - 12 + ":" + m + " pm") : (h + ":" + m + " am"));

            newContent2.appendChild(document.createTextNode(fecha));
            newContent2.setAttribute("style", "float: right;");
            divRepositorio.appendChild(newContent2);

            var newbr = document.createElement('BR');
            divRepositorio.appendChild(newbr);

            var newContent3 = document.createElement('span');
            newContent3.setAttribute("style", "color: #848484");
            newContent3.appendChild(document.createTextNode(mensaje));
            divRepositorio.appendChild(newContent3);
            divOrigen.appendChild(divRepositorio);

        })

        

    });



    var url = "direccion/clientes.php?ids=0";
    $.getJSON(url, function (result) {
        $.each(result, function (i, campo) {
            var nombre = campo.nombre;
            var num = campo.num;

            insertarContactos(nombre, num);

        })


    });



    /*for (var i = 0; i < 4; i++) {
        insertarContactos("Damian Cano Hernandez", 5);
        insertarContactos("Carlos Sanchez Hernandez", 10);
        insertarContactos("Dayron Romero Sanchez", 2);
    }

    insertarContactos("Pedro Pastor Alarcón", 2);*/
    
}



function ajax() {

    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var datos = JSON.parse(xmlhttp.responseText);
            $(".normal2").empty();
            numContactos = 0;

            $.each(datos, function (i, campo) {
                var usuario = campo.usuario;
                var nombre = campo.nombre;
                var num = campo.num;
                
                insertarContactos(nombre, num, usuario);

            })

        }
    }

    xmlhttp.open("GET", "direccion/clientes.php?ids=0", true);
    xmlhttp.send();

}

function ajax2(opcion) {

    var xmlhttp;
    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var datos = JSON.parse(xmlhttp.responseText);
            $(".cuerpo").empty();

            $.each(datos, function (i, campo) {
                var nombre = campo.nombre;
                var mensaje = campo.mensaje;
                var fecha = new Date(campo.fecha);

                insertarMensajes(nombre, mensaje, fecha, opcion);

            })

        }
    }

    var n = localStorage.getItem("usuario");

    xmlhttp.open("GET", "direccion/traer.php?ids="+n, true);
    xmlhttp.send();

}

setInterval(function () { ajax(); /*ajax2();*/ }, 5000);
setInterval(function () { ajax2(2); }, 5000);

function ocultarMenus(id,id2) {
    if (document.getElementById) { //se obtiene el id
        var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
        if (el.style.display == 'block') {
            el.style.display = 'none';
        }//damos un atributo display:none que oculta el div

        var e = document.getElementById(id2);
        if (e.style.display == 'block') {
            e.style.display = 'none';
        }//damos un atributo display:none que oculta el div
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

function ocultarM() {
   /* var el = document.getElementById('.contenido2'); //se define la variable "el" igual a nuestro div
    if (el.style.display != 'none') {
        $(".contenido2").animate({ width: 'toggle' });
        
    }*/
}

function pulsar(e) {

    var t = document.getElementById("mensaje").value;
    var texto = t;
    document.getElementById("mensaje").innerText = texto;

    var t = document.getElementById("mensaje").value;
    tD = t.split("\n");
    ns = tD.length;
    if (t.length < 25 && ns < 2) {
        lineas = 1;
        $(".envio form textarea").css("height", '40');
        $(".cuerpo").css("height", "78vh");

    }



    if ((e.keyCode === 13 && !e.shiftKey) && (lineas) < 5) {
        e.preventDefault();
        caracteres = 0;
        var e = document.getElementById("mensaje").offsetHeight;
        var a = e + 40;
        $(".envio form textarea").css("height", a);
        contador++;
        lineas++;
        tam -= 3;
        $(".cuerpo").css("height", tam + "vh");
    }

    else if (e.keyCode === 8) {
        caracteres--;
        if (caracteres == 1) {
            if (lineas != 1) {
                saltoPorCarac--;
                lineas--;
                //alert(lineas);
            }
            caracteres = 25;
        }
        var texto = document.getElementById("mensaje").value;
        //alert(texto);
        textoAreaDividido = texto.split("\n");
        n = textoAreaDividido.length;
        lineas -= (contador - n);
        //alert(lineas);
        contador = n;


        if (lineas <= 5) {
            var alto = lineas * 40;
            var altoContenido = 78 - ((lineas-1) * 3);
            $(".envio form textarea").css("height", alto);
            $(".cuerpo").css("height", altoContenido + "vh");
        } else if (lineas > 5) {
            var alto = 4 * 40;
            var altoContenido = 78 - (4 * 3);
            $(".envio form textarea").css("height", alto);
            $(".cuerpo").css("height", altoContenido + "vh");

        }
            //alert("borro salto de linea");
            /*var e = document.getElementById("mensaje").offsetHeight;
            var a = e - 40;
            $(".envio form textarea").css("height", a);
            
            tam += 3;
            $(".cuerpo").css("height", tam + "vh");
            caracteres = 25;*/
        

       /* if ((contador == 1 && n == 1)) {
            var a = 40;
            $(".envio form textarea").css("height", a);
            tam = 78;
            $(".cuerpo").css("height", tam + "vh");
        }*/
        

    }
    else {

        
        caracteres++;
        if (caracteres == 25) {
            lineas++;
            saltoPorCarac++;
            //alert(lineas);
            caracteres = 0;
        }

        if (lineas <= 5) {
            var alto = lineas * 40;
            var altoContenido = 78 - ((lineas-1) * 3);
            $(".envio form textarea").css("height", alto);
            $(".cuerpo").css("height", altoContenido + "vh");
        } else if (lineas > 5) {
            var alto = 4 * 40;
            var altoContenido = 78 - (4 * 3);
            $(".envio form textarea").css("height", alto);
            $(".cuerpo").css("height", altoContenido + "vh");

        }
    }
}

function addElement() {
    

    var divRepositorio = document.getElementById('adjuntarDiv2');

    for (var i = 0; i < emoticones.length; i++) {
        // Creamos el nuevo párrafo
        var newSpan = document.createElement("span"); 
        var newContent = document.createElement('span').appendChild(document.createTextNode(emoticones[i]));
        newSpan.appendChild(newContent);
        newSpan.setAttribute("id", i);
        newSpan.setAttribute("onClick", "imprimirEmoticon(this)");
        
       

        // Y ahora lo insertamos
        divRepositorio.appendChild(newSpan);

        //var segundo_p = document.getElementById('adjuntarDiv2').getElementsByTagName('span')[i];

        


        /*segundo_p.onclick = function (newSpan) {
            
            //var texto = emoticones[i];
            //alert(texto);
            //document.getElementById("mensaje").innerHTML = texto;
            alert(newSpan.id);
            
            var texto = em[i];
            document.getElementById("mensaje").innerHTML = texto;
            insertar(valorInstante);

            //$('.mensaje').val($('.mensaje').val() + ' ' + emoticones[i]);
        };*/
    }
    
    
}

function imprimirEmoticon(b) {

    var t = document.getElementById("mensaje").value;
    var texto = t+emoticones[b.id];
    document.getElementById("mensaje").innerText = texto;
    

}

function abrirConversacion(b) {
    var valor = b.id;
    var valor2 = valor.replace("i", "");
    var valor2 = valor2.replace("n", "");

    localStorage.setItem("usuario", parseInt(valor2));
    var nombre = "span.n" + valor2;
    //alert(nombre);
    var texto = $(nombre).html();
    //alert(texto);

    $(".titulo").empty();
    if (texto.length > 13) {

        $("span.titulo").css("margin", "0px");
    }
    else {
        $("span.titulo").css("margin-right:", "120px");
    }
    divA = document.getElementById('titulo');
    divA.appendChild(document.createTextNode(texto));
    ajax2(1);
    if (texto.length > 13) {

        $("span.titulo").css("margin", "0px");
    }
    else {
        $("span.titulo").css("margin-right:", "120px");
    }
    leer(valor2);

    
    
}

function moverPosicion() {
    var divO = document.getElementById('cuerpo');
    divO.scrollTop = '9999';
}


function insertar(a) {
    alert(a);
}

function traer() {
    $.getJSON('direccion/traer.php')
}




function insertarContactos(nombre, numero,usuario) {

    
    
    var divRepositorio = document.getElementById('normal2');
    var newDiv = document.createElement("div");
    var newContent = document.createElement('span');

    if (numContactos == 10) {
        numContactos = 0;
    }
    var iconUsuario = "icon_usuario" + numContactos+" usuario";
    numContactos++;

    newContent.setAttribute("class", iconUsuario);
    newContent.setAttribute("id", "i"+usuario);
    newContent.setAttribute("onClick", "abrirConversacion(this)");
    
    newDiv.appendChild(newContent);
    newDiv.setAttribute("style", "display: flex; align - items: center; width: 100 % auto; margin: 0; flex - direction: row; ");

    var newContent2 = document.createElement('span');
    newContent2.setAttribute("class", "n" + usuario+" wh font12");
    newContent2.appendChild(document.createTextNode(nombre));

    newContent2.setAttribute("id", "n"+usuario);
    newContent2.setAttribute("onClick", "abrirConversacion(this)");

    newDiv.appendChild(newContent2);


    var newDiv2 = document.createElement('div');
    newDiv2.setAttribute("style", "width:50px; height:25px; overflow:auto; ");


    var newContent3 = document.createElement('span');
    newContent3.setAttribute("id", "historieta");

    /////////////////
    if (numero > 9) {
        numero = '+9';
        newContent3.appendChild(document.createTextNode(numero));
        newContent3.setAttribute("class", "font10");
    } else {

        newContent3.appendChild(document.createTextNode("." + numero));

        
    }

    //newContent3.appendChild(document.createTextNode("." + numero));
    
    if (numero > 0) {
        newDiv2.appendChild(newContent3);
    }

    newDiv.appendChild(newDiv2);

    var newbr = document.createElement('BR');

    // Y ahora lo insertamos
    
    divRepositorio.appendChild(newDiv);
    divRepositorio.appendChild(newbr);
    divRepositorio.appendChild(newbr);
}

function insertarMensajes(nombre,mensaje,fecha,opcion) {
    
    //var fecha = campo.fecha;
    //$("datos-chat").append("<span>"+nombre+"</span>")
    //alert(nombre);
    var divOrigen = document.getElementById('cuerpo');
    var divRepositorio = document.createElement('div');
    divRepositorio.setAttribute("id", "datos-chat");

    var newContent = document.createElement('span');
    newContent.setAttribute("style", "color: #C9D952");
    newContent.appendChild(document.createTextNode(nombre));
    divRepositorio.appendChild(newContent);

    var newContent2 = document.createElement('span');

    var h = fecha.getHours();
    var m = fecha.getMinutes();
    var fecha = ((h > 12) ? (h - 12 + ":" + m + " pm") : (h + ":" + m + " am"));

    newContent2.appendChild(document.createTextNode(fecha));
    newContent2.setAttribute("style", "float: right;");
    divRepositorio.appendChild(newContent2);

    var newbr = document.createElement('BR');
    divRepositorio.appendChild(newbr);

    var newContent3 = document.createElement('span');
    newContent3.setAttribute("style", "color: #848484");
    newContent3.appendChild(document.createTextNode(mensaje));
    divRepositorio.appendChild(newContent3);
    divOrigen.appendChild(divRepositorio);

    if (opcion == 1) {
        divOrigen = document.getElementById('cuerpo');
        divOrigen.scrollTop = '9999';

        

    }

}

function obtenerColor() {
    
}

function getUrlVal() {
    var val = [], hash;
    var dir = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for (var i = 0; i < dir.length; i++) {
        hash = dir[i].split('=');
        val.push(hash[0]);
        val[hash[0]] = hash[1];
    }

    return val;

}


function enviar() {
    var mensaje = $('#mensaje').val();
    
    var nombre = 'Pedro Pastor Alarcon';
    var n = localStorage.getItem("usuario");
    n = parseInt(n) + 0;
    
    var datos = "ids=" + n + "&nombre=" + nombre + "&mensaje=" + mensaje;
    //alert(datos);
    if (mensaje.length > 0) {
        var ajax_request = new XMLHttpRequest();

        // Definimos como queremos realizar la comunicación
        ajax_request.open("GET", "direccion/enviar.php" + '?' + datos, true);

        //Enviamos la solicitud
        ajax_request.send();
    }
   
    document.getElementById("mensaje").value = '';
    ajax2(1);

      

}

function leer(valor) {
    
    var datos = "ids=" + valor;
    var ajax_request = new XMLHttpRequest();

    // Definimos como queremos realizar la comunicación
    ajax_request.open("GET", "direccion/lectura.php" + '?' + datos, true);

    //Enviamos la solicitud
    ajax_request.send();
}