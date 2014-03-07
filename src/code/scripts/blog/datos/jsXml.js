$(document).ready(function () {
  cargarEntrada("CLUB ATLAS SANTA ELENA");
	cargarDatosInicio();
	rellenarComboCiudades();
	rellenarComboTipos();
	filtrarPorCiudad();
	filtrarPorTipo();
	});

function rellenarComboCiudades(){
    $.each(arrayCiudades, function(val, text) {
        $('#ciudades').append(
            $('<option></option>').val(val).html(text)
        );            
})}

function rellenarComboTipos(){
    $.each(arrayTipos, function(val, text) {
        $('#tipos').append(
            $('<option></option>').val(val).html(establecerTipoGym(text))
        );            
})}

function filtrarPorCiudad(){
	 $("#ciudades").change(function(){
         var op = $("#ciudades option:selected");
         cargarDatosCiudad(op.text());
 });
}

function filtrarPorTipo(){
	 $("#tipos").change(function(){
        var op = $("#tipos option:selected");
        cargarDatosTipos(op.text());
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
}

function cargarEntrada(gimnasio) {

	_xml =  $.parseXML(archivoGimnasios);
	$xmlDoc = $(_xml);
	$('#entrada div ').remove();
	$xmlDoc.find("gimnasio").each(function (){
	var todo = $(this);
	var nombre = todo.find("nombre").text();
         if(gimnasio == nombre){
        	 
        	 var presentacion = todo.find("presentacion").text();
        	 var presentacionTexto = '<p>' + presentacion + '</p>';
        	 $('#presentacion').append(presentacionTexto);
        	 
        	 var instalaciones = todo.find("instalaciones").text();
        	 var instalacionesTexto = '<li><b>Instalaciones: </b>' + instalaciones + '</li>';
        	 $('#instalaciones').append(instalacionesTexto);
        	 
        	 var staff = todo.find("staff").text();
        	 var staffTexto = '<li><b>Staff: </b>' + staff + '</li>';
        	 $('#staff').append(staffTexto);
        	 
        	 var musculacion = todo.find("musculacion").text();
        	 var musculacionTexto = '<li><b>Musculacion: </b>' + musculacion + '</li>';
        	 $('#musculacion').append(musculacionTexto);        	 
        	 
        	 var cardio = todo.find("cardio").text();
        	 var cardioTexto = '<li><b>Cardio: </b>' + cardio + '</li>';
        	 $('#cardio').append(cardioTexto);
        	 
        	 var vestuarios = todo.find("vestuarios").text();
        	 var vestuariosTexto = '<li><b>Vestuarios: </b>' + vestuarios + '</li>';
        	 $('#vestuarios').append(vestuariosTexto);
        	 
        	 var ubicacion = todo.find("ubicacion").text();
        	 var ubicacionTexto = '<li><b>Ubicacion: </b>' + ubicacion + '</li>';
        	 $('#ubicacion').append(ubicacionTexto);
        	 
        	 var extras = todo.find("extras").text();
        	 var extrasTexto = '<li><b>Extras: </b>' + extras + '</li>';
        	 $('#extras').append(extrasTexto);
        	 
        	 $('#tablaEntrada tbody tr').remove();
        	 
        	 	var texto = '';
   			    texto = formarTextoEntrada(todo,texto);
        	    
        	 $('#tablaEntrada tbody').append(texto);
         }   
})
};

function formarTextoEntrada(todo,texto){
    
	var nombre = todo.find("nombre").text();
	var nombreTexto = '<tr><th>CARACTERÍSTICA/GIMNASIO</th><th>' + nombre + '</th></tr>';
    texto = texto + nombreTexto;
    
	var stuff = todo.find("stuff").text();
	var stuffTexto = '<tr><th>Nota Stuff</th><th>' + stuff + '</th></tr>';
    texto = texto + stuffTexto;
    
	var higiene = todo.find("higiene").text();
	var higieneTexto = '<tr><th>Control Higiene</th><th>' + higiene + '</th></tr>';
    texto = texto + higieneTexto;
    
	var desorden = todo.find("desorden").text();
	var desordenTexto = '<tr><th>Desorden Sala Musculación</th><th>' + desorden + '</th></tr>';
    texto = texto + desordenTexto;
    
	var metro = todo.find("metro").text();
	var metroTexto = '<tr><th>Metro Cercano</th><th>' + metro + '</th></tr>';
    texto = texto + metroTexto;
    
	var aparcamiento = todo.find("aparcamiento").text();
	var aparcamientoTexto = '<tr><th>Aparcamiento</th><th>' + aparcamiento + '</th></tr>';
    texto = texto + aparcamientoTexto;
    
	var plantas = todo.find("plantas").text();
	var plantasTexto = '<tr><th>Plantas</th><th>' + plantas + '</th></tr>';
    texto = texto + plantasTexto;
    
	var duchas = todo.find("duchas").text();
	var duchasTexto = '<tr><th>NºDuchas</th><th>' + duchas + '</th></tr>';
    texto = texto + duchasTexto;
    
	var puertaDuchas = todo.find("puertaDuchas").text();
	var puertaDuchasTexto = '<tr><th>Puerta Duchas</th><th>' + puertaDuchas + '</th></tr>';
    texto = texto + puertaDuchasTexto;
    
	var taquillas = todo.find("taquillas").text();
	var taquillasTexto = '<tr><th>Nº Taquillas</th><th>' + taquillas + '</th></tr>';
    texto = texto + taquillasTexto;
    
	var secador = todo.find("secador").text();
	var secadorTexto = '<tr><th>Secador</th><th>' + secador + '</th></tr>';
    texto = texto + secadorTexto;
    
	var crucesPolea = todo.find("crucesPolea").text();
	var crucesPoleaTexto = '<tr><th>Máquina Cruces Polea</th><th>' + crucesPolea + '</th></tr>';
    texto = texto + crucesPoleaTexto;
    
	var hackSentadillas = todo.find("hackSentadillas").text();
	var hackSentadillasTexto = '<tr><th>Hack Sentadillas</th><th>' + hackSentadillas + '</th></tr>';
    texto = texto + hackSentadillasTexto;
    
	var maquinaSoleo = todo.find("maquinaSoleo").text();
	var maquinaSoleoTexto = '<tr><th>Máquina Soleo</th><th>' + maquinaSoleo + '</th></tr>';
    texto = texto + maquinaSoleoTexto;
    
	var pesoMancuerna = todo.find("pesoMancuerna").text();
	var pesoMancuernaTexto = '<tr><th>Peso Mancuernas</th><th>' + pesoMancuerna + '</th></tr>';
    texto = texto + pesoMancuernaTexto;
    
    return texto;
}

function cargarDatosInicio(tipo) {

	var tipoCombo = tipo;
	_xml =  $.parseXML(archivoGimnasios);
	$xmlDoc = $(_xml);
	$('#myTable tbody tr').remove();
	$xmlDoc.find("gimnasio").each(function (){
            
    var texto = '<tr>';
    
    var tipoGym = $(this).find("tipo").text();
	if (!existeEnArray(tipoGym,arrayTipos)){
		arrayTipos.push(establecerTipoGym(tipoGym));
	}
	
	  if(tipoCombo == establecerTipoGym(tipoGym) || tipoCombo == "SELECCIONA UN TIPO"){  
		  
	      var todo = $(this);
		  texto = formarTexto(todo,texto);
	  }
	    
    texto = texto + '</tr>';
    
    $('#myTable tbody').append(texto);})
};

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
		  
	      var todo = $(this);
		  texto = formarTexto(todo,texto);
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
        
        var todo = $(this);
        texto = formarTexto(todo,texto);
        
        var ciudad = $(this).find("ciudad").text();
    	if (!existeEnArray(ciudad,arrayCiudades)){
    		arrayCiudades.push(ciudad);
    	}
    	
        var tipoGym = $(this).find("tipo").text();
    	if (!existeEnArray(tipoGym,arrayTipos)){
    		arrayTipos.push(tipoGym);
    	}

        texto = texto + '</tr>';
        
        $('#myTable tbody').append(texto);})
};

