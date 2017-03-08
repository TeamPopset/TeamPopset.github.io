function cargaNoticia(noticia) {
    var attrYear = noticia.getAttribute("data-year");
    var attrMonth = noticia.getAttribute("data-month");
    var attrTitle = noticia.getAttribute("title").split(" ").join("_");
    var direccion = "/noticias/"+attrYear+"/"+attrMonth+"/"+attrTitle+".json";
    console.log(direccion);
    $.getJSON(direccion,function (data) {
        console.log("Json recuperado: " + data.parseJSON);
        var articulo = document.createElement("article");
        var titular = document.createElement("h1");
        titular.innerHTML=data.titular;
        var imagenTitular = document.createElement("img").setAttribute("src",attrTitle+".png");

        articulo.appendChild(titular);
        articulo.appendChild(imagenTitular);

        var parrafos = data.parrafos;
        $.each(parrafos, function (k,v) {
            console.log(k+":"+v);
        });

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
