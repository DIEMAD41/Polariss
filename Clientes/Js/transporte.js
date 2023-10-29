/* var btnAbrir = document.getElementById('btn-abrir'),
    princ = document.getElementById('princ'),
    unica = document.getElementById('unica'),
    btnCerrar = document.getElementById('btn-cerrar');

btnAbrir.addEventListener('click', function()
{
    princ.classList.add('active');
}); */
let opcionV
let info = [];
let carros = [
    {id: 123, nombre:"Minibus-mercedes", localidad: "Jiquilpan, Michoacán de Ocampo, México", imagen: "Img/Minibus-mercedes-1.jpg"},
    {id: 123, nombre:"Autobus Grande", localidad: "Jiquilpan, Michoacán de Ocampo, México", imagen: "Img/Autobus-G.png"},
    {id: 123, nombre:"Autobus Economico", localidad: "Jiquilpan, Michoacán de Ocampo, México", imagen: "Img/Autobus-G.png"},
    {id: 1234, nombre:"Uber privado", localidad: "Jiquilpan, Michoacán de Ocampo, México", imagen: "Img/uber.jpg"},
    {id: 1234, nombre:"Chevrolet spark", localidad: "Jiquilpan, Michoacán de Ocampo, México", imagen: "Img/Chevrolet Spark.png"},
    {id: 12345, nombre:"Chevrolet Trax", localidad: "Jiquilpan, Michoacán de Ocampo, México", imagen: "Img/Chevrolet Trax.png"},
    {id: 12345, nombre:"Nissan X-trail", localidad: "Jiquilpan, Michoacán de Ocampo, México", imagen: "Img/Nissan X-trail.png"},
    {id: 12345, nombre:"Jeep Renagade", localidad: "Jiquilpan, Michoacán de Ocampo, México", imagen: "Img/Jeep Renegade.png"},
]
const operaciones=document.querySelector(".princ");
const botonops=document.querySelector(".btn-abrir");
function ExpanderOperaciones() {
    operaciones.classList.remove("princ");
    botonops.classList.add("hidden");
}
botonops.addEventListener('click', ExpanderOperaciones);

const min=document.querySelector(".minimizar-ops");
function MinimizarOperaciones() {
    operaciones.classList.add("princ");
    botonops.classList.remove("hidden");
}
min.addEventListener('click', MinimizarOperaciones);

/**Accion para el boton carro */
let list=document.querySelectorAll(".list");
function ActivarClase(){
    list.forEach((item) =>
        item.classList.remove("active"));
        this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('mouseover', ActivarClase));

/**menu */
const select=document.querySelector("#select");
const opcioness=document.querySelector('#opcioness'); 
const contenidoSelect=document.querySelector('#select .contenido-select');
const hiddenInput=document.querySelector('#inputSelect');

document.querySelectorAll('#opcioness > .opcio').forEach((opcio) => {
    opcio.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelect.innerHTML=e.currentTarget.innerHTML;
        select.classList.toggle('active');
        opcioness.classList.toggle('active');
        hiddenInput.value=e.currentTarget.querySelector('.t5').innerText;
    });  
});

select.addEventListener('click', () => {
    select.classList.toggle('active');
    opcioness.classList.toggle('active');
});

const select2=document.querySelector("#select2");
const opcioness2=document.querySelector('#opcioness2'); 
const contenidoSelect2=document.querySelector('#select2 .contenido-select2');
const hiddenInput2=document.querySelector('#inputSelect2');

document.querySelectorAll('#opcioness2 > .opcio2').forEach((opcio2) => {
    opcio2.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelect2.innerHTML=e.currentTarget.innerHTML;
        select2.classList.toggle('active');
        opcioness2.classList.toggle('active');
        hiddenInput2.value=e.currentTarget.querySelector('.t7').innerText;
    });  
});

select2.addEventListener('click', () => {
    select2.classList.toggle('active');
    opcioness2.classList.toggle('active');
});


/*localStorage*/
function obtenerpro() 
{
const t5 = document.querySelector('.t5')
const t6 = document.querySelectorAll('.t6')
const t9 = document.querySelectorAll('.t9')
const t7 = document.querySelector('.t7')
console.log(t5.innerText);

    let infoP = 
    {
        id: carros[Math.floor((Math.random() * (8 - 1)) + 1)].id,
        destino: t5.innerText,
        fechai: t6[1].innerText,
        fechar: t9[1].innerText,
        tramite: t7.innerText,
    }
    info.push(infoP)
    funcionar()
}

const botonB = document.querySelector('.buscar')
botonB.addEventListener('click', () => {
    
    BuscarTipo()
})

function BuscarTipo()
{
    let lista= document.querySelectorAll(".list")
    lista.forEach(element => {
        if(element.classList.contains("active"))
        {
            opcionV = element.querySelector(".text").innerText
        }
    });
    console.log(opcionV);
    const vehiculo=document.querySelectorAll(".item-news")
    vehiculo.forEach(element => {
        element.classList.remove("ocultar")
    });
    vehiculo.forEach(element => {
        switch (opcionV) {
            case "CARRO":
                if(! element.classList.contains("carro"))
                element.classList.add("ocultar")
                break;
            case "CAMIONETA":
                if(! element.classList.contains("camioneta"))
                element.classList.add("ocultar")
                break;
            case "CAMION":
                    if(! element.classList.contains("camion"))
                    element.classList.add("ocultar")
                    break;
        }
    });
}


const cont = document.querySelectorAll('.item-news')
        cont.forEach(element => {
            element.addEventListener('click', () => {
            Eliminar()
            element.classList.add("cont")
            obtenerpro();
        });

    });

const cont2 = document.querySelectorAll('.item-news')
function Eliminar() {
    cont2.forEach(element => {
    element.classList.remove('cont')
    });
}

function funcionar(){
    localStorage.setItem("infoTrans",JSON.stringify(info))
    window.alert("Reservacion completa")
    location.reload()
} 

//Abrir el calendario
const profiles=document.querySelector(".blur");
const fechaS=document.querySelector(".Fs")
const frameC = document.querySelector('.frameC')
fechaS.addEventListener('click', () =>{
        frameC.classList.add('showC')
        profiles.classList.add('show')
    })

//Cargar el DOM
cargarEventListeners();
function cargarEventListeners(){
    document.addEventListener('DOMContentLoaded',() =>{
        info=JSON.parse(localStorage.getItem('infoTrans')) || 0;
        
        const listoB=document.querySelector('.frameC').contentWindow.document.querySelector('.calendario-footer2')
        listoB.addEventListener('click', () =>{

            const frameC = document.querySelector('.frameC')
            frameC.classList.remove('showC')
            profiles.classList.remove('show')

            let fechas= []
            fechas=JSON.parse(localStorage.getItem('FechaSeleccionada')) || 0

            document.querySelector('#fechaSalida').textContent=(`${fechas[0].dia}/${fechas[0].mes}/${fechas[0].año}`)
            document.querySelector('#fechaRegreso').textContent=(`${fechas[1].dia}/${fechas[1].mes}/${fechas[1].año}`)
            

        })
    });
}