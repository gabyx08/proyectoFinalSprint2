
function crearLista(){
  //guarda el valor del input nombreNuevaLista en una variable nombre
  var nombre = document.getElementById("nombreNuevaLista").value;
  // se crea un elemento ul(lista con viñetas)
  var nuevaLista = document.createElement("UL");
  // seagrega un nodo texto a al elemento ul ue se creo
  nuevaLista.appendChild(document.createTextNode(nombre));
  nuevaLista.setAttribute("id","lista");
  // se crea un imput tipo texto para agregar los pendientes a la lista
  var textoPendientes = document.createElement("INPUT");
  textoPendientes.setAttribute("id","nombreNuevoPendiente");
  // se crea elemento imput tupo boton  para acceder a la funcion agregarPendientes y se le asignan atributosal boton
  var botonPendientes = document.createElement("INPUT");
  botonPendientes.setAttribute("type","button");
  botonPendientes.setAttribute("value","Crear Pendiente");
  botonPendientes.setAttribute("id","botonPendi");
  botonPendientes.setAttribute("class","pendiente");
  botonPendientes.setAttribute("onclick","agregarPendiente()");
  // se crea un elemento imput tipo boton para acceder a la funcion borrarLista
  var botonBorrarLista= document.createElement("INPUT")
  botonBorrarLista.setAttribute("type","button");
  botonBorrarLista.setAttribute("value","Borrar Lista");
  botonBorrarLista.setAttribute("id","botonBorrarLi");
  botonBorrarLista.setAttribute("onclick","borrarLista()");
  // se crea un elemnto hr para ir separando las listas ue se crean
  var separador= document.createElement("HR");
  separador.setAttribute("id","hr");
  //se agregan los elementos creados a la seccion con id agregarListas
  document.getElementById("agregarListas").appendChild(nuevaLista);
  document.getElementById("agregarListas").appendChild(textoPendientes);
  document.getElementById("agregarListas").appendChild(botonPendientes);
  document.getElementById("agregarListas").appendChild(botonBorrarLista);
  document.getElementById("agregarListas").appendChild(separador);
//borrar el contenido del imput con id nombreNuevaLista
  document.getElementById("nombreNuevaLista").value="";
}

function agregarPendiente(){
  //se el contenido que ingresa el usuario al impu con id nombreNuevoPendiente
  var nombrePendiente= document.getElementById("nombreNuevoPendiente").value;
  // se crea el un elemeto li para ir agregando los pendientes
  var nuevoPendiente= document.createElement("LI");
  nuevoPendiente.appendChild(document.createTextNode(nombrePendiente));
  // se agrega el un nodo hijo al elemento ul
  document.getElementById("lista").appendChild(nuevoPendiente);
  //borra el contenido del imput con id nombre nombreNuevoPendiente
  document.getElementById("nombreNuevoPendiente").value= "";
}

function borrarLista(){
  // se eleminan los elementos que contiene la lista
document.getElementById("agregarListas").removeChild(document.getElementById("lista"));
document.getElementById("agregarListas").removeChild(document.getElementById("nombreNuevoPendiente"));
document.getElementById("agregarListas").removeChild(document.getElementById("botonPendi"));
document.getElementById("agregarListas").removeChild(document.getElementById("botonBorrarLi"));
document.getElementById("agregarListas").removeChild(document.getElementById("hr"));
}
