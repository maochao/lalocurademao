//PASS = gR8wR6bw5vn4
var tipoBlog = "PUNK";
//var tipoBlog = "FITNESS";

//var ruta = "LA%20LOCURA%20DE%20MAO_VAIO_files/";
// var ruta = "LA%20LOCURA%20DE%20MAO_files/";
var ruta = "http://sites.google.com/site/lalocurademao/scripts/";

if (typeof tipoBlogExterna != "undefined") {
	tipoBlog = tipoBlogExterna;
}

if (tipoBlog == "PUNK") {
	// ASPECTOS BLOG PUNK
	document.body.style.background = "url(' " + ruta
			+ "fondo5.jpg') repeat scroll left top #000000";
	document.body.style.color = "pink";
	document.getElementById('Header1_headerimg').src = ruta
			+ "GrayscaleEdgyPunkRock_tituloBlog.png";
} else if (tipoBlog == "FITNESS") {
	// ASPECTOS BLOG FITNESS
	document.body.style.background = "url(' " + ruta
			+ "fondoFit.jpg') repeat scroll left top #000000";
	document.getElementById('Header1_headerimg').src = ruta
			+ "logo1BlogspotLARGO.png";
	document.getElementById('Header1_headerimg').width = "790";
	document.body.style.color = "black";
	//document.getElementById('fondoEntrada').style.backgroundColor = "lavender";
   
}
