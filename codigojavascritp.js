let amigos = [];
//funcion que agrega amigos 
        function agregarAmigo() {
            let input = document.getElementById("amigo");
            let nombre = input.value.trim();
            //se incrusta a la lista de amigos
            let lista = document.getElementById("listaAmigos");
// alerta por casillero vacio
            if (nombre === "") {
                alert("Por favor, introduce un nombre antes de añadir.");
                return;
            }
//alerta por mismo nombre
            if (amigos.includes(nombre)) {
                alert("Este nombre ya ha sido agregado.");
                return;
            }
//si no hay problema, alguno se introduce
            amigos.push(nombre);
            let li = document.createElement("li");
            li.textContent = nombre;
            lista.appendChild(li);
            input.value = "";
        }

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function sortearAmigo() {
            if (amigos.length < 2) {
                alert("Se necesitan al menos dos participantes para el sorteo.");
                return;
            }

            let sorteados = [...amigos];
            do {
                shuffle(sorteados);
            } while (amigos.some((nombre, index) => nombre === sorteados[index]));

            let resultadoLista = document.getElementById("resultado");
            resultadoLista.innerHTML = "";

            for (let i = 0; i < amigos.length; i++) {
                let li = document.createElement("li");
                li.textContent = `${amigos[i]} → ${sorteados[i]}`;
                resultadoLista.appendChild(li);
            }
        }