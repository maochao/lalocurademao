$(document).ready(function () {cargarDatos()});

function cargarDatos () {

_xml =  $.parseXML(archivoGimnasios);
$xmlDoc = $(_xml);
$('#tabla tbody tr').remove();
$xmlDoc.find("gimnasio").each(function (){
		
		var texto = '<tr>';
		
		var nombre = $(this).find("nombre").text();
		var url = $(this).find("url").text();
		var textoNombre = '<td><a id="nombre" href="'+url+'"><span>'+nombre+'</span></a></td>';
		texto = texto + textoNombre;
		
		var nota = $(this).find("nota").text();
		var textoNota = '<td><span>'+nota+'</span></td>';
		texto = texto + textoNota;
		
		var taquillas = $(this).find("taquillas").text();
		var textoTaquilllas = '<td><span>'+taquillas+'</span></td>';
		texto = texto + textoTaquilllas;
		
		texto = texto + '</tr>';
		
		$('#tabla tbody').append(texto);
})
};