"use strict";

const nomVilleDepart = document.querySelector("h1");

// stocker mon api et la transformer en json

const depart = (ville, nb) => {
  fetch(
    `https://transport.opendata.ch/v1/stationboard?station=${ville}&limit=${nb}`
  )
    .then((resultat) => {
      //gestion erreur 404
      if (resultat.status === 404) {
        throw new Error("Oups");
      }
      return resultat.json();
    })

    .then((data) => {
      console.log(data);

      // on gère ici l'erreur car si la ville n'est pas juste le tableau stationboard sera vide, donc on lui dit si vide crache une message d'erreur
      if (data.stationboard.length === 0) {
        throw new Error(
          (nomVilleDepart.innerHTML = "Oups c'est pas une ville")
        );
      }

      data.stationboard.forEach((element) => {
        affiche(element);
      });
    })

    // tjr à la fin de tes .then - attrape toutes les erreures et les print dans la console
    .catch((err) => {
      console.log(err.message);
    });

  nomVilleDepart.innerHTML = ville;
};

depart("Morges", 5);

// affichier mes départs

const monTableauHorraire = document.querySelector("#board");

const affiche = (train) => {
  const html = `<article>
    <div class="time">13:50</div>
    <div class="category" data-category="${train.category}">${train.category}</div>
    <div class="destination">${train.to}</div>
    </article>`;

  monTableauHorraire.insertAdjacentHTML("afterbegin", html);
};
