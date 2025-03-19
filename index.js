import { crearHeader } from "./component/header/header.js";
import { cargarFormularioLogin } from "./component/login/login.js";
import { cargarContenidoPrincipal } from "./component/tareas/principal.js";

function iniciarAplicacion() {
    const root = document.getElementById("root");
    root.innerHTML = ""; 
    root.appendChild(crearHeader());
    cargarFormularioLogin(root, cargarContenidoPrincipal);
}


iniciarAplicacion();    