var codeHead =
    '<link rel="stylesheet" href="/resources/css/layout.css">' +
    '<link rel="stylesheet" href="/resources/css/common.css">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
$("head").append(codeHead);

var codeHeader =
    '<div class="col span-2 DEBUG" id="Historia"><a href="/historia/">Historia</a></div>' +
    '<div class="col span-2 DEBUG" id="Jugadores"><a href="/equipo/">Equipo</a></div>' +
    '<div class="col span-4 DEBUG" id="Logo"><a href="/"><p>Inicio</p><img src="/resources/images/logo.png" alt="Logo" class="expand"></a></div>' +
    '<div class="col span-2 DEBUG" id="Noticias"><a href="/calendario/">Calendario</a></div>' +
    '<div class="col span-2 DEBUG" id="Patrocinadores"><a href="/patrocinadores/">Patrocinadores</a></div>';

var header = document.createElement("header");
header.classList.add("section");
header.classList.add("group");
header.innerHTML = codeHeader;

var codeFooter =
    '<div class="span-1" id="Logo">'+
    '<img src = "/resources/images/logo.png">'+
    '</div>'+
    '<div class="span-3" id="teamInfo">' +
    '<h2>Acerca del Equipo</h2>' +
    'Team Popset es un equipo de Counter Strike Global Offensive que poco a poco busca crecer en el panorama nacional de España' +
    '</div>' +
    '<div class="span-4" id="contact">' +
    '</div>' +
    '<div class="empty span-4">' +
    '</div>';

var footer = document.createElement("footer");
footer.classList.add("section");
footer.classList.add("group");
footer.innerHTML = codeFooter;

$(document).ready(function () {
    document.body.insertBefore(header,document.body.firstChild);
    document.body.appendChild(footer);
    console.log("web cargada");
});

