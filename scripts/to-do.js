//per prima cosa recupero il form
const form = document.getElementById("form");
//aggiungo l'event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("HO STOPPATO IL BROWSER", e);
  //recupero l'input
  const textInput = document.getElementById("input");
  //estrapolo il valore
  const valoreText = textInput.value;
  //controllo che abbia fatto tutto giusto
  console.log(valoreText);

  //creo l elemento <li> in modo da avere il posto dove mettere il valoreText
  const li = document.createElement("li");
  //ora devo riempire il li
  li.innerHTML = `${valoreText}<button class="remButton">X</button>`;
  const container = document.getElementById("list");
  container.appendChild(li);
  form.reset();
  //ora devo aggiungere il testo barrato
  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });
  //ora devo aggiungere il funzionamento del bottone remButton in modo da rimuovere il testo dalla lista
  //recupero il bottone
  const remButton = li.querySelector("button");
  remButton.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });
});
