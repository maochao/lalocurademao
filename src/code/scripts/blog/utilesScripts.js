//PASS = gR8wR6bw5vn4
//var tipoBlog = "PUNK";
var tipoBlog = "FITNESS";

//var ruta = "LA%20LOCURA%20DE%20MAO_VAIO_files/";
//var ruta = "LA%20LOCURA%20DE%20MAO_files/";
var ruta = "http://sites.google.com/site/lalocurademao/scripts/";
var rutaCssPunk = "https://lalocurademao.googlecode.com/svn/trunk/src/code/scripts/blog/css/utilesCssPunk.css";
var rutaCssFitness = "https://lalocurademao.googlecode.com/svn/trunk/src/code/scripts/blog/css/utilesCssFitness.css";
var rutaXmlDatosGimnasios = "https://lalocurademao.googlecode.com/svn/trunk/src/code/scripts/blog/datos/archivoGimnasios.xml";

function cargarFicheroCss(filename, filetype) {
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype == "css") { //if filename is an external CSS file
        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
	    if (typeof fileref != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}

if (typeof (tipoBlogEntrada) != "undefined") {
	tipoBlog = tipoBlogEntrada;
}

if (tipoBlog == "PUNK") {
	// ASPECTOS BLOG PUNK
	document.body.style.background = "url(' " + ruta
			+ "fondo5.jpg') repeat scroll left top #000000";
	document.body.style.color = "pink";
	document.getElementById('Header1_headerimg').src = ruta
			+ "GrayscaleEdgyPunkRock_tituloBlog.png";
    document.getElementById('Header1_headerimg').width = "780";
	cargarFicheroCss(rutaCssPunk, "css");
	
} else if (tipoBlog == "FITNESS") {
	// ASPECTOS BLOG FITNESS
	document.body.style.background = "url(' " + ruta
			+ "fondoFit.jpg') repeat scroll left top #000000";
	document.getElementById('Header1_headerimg').src = ruta
			+ "logo1BlogspotLARGO.png";
	document.getElementById('Header1_headerimg').width = "780";
	cargarFicheroCss(rutaCssFitness, "css");
}

//CARGA DE DATOS CON LOS GIMNASIOS
function loadXMLDoc(filename)
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else // code for IE5 and IE6
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",filename,false);
xhttp.send();
return xhttp.responseText;
}

//Función para encapsular la detección del objeto que tenemos que usar para AJAX inter-dominios, según el navegador en el que estemos.
function createCorsObject(){

//Inicialmente creamos XHR
var xhrObject = new XMLHttpRequest();
    //comprobamos si XHR tiene capacidades CORS o es el antiguo
    if ("withCredentials" in xhrObject){
        return xhrObject;
    }
    //si es el antiguo, comprobamos si el navegador soporta el objeto XDR
    else if (typeof XDomainRequest != "undefined"){
         xhrObject = new XDomainRequest();
    } else {
    xhrObject = null;
    }
return xhrObject;
}


function loadXMLDocCors(filename)
{
	//obtenemos un objeto para AJAX cross-dominio
	var xhrObject = createCorsObject();
	
	//si tenemos un objeto válido...
	if (xhrObject){
	
	//definimos los parámetros de la petición HTTP
	xhrObject.open("get", filename);
	
	//definimos un callback para tratar los datos que recibamos
	xhrObject.onload = function(){
		alert(xhrObjet.responseText)
	};
	
	//definimos un callback para tratar el caso de error
	xhrObject.onerror = function(){
	    // código para caso de error
	};
	
	//Enviamos la petición
	xhrObject.send(null);
	}
}

var filename = 'https://lalocurademao.googlecode.com/svn/trunk/src/code/scripts/blog/datos/archivoDatos';
var xmlDoc = loadXMLDocCors(filename);
alert(xmlDoc);