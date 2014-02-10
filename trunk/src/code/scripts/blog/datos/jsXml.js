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
		var textoNota = '<td align="center"><span>'+nota+'</span></td>';
		texto = texto + textoNota;
		
		var mobiliario = $(this).find("mobiliario").text();
		var textoMobiliario = '<td align="center"><span>'+mobiliario+'</span></td>';
		texto = texto + textoMobiliario;
		
		var personal = $(this).find("personal").text();
		var textoPersonal = '<td align="center"><span>'+personal+'</span></td>';
		texto = texto + textoPersonal;
		
		var precio = $(this).find("precio").text();
		var textoPrecio = '<td align="center"><span>'+precio+'</span></td>';
		texto = texto + textoPrecio;
		
		var masificacion = $(this).find("masificacion").text();
		var textoMasificacion = '<td align="center"><span>'+masificacion+'</span></td>';
		texto = texto + textoMasificacion;

		var localizacion = $(this).find("localizacion").text();
		var textoLocalizacion = '<td align="center"><span>'+localizacion+'</span></td>';
		texto = texto + textoLocalizacion;

		var mantenimiento = $(this).find("mantenimiento").text();
		var textoMantenimiento = '<td align="center"><span>'+mantenimiento+'</span></td>';
		texto = texto + textoMantenimiento;

		var sedes = $(this).find("sedes").text();
		var textoSedes = '<td align="center"><span>'+sedes+'</span></td>';
		texto = texto + textoSedes;

		var extras = $(this).find("extras").text();
		var textoExtras = '<td align="center"><span>'+extras+'</span></td>';
		texto = texto + textoExtras;
		
		var taquillas = $(this).find("taquillas").text();
		var textoTaquillas = '<td align="center"><span>'+taquillas+'</span></td>';
		texto = texto + textoTaquillas;

		var duchas = $(this).find("duchas").text();
		var textoDuchas = '<td align="center"><span>'+duchas+'</span></td>';
		texto = texto + textoDuchas;

		var pesoMaxMancuerna = $(this).find("pesoMaxMancuerna").text();
		var textoPesoMaxMancuerna = '<td align="center"><span>'+pesoMaxMancuerna+'</span></td>';
		texto = texto + textoPesoMaxMancuerna;

		texto = texto + '</tr>';
		
		$('#tabla tbody').append(texto);
})
};