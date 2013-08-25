var tipoBlog = "PUNK";
// var tipoBlog = "FITNESS";

if (typeof tipoBlogExterna != "undefined") {
	tipoBlog = tipoBlogExterna;
}

if (tipoBlog == "PUNK") {
	// ASPECTOS BLOG PUNK
	document.body.style.background = "url('http://sites.google.com/site/lalocurademao/scripts/fondo5.jpg') repeat scroll left top #000000";
} else if (tipoBlog == "FITNESS") {
	// ASPECTOS BLOG FITNESS
	document.body.style.background = "url('http://sites.google.com/site/lalocurademao/scripts/fondoFit.jpg') repeat scroll left top #000000";
	document.getElementById('Header1_headerimg').src = "http://sites.google.com/site/lalocurademao/scripts/logo1BlogspotLARGO.png";
}