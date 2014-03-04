$(document).ready(function () {
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

function cargarDatosTipos(tipo) {

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