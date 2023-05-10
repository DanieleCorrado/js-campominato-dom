let form = document.getElementById("form");
let grid = document.getElementById("play-table");
let score = 0;
let bombNumber = 16;
let bomb =[];
let maxSquare = 0;

// Attendo che il pulsante venga premuto dall'utente

form.addEventListener("submit", (e) =>{

  e.preventDefault();

  // Imposto la display mode del risultato su none e ne cancello il contenuto

  document.getElementById("score").style.display = "none";

  document.getElementById("score").innerHTML = "";

  // Imposto il display mode della griglia di gioco

  document.getElementById("table").style.display = "flex";

  document.getElementById("footer").style.display = "block";

  // Inizializzo la difficolta selezionata dal giocatore

  const difficulties = document.getElementById("difficulty-selector");

  // In base alle difficoltà selezione imposto il numero di caselle da visualizzare

  if(difficulties.value === "easy") {

    maxSquare = 100;

  } else if (difficulties.value === "medium"){

    maxSquare = 81;

  } else {

    maxSquare = 49;

  }

  // Genero 16 numeri casuali e univoci

  while(bomb.length < bombNumber){

    var r = Math.floor(Math.random() * maxSquare) + 1;

    if(bomb.indexOf(r) === -1) {

      bomb.push(r);

    }
}

  console.log(bomb);

  // ciclo per creare tutti i riquadri della griglia
  
  for (let i = 0; i < maxSquare; i++) {

    const newSquare = createGridSquare("div", "square");

    counter = i + 1;

    const content = document.createTextNode(counter);
  
    newSquare.append(content);

    if (maxSquare === 100) {

      newSquare.style.width = "calc(100% / 10)";

    } else if (maxSquare === 81) {
      
      newSquare.style.width = "calc(100% / 9)";

    } else {

      newSquare.style.width = "calc(100% / 7)";
      
    }



    // Controllo se l'utente clicca su un riquadro della griglia e nel caso avvenga aggiungo la classe "clicked"

    newSquare.addEventListener("click", function () {


      if((bomb.includes(parseInt(this.innerHTML))) || score === (maxSquare - bomb.length)) {
        
        this.classList.add("bomb");
        
        document.getElementById("play-table").innerHTML = "";

        document.getElementById("footer").style.display = "none";

        document.getElementById("score").style.display = "block";

        document.getElementById("score").innerHTML += ` Hai totalizzato un punteggio di ${score}`;
        score = 0;

      } else {

        this.classList.add("clicked");
        value = this.innerHTML;
        score += 1;
        console.log(value);

      }
    });

    // Inserisco il riquadro creato nella griglia

    grid.append(newSquare);

  }

})





// FUNZIONI

// Creo i riquadri della griglia

function createGridSquare(tagType, classToAdd) {

  const newElement = document.createElement(tagType);
  newElement.classList.add(classToAdd);

  return newElement;

}

