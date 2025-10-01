localStorage.setItem("usuarioActual", usuarioActual);

// Crear cuenta
function crearCuenta() {
  const usuario = document.getElementById("usuario").value.trim();
  const contrasena = document.getElementById("contrasena").value;
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

  if (!usuario || !contrasena) {
    mostrarMensaje("Debes ingresar usuario y contraseña");
    return;
  }
  if (usuarios[usuario]) {
    mostrarMensaje("El usuario ya existe");
    return;
  }
  usuarios[usuario] = { contrasena, historial: [] };
  
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarMensaje("Cuenta creada. Ahora puedes iniciar sesión.");
}

// Iniciar sesión y mostrar conversación si es correcto
function iniciarSesion() {
  const usuario = document.getElementById("usuario").value.trim();
  const contrasena = document.getElementById("contrasena").value;
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

  if (!usuarios[usuario] || usuarios[usuario].contrasena !== contrasena) {
    mostrarMensaje("Usuario o contraseña incorrectos");
    return;
  }
  usuarioActual = usuario;
  localStorage.setItem("usuarioActual", usuarioActual); // Guarda el usuario actual para otros archivos
  mostrarMensaje("Sesión iniciada correctamente");

  // Oculta el formulario y muestra la conversación
  document.getElementById("form-usuario").style.display = "none";
  document.getElementById("chat").style.display = "block";
  document.getElementById("contenido").style.display = "none";

  // Inicia la conversación solo si existe la función
  if (typeof iniciarConversacion === "function") {
    document.getElementById("chat").innerHTML = ""; // Limpia el chat
    iniciarConversacion();
  }
}

// Mostrar mensaje al usuario
function mostrarMensaje(msg) {
  document.getElementById("mensaje-usuario").textContent = msg;
}