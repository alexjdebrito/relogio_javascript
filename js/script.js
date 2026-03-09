const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function updateBackground(hr) {
    if (hr >= 6 && hr < 12) {
        document.body.style.backgroundImage = "url('img/ferrari1.jpg')";
    } else if (hr >= 12 && hr < 18) {
        document.body.style.backgroundImage = "url('img/ferrari2.jpg')";
    } else if (hr >= 18 && hr < 24) {
        document.body.style.backgroundImage = "url('img/ferrari3.jpg')";
    } else {
        document.body.style.backgroundImage = "url('img/ferrari4.jpg')";
    }
}

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    if (min === '00' && s === '00') {
        updateBackground(dateToday.getHours());
    }

}, 1000); // <- aqui estava faltando o 1000

// Chama uma vez ao carregar a página
updateBackground(new Date().getHours());
