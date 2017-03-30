function crearLista(){
  var nombre = document.getElementById("nombreNuevaLista").value;
  var nuevaLista = document.createElement("UL");
  nuevaLista.appendChild(document.createTextNode(nombre));
  nuevaLista.setAttribute("id","hola");

  var textoPendientes = document.createElement("INPUT");
  textoPendientes.setAttribute("id","nombreNuevoPendiente");
  var botonPendientes = document.createElement("INPUT");
  botonPendientes.setAttribute("type","button");
  botonPendientes.setAttribute("value","Crear Pendiente");
  botonPendientes.setAttribute("onclick","agregarPendiente()");
  var separador= document.createElement("HR");
  document.getElementById("agregarListas").appendChild(nuevaLista);
  document.getElementById("agregarListas").appendChild(textoPendientes);
  document.getElementById("agregarListas").appendChild(botonPendientes);
  document.getElementById("agregarListas").appendChild(separador);
}

function agregarPendiente(){
  var nombrePendiente= document.getElementById("nombreNuevoPendiente").value;
  console.log(nombrePendiente);
  var nuevoPendiente= document.createElement("LI");
  nuevoPendiente.appendChild(document.createTextNode(nombrePendiente));
  document.getElementById("hola").appendChild(nuevoPendiente);
}
//<nodo>.setAttribute(<atributo>,<valor>);
