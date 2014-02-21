	/////////////////  INCIO VARIABLES  ///////////////	

	//PASS = gR8wR6bw5vn4
	//var tipoBlog = "PUNK";
	var tipoBlog = "FITNESS";
	
	/////////////////  FIN VARIABLES  ///////////////

	/////////////////  INCIO RUTAS ARCHIVOS  ///////////////
		var ruta = "http://sites.google.com/site/lalocurademao/scripts/";
		var rutaCssPunk = "https://lalocurademao.googlecode.com/svn/trunk/src/code/scripts/blog/css/utilesCssPunk.css";
		var rutaCssFitness = "https://lalocurademao.googlecode.com/svn/trunk/src/code/scripts/blog/css/utilesCssFitness.css";
		var rutaCssTablaRanking = "https://lalocurademao.googlecode.com/svn/trunk/src/code/scripts/blog/css/estilosTablaRankingGym.css";
		var rutaXmlDatosGimnasios = "https://lalocurademao.googlecode.com/svn/trunk/src/code/scripts/blog/datos/archivoGimnasios.xml";
	
	/////////////////  FIN RUTAS ARCHIVOS  ///////////////


	/////////////////  INCIO ESTILOS  ///////////////  
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
		
		function seleccionarEstilosTipoBlog(){
	
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
			//ASPECTOS BLOG FITNESS
				document.body.style.background = "url(' " + ruta
						+ "fondoFit.jpg') repeat scroll left top #000000";
				document.getElementById('Header1_headerimg').src = ruta
						+ "logo1BlogspotLARGO.png";
				document.getElementById('Header1_headerimg').width = "780";
				cargarFicheroCss(rutaCssFitness, "css");
				cargarFicheroCss(rutaCssTablaRanking, "css");
			}
		}
	/////////////////  FIN ESTILOS  ///////////////
	

	/////////////////  INCIO FUNCIONES ÚTILES  ///////////////
		function existeEnArray(cadena,array){
			var existe = false;
			for ( var i in array ) {
				if (array[i] == cadena){
					existe = true;
					return existe;
				} 
			}
			return existe;
		}
		function seleccionarTipoBlog(){
			if (typeof (tipoBlogEntrada) != "undefined") {
				tipoBlog = tipoBlogEntrada;
			}
		}
	/////////////////  FIN FUNCIONES ÚTILES  ///////////////
	
	/////////////////  INCIO LLAMADAS A FUNCIONES  ///////////////
		seleccionarTipoBlog();
		seleccionarEstilosTipoBlog();
	/////////////////  INCIO LLAMADAS A FUNCIONES  ///////////////