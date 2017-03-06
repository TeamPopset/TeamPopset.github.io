function cargaNoticia(noticia,year,month) {
    console.log("Noticia Titular: " + noticia);
    console.log("Noticia Año: " + year);
    console.log("Noticia Mes: " + month);
}

$(document).ready(function () {
    var noticias = $(".img_noticia");
    for (var i = 0; i < noticias.length; i++) {
        var noticia = noticias[i];
        noticia.on({'click':
            function(){
                noticia.attr('onclick','cargaNoticia('+noticia.getAttribute("title")+','+noticia.getAttribute("year")+','+noticia.getAttribute("month")+')');
            }
        });
    }
});
