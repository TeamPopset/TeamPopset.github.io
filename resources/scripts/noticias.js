function cargaNoticia(noticia,year,month) {
    console.log("Noticia Titular: " + noticia);
    console.log("Noticia Año: " + year);
    console.log("Noticia Mes: " + month);
}

$(document).ready(function () {
    var noticias = $(".img_noticia");
    for (var i = 0; i < noticias.length; i++) {
        var noticia = noticias[i];
        cargaNoticia(noticia.getAttribute("title"),noticia.getAttribute("data-year"),noticia.getAttribute("data-month"));
    }
});
