const informacion = document.querySelector('#Menu');
const back = document.querySelector('back');
const hiddenInput = document.querySelector('#inputSelect');

var op=0;

document.querySelectorAll('#Menu > .back').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        opcion.classList.toggle('active');
    })
});

console.log(op);