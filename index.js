const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

//Función para eliminar elemento.
function removeItem(item) {
  const itemEl = document.querySelectorAll(item);

  for (let el of itemEl) {
    el.remove();
  }
}

function main() {
  removeItem(".lista li");
  const listaUl = document.querySelector(".lista ");

  //Ciclo for of
  for (let item of cosasQueAprendimos) {
    const newLiElement = document.createElement("li");
    newLiElement.textContent = item.tema;
    newLiElement.classList.add(item.class || "item"); //Clase que le asigno al "li"
    listaUl.appendChild(newLiElement);
  }
}

main();
