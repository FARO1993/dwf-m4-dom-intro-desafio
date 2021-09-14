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

//Función para eliminar elemento HTML.
function remove(item) {
  let elem = document.querySelectorAll(item);
  for (var i = 0; i < elem.length; i++) {
    var del = elem[i];
    del.parentNode.removeChild(del);
  }
}

function main() {
  const erase = remove("li");
}

main();
