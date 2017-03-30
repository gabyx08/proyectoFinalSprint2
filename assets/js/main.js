
function crearLista(){
  var nombre = document.getElementById("nombreNuevaLista").value;
  var nuevaLista = document.createElement("UL");
  nuevaLista.appendChild(document.createTextNode(nombre));
  nuevaLista.setAttribute("id","lista");
  var textoPendientes = document.createElement("INPUT");
  textoPendientes.setAttribute("id","nombreNuevoPendiente");
  var botonPendientes = document.createElement("INPUT");
  botonPendientes.setAttribute("type","button");
  botonPendientes.setAttribute("value","Crear Pendiente");
  botonPendientes.setAttribute("id","botonPendi");
  botonPendientes.setAttribute("onclick","agregarPendiente()");
  var botonBorrarLista= document.createElement("INPUT")
  botonBorrarLista.setAttribute("type","button");
  botonBorrarLista.setAttribute("value","Borrar Lista");
  botonBorrarLista.setAttribute("id","botonBorrarLi");
  botonBorrarLista.setAttribute("onclick","borrarLista()");
  var separador= document.createElement("HR");
  separador.setAttribute("id","hr");
  document.getElementById("agregarListas").appendChild(nuevaLista);
  document.getElementById("agregarListas").appendChild(textoPendientes);
  document.getElementById("agregarListas").appendChild(botonPendientes);
  document.getElementById("agregarListas").appendChild(botonBorrarLista);
  document.getElementById("agregarListas").appendChild(separador);
}

function agregarPendiente(){
  var nombrePendiente= document.getElementById("nombreNuevoPendiente").value;
  var nuevoPendiente= document.createElement("LI");
  nuevoPendiente.appendChild(document.createTextNode(nombrePendiente));
  document.getElementById("lista").appendChild(nuevoPendiente);
}

function borrarLista(){
document.getElementById("agregarListas").removeChild(document.getElementById("lista"));
document.getElementById("agregarListas").removeChild(document.getElementById("nombreNuevoPendiente"));
document.getElementById("agregarListas").removeChild(document.getElementById("botonPendi"));
document.getElementById("agregarListas").removeChild(document.getElementById("botonBorrarLi"));
document.getElementById("agregarListas").removeChild(document.getElementById("hr"));
}
