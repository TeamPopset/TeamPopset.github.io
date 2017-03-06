function crearLinkNoticia(noticia) {
    console.log("Noticia Titular: " + noticia.attr("title"));
    console.log("Noticia Año: " + noticia.attr("data-year"));
    console.log("Noticia Mes: " + noticia.attr());
}

$(document).ready(function () {
    var noticias = $(".img_noticia");
    for (var i = 0; i < noticias.length; i++) {
        var noticia = noticias[i];
        crearLinkNoticia(noticia);
    }
});
