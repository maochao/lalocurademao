var arrayCiudades = [];
var arrayPaises = [];
var arrayTipos = [];

$(document).ready(function() {
	if (typeof (nombreGymEntrada) !== "undefined") {
		cargarEntrada(nombreGymEntrada);
	}

	cargarDatosInicio();
	rellenarComboCiudades();
	rellenarComboPaises();
	rellenarComboTipos();
	filtrarPorCiudad();
	filtrarPorPais();
	filtrarPorTipo();
});

// INICIO PARTE DEL FILTRO POR CIUDADES
function rellenarComboCiudades() {
	$.each(arrayCiudades, function(val, text) {
		$('#ciudades').append($('<option></option>').val(val).html(text));
	});
}

function filtrarPorCiudad() {
	$("#ciudades").change(function() {
		var op = $("#ciudades option:selected");
		cargarDatosCiudad(op.text());
	});
}

function cargarDatosCiudad(ciudad) {

	var ciudadCombo = ciudad;
	_xml = $.parseXML(archivoGimnasios);
	$xmlDoc = $(_xml);
	$('#myTable tbody tr').remove();
	$xmlDoc.find("gimnasio").each(function() {

		var texto = '<tr>';

		var ciudad = $(this).find("ciudad").text();
		if (!existeEnArray(ciudad, arrayCiudades)) {
			arrayCiudades.push(ciudad);
		}

		if (ciudadCombo == ciudad || ciudadCombo == "SELECCIONA UNA CIUDAD") {

			var todo = $(this);
			texto = formarTexto(todo, texto);
		}

		texto = texto + '</tr>';

		$('#myTable tbody').append(texto);
	});
}
// FINAL PARTE DEL FILTRO POR CIUDADES

// INICIO PARTE DEL FILTRO POR PAÃ�SES
function rellenarComboPaises() {
	$.each(arrayPaises, function(val, text) {
		$('#paises').append($('<option></option>').val(val).html(text));
	});
}

function filtrarPorPais() {
	$("#paises").change(function() {
		var op = $("#paises option:selected");
		cargarDatosPais(op.text());
	});
}

function cargarDatosPais(pais) {

	var paisCombo = pais;
	_xml = $.parseXML(archivoGimnasios);
	$xmlDoc = $(_xml);
	$('#myTable tbody tr').remove();
	$xmlDoc.find("gimnasio").each(function() {

		var texto = '<tr>';

		var pais = $(this).find("pais").text();
		if (!existeEnArray(pais, arrayPaises)) {
			arrayPaises.push(pais);
		}

		if (paisCombo == pais || paisCombo == "SELECCIONA UN PAÃ�S") {

			var todo = $(this);
			texto = formarTexto(todo, texto);
		}

		texto = texto + '</tr>';

		$('#myTable tbody').append(texto);
	});
}
// FINAL PARTE DEL FILTRO POR PAÃ�SES

// INICIO PARTE DEL FILTRO POR TIPO DE GYM
function rellenarComboTipos() {
	$.each(arrayTipos, function(val, text) {
		$('#tipos').append(
				$('<option></option>').val(val).html(establecerTipoGym(text)));
	});
}

function filtrarPorTipo() {
	$("#tipos").change(function() {
		var op = $("#tipos option:selected");
		cargarDatosTipos(op.text());
	});
}

function cargarDatosTipos(tipo) {

	var tipoCombo = tipo;
	_xml = $.parseXML(archivoGimnasios);
	$xmlDoc = $(_xml);
	$('#myTable tbody tr').remove();
	$xmlDoc.find("gimnasio").each(
			function() {

				var texto = '<tr>';

				var tipoGym = $(this).find("tipo").text();
				if (!existeEnArray(tipoGym, arrayTipos)) {
					arrayTipos.push(establecerTipoGym(tipoGym));
				}

				if (tipoCombo == establecerTipoGym(tipoGym)
						|| tipoCombo == "SELECCIONA UN TIPO") {

					var todo = $(this);
					texto = formarTexto(todo, texto);
				}

				texto = texto + '</tr>';

				$('#myTable tbody').append(texto);
			});
}
// FINAL PARTE DEL FILTRO POR TIPO DE GYM

