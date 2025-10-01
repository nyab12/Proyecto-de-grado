function iniciarConversacion() {
  const chat = document.getElementById("chat");
  const contenido = document.getElementById("contenido");

  const mensajes = [
    { personaje: "p1", texto: "¡Hola Capibara! Bienvenido a Health Navigators", img: "imagenes/buho.png" },
    { personaje: "p2", texto: "¡Hola Buho! ¿De qué trata esta página?", img: "imagenes/capibara.png" },
    { personaje: "p1", texto: "Esta página trata sobre los grupos de alimentos", img: "imagenes/buho.png" },
    { personaje: "p2", texto: "¡Qué genial! ¿También hay juegos Buho?", img: "imagenes/capibara.png" },
    { personaje: "p1", texto: "Sí Capibara. Encontrarás juegos para aprender jugando", img: "imagenes/buho.png" },
    { personaje: "p2", texto: "Perfecto, ¡vamos a descubrirlo juntos!", img: "imagenes/capibara.png" }
  ];

  let i = 0;
  function mostrarMensaje() {
    if (i < mensajes.length) {
      const container = document.createElement("div");
      container.className = "mensaje-container " + (mensajes[i].personaje === "p1" ? "izq" : "der");

      const avatar = document.createElement("img");
      avatar.src = mensajes[i].img;
      avatar.className = "avatar";

      const msg = document.createElement("div");
      msg.className = "mensaje " + mensajes[i].personaje;
      msg.textContent = mensajes[i].texto;

      container.appendChild(avatar);
      container.appendChild(msg);
      chat.appendChild(container);

      chat.scrollTop = chat.scrollHeight;
      i++;
      setTimeout(mostrarMensaje, 1500);
    } else {
      setTimeout(() => {
        chat.style.display = "none";
        contenido.style.display = "block";
      }, 2000);
    }
  }
  mostrarMensaje();
}