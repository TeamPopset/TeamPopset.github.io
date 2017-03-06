function cargaNoticia(noticia) {
    console.log("Noticia: " + noticia);
}

$(document).ready(function () {
    var noticias = $(".img_noticia");
    for (var i = 0; i < noticias.length; i++) {
        console.log(noticias[i].getAttribute("title"));
        noticias[i].on("click",cargaNoticia(noticias[i]));
    }
});