function establecerTipoGym(tipo) {
	var tipoGym = "";

	if (tipo == "LC") {
		tipoGym = "LOW COST";
	} else if (tipo == "FL") {
		tipoGym = "FITNESS LUJO";
	} else if (tipo == "BR") {
		tipoGym = "BARRIO";
	} else if (tipo == "CD") {
		tipoGym = "CENTRO DEPORTIVO";
	} else if (tipo == "HT") {
		tipoGym = "HOTEL";
	}

	return tipoGym;
}

function cargarEntrada(gimnasio) {

	_xml = $.parseXML(archivoGimnasios);
	$xmlDoc = $(_xml);
	$('#tablaEntrada div ').remove();
	$xmlDoc
			.find("gimnasio")
			.each(
					function() {
						if (typeof (totalGymsVisitados) !== "undefined") {
							totalGymsVisitados = totalGymsVisitados + 1;
						}
						var todo = $(this);
						var nombre = todo.find("nombre").text();
						if (gimnasio == nombre) {

							var presentacion = todo.find("presentacion").text();
							if (presentacion != "" && presentacion != "-") {
								var presentacionTexto = '<p>' + presentacion
										+ '</p>';
								$('#presentacion').append(presentacionTexto);
							}

							var fotoPresentacion = todo
									.find("fotoPresentacion").text();
							if (fotoPresentacion != ""
									&& fotoPresentacion != "-") {
								var fotoPresentacionTexto = '<img width="360" heigth="400" src="'
										+ fotoPresentacion + '"/>';
								$('#fotoPresentacion').append(
										fotoPresentacionTexto);
							}

							var instalaciones = todo.find("instalaciones")
									.text();
							if (instalaciones != "" && instalaciones != "-") {
								var instalacionesTexto = '<li><b>Instalaciones: </b>'
										+ instalaciones + '</li>';
								$('#instalaciones').append(instalacionesTexto);
							}

							var fotoInstalaciones = todo.find(
									"fotoInstalaciones").text();
							if (fotoInstalaciones != ""
									&& fotoInstalaciones != "-") {
								var fotoInstalacionesTexto = '<img width="360" heigth="400" src="'
										+ fotoInstalaciones + '"/>';
								$('#fotoInstalaciones').append(
										fotoInstalacionesTexto);
							}

							var fotoInstalaciones2 = todo.find(
									"fotoInstalaciones2").text();
							if (fotoInstalaciones2 != ""
									&& fotoInstalaciones2 != "-") {
								var fotoInstalaciones2Texto = '<img width="360" heigth="400" src="'
										+ fotoInstalaciones2 + '"/>';
								$('#fotoInstalaciones2').append(
										fotoInstalaciones2Texto);
							}

							var fotoInstalaciones3 = todo.find(
									"fotoInstalaciones3").text();
							if (fotoInstalaciones3 != ""
									&& fotoInstalaciones3 != "-") {
								var fotoInstalaciones3Texto = '<img width="360" heigth="400" src="'
										+ fotoInstalaciones3 + '"/>';
								$('#fotoInstalaciones3').append(
										fotoInstalaciones3Texto);
							}

							var fotoInstalaciones4 = todo.find(
									"fotoInstalaciones4").text();
							if (fotoInstalaciones4 != ""
									&& fotoInstalaciones4 != "-") {
								var fotoInstalaciones4Texto = '<img width="360" heigth="400" src="'
										+ fotoInstalaciones4 + '"/>';
								$('#fotoInstalaciones4').append(
										fotoInstalaciones4Texto);
							}

							var fotoInstalaciones5 = todo.find(
									"fotoInstalaciones5").text();
							if (fotoInstalaciones5 != ""
									&& fotoInstalaciones5 != "-") {
								var fotoInstalaciones5Texto = '<img width="360" heigth="400" src="'
										+ fotoInstalaciones5 + '"/>';
								$('#fotoInstalaciones5').append(
										fotoInstalaciones5Texto);
							}

							var staff = todo.find("staff").text();
							if (staff != "" && staff != "-") {
								var staffTexto = '<li><b>Staff: </b>' + staff
										+ '</li>';
								$('#staff').append(staffTexto);
							}

							var masificacionTexto = todo.find(
									"masificacionTexto").text();
							if (masificacionTexto != ""
									&& masificacionTexto != "-") {
								var masificacionTextoTexto = '<li><b>Masificacion: </b>'
										+ masificacionTexto + '</li>';
								$('#masificacionTexto').append(
										masificacionTextoTexto);
							}

							var musculacion = todo.find("musculacion").text();
							if (musculacion != "" && musculacion != "-") {
								var musculacionTexto = '<li><b>Musculacion: </b>'
										+ musculacion + '</li>';
								$('#musculacion').append(musculacionTexto);
							}

							var fotoMusculacion = todo.find("fotoMusculacion")
									.text();
							if (fotoMusculacion != "" && fotoMusculacion != "-") {
								var fotoMusculacionTexto = '<img width="360" heigth="400" src="'
										+ fotoMusculacion + '"/>';
								$('#fotoMusculacion').append(
										fotoMusculacionTexto);
							}

							var fotoMusculacion2 = todo
									.find("fotoMusculacion2").text();
							if (fotoMusculacion2 != ""
									&& fotoMusculacion2 != "-") {
								var fotoMusculacion2Texto = '<img width="360" heigth="400" src="'
										+ fotoMusculacion2 + '"/>';
								$('#fotoMusculacion2').append(
										fotoMusculacion2Texto);
							}

							var fotoMusculacion3 = todo
									.find("fotoMusculacion3").text();
							if (fotoMusculacion3 != ""
									&& fotoMusculacion3 != "-") {
								var fotoMusculacion3Texto = '<img width="360" heigth="400" src="'
										+ fotoMusculacion3 + '"/>';
								$('#fotoMusculacion3').append(
										fotoMusculacion3Texto);
							}

							var fotoMusculacion4 = todo
									.find("fotoMusculacion4").text();
							if (fotoMusculacion4 != ""
									&& fotoMusculacion4 != "-") {
								var fotoMusculacion4Texto = '<img width="360" heigth="400" src="'
										+ fotoMusculacion4 + '"/>';
								$('#fotoMusculacion4').append(
										fotoMusculacion4Texto);
							}

							var fotoMusculacion5 = todo
									.find("fotoMusculacion5").text();
							if (fotoMusculacion5 != ""
									&& fotoMusculacion5 != "-") {
								var fotoMusculacion5Texto = '<img width="360" heigth="400" src="'
										+ fotoMusculacion5 + '"/>';
								$('#fotoMusculacion5').append(
										fotoMusculacion5Texto);
							}

							var cardio = todo.find("cardio").text();
							if (cardio != "" && cardio != "-") {
								var cardioTexto = '<li><b>Cardio: </b>'
										+ cardio + '</li>';
								$('#cardio').append(cardioTexto);
							}

							var fotoCardio = todo.find("fotoCardio").text();
							if (fotoCardio != "" && fotoCardio != "-") {
								var fotoCardioTexto = '<img width="360" heigth="400" src="'
										+ fotoCardio + '"/>';
								$('#fotoCardio').append(fotoCardioTexto);
							}

							var fotoCardio2 = todo.find("fotoCardio2").text();
							if (fotoCardio2 != "" && fotoCardio2 != "-") {
								var fotoCardio2Texto = '<img width="360" heigth="400" src="'
										+ fotoCardio2 + '"/>';
								$('#fotoCardio2').append(fotoCardio2Texto);
							}

							var fotoCardio3 = todo.find("fotoCardio3").text();
							if (fotoCardio3 != "" && fotoCardio3 != "-") {
								var fotoCardio3Texto = '<img width="360" heigth="400" src="'
										+ fotoCardio3 + '"/>';
								$('#fotoCardio3').append(fotoCardio3Texto);
							}

							var fotoCardio4 = todo.find("fotoCardio4").text();
							if (fotoCardio4 != "" && fotoCardio4 != "-") {
								var fotoCardio4Texto = '<img width="360" heigth="400" src="'
										+ fotoCardio4 + '"/>';
								$('#fotoCardio4').append(fotoCardio4Texto);
							}

							var fotoCardio5 = todo.find("fotoCardio5").text();
							if (fotoCardio5 != "" && fotoCardio5 != "-") {
								var fotoCardio5Texto = '<img width="360" heigth="400" src="'
										+ fotoCardio5 + '"/>';
								$('#fotoCardio5').append(fotoCardio5Texto);
							}

							var vestuarios = todo.find("vestuarios").text();
							if (vestuarios != "" && vestuarios != "-") {
								var vestuariosTexto = '<li><b>Vestuarios: </b>'
										+ vestuarios + '</li>';
								$('#vestuarios').append(vestuariosTexto);
							}

							var fotoVestuarios = todo.find("fotoVestuarios")
									.text();
							if (fotoVestuarios != "" && fotoVestuarios != "-") {
								var fotoVestuariosTexto = '<img width="360" heigth="400" src="'
										+ fotoVestuarios + '"/>';
								$('#fotoVestuarios')
										.append(fotoVestuariosTexto);
							}

							var fotoVestuarios2 = todo.find("fotoVestuarios2")
									.text();
							if (fotoVestuarios2 != "" && fotoVestuarios2 != "-") {
								var fotoVestuarios2Texto = '<img width="360" heigth="400" src="'
										+ fotoVestuarios2 + '"/>';
								$('#fotoVestuarios2').append(
										fotoVestuarios2Texto);
							}

							var fotoVestuarios3 = todo.find("fotoVestuarios3")
									.text();
							if (fotoVestuarios3 != "" && fotoVestuarios3 != "-") {
								var fotoVestuarios3Texto = '<img width="360" heigth="400" src="'
										+ fotoVestuarios3 + '"/>';
								$('#fotoVestuarios3').append(
										fotoVestuarios3Texto);
							}

							var fotoVestuarios4 = todo.find("fotoVestuarios4")
									.text();
							if (fotoVestuarios4 != "" && fotoVestuarios4 != "-") {
								var fotoVestuarios4Texto = '<img width="360" heigth="400" src="'
										+ fotoVestuarios4 + '"/>';
								$('#fotoVestuarios4').append(
										fotoVestuarios4Texto);
							}

							var fotoVestuarios5 = todo.find("fotoVestuarios5")
									.text();
							if (fotoVestuarios5 != "" && fotoVestuarios5 != "-") {
								var fotoVestuarios5Texto = '<img width="360" heigth="400" src="'
										+ fotoVestuarios5 + '"/>';
								$('#fotoVestuarios5').append(
										fotoVestuarios5Texto);
							}

							var ubicacion = todo.find("ubicacion").text();
							if (ubicacion != "" && ubicacion != "-") {
								var ubicacionTexto = '<li><b>Ubicacion: </b>'
										+ ubicacion + '</li>';
								$('#ubicacion').append(ubicacionTexto);
							}

							var extras = todo.find("extras").text();
							if (extras != "" && extras != "-") {
								var extrasTexto = '<li><b>Extras: </b>'
										+ extras + '</li>';
								$('#extras').append(extrasTexto);
							}

							var maquinaria = todo.find("maquinaria").text();
							if (maquinaria != "" && maquinaria != "-") {
								var maquinariaTexto = '<li><b>Maquinaria: </b>'
										+ maquinaria + '</li>';
								$('#maquinaria').append(maquinariaTexto);
							}

							var clases = todo.find("clases").text();
							if (clases != "" && clases != "-") {
								var clasesTexto = '<li><b>Clases: </b>'
										+ clases + '</li>';
								$('#clases').append(clasesTexto);
							}

							var precios = todo.find("precios").text();
							if (precios != "" && precios != "-") {
								var preciosTexto = '<li><b>Precios: </b>'
										+ precios + '</li>';
								$('#precios').append(preciosTexto);
							}

							$('#tablaEntrada tbody tr').remove();
							var texto = '<tr>';

							var todo = $(this);
							texto = formarTextoEntrada(todo, texto);

							texto = texto + '</tr>';

							$('#tablaEntrada tbody').append(texto);

							var conclusion = todo.find("conclusion").text();
							if (conclusion != "" && conclusion != "-") {
								var conclusionTexto = '<li><b>Conclusion: </b>'
										+ conclusion + '</li>';
								$('#conclusion').append(conclusionTexto);
							}
						}
					});
}

