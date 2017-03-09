function cargaNoticia(noticia) {
    var idNoticia = document.getElementById("Noticia");

    idNoticia.style.visibility = "hidden";
    idNoticia.innerHTML = "";

    var attrYear = noticia.getAttribute("data-year");
    var attrMonth = noticia.getAttribute("data-month");
    var attrTitle = noticia.getAttribute("title").split(" ").join("_");
    var direccion = "/noticias/" + attrYear + "/" + attrMonth + "/" + attrTitle + ".json";

    $.getJSON(direccion, function (data) {
        if (data != undefined) {
            var articulo = document.createElement("article");
            var titular = document.createElement("h1");
            titular.innerHTML = data.titular;
            //var imagenTitular = document.createElement("img");
            //imagenTitular.setAttribute("src",attrTitle+".png");

            articulo.appendChild(titular);
            //articulo.appendChild(imagenTitular);

            var parrafosJSON = data.parrafos;
            $.each(parrafosJSON, function (k, v) {
                var parrafo = document.createElement("p");
                parrafo.innerHTML = v;
                articulo.appendChild(parrafo);
            });
            idNoticia.appendChild(articulo);

        }
    });
    idNoticia.style.visibility = "visible";
}

$(document).ready(function () {
    var noticias = $(".img_noticia");
    for (var i = 0; i < noticias.length; i++) {
        var noticia = noticias[i];
        noticia.setAttribute("onclick", "cargaNoticia(this)");
    }
});
