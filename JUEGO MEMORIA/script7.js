// Lista base de imágenes (pares)
const imagenesBase = [
  "imagenes/cebolla.png",
  "imagenes/coliflor.png",
  "imagenes/durazno.png",
  "imagenes/espinaca.png",
  "imagenes/fresa.png",
  "imagenes/frijol.png",
  "imagenes/garbanzo.png",
  "imagenes/guayaba.png"
];

// Creamos un array duplicado y lo desordenamos (shuffle)
let imagenes = [...imagenesBase, ...imagenesBase].sort(() => Math.random() - 0.5);

let tablero = document.getElementById("tablero");
let movimientosTexto = document.getElementById("movimientos");
let felicitaciones = document.getElementById("felicitaciones");
let detalle = document.getElementById("detalle");

let cartasVolteadas = [];
let bloqueado = false;
let movimientos = 0;

// Crear las cartas en el tablero
function crearTablero() {
  tablero.innerHTML = "";
  imagenes.forEach((imagen, index) => {
    const carta = document.createElement("div");
    carta.classList.add("carta");
    carta.dataset.indice = index;
    carta.dataset.valor = imagen;

    // Parte trasera vacía al inicio
    carta.innerHTML = `<img src="" class="oculto">`;

    carta.addEventListener("click", voltearCarta);
    tablero.appendChild(carta);
  });
}

// Función para voltear una carta
function voltearCarta(e) {
  if (bloqueado) return;

  const carta = e.currentTarget;

  // Ignorar si ya está volteada
  if (carta.classList.contains("volteada")) return;

  // Mostrar la imagen
  carta.innerHTML = `<img src="${carta.dataset.valor}" alt="carta">`;
  carta.classList.add("volteada");
  cartasVolteadas.push(carta);

  if (cartasVolteadas.length === 2) {
    movimientos++;
    movimientosTexto.textContent = movimientos;

    const [c1, c2] = cartasVolteadas;

    if (c1.dataset.valor === c2.dataset.valor) {
      // Coincidencia
      cartasVolteadas = [];

      // Revisar si ya terminó el juego
      if (document.querySelectorAll(".carta.volteada").length === imagenes.length) {
        setTimeout(() => {
          document.querySelector(".contenedor").style.display = "none"; // Ocultar tablero
          felicitaciones.style.display = "block"; // Mostrar recuadro
          detalle.textContent = "Has encontrado todas las parejas en " + movimientos + " movimientos.";

          // Cambiar fondo a estado finalizado
          document.body.classList.remove("juego");
          document.body.classList.add("finalizado");
        }, 500);
      }

    } else {
      // No coinciden: bloquear temporalmente
      bloqueado = true;
      setTimeout(() => {
        c1.innerHTML = `<img src="" class="oculto">`;
        c2.innerHTML = `<img src="" class="oculto">`;
        c1.classList.remove("volteada");
        c2.classList.remove("volteada");
        cartasVolteadas = [];
        bloqueado = false;
      }, 1000);
    }
  }
}

// Reinicia el juego completamente
function reiniciarJuego() {
  document.querySelector(".contenedor").style.display = "block"; // Mostrar tablero
  felicitaciones.style.display = "none"; // Ocultar felicitaciones

  // Restaurar fondo al estado "juego"
  document.body.classList.add("juego");
  document.body.classList.remove("finalizado");

  tablero.innerHTML = "";
  movimientos = 0;
  movimientosTexto.textContent = movimientos;
  cartasVolteadas = [];
  bloqueado = false;
  imagenes = [...imagenesBase, ...imagenesBase].sort(() => Math.random() - 0.5);
  crearTablero();
}

// Iniciar el juego al cargar
document.body.classList.add("juego"); // al cargar, fondo del juego
crearTablero();


