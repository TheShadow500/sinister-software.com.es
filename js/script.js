/* Ajuste de Fecha */
function obtenerFecha(fecha){
    fecha = fecha.replace("lunes", "Lunes");
    fecha = fecha.replace("martes", "Martes");
    fecha = fecha.replace("miércoles", "Miércoles");
    fecha = fecha.replace("jueves", "Jueves");
    fecha = fecha.replace("viernes", "Viernes");
    fecha = fecha.replace("sábado", "Sábado");
    fecha = fecha.replace("domingo", "Domingo");
    fecha = fecha.replace("enero", "Enero");
    fecha = fecha.replace("febrero", "Febrero");
    fecha = fecha.replace("marzo", "Marzo");
    fecha = fecha.replace("abril", "Abril");
    fecha = fecha.replace("mayo", "Mayo");
    fecha = fecha.replace("junio", "Junio");
    fecha = fecha.replace("julio", "Julio");
    fecha = fecha.replace("agosto", "Agosto");
    fecha = fecha.replace("septiembre", "Septiembre");
    fecha = fecha.replace("octubre", "Octubre");
    fecha = fecha.replace("noviembre", "Noviembre");
    fecha = fecha.replace("diciembre", "Diciembre");
    document.write(fecha);
}

/* Ajuste de Noticias Antiguas */
function obtenerNoticias(noticia){
    if(noticia.length <20){
        document.write(noticia);
    }
    else{
        let titulo = noticia.split("-", 1);
        document.write(titulo[0] + "...");
    }
}

/* Ajuste de Hora */
function obtenerHora(aux){
    let hora = aux.split(":");
    document.write(hora[0] + ":" + hora[1]);
}

/* Comentarios Totales */
function numerocomentarios(comentarios){
    if(comentarios == 1){
        document.write("comentario");
    }
    else{
        document.write("comentarios");
    }
}

/* Política de Cookies */
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".buttons .item");
cookieButton.addEventListener("click", function(){
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
});
setTimeout(function(){
    if (!localStorage.getItem("cookieBannerDisplayed")){
        cookieContainer.classList.add("active");
    }
}, 2000);