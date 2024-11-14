const primaryFetch = () => {
  fetch("https://api.pexels.com/v1/search?query=animals", {
    headers: {
      Authorization: "uhFtiipDS9A1gry8N8zrJSkoTuG5uI3XcpJkK6eyenDrdLAt92UPJeTm",
    },
  })
    .then((responseObj) => {
      if (responseObj.ok) {
        return responseObj.json();
      }
    })
    .then((animalsFetch) => {
      const cardImgs = document.getElementsByClassName("card-img-top");
      const cardTitle = document.getElementsByClassName("card-title");
      const cardText = document.getElementsByClassName("card-text");
      const cardMuted = document.getElementsByClassName("text-muted");
      const btnLoad = document.getElementsByClassName("btn-primary");
      const btnLoadSecondary = document.getElementsByClassName("btn-secondary");
      btnLoad.onsubmit = function () {
        animalsFetch.photos.forEach((animal, index) => {
          if (cardImgs[index]) {
            // Verifica che esista un elemento nella posizione index
            cardImgs[index].src = animal.src.original; // Imposta l'immagine
            console.log(cardImgs[index].src); // Aggiungi un log per il debug
          }
        });
      };
    });
};
window.onload = () => {
  primaryFetch();
};
