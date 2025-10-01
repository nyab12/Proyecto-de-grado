// Array con las preguntas del quiz
const preguntas = [
    {
      pregunta: "¿Cómo se llama la fruta de color amarillo?",
      opciones: ["Uva", "Manzana", "Banano", "Guayaba"],
      respuesta: "Banano"
    },
    {
      pregunta: "¿En qué país se originó la pera?",
      opciones: ["China", "India", "Estados Unidos", "Bolivia"],
      respuesta: "China"
    },
    {
      pregunta: "¿Cuántos grupos de alimentos existen?",
      opciones: ["3", "8", "1", "6"],
      respuesta: "6"
    },
    
    {
      pregunta: "¿La leche a qué grupo alimenticio pertenece?",
      opciones: ["Frutas", "Lácteos", "Cereales", "Proteínas"],
      respuesta: "Lácteos"
    },
    {
      pregunta: "¿Cuál de éstas, no es una fruta?",
      opciones: ["Mora", "Papaya", "Guayaba", "Coliflor"],
      respuesta: "Coliflor"
    },
    {
      pregunta: "¿Qué alimentos pertenecen al grupo de las legumbres?",
      opciones: ["Lenteja, pan, arveja y tomate", "Zanahoria, carne, maní y almendra", "Arveja, frijol, garbanzo y lenteja", "Maíz, garbanzo, quinoa y pera"],
      respuesta: "Arveja, frijol, garbanzo y lenteja"
    },
    {
      pregunta: "¿En qué país se originó el pollo?",
      opciones: ["Sudeste asiático", "Afganistán", "Ecuador", "Sudáfrica"],
      respuesta: "Sudeste asiático"
    },
    {
      pregunta: "¿A qué grupo de alimentos pertenece la espinaca?",
      opciones: ["Verduras", "Frutas", "Lácteos", "Cereales"],
      respuesta: "Verduras"
    },
    {
      pregunta: "¿Cuál es el principal país que exporta carne y pescado en el mundo?",
      opciones: ["Brasil", "Jerusalén", "China", "India"],
      respuesta: "China"
    },
    {
      pregunta: "¿Se debe limitar el consumo de alimentos procesados, grasas saturadas y azúcares añadidos?",
      opciones: ["Verdadero", "Falso"],
      respuesta: "Verdadero"
    },
    {
      pregunta: "¿Qué aportan las frutas?",
      opciones: ["Vitaminas, minerales, agua, fibra y energía", "Energía", "Proteínas y calcio", "Fibra, vitaminas, minerales y antioxidantes"],
      respuesta: "Vitaminas, minerales, agua, fibra y energía"
    },
    {
      pregunta: "¿En que países se dió origen al arroz?",
      opciones: ["México y Colombia", "China e India", "Perú y Bolivia", "Tailandia y Japón"],
      respuesta: "China e India"
    }
  ];
  
  // Variables para rastrear la pregunta actual y la puntuación
  let indiceActual = 0;
  let puntuacion = 0;
  
  // Referencias al DOM (documento HTML)
  const preguntaElem = document.getElementById("pregunta");
  const opcionesElem = document.getElementById("opciones");
  const resultadoElem = document.getElementById("resultado");
  const botonSiguiente = document.getElementById("siguiente");
  
  // Mostrar la pregunta actual y sus opciones
  function mostrarPregunta() {
    const actual = preguntas[indiceActual]; // Obtenemos la pregunta actual
    preguntaElem.textContent = actual.pregunta; // Mostramos la pregunta
    opcionesElem.innerHTML = ""; // Limpiamos las opciones anteriores
  
    // Recorremos las opciones para crear los botones
    actual.opciones.forEach(opcion => {
      const boton = document.createElement("button"); // Creamos el botón
      boton.textContent = opcion;
  
      // Evento cuando el usuario hace clic en una opción
      boton.onclick = () => {
        // Verificamos si la opción es correcta
        if (opcion === actual.respuesta) {
          puntuacion++; // Sumamos un punto si acierta
          boton.style.backgroundColor = "#3f9614ff"; // Verde si es correcto
        } else {
          boton.style.backgroundColor = "#ee3939ff"; // Rojo si es incorrecto
        }
  
        // Desactivamos todas las opciones para evitar doble clic
        Array.from(opcionesElem.children).forEach(btn => btn.disabled = true);
  
        // Mostramos el botón de siguiente pregunta
        botonSiguiente.style.display = "inline-block";
      };
  
      // Agregamos el botón al contenedor de opciones
      opcionesElem.appendChild(boton);
    });
  }
  
  // Función para pasar a la siguiente pregunta o terminar el quiz
  function siguientePregunta() {
    indiceActual++; // Avanzamos al siguiente índice
    botonSiguiente.style.display = "none"; // Ocultamos el botón
  
    // Si hay más preguntas, las mostramos
    if (indiceActual < preguntas.length) {
      mostrarPregunta();
    } else {
      mostrarResultado(); // Si no hay más, mostramos el resultado
    }
  }
  
  // Mostrar el resultado final
  function mostrarResultado() {
    preguntaElem.textContent = "¡Terminaste la prueba!";
    opcionesElem.innerHTML = ""; // Limpiamos las opciones
    resultadoElem.textContent = `Tu puntuación: ${puntuacion} / ${preguntas.length}`;
    botonSiguiente.style.display = "none";
  }
  
  // Iniciar el juego mostrando la primera pregunta
  mostrarPregunta();
  