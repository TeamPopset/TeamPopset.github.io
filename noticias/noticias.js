function cargaNoticia(noticia) {
    var attrYear = noticia.getAttribute("data-year");
    var attrMonth = noticia.getAttribute("data-month");
    var attrTitle = noticia.getAttribute("title").split(" ").join("_");
    var direccion = "/"+attrYear+"/"+attrMonth+"/"+attrTitle+".json";
    console.log(direccion);
    console.log(window.lo);
    $.getJSON(direccion,function (data) {
        console.log("Json recuperado: " + data.toString());
        var articulo = document.createElement("article");
        var titular = document.createElement("h1").innerHTML=data.titular;
        var imagenTitular = document.createElement("img");
        var parrafos;
        for (var i=0; i <  data.parrafos.length; i++)
        $("#Noticia").appendChild(articulo);
    });
}

$(document).ready(function () {
    var noticias = $(".img_noticia");
    for (var i = 0; i < noticias.length; i++) {
        var noticia = noticias[i];
        noticia.setAttribute("onclick","cargaNoticia(this)");
    }
});
