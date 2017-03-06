function crearLinkNoticia(noticia) {
    console.log("Noticia Titular: " + noticia.getAttribute("title"));
    console.log("Noticia Año: " + noticia.getAttribute("data-year"));
    console.log("Noticia Mes: " + noticia.getAttribute("data-month"));
}

$(document).ready(function () {
    var noticias = $(".img_noticia");
    for (var i = 0; i < noticias.length; i++) {
        var noticia = noticias[i];
        crearLinkNoticia(noticia);
    }
});
