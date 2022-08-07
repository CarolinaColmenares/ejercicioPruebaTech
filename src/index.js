import validator from './validator.js';

const nombreUsuario = document.querySelector('#inputNombre');
const numeroPassword = document.querySelector('#inputPassword');
const formulario = document.querySelector('#formulario');
const mensajeResp = document.querySelector('#mensaje');
const respuesta = document.getElementById('containerResp');

respuesta.style.visibility = 'hidden';

nombreUsuario.addEventListener('keyup', (e) => {
	let valorNombre = e.target.value;
	nombreUsuario.value = valorNombre.replace(/[0-9]/g, '');
	console.log('🚀 ~ valorNombre', valorNombre);
});

numeroPassword.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
	numeroPassword.value = valorInput
		.replace(/\s/g, '')
		.replace(/\D/g, '')
   });

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	let valorNombre = nombreUsuario.value;
	// console.log('🚀 ~ valorNombre', valorNombre);
	formulario.style.visibility = 'hidden';
	// document.getElementById("formulario").style.visibility = "hidden";
	respuesta.style.visibility = 'visible';

	if (validator.isValid(valorNombre) === true) {
		mensajeResp.textContent = 'Bienvenida Carolina';
	} else {
		mensajeResp.textContent = 'Usuario No Autorizado';
	}
});