function formarTexto(todo,texto){
	    
		var foto = todo.find("foto").text();
	    var textoFoto = '<td><img width="50" heigth="50" src="'+foto+'"/></td>';
	    texto = texto + textoFoto;
	    
        var nombre = todo.find("nombre").text();
        var url = todo.find("url").text();
        var textoNombre = '<td><a id="nombre" width="600" href="'+url+'"><span>'+nombre+'</span></a></td>';
        texto = texto + textoNombre;
        
        var nota = todo.find("nota").text();
        var textoNota = '<td align="center" width="5"><span>'+nota+'</span></td>';
        texto = texto + textoNota;
        
        var mobiliario = todo.find("mobiliario").text();
        var textoMobiliario = '<td align="center" width="5"><span>'+mobiliario+'</span></td>';
        texto = texto + textoMobiliario;
        
        var personal = todo.find("personal").text();
        var textoPersonal = '<td align="center" width="5"><span>'+personal+'</span></td>';
        texto = texto + textoPersonal;
        
        var precio = todo.find("precio").text();
        var textoPrecio = '<td align="center" width="5"><span>'+precio+'</span></td>';
        texto = texto + textoPrecio;
        
        var masificacion = todo.find("masificacion").text();
        var textoMasificacion = '<td align="center" width="5"><span>'+masificacion+'</span></td>';
        texto = texto + textoMasificacion;

        var localizacion = todo.find("localizacion").text();
        var textoLocalizacion = '<td align="center" width="5"><span>'+localizacion+'</span></td>';
        texto = texto + textoLocalizacion;

        var mantenimiento = todo.find("mantenimiento").text();
        var textoMantenimiento = '<td align="center" width="5"><span>'+mantenimiento+'</span></td>';
        texto = texto + textoMantenimiento;

        var sedes = todo.find("sedes").text();
        var textoSedes = '<td align="center" width="5"><span>'+sedes+'</span></td>';
        texto = texto + textoSedes;

        var extras = todo.find("extras").text();
        var textoExtras = '<td align="center" width="5"><span>'+extras+'</span></td>';
        texto = texto + textoExtras;
        
        var taquillas = todo.find("taquillas").text();
        var textoTaquillas = '<td align="center" width="5"><span>'+taquillas+'</span></td>';
        texto = texto + textoTaquillas;

        var duchas = todo.find("duchas").text();
        var textoDuchas = '<td align="center" width="5"><span>'+duchas+'</span></td>';
        texto = texto + textoDuchas;

        var pesoMaxMancuerna = todo.find("pesoMaxMancuerna").text();
        var textoPesoMaxMancuerna = '<td align="center" width="5"><span>'+pesoMaxMancuerna+'</span></td>';
        texto = texto + textoPesoMaxMancuerna;
        
	    var tipo = todo.find("tipo").text();
	    var textoTipo = '<td align="center" width="5"><span>'+establecerTipoGym(tipo)+'</span></td>';
	    texto = texto + textoTipo;
	    
	    return texto;
}