function cargarDatosInicio(tipo) {

	var tipoCombo = tipo;
	_xml = $.parseXML(archivoGimnasios);
	$xmlDoc = $(_xml);
	$('#myTable tbody tr').remove();
	$xmlDoc.find("gimnasio").each(
			function() {

				var texto = '<tr>';

				var tipoGym = $(this).find("tipo").text();
				if (!existeEnArray(tipoGym, arrayTipos)) {
					arrayTipos.push(establecerTipoGym(tipoGym));
				}

				if (tipoCombo == establecerTipoGym(tipoGym)
						|| tipoCombo == "SELECCIONA UN TIPO") {

					var todo = $(this);
					texto = formarTexto(todo, texto);
				}

				texto = texto + '</tr>';

				$('#myTable tbody').append(texto);
			});
}

function cargarDatosInicio() {

	_xml = $.parseXML(archivoGimnasios);
	$xmlDoc = $(_xml);
	$('#myTable tbody tr').remove();
	$xmlDoc.find("gimnasio").each(function() {

		var texto = '<tr>';

		var todo = $(this);
		texto = formarTexto(todo, texto);

		var ciudad = $(this).find("ciudad").text();
		if (!existeEnArray(ciudad, arrayCiudades)) {
			arrayCiudades.push(ciudad);
		}

		var pais = $(this).find("pais").text();
		if (!existeEnArray(pais, arrayPaises)) {
			arrayPaises.push(pais);
		}

		var tipoGym = $(this).find("tipo").text();
		if (!existeEnArray(tipoGym, arrayTipos)) {
			arrayTipos.push(tipoGym);
		}

		texto = texto + '</tr>';

		$('#myTable tbody').append(texto);
	});
}

