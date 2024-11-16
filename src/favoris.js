let arr_favori = JSON.parse(localStorage.getItem("arr_favori")) || [];

// Add a product to the favorites list (just an example)
// let arr_favori = [];  // List of favorites
function ajoutFavori(idproduit, event) {
    prod = getproduit(idproduit);
    console.log(arr_favori);
    const coeur = event.target;
    console.log("produit.id");
    console.log(idproduit);
    let index = arr_favori.findIndex(
      (f) => parseInt(f.id) == parseInt(idproduit)
    );
    console.log(index);
    if (index == -1) {
      console.log("j existe pas :");
      console.log(index);
      coeur.classList.add("text-red-500");
      arr_favori.push(prod);
      console.log("Produit ajouté aux favoris:", idproduit);
    } else {
      console.log("existe :");
      coeur.classList.remove("text-red-500");
      arr_favori.splice(index, 1);
    }
    console.log("-------------------------------");
    localStorage.setItem("arr_favori", JSON.stringify(arr_favori));
  }

  function afficheFavori() {
    afficheAll(arr_favori, 0, 12);
    const iconfavoris = document.querySelectorAll(".iconfavori");
    iconfavoris.forEach((icon) => {
      icon.classList.add("text-red-500");
    });
  }
  