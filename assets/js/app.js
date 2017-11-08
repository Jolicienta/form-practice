var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
	//traducir el título
	var title = document.querySelector('h1');
	var newTitle = 'Por favor inicia sesión';
	title.innerHTML = newTitle;

	//traducir input
	var mail = document.querySelectorAll('input')[0].placeholder = 'Correo electrónico';
	var password = document.querySelectorAll('input')[1].placeholder = 'Contraseña';
	var check = document.getElementById('spn').innerHTML = 'Recuerdame';

	//traducir botones
	var btnSignIn = document.querySelectorAll('button')[0].innerHTML = 'Iniciar Sesión';

	var btnTranslate = document.querySelectorAll('button')[1];
	btnTranslate.innerHTML = 'Traducir';
})