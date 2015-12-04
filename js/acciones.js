// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnlistado').on('tap',function(){
		$.ajax({
			type:"POST",
			url: "http://192.168.1.164/SEX/buscartodo.php",
			data: "",
			error: function(){alert( "error en conexion");},
			success: function(respuesta){var producto=JSON.parse(respuesta);
			$('#contenido').empty();
			for(var $x=0; $x<producto.lenceria.length;$x++)
			{$('#contenido').append('<div> <h1 align="center"> '+producto.lenceria[$x].Nombre+' </h1> <div style="float:left; width:25%;"> <img src="#"> </div> <div style="width:70%; clear:both; float:right;"> <p> '+producto.lenceria[$x].Codigo+' </p> <p> '+producto.lenceria[$x].TallaDisponible+' </p> <p> '+producto.lenceria[$x].ColorDisponible+' </p> <p> '+producto.lenceria[$x].Precio+' </p> <p> D'+producto.lenceria[$x].Descripcion+' </p> </div> </div>');}
			$(':mobile-pagecontainer').pagecontainer('change','#listado',{
				transition:'pop'}				);
				}
				});
								});
}); 
});