function establecerEstilo(cifra, tipo) {
	var valorTablaRojo = "valorTablaRojo";
	var valorTablaVerde = "valorTablaVerde";
	var valorTablaAmarillo = "valorTablaAmarillo";

	var estilo = valorTablaAmarillo;

	if (tipo == "stuff") {

		if (cifra > "8") {
			estilo = valorTablaVerde;
		} else if (cifra < "5") {
			estilo = valorTablaRojo;
		}
	}

	else if (tipo == "higiene") {

		if (cifra > "8") {
			estilo = valorTablaVerde;
		} else if (cifra < "5") {
			estilo = valorTablaRojo;
		}
	}

	else if (tipo == "desorden") {

		if (cifra < "20") {
			estilo = valorTablaVerde;
		} else if (cifra > "60") {
			estilo = valorTablaRojo;
		}
	}

	else if (tipo == "duchas") {

		if (cifra > "10") {
			estilo = valorTablaVerde;
		} else if (cifra < "8") {
			estilo = valorTablaRojo;
		}
	}

	else if (tipo == "puertaDuchas") {

		if (cifra == "V") {
			estilo = valorTablaVerde;
		} else if (cifra == "X") {
			estilo = valorTablaRojo;
		}
	}

	else if (tipo == "taquillas") {

		if (cifra > "500") {
			estilo = valorTablaVerde;
		} else if (cifra < "200") {
			estilo = valorTablaRojo;
		}
	}

	else if (tipo == "secador") {

		if (cifra > "4") {
			estilo = valorTablaVerde;
		} else if (cifra < "2") {
			estilo = valorTablaRojo;
		}
	}

	else if (tipo == "crucesPolea") {

		if (cifra > "2") {
			estilo = valorTablaVerde;
		} else if (cifra < "1") {
			estilo = valorTablaRojo;
		}
	}

	else if (tipo == "hackSentadillas") {

		if (cifra > "2") {
			estilo = valorTablaVerde;
		} else if (cifra < "1") {
			estilo = valorTablaRojo;
		}
	}

	else if (tipo == "maquinaSoleo") {

		if (cifra > "2") {
			estilo = valorTablaVerde;
		} else if (cifra < "1") {
			estilo = valorTablaRojo;
		}
	}

	else if (tipo == "pesoMaxMancuerna") {

		if (cifra > "44") {
			estilo = valorTablaVerde;
		} else if (cifra < "36") {
			estilo = valorTablaRojo;
		}
	}

	return estilo;
}

function formarTextoEntrada(todo, texto) {

	var nombre = todo.find("nombre").text();
	if (nombre != "" && nombre != "-") {
		var nombreTexto = '<tr><th>CARACTERÃ�STICA/GIMNASIO</th><th>' + nombre
				+ '</th></tr>';
		texto = texto + nombreTexto;
	}

	var stuff = todo.find("stuff").text();
	if (stuff != "" && stuff != "-") {
		var stuffTexto = '<tr><th>Nota Stuff</th><th class='
				+ establecerEstilo(stuff, "stuff") + '>' + stuff + '</th></tr>';
		texto = texto + stuffTexto;
	}

	var higiene = todo.find("higiene").text();
	if (higiene != "" && higiene != "-") {
		var higieneTexto = '<tr><th>Control Higiene</th><th class='
				+ establecerEstilo(higiene, "higiene") + '>' + higiene
				+ '</th></tr>';
		texto = texto + higieneTexto;
	}

	var desorden = todo.find("desorden").text();
	if (desorden != "" && desorden != "-") {
		var desordenTexto = '<tr><th>Desorden Sala MusculaciÃ³n</th><th class='
				+ establecerEstilo(desorden, "desorden") + '>' + desorden
				+ '</th></tr>';
		texto = texto + desordenTexto;
	}

	var metro = todo.find("metro").text();
	if (metro != "" && metro != "-") {
		var metroTexto = '<tr><th>Metro Cercano</th><th>' + metro
				+ '</th></tr>';
		texto = texto + metroTexto;
	}

	var aparcamiento = todo.find("aparcamiento").text();
	if (aparcamiento != "" && aparcamiento != "-") {
		var aparcamientoTexto = '<tr><th>Aparcamiento</th><th>' + aparcamiento
				+ '</th></tr>';
		texto = texto + aparcamientoTexto;
	}

	var plantas = todo.find("plantas").text();
	if (plantas != "" && plantas != "-") {
		var plantasTexto = '<tr><th>Plantas</th><th>' + plantas + '</th></tr>';
		texto = texto + plantasTexto;
	}

	var duchas = todo.find("duchas").text();
	if (duchas != "" && duchas != "-") {
		var duchasTexto = '<tr><th>NÂºDuchas</th><th class='
				+ establecerEstilo(duchas, "duchas") + '>' + duchas
				+ '</th></tr>';
		texto = texto + duchasTexto;
	}

	var puertaDuchas = todo.find("puertaDuchas").text();
	if (puertaDuchas != "" && puertaDuchas != "-") {
		var puertaDuchasTexto = '<tr><th>Puerta Duchas</th><th class='
				+ establecerEstilo(puertaDuchas, "puertaDuchas") + '>'
				+ puertaDuchas + '</th></tr>';
		texto = texto + puertaDuchasTexto;
	}

	var taquillas = todo.find("taquillas").text();
	if (taquillas != "" && taquillas != "-") {
		var taquillasTexto = '<tr><th>NÂº Taquillas</th><th class='
				+ establecerEstilo(taquillas, "taquillas") + '>' + taquillas
				+ '</th></tr>';
		texto = texto + taquillasTexto;
	}

	var secador = todo.find("secador").text();
	if (secador != "" && secador != "-") {
		var secadorTexto = '<tr><th>Secador</th><th class='
				+ establecerEstilo(secador, "secador") + '>' + secador
				+ '</th></tr>';
		texto = texto + secadorTexto;
	}

	var crucesPolea = todo.find("crucesPolea").text();
	if (crucesPolea != "" && crucesPolea != "-") {
		var crucesPoleaTexto = '<tr><th>MÃ¡quina Cruces Polea</th><th class='
				+ establecerEstilo(crucesPolea, "crucesPolea") + '>'
				+ crucesPolea + '</th></tr>';
		texto = texto + crucesPoleaTexto;
	}

	var hackSentadillas = todo.find("hackSentadillas").text();
	if (hackSentadillas != "" && hackSentadillas != "-") {
		var hackSentadillasTexto = '<tr><th>Hack Sentadillas</th><th class='
				+ establecerEstilo(hackSentadillas, "hackSentadillas") + '>'
				+ hackSentadillas + '</th></tr>';
		texto = texto + hackSentadillasTexto;
	}

	var maquinaSoleo = todo.find("maquinaSoleo").text();
	if (maquinaSoleo != "" && maquinaSoleo != "-") {
		var maquinaSoleoTexto = '<tr><th>MÃ¡quina Soleo</th><th class='
				+ establecerEstilo(maquinaSoleo, "maquinaSoleo") + '>'
				+ maquinaSoleo + '</th></tr>';
		texto = texto + maquinaSoleoTexto;
	}

	var pesoMaxMancuerna = todo.find("pesoMaxMancuerna").text();
	if (pesoMaxMancuerna != "" && pesoMaxMancuerna != "-") {
		var pesoMancuernaTexto = '<tr><th>Peso Mancuernas</th><th class='
				+ establecerEstilo(pesoMaxMancuerna, "pesoMaxMancuerna") + '>'
				+ pesoMaxMancuerna + '</th></tr>';
		texto = texto + pesoMancuernaTexto;
	}

	return texto;
}

function formarTexto(todo, texto) {

	var foto = todo.find("foto").text();
	var textoFoto = '<td><img width="50" heigth="50" src="' + foto + '"/></td>';
	texto = texto + textoFoto;

	var nombre = todo.find("nombre").text();
	var url = todo.find("url").text();
	var textoNombre = '<td><a id="nombre" width="600" href="' + url
			+ '"><span>' + nombre + '</span></a></td>';
	texto = texto + textoNombre;

	var nota = todo.find("nota").text();
	var textoNota = '<td align="center" width="5"><span>' + nota
			+ '</span></td>';
	texto = texto + textoNota;

	var mobiliario = todo.find("mobiliario").text();
	var textoMobiliario = '<td align="center" width="5"><span>' + mobiliario
			+ '</span></td>';
	texto = texto + textoMobiliario;

	var personal = todo.find("personal").text();
	var textoPersonal = '<td align="center" width="5"><span>' + personal
			+ '</span></td>';
	texto = texto + textoPersonal;

	var precio = todo.find("precio").text();
	var textoPrecio = '<td align="center" width="5"><span>' + precio
			+ '</span></td>';
	texto = texto + textoPrecio;

	var masificacion = todo.find("masificacion").text();
	var textoMasificacion = '<td align="center" width="5"><span>'
			+ masificacion + '</span></td>';
	texto = texto + textoMasificacion;

	var localizacion = todo.find("localizacion").text();
	var textoLocalizacion = '<td align="center" width="5"><span>'
			+ localizacion + '</span></td>';
	texto = texto + textoLocalizacion;

	var mantenimiento = todo.find("mantenimiento").text();
	var textoMantenimiento = '<td align="center" width="5"><span>'
			+ mantenimiento + '</span></td>';
	texto = texto + textoMantenimiento;

	var sedes = todo.find("sedes").text();
	var textoSedes = '<td align="center" width="5"><span>' + sedes
			+ '</span></td>';
	texto = texto + textoSedes;

	var taquillas = todo.find("taquillas").text();
	var textoTaquillas = '<td align="center" width="5"><span>' + taquillas
			+ '</span></td>';
	texto = texto + textoTaquillas;

	var duchas = todo.find("duchas").text();
	var textoDuchas = '<td align="center" width="5"><span>' + duchas
			+ '</span></td>';
	texto = texto + textoDuchas;

	var pesoMaxMancuerna = todo.find("pesoMaxMancuerna").text();
	var textoPesoMaxMancuerna = '<td align="center" width="5"><span>'
			+ pesoMaxMancuerna + '</span></td>';
	texto = texto + textoPesoMaxMancuerna;

	var tipo = todo.find("tipo").text();
	var textoTipo = '<td align="center" width="5"><span>'
			+ establecerTipoGym(tipo) + '</span></td>';
	texto = texto + textoTipo;

	return texto;
}