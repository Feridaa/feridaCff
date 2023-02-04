"use strict";

const nomVilleDepart = document.querySelector("h1");

// stocker mon api et la transformer en json

const depart = (ville, nb) => {
  fetch(
    `http://transport.opendata.ch/v1/stationboard?station=${ville}&limit=${nb}`
  )
    .then((resultat) => {
      if (resultat.status === 404) {
        throw new Error("Oups");
      }
      return resultat.json();
    })

    .then((data) => {
      console.log(data);
    })

    .catch((err) => {
      console.log(err.message);
    });
};

depart("Lausanne", 5);

// affichier mes départs

const monTableauHorraire = document.querySelector("#board");

const html = `<article>
<div class="time">13:50</div>
<div class="category" data-category="IR">IR</div>
<div class="destination">Montreux</div>
</article>`;

monTableauHorraire.insertAdjacentHTML("afterbegin", html);
