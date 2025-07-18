
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if (!localStorage.getItem('cookies-aceptadas')) {
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
} else {
	dataLayer.push({ 'event': 'cookies-aceptadas' });
}

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');

	localStorage.setItem('cookies-aceptadas', true);

	dataLayer.push({ 'event': 'cookies-aceptadas' });
});

jQuery('document').ready(function ($) {

    var menuBtn = $('.menu-icon'),
        menu = $('.navigation ul');

    menuBtn.click(function () {

        if (menu.hasClass('show')) {

            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
    });

});

