
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function validacion (evt) {

if (window.event) {
	keynum = evt.keyCode;
} else {
 keynum = evt.witch;
}

if ((keynum > 96 && keynum < 123) || keynum == 8 || keynum == 13) {
	return true;
} else {
	alert("ingresar solamente minúsculas, sin acento");
	return false;
}
};


function encriptar() {
		var entrada = document.getElementById('input-texto').value;
		console.log(entrada);
		//var data = entrada.split('');
		var encriptado = entrada.replace(/e/g, "enter");
		var encriptado = encriptado.replace(/i/g, "imes");
		var encriptado = encriptado.replace(/a/g, "ai");
		var encriptado = encriptado.replace(/o/g, "ober");
		var encriptado = encriptado.replace(/u/g, "ufat");
		document.getElementById('msg').value = encriptado; 
		console.log(encriptado);
	};


function desencriptar() {
	var salida = document.getElementById('input-texto').value;
	var desencriptado = salida.replace(/enter/g, "e");
	var desencriptado = desencriptado.replace(/imes/g, "i");
	var desencriptado = desencriptado.replace(/ai/g, "a");
	var desencriptado = desencriptado.replace(/ober/g, "o");
	var desencriptado = desencriptado.replace(/ufat/g, "u");
	document.getElementById('msg').value = desencriptado;
	console.log(desencriptado);

}

function copiar() {
	var copiado = document.getElementById('msg');
	copiado.select();
	navigator.clipboard.writeText(copiado.value);
	alert(copiado.value + " ha sido copiado exitosamente!");
};

function limpiar2() {
	document.getElementById('msg').value = '';
}

function noCargar(event){

  event.preventDefault();
  return false;

};

