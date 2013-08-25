//var aux = document.getElementById(Header1_headerimg);
//aux.width = "900";
//var tipoBlog = "FITNESS";
var tipoBlog = "PUNK";

if (tipoBlog == "PUNK") {
	// ASPECTOS BLOG PUNK
	document.body.style.background = "url('http://sites.google.com/site/lalocurademao/scripts/fondo5.jpg') repeat scroll left top #000000";
} else if (tipoBlog == "FITNESS"){
	// ASPECTOS BLOG FITNESS
	document.body.style.background = "url('LA%20LOCURA%20DE%20MAO_files/fondoFit.jpg') repeat scroll left top #000000";
	document.getElementById('Header1_headerimg').src = "LA%20LOCURA%20DE%20MAO_files/logo1BlogspotLARGO.png";
}