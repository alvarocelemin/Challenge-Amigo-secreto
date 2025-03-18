// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let listaAmigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim(); // Eliminar espacios en blanco al inicio y fin

    // Validar que el campo no esté vacío y que no se repitan nombres
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (listaAmigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombre);

    // Actualizar la lista en pantalla
    actualizarLista();

    // Limpiar el campo de entrada
    inputNombre.value = "";
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpiar la lista antes de actualizar

    listaAmigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = amigo;

        // Agregar botón para eliminar nombres individuales
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.classList.add("btn-eliminar");
        botonEliminar.onclick = function () {
            eliminarNombre(index);
        };

        item.appendChild(botonEliminar);
        listaElement.appendChild(item);
    });
}

// Función para eliminar un nombre específico de la lista
function eliminarNombre(index) {
    listaAmigos.splice(index, 1);
    actualizarLista(); // Actualizar la vista
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debes agregar al menos dos nombres para realizar el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}
