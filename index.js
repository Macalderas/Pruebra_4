import { crearHeader } from "./component/header/header.js";
import { cuerpo } from "./component/cuerpo/cuerpo.js";
import { footer } from "./component/formulario/formulario.js";

let DOM =document.getElementById("root")
function inicarAPP(){
DOM.appendChild(crearHeader());
DOM.appendChild(cuerpo("Create icons for a dashboard")); 
DOM.appendChild(cuerpo("Prepare a design presentation.")); 
DOM.appendChild(cuerpo("Stretch for 15 minutes"));
DOM.appendChild(cuerpo("Plan your meal")); 
DOM.appendChild(cuerpo("Review daily goals before sleeping. Add some new if time permits")); 
DOM.appendChild(cuerpo("Water indoor plants")); 


DOM.appendChild(footer());
}

inicarAPP();