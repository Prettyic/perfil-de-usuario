const datos ={
    
}
// se declara la variable que va  aputar al div informacion y se le asigna undefined porque el boton aun  no existe el boton info_button solo cuando
// se le de click al boton del formulario
let btn_informacion = undefined;
function enviar_info(event){
    event.preventDefault();
    
    datos.name = document.getElementById("name").value
    datos.edad = document.getElementById("edad").value
    datos.correo = document.getElementById("correo").value
    datos.telefono = document.getElementById("telefono").value
    datos.direccion = document.getElementById("direccion").value
    

     let form = document.querySelector(".formulario");
     form.innerHTML =`
         <div id="informacion">
        <img id="imagen_datos" src="./img/a6be5355bf5332c57184654e90614413.jpg" alt="">
        <h1>${datos.name}</h1>
        <h1>Perfil de usuario</h1>
        <p id="name"><span>${datos.name}</span></p>
        <p id="edad"><span>${datos.edad}</span></p>
        <p id="correo"><span>${datos.correo}</span></p>
        <p id="telefono"><span>${datos.telefono}</span></p>
        <p id="telefono"><span>${datos.direccion}</span></p>
        <button type="button" id="info_button" onclick"enviar_info">Modificar Datos</button>
    </div
     `

     btn_informacion= document.getElementById("info_button");
     btn_informacion.addEventListener("click", mostrar_form)
   
}

function mostrar_form(){
    document.querySelector(".formulario").innerHTML =`
    <form onsubmit="enviar_info(event)">
            <h1>Modificar Perfil</h1>
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" placeholder="${datos.name}" required>
            <label for="edad">edad:</label>
            <input type="number" id="edad" name="edad" placeholder="${datos.edad}" required>
            <label for="correo">Correo electronico:</label>
            <input type="gmail" id="correo" name="correo" placeholder="${datos.correo}" required>
            <label for="correo">Telefono:</label>
            <input type="number" id="telefono" name="telefono" placeholder="${datos.telefono}" required>
            <label for="">Dirección:</label>
            <input type="text" id="direccion" name="direccion" placeholder="${datos.direccion}" required>
            <label for="">Foto de perfil:</label>
             <button type="button"  id="button_img"onclick="cambiar_imagen()">
                <span>Seleccionar</span>
                <img src="img/SzeBd4LeVj3I8H7Ynwh18PHU_400x400.png" id="input_foto">
            </button>
            
            <button>Actualizar</button>
        </form>
    `
}


 // datos.info=document.getElementById("name").value;
    // document.getElementById("caja").innerHTML =
    // `<figure>
    //         <img src="${datos.link}" alt="">
    //         <figcaption${datos.info}</figcaption>
    //     </figure>`
// function agregar_contenido() {
//     document.getElementById("caja").innerHTML =
//     `<figure>
//             <img src="${datos.link}" alt="">
//             <figcaption${datos.info}</figcaption>
//         </figure>`
// }

// function eliminar_contenido() {
//     document.getElementById("caja").innerHTML = ""
// }
