const boton = document.getElementById("btn-load")
const input = document.getElementById("input-id")
const contenedor = document.getElementById("resultado")

const obtenerUsuarioDB = async (id) => {
    const response = await fetch(`http://localhost:3000/usuarios/${id}`);

    if(!response.ok){
        throw new Error (`Error ${response.status}: Usuario no encontrado`)
    }
   
    const datos = await response.json()

    return datos
}

boton.addEventListener('click', async () => {
    boton.disabled = true;
    const idRecibido = input.value;

    if (!idRecibido) {
        alert("Por favor ingrese un numero");
        return;
    }

    try {
        const respuesta = await obtenerUsuarioDB(idRecibido);
        console.log("Usuario encontrado:", usuario);
    } catch (error) {
        console.log(error)
    } finally {
        boton.disabled = false
    }
})

const nuevoUsuario = {
    nombre: "Carlos",
    puesto: "DevOps"
};

const actualizarUsuario = {
    nombre: "Carlos",
    puesto: "CEO"
}

const crearUsuario = async () => {
    const respuesta = await fetch(`http://localhost:3000/usuarios`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)
    });

    if (respuesta.ok){
        console.log("Usuario creado con exito!")
    }
}

const idActualizar = 5;

const editarUsuario = async() => {
    await fetch(`http://localhost:3000/usuarios/${idActualizar}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)
    })
}

const idBorrar = 2
const borrarUsuario = async () => [
    await fetch(`http://localhost:3000/usuarios/${idBorrar}`, {
        method: "DELETE"
    })
]

// Aplicacion del clima
const botonClima = document.getElementById("see-weather");
const contenedorClima = document.getElementById("container-weather");

botonClima.addEventListener('click', async () => {
    try {
        const respuesta = await fetch(`http://localhost:3000/api/clima`);

        if(!respuesta.ok) {
            throw new Error("Error al obtener el clima")
        }

        const listaClima = await respuesta.json();

        listaClima.forEach(dia => {
            const tarjeta = document.createElement('div');

            tarjeta.style.border = "1px solid #ccc";
            tarjeta.style.background = "#000";
            tarjeta.style.padding = "8px"
            tarjeta.style.borderRadius = "4px";
            tarjeta.style.textAlign = "center";

            tarjeta.innerHTML = `
                <h3>${dia.dia}</h3>
                <div>${dia.icono}</div>
                <p>${dia.temperatura}</p>
                <p>${dia.condicion}</p>
            `
        })
    } catch (error) {
        console.log(error)
    }
})