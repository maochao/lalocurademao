$(document).ready(function () {
	cargarDatosInicio();
	rellenarComboCiudades();
	filtrarPorCiudad();
	});

function rellenarComboCiudades(){
    $.each(arrayCiudades, function(val, text) {
        $('#ciudades').append(
            $('<option></option>').val(val).html(text)
        );            
})}

function filtrarPorCiudad(){
	 $("#ciudades").change(function(){
         var op = $("#ciudades option:selected");
         cargarDatosCiudad(op.text());
 });
}

function establecerTipoGym(tipo){
    var tipoGym = "";
    
    if (tipo == "LC")
    	{tipoGym = "LOW COST"}
    else if (tipo == "FL")
		{tipoGym = "FITNESS LUJO"}
    else if (tipo == "BR")
		{tipoGym = "BARRIO"}
    else if (tipo == "CD")
		{tipoGym = "CENTRO DEPORTIVO"}
    else if (tipo == "HT")
		{tipoGym = "HOTEL"}
    
    return tipoGym;
});
}

function cargarDatosCiudad(ciudad) {

	var ciudadCombo = ciudad;
	_xml =  $.parseXML(archivoGimnasios);
	$xmlDoc = $(_xml);
	$('#myTable tbody tr').remove();
	$xmlDoc.find("gimnasio").each(function (){
            
    var texto = '<tr>';
    
    var ciudad = $(this).find("ciudad").text();
	if (!existeEnArray(ciudad,arrayCiudades)){
		arrayCiudades.push(ciudad);
	}
	
	  if(ciudadCombo == ciudad || ciudadCombo == "SELECCIONA UNA CIUDAD"){  
		  
	        var foto = $(this).find("foto").text();
	        var textoFoto = '<td><img width="50" heigth="50" src="'+foto+'"/></td>';
	        texto = texto + textoFoto;
		  
		    var nombre = $(this).find("nombre").text();
		    var url = $(this).find("url").text();
		    var textoNombre = '<td><a id="nombre" width="600" href="'+url+'"><span>'+nombre+'</span></a></td>';
		    texto = texto + textoNombre;
		    
		    var nota = $(this).find("nota").text();
		    var textoNota = '<td align="center" width="5" width="5"><span>'+nota+'</span></td>';
		    texto = texto + textoNota;
		    
		    var mobiliario = $(this).find("mobiliario").text();
		    var textoMobiliario = '<td align="center" width="5"><span>'+mobiliario+'</span></td>';
		    texto = texto + textoMobiliario;
		    
		    var personal = $(this).find("personal").text();
		    var textoPersonal = '<td align="center" width="5"><span>'+personal+'</span></td>';
		    texto = texto + textoPersonal;
		    
		    var precio = $(this).find("precio").text();
		    var textoPrecio = '<td align="center" width="5"><span>'+precio+'</span></td>';
		    texto = texto + textoPrecio;
		    
		    var masificacion = $(this).find("masificacion").text();
		    var textoMasificacion = '<td align="center" width="5"><span>'+masificacion+'</span></td>';
		    texto = texto + textoMasificacion;
		
		    var localizacion = $(this).find("localizacion").text();
		    var textoLocalizacion = '<td align="center" width="5"><span>'+localizacion+'</span></td>';
		    texto = texto + textoLocalizacion;
		
		    var mantenimiento = $(this).find("mantenimiento").text();
		    var textoMantenimiento = '<td align="center" width="5"><span>'+mantenimiento+'</span></td>';
		    texto = texto + textoMantenimiento;
		
		    var sedes = $(this).find("sedes").text();
		    var textoSedes = '<td align="center" width="5"><span>'+sedes+'</span></td>';
		    texto = texto + textoSedes;
		
		    var extras = $(this).find("extras").text();
		    var textoExtras = '<td align="center" width="5"><span>'+extras+'</span></td>';
		    texto = texto + textoExtras;
		    
		    var taquillas = $(this).find("taquillas").text();
		    var textoTaquillas = '<td align="center" width="5"><span>'+taquillas+'</span></td>';
		    texto = texto + textoTaquillas;
		
		    var duchas = $(this).find("duchas").text();
		    var textoDuchas = '<td align="center" width="5"><span>'+duchas+'</span></td>';
		    texto = texto + textoDuchas;
		
		    var pesoMaxMancuerna = $(this).find("pesoMaxMancuerna").text();
		    var textoPesoMaxMancuerna = '<td align="center" width="5"><span>'+pesoMaxMancuerna+'</span></td>';
		    texto = texto + textoPesoMaxMancuerna;
		    
		    var tipo = $(this).find("tipo").text();
		    var textoTipo = '<td align="center" width="5"><span>'+establecerTipoGym(tipo)+'</span></td>';
		    texto = texto + textoTipo;
	  }
	    
    texto = texto + '</tr>';
    
    $('#myTable tbody').append(texto);})
};

function cargarDatosInicio() {

		_xml =  $.parseXML(archivoGimnasios);
		$xmlDoc = $(_xml);
		$('#myTable tbody tr').remove();
		$xmlDoc.find("gimnasio").each(function (){
                
        var texto = '<tr>';
        
        var foto = $(this).find("foto").text();
        var textoFoto = '<td><img width="50" heigth="50" src="'+foto+'"/></td>';
        texto = texto + textoFoto;
        
        var nombre = $(this).find("nombre").text();
        var url = $(this).find("url").text();
        var textoNombre = '<td><a id="nombre" width="600" href="'+url+'"><span>'+nombre+'</span></a></td>';
        texto = texto + textoNombre;
        
        var nota = $(this).find("nota").text();
        var textoNota = '<td align="center" width="5"><span>'+nota+'</span></td>';
        texto = texto + textoNota;
        
        var mobiliario = $(this).find("mobiliario").text();
        var textoMobiliario = '<td align="center" width="5"><span>'+mobiliario+'</span></td>';
        texto = texto + textoMobiliario;
        
        var personal = $(this).find("personal").text();
        var textoPersonal = '<td align="center" width="5"><span>'+personal+'</span></td>';
        texto = texto + textoPersonal;
        
        var precio = $(this).find("precio").text();
        var textoPrecio = '<td align="center" width="5"><span>'+precio+'</span></td>';
        texto = texto + textoPrecio;
        
        var masificacion = $(this).find("masificacion").text();
        var textoMasificacion = '<td align="center" width="5"><span>'+masificacion+'</span></td>';
        texto = texto + textoMasificacion;

        var localizacion = $(this).find("localizacion").text();
        var textoLocalizacion = '<td align="center" width="5"><span>'+localizacion+'</span></td>';
        texto = texto + textoLocalizacion;

        var mantenimiento = $(this).find("mantenimiento").text();
        var textoMantenimiento = '<td align="center" width="5"><span>'+mantenimiento+'</span></td>';
        texto = texto + textoMantenimiento;

        var sedes = $(this).find("sedes").text();
        var textoSedes = '<td align="center" width="5"><span>'+sedes+'</span></td>';
        texto = texto + textoSedes;

        var extras = $(this).find("extras").text();
        var textoExtras = '<td align="center" width="5"><span>'+extras+'</span></td>';
        texto = texto + textoExtras;
        
        var taquillas = $(this).find("taquillas").text();
        var textoTaquillas = '<td align="center" width="5"><span>'+taquillas+'</span></td>';
        texto = texto + textoTaquillas;

        var duchas = $(this).find("duchas").text();
        var textoDuchas = '<td align="center" width="5"><span>'+duchas+'</span></td>';
        texto = texto + textoDuchas;

        var pesoMaxMancuerna = $(this).find("pesoMaxMancuerna").text();
        var textoPesoMaxMancuerna = '<td align="center" width="5"><span>'+pesoMaxMancuerna+'</span></td>';
        texto = texto + textoPesoMaxMancuerna;
        
	    var tipo = $(this).find("tipo").text();
	    var textoTipo = '<td align="center" width="5"><span>'+establecerTipoGym(tipo)+'</span></td>';
	    texto = texto + textoTipo;
        
        var ciudad = $(this).find("ciudad").text();
    	if (!existeEnArray(ciudad,arrayCiudades)){
    		arrayCiudades.push(ciudad);
    	}

        texto = texto + '</tr>';
        
        $('#myTable tbody').append(texto);})
};