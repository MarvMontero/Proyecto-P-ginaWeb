
function mostrarModal1(){
	$('#modal_1').css('display', 'block');
}

function mostrarModal2(){
	$('#modal_2').css('display', 'block');
}

function mostrarModal3(){
	$('#modal_3').css('display', 'block');
}

function mostrarModal4(){
	$('#modal_4').css('display', 'block');
}

function mostrarModal5(){
	$('#modal_5').css('display', 'block');
}

function mostrarModal6(){
	$('#modal_6').css('display', 'block');
}

$('.cerrar').click(function(){

	$('.modal').css('display', 'none');
});

function closeWindow(){
	$('.modal').css('display', 'none');
}

function calcularCosto(){
	var precioTabla=0;
	var precioLlanta=0;
	var precioTruck=0;
	var tabla=document.getElementById('Tabla');
	var tablaValue= tabla.options[tabla.selectedIndex].text;
	if(tablaValue == 'Splinter Series Crest 40'){
		precioTabla=104.95;
	}
	if(tablaValue == 'Fishbowl'){
		precioTabla=119.95;
	}
	if(tablaValue == 'Tan Tien Topo'){
		precioTabla=159.95;
	}
	if(tablaValue == 'WIM 35'){
		precioTabla=129.95;
	}
	if(tablaValue == 'RockSteady Brawlers'){
		precioTabla=64.95;
	}
	if(tablaValue == 'Sama 2015'){
		precioTabla=144.95;
	}
	
	var llanta=document.getElementById('Llanta');
	var llantaValue= llanta.options[llanta.selectedIndex].text;
	if(llantaValue == 'Divine Street Slayers' || 'Orangatang Stimulus' || 'Sector 9 Butterballs'){
		precioLlanta=44.95;
	}
	if(llantaValue == 'Orangatang Cage'){
		precioLlanta=49.95;
	}
	if(llantaValue == 'Forward Bumpers'){
		precioLlanta=32.95;
	}
	if(llantaValue == 'Element Keith Haring'){
		precioLlanta=33.95;
	}

	var truck=document.getElementById('Truck');
	var truckValue= truck.options[truck.selectedIndex].text;
	if(truckValue == 'Indy Reverse' || 'Mindless Voodoo'){
		precioTruck=39.95;
	}
	if(truckValue == 'Independent'){
		precioTruck=67.95;
	}
	if(truckValue == 'Paris Truck'){
		precioTruck=44.95;
	}
	if(truckValue == 'Bear Grizzly'){
		precioTruck=67.95;
	}
	if(truckValue == 'Mindless'){
		precioTruck=29.95;
	}
	var total=precioTabla+precioLlanta+precioTruck;
	document.getElementById('costo').value='$'+Math.round(total);
}