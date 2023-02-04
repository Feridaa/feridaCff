// stocker mon api et la transformer en json

const data =
  fetch`http://transport.opendata.ch/v1/stationboard?station=Aarau&limit=10`
    .then((resultat) => resultat.json())
    .then((data) => console.log(data));

// affichier mes départs

const monTableauHorraire = document.querySelector("#board");

const html = `<article>
<div class="time">13:50</div>
<div class="category" data-category="IR">IR</div>
<div class="destination">Montreux</div>
</article>`;

monTableauHorraire.insertAdjacentHTML("afterbegin", html);
