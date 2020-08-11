//codigo de escritura////codigo de escritura////codigo de escritura////codigo de escritura////codigo de escritura////codigo de escritura//
const typed = new Typed('.typed', {
	strings: [
		'<i class="efecto">Tofu</i>',
		'<i class="efecto">Vegetales</i>',
		'<i class="efecto">Quinua</i>',
		'<i class="efecto">y mas..</i>'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 140, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 140, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
//codigo de escritura////codigo de escritura////codigo de escritura////codigo de escritura////codigo de escritura////codigo de escritura//




//codigo para poner modo oscuro y claro//
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');


});

    

//codigo para poner modo oscuro y claro//





/* desabilitar click derecho en mi pagina web*/
//$("body").on("contextmenu",function(e){
	//return false;})