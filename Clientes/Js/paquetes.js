let formPaquetes = {
  paquetesViajes: {
    AeropuertoOrigen: '',
    Destino: '',
    AeropuertoDestino: '',
    Ida: '',
    Vuelta: '',
    Habitaciones: '',
    Nacionalidad: ''
  },

  hoteles: {
    Destino: '',
    Llegada: '',
    Salida: '',
    Habitaciones: '',
    Nacionalidad: ''
  },

  experiencias: {
    Destino: '',
    Entre: '',
    Y: '',
    Pasajeros: '',
    TipoActividad: ''
  },

  seguros: {
    Destino: '',
    Entre: '',
    Y: '',
    Pasajeros: '',
    Origen: ''
  }
}

const paquetesPlayas = document.querySelector('#paquetes-playas');
const paquetesPueblos = document.querySelector('#paquetes-pueblos');
const paquetesCiudades = document.querySelector('#paquetes-ciudades');
const paquetesSection2 = document.querySelector('#paquetes-section2');

const botonBuscar = document.querySelector('#buscar-form')
const viajesForm = document.querySelector('#viajes-form');
const hotelesForm = document.querySelector('#hoteles-form');
const expForm = document.querySelector('#exp-form');
const segurosForm = document.querySelector('#seguros-form');
const contenedorForm = document.querySelector('#contenedor-form');

let viajes = true;
let hoteles = false;
let exp = false;
let seguros = false;

let playasArt = true;
let pueblosArt = false;
let ciudadesArt = false;

dibujarFormulario();
dibujarArticulos();
sincronizarLocalStorage()
asignarLocalStorage();

function asignarLocalStorage() {
  formPaquetes = JSON.parse(localStorage.getItem('formPaquetes'));

  if (viajes) {
    document.getElementById('aeropuerto-origen-viajes').value = formPaquetes.paquetesViajes.AeropuertoOrigen;
    document.getElementById('destino-viajes').value = formPaquetes.paquetesViajes.Destino;
    document.getElementById('aeropuerto-destino-viajes').value = formPaquetes.paquetesViajes.AeropuertoDestino;
    document.getElementById('ida-viajes').value = formPaquetes.paquetesViajes.Ida;
    document.getElementById('vuelta-viajes').value = formPaquetes.paquetesViajes.Vuelta;
    document.getElementById('nacionalidad-viajes').value = formPaquetes.paquetesViajes.Nacionalidad;
    document.getElementById('habitaciones-viajes').value = formPaquetes.paquetesViajes.Habitaciones;
  } 

  if (hoteles) {
    document.getElementById('destino-hoteles').value = formPaquetes.hoteles.Destino; 
    document.getElementById('salida-hoteles').value = formPaquetes.hoteles.Salida;
    document.getElementById('llegada-hoteles').value = formPaquetes.hoteles.Llegada;
    document.getElementById('habitaciones-hoteles').value = formPaquetes.hoteles.Habitaciones;
    document.getElementById('nacionalidad-hoteles').value = formPaquetes.hoteles.Nacionalidad;
  }

  if (exp) {
    document.getElementById('destino-exp').value = formPaquetes.experiencias.Destino ;
    document.getElementById('entre-exp').value = formPaquetes.experiencias.Entre;
    document.getElementById('y-exp').value = formPaquetes.experiencias.Y;
    document.getElementById('pasajeros-exp').value = formPaquetes.experiencias.Pasajeros;
    document.getElementById('actividad-exp').value = formPaquetes.experiencias.TipoActividad;
  }

  if (seguros) {
    document.getElementById('destino-seguros').value = formPaquetes.seguros.Destino;
    document.getElementById('entre-seguros').value = formPaquetes.seguros.Entre;
    document.getElementById('y-seguros').value = formPaquetes.seguros.Y;
    document.getElementById('origen-seguros').value = formPaquetes.seguros.Origen;
    document.getElementById('pasajeros-seguros').value = formPaquetes.seguros.Pasajeros;
  }
}

function asignarViajes() {
    viajes = true;
    hoteles = false;
    exp = false;
    seguros = false;
    dibujarFormulario()
}

function asignarHoteles() {
    viajes = false;
    hoteles = true;
    exp = false;
    seguros = false;
    dibujarFormulario()
}

function asignarExp() {
    viajes = false;
    hoteles = false;
    exp = true;
    seguros = false;
    dibujarFormulario()
}

function asignarSeguros() {
    viajes = false;
    hoteles = false;
    exp = false;
    seguros = true;
    dibujarFormulario()
}

function limpiarFormulario(){
    contenedorForm.innerHTML = ``;
}

function asignarPlayas() {
    playasArt = true;
    pueblosArt = false;
    ciudadesArt = false;
    dibujarArticulos();
}

function asignarPueblos() {
    playasArt = false;
    pueblosArt = true;
    ciudadesArt = false;
    dibujarArticulos();
}

function asignarCiudades() {
    playasArt = false;
    pueblosArt = false;
    ciudadesArt = true;
    dibujarArticulos();
}

function mandarInfo() {
  if (viajes) {
    formPaquetes.paquetesViajes.AeropuertoOrigen = document.getElementById('aeropuerto-origen-viajes').value;
    formPaquetes.paquetesViajes.Destino = document.getElementById('destino-viajes').value;
    formPaquetes.paquetesViajes.AeropuertoDestino = document.getElementById('aeropuerto-destino-viajes').value;
    formPaquetes.paquetesViajes.Ida = document.getElementById('ida-viajes').value;
    formPaquetes.paquetesViajes.Vuelta = document.getElementById('vuelta-viajes').value;
    formPaquetes.paquetesViajes.Nacionalidad = document.getElementById('nacionalidad-viajes').value;
    formPaquetes.paquetesViajes.Habitaciones = document.getElementById('habitaciones-viajes').value;
  } 

  if (hoteles) {
    formPaquetes.hoteles.Destino = document.getElementById('destino-hoteles').value;
    formPaquetes.hoteles.Salida = document.getElementById('salida-hoteles').value;
    formPaquetes.hoteles.Llegada = document.getElementById('llegada-hoteles').value;
    formPaquetes.hoteles.Habitaciones = document.getElementById('habitaciones-hoteles').value;
    formPaquetes.hoteles.Nacionalidad = document.getElementById('nacionalidad-hoteles').value;
  }

  if (exp) {
    formPaquetes.experiencias.Destino = document.getElementById('destino-exp').value;
    formPaquetes.experiencias.Entre = document.getElementById('entre-exp').value;
    formPaquetes.experiencias.Y = document.getElementById('y-exp').value;
    formPaquetes.experiencias.Pasajeros = document.getElementById('pasajeros-exp').value;
    formPaquetes.experiencias.TipoActividad = document.getElementById('actividad-exp').value;
  }

  if (seguros) {
    formPaquetes.seguros.Destino = document.getElementById('destino-seguros').value;
    formPaquetes.seguros.Entre = document.getElementById('entre-seguros').value;
    formPaquetes.seguros.Y = document.getElementById('y-seguros').value;
    formPaquetes.seguros.Origen = document.getElementById('origen-seguros').value;
    formPaquetes.seguros.Pasajeros = document.getElementById('pasajeros-seguros').value;
  }

  sincronizarLocalStorage();
}

function sincronizarLocalStorage () {
  localStorage.setItem('formPaquetes', JSON.stringify(formPaquetes));
}

function dibujarFormulario() {
    limpiarFormulario();
    const formHTML = document.createElement('form');

    if(viajes) {
        formHTML.innerHTML = `<form>
        <div class="section-one-viajes">
        <div class="form-section">
          <label> Aeropuerto de origen </label>
          <div class="form-input">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <input id="aeropuerto-origen-viajes" class="form-input-inside "type="search" placeholder="Aeropuerto de origen"> 
          </div>
        </div>
        <div class="form-section">
          <label> Destino </label>
          <div class="form-input">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <input id="destino-viajes" class="form-input-inside "type="search" placeholder="Destino"> 
          </div>
        </div>
        <div class="form-section">
          <label> Aeropuerto de destino </label>
          <div class="form-input">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <input id="aeropuerto-destino-viajes" class="form-input-inside "type="search" placeholder="Aeropuerto de destino"> 
          </div>
        </div>
        <div class="form-section">
          <input type="button" id="buscar-form" onclick="mandarInfo()" value="Buscar" class="button-buscar">
        </div>
      </div>

      <div class="section-two-viajes">
        <div class="form-section">
          <label> Ida </label>
          <div class="form-input date">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
              <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
            </svg>
            <input id="ida-viajes" class="form-input-inside" type="date" placeholder="Ida" value="Ida"> 
          </div>
        </div>
          <div class="form-section">
            <label> Vuelta </label>
            <div class="form-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
                <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
              </svg>
              <input id="vuelta-viajes" class="form-input-inside" type="date" placeholder="Vuelta"> 
            </div>
          </div>
          <div class="form-section">
            <label> Habitaciones </label>
            <div class="form-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
              </svg>
              <input id="habitaciones-viajes" class="form-input-inside" type="number" placeholder="Habitaciones"> 
            </div>
          </div>
          <div class="form-section">
            <label> Nacionalidad </label>
            <div class="form-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge-fill" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
              </svg>
              <select id="nacionalidad-viajes" name="Nacionalidad" class="form-input-inside" selected value="1">
                <option value="1"> Mexicana </option> 
                <option value="2"> Argentina </option> 
                <option value="3"> EEUA</option>
                <option value="4">Fedora</option> 
                <option value="5">Debian</option> 
                <option value="6">Suse</option> 
              </select>
            </div>
          </div>
      </div>
      </form>`;
    }

    if(hoteles) {
        formHTML.innerHTML =  `<form>
        <div class="section-one-hoteles">
        <div class="form-section">
          <label> Destino </label>
          <div class="form-input">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <input id="destino-hoteles" class="form-input-inside "type="search" placeholder="Seleecione el destino"> 
          </div>
        </div>
        <div class="form-section">
        <label> Llegada </label>
          <div class="form-input">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
              <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
            </svg>
            <input id="llegada-hoteles" class="form-input-inside" type="date" placeholder="Llegada" value="Ida"> 
          </div>
        </div>
          <div class="form-section">
            <label> Salida </label>
            <div class="form-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
                <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
              </svg>
              <input id="salida-hoteles" class="form-input-inside" type="date" placeholder="Salida"> 
            </div>
          </div>
          <div class="form-section">
            <input type="button" onclick="mandarInfo()" id="buscar-form" value="Buscar" class="button-buscar">
          </div>
          </div>

          <div class="section-two-hoteles">
          <div class="form-section">
            <label> Habitaciones </label>
            <div class="form-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
              </svg>
              <input id="habitaciones-hoteles" class="form-input-inside" type="number" placeholder="Habitaciones"> 
            </div>
          </div>
          <div class="form-section">
            <label> Nacionalidad </label>
            <div class="form-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge-fill" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
              </svg>
              <input id="nacionalidad-hoteles" class="form-input-inside "type="search" placeholder="Nacionalidad"> 
            </div>
          </div>
        </div>
        </form>`;
    }

    if(exp) {
        formHTML.innerHTML = `<form>
        <div class="section-one-experiencias">
        <div class="form-section">
          <label> Destino </label>
          <div class="form-input date">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
              <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
            </svg>
            <input id="destino-exp" class="form-input-inside" type="date" placeholder="Destino" value="Destino"> 
          </div>
        </div>
        <div class="form-section">
          <label> Entre </label>
          <div class="form-input date">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
              <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
            </svg>
            <input id="entre-exp" class="form-input-inside" type="date" placeholder="Entre"> 
          </div>
        </div>
          <div class="form-section">
            <label> Y </label>
            <div class="form-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
                <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
              </svg>
              <input id="y-exp" class="form-input-inside" type="date" placeholder="Y"> 
            </div>
          </div>
          <div class="form-section">
            <input type="button" onclick="mandarInfo()" value="Buscar" id="buscar-form" class="button-buscar">
          </div>
      </div>

      <div class="section-two-experiencias">
        <div class="form-section">
          <label> Pasajeros </label>
          <div class="form-input">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
              <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
            <input id="pasajeros-exp" class="form-input-inside" type="number" placeholder="Pasajeros"> 
          </div>
        </div>
        <div class="form-section">
          <label> Tipo de actividad </label>
          <div class="form-input">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge-fill" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
            </svg>
            <input id="actividad-exp" class="form-input-inside "type="search" placeholder="Cualquier actividad"> 
          </div>
        </div>
      </div>
      </form>`;
    }

    if(seguros) {
        formHTML.innerHTML = `<form>
        <div class="section-one-seguros">
        <div class="form-section">
          <label> Destino </label>
          <div class="form-input">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <input id="destino-seguros" class="form-input-inside "type="search" placeholder="Seleecione el destino"> 
          </div>
        </div>
        <div class="form-section">
          <label> Entre </label>
          <div class="form-input date">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
              <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
            </svg>
            <input id="entre-seguros" class="form-input-inside" type="date" placeholder="Entre"> 
          </div>
        </div>
          <div class="form-section">
            <label> Y </label>
            <div class="form-input">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
                <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
              </svg>
              <input id="y-seguros" class="form-input-inside" type="date" placeholder="Y"> 
            </div>
          </div>
          <div class="form-section">
            <input type="button" onclick="mandarInfo()" id="buscar-form" value="Buscar" class="button-buscar">
          </div>
      </div>

      <div class="section-two-seguros">
        <div class="form-section">
          <label> Pasajeros </label>
          <div class="form-input">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
              <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
            <input id="pasajeros-seguros" class="form-input-inside" type="number" placeholder="Pasajeros"> 
          </div>
        </div>
        <div class="form-section">
          <label> Origen </label>
          <div class="form-input">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge-fill" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
            </svg>
            <input id="origen-seguros" class="form-input-inside "type="search" placeholder="Selecciona el origen"> 
          </div>
        </div>
      </div>
      </form>`;
    }
    
    contenedorForm.appendChild(formHTML);
}

function limpiarSection2() {
    paquetesSection2.innerHTML = ``;
}

function dibujarArticulos() {
    limpiarSection2(); 

    const articleHTML = document.createElement('div');
    articleHTML.setAttribute('class', 'second-art-section')

    if(playasArt) {
    articleHTML.innerHTML = `
    <article class="art-2">
    <img src="Img/p4.jpg">
    <div class="articulo">
      <p class="titulo-art"> Hoteles en Cancún </p>
      <p class="subtitulo-art"> 3 noches 2 personas </p>
      <div class="prices-art">
        <a class="precio-art"> desde $2,520.00 </a>
        <a class="descuento-art"> -14% </a>
        <a class="promocion-art"> ¡Oferta exclusiva! </a>
    </div>
    </div>
  </article>
  <article class="art-2">
    <img src="Img/playas-miami.jpg">
    <div class="articulo">
      <p class="titulo-art"> Hoteles en Puerto Vallarta </p>
      <p class="subtitulo-art"> 2 noches 2 personas </p>
      <div class="prices-art">
        <a class="precio-art"> desde $1,600.00 </a>
        <a class="descuento-art"> -13% </a>
    </div>
    </div>
  </article>
  <article class="art-2">
    <img src="Img/playa-sol.jpg">
    <div class="articulo">
      <p class="titulo-art"> Hoteles en Huatulco </p>
      <p class="subtitulo-art"> 2 noches 2 personas </p>
      <div class="prices-art">
        <a class="precio-art"> desde $1,780.00 </a>
    </div>
    </div>
  </article>
  <article class="art-2">
    <img src="Img/Tropical-Beach-Landscape-UHD-Wallpapers.jpg">
    <div class="articulo">
      <p class="titulo-art"> Hoteles en Cozumel </p>
      <p class="subtitulo-art"> 5 noches 2 personas </p>
      <div class="prices-art">
        <a class="precio-art"> desde $2,800.00 </a>
        <a class="descuento-art"> -35% </a>
        <a class="promocion-art"> ¡Oferta exclusiva! </a>
    </div>
    </div>
  </article>
  `;
}

    if(pueblosArt) {
        articleHTML.innerHTML = `
        <article class="art-2">
        <img src="Img/loreto-puebloMagico.jpg">
        <div class="articulo">
          <p class="titulo-art"> Hoteles en Loreto </p>
          <p class="subtitulo-art"> 4 noches 2 personas </p>
          <div class="prices-art">
            <a class="precio-art"> desde $2,850.00 </a>
            <a class="descuento-art"> -14% </a>
            <a class="promocion-art"> ¡Oferta exclusiva! </a>
        </div>
        </div>
      </article>
      <article class="art-2">
        <img src="Img/sanMiguelAllende-puebloMagico.jpg">
        <div class="articulo">
          <p class="titulo-art"> Hoteles en San Miguel de Allende </p>
          <p class="subtitulo-art"> 3 noches 2 personas </p>
          <div class="prices-art">
            <a class="precio-art"> desde $1,750.00 </a>
            <a class="descuento-art"> -13% </a>
            <a class="promocion-art"> ¡Oferta exclusiva! </a>
        </div>
        </div>
      </article>
      <article class="art-2">
        <img src="Img/sanCristobal-pueblosMagicos.jpg">
        <div class="articulo">
          <p class="titulo-art"> Hoteles en San Cristobal de Las Casas </p>
          <p class="subtitulo-art"> 3 noches 2 personas </p>
          <div class="prices-art">
            <a class="precio-art"> desde $1,980.00 </a>
        </div>
        </div>
      </article>
      <article class="art-2">
        <img src="Img/bacalar-puebloMagico.jpg">
        <div class="articulo">
          <p class="titulo-art"> Hoteles en Bacalar </p>
          <p class="subtitulo-art"> 3 noches 3 personas </p>
          <div class="prices-art">
            <a class="precio-art"> desde $2,500.00 </a>
            <a class="descuento-art"> -21% </a>
        </div>
        </div>
      </article>
      `;
    }

    if(ciudadesArt) {
        articleHTML.innerHTML = `
        <article class="art-2">
        <img src="Img/oaxaca-ciudad.jpg">
        <div class="articulo">
          <p class="titulo-art"> Hoteles en Oaxaca </p>
          <p class="subtitulo-art"> 3 noches 2 personas </p>
          <div class="prices-art">
            <a class="precio-art"> desde $1,550.00 </a>
        </div>
        </div>
      </article>
      <article class="art-2">
        <img src="Img/monterrey-ciudad.jpg">
        <div class="articulo">
          <p class="titulo-art"> Hoteles en Monterrey </p>
          <p class="subtitulo-art"> 3 noches 2 personas </p>
          <div class="prices-art">
            <a class="precio-art"> desde $1,990.00 </a>
            <a class="descuento-art"> -25% </a>
        </div>
        </div>
      </article>
      <article class="art-2">
        <img src="Img/morelia-ciudad.jpg">
        <div class="articulo">
          <p class="titulo-art"> Hoteles en Morelia </p>
          <p class="subtitulo-art"> 3 noches 2 personas </p>
          <div class="prices-art">
            <a class="precio-art"> desde $1,519.00 </a>
            <a class="descuento-art"> -10% </a>
            <a class="promocion-art"> ¡Oferta exclusiva! </a>
        </div>
        </div>
      </article>
      <article class="art-2">
        <img src="Img/queretaro-ciudad.jpg">
        <div class="articulo">
          <p class="titulo-art"> Hoteles en Querétaro </p>
          <p class="subtitulo-art"> 3 noches 2 personas </p>
          <div class="prices-art">
            <a class="precio-art"> desde $1,579.00 </a>
            <a class="descuento-art"> -12% </a>
        </div>
        </div>
      </article>
      `;
    }

    paquetesSection2.appendChild(articleHTML);
}

