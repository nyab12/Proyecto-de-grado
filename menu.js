let usuarioActual = localStorage.getItem("usuarioActual");

if (!usuarioActual) {
  document.getElementById("catalogo").innerHTML = "";
  document.getElementById("historial").innerHTML = "<em>Debes iniciar sesión en la página principal para usar esta función.</em>";
  // Opcional: deshabilita botones
} else {
  window.addEventListener("DOMContentLoaded", function() {
    mostrarProductos(productos);
    mostrarHistorial();
    actualizarMenus();
    cargarOpcionesComida();
  });
}

let menus = {
  desayuno: [],
  almuerzo: [],
  cena: [],
  onces: []
};
let historial = [];

// Mostrar productos en el catálogo
function mostrarProductos(lista) {
  const contenedor = document.getElementById('catalogo');
  contenedor.innerHTML = "";
  lista.forEach(prod => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}" />
      <h2>${prod.nombre}</h2>
      <button onclick="agregaATuMenu(${prod.id})">Agregar</button>
    `;
    contenedor.appendChild(div);
  });
}

// Mostrar todos los productos
function mostrarTodos() {
  mostrarProductos(productos);
}

// Filtrar por categoría
function filtrarPorCategoria(categoria) {
  const filtrados = productos.filter(p => p.categoria === categoria);
  mostrarProductos(filtrados);
}

// Buscar productos por nombre 
function buscarProducto() { 
  const texto = document.getElementById("inputBuscar").value.toLowerCase(); 
  const resultado = productos.filter(p => 
    p.nombre.toLowerCase().includes(texto) 
  ); 
  mostrarProductos(resultado); 
}  

// Agregar producto al menú seleccionado
function agregaATuMenu(id) {
  const tipoComidaActual = document.getElementById("tipoComida").value;
  const producto = productos.find(p => p.id === id);
  const menu = menus[tipoComidaActual];
  const existe = menu.find(p => p.id === id);

  if (existe) {
    existe.cantidad += 1;
  } else {
    menu.push({ ...producto, cantidad: 1 });
  }
  actualizarMenus();
}

// Actualizar menús en pantalla
function actualizarMenus() {
  ["desayuno", "almuerzo", "cena", "onces"].forEach(tipo => {
    const div = document.getElementById(tipo);
    if (!div) return;
    div.innerHTML = "";
    menus[tipo].forEach(p => {
      const item = document.createElement("div");
      item.innerHTML = `
        <strong>${p.nombre}</strong> x ${p.cantidad}
        <button onclick="eliminarDelMenu('${tipo}',${p.id})">Eliminar</button>
      `;
      div.appendChild(item);
    });
  });
}

// Eliminar producto de menú
function eliminarDelMenu(tipo, id) {
  menus[tipo] = menus[tipo].filter(p => p.id !== id);
  actualizarMenus();
}

// Guardar menú en historial del usuario actual
function guardarMenu() {
  if (!usuarioActual) {
    mostrarMensaje("Debes iniciar sesión para guardar tu menú");
    return;
  }
  const fecha = new Date().toLocaleString();
  const copiaMenus = JSON.parse(JSON.stringify(menus));
  historial.push({ fecha, menus: copiaMenus });

  // Actualizar historial en el usuario
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
  usuarios[usuarioActual].historial = historial;
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Vacía los menús actuales
  menus = {
    desayuno: [],
    almuerzo: [],
    cena: [],
    onces: []
  };
  actualizarMenus();
  mostrarHistorial();
}

// Mostrar historial de menús del usuario actual
function mostrarHistorial() {
  const div = document.getElementById("historial");
  div.innerHTML = "";
  if (!usuarioActual) {
    div.innerHTML = "<em>Inicia sesión para ver tu historial.</em>";
    return;
  }
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
  historial = usuarios[usuarioActual]?.historial || [];
  historial.slice().reverse().forEach((item, idx) => {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("historial-menu");
    menuDiv.innerHTML = `<strong>Menú guardado el ${item.fecha}</strong><br>`;
    ["desayuno", "almuerzo", "cena", "onces"].forEach(tipo => {
      if (item.menus[tipo].length > 0) {
        menuDiv.innerHTML += `<em>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}:</em> `;
        menuDiv.innerHTML += item.menus[tipo].map(p => `${p.nombre} x${p.cantidad}`).join(", ");
        menuDiv.innerHTML += "<br>";
      }
    });
    div.appendChild(menuDiv);
  });
}

// Mostrar mensaje al usuario (opcional)
function mostrarMensaje(msg) {
  const mensaje = document.getElementById("mensaje-usuario");
  if (mensaje) mensaje.textContent = msg;
}

// Cargar opciones del select tipoComida
function cargarOpcionesComida() {
  const select = document.getElementById("tipoComida");
  if (!select) return;
  select.innerHTML = `
    <option value="desayuno">Desayuno</option>
    <option value="almuerzo">Almuerzo</option>
    <option value="cena">Cena</option>
    <option value="onces">Onces</option>
  `;
}