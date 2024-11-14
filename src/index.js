
let arr_produits = JSON.parse(localStorage.getItem("arr_produits"));
//console.log( arr_produits ) ;
let ligneCmd = {
  id_ligneCmd: "",
  produit: "",
  prixUnitaire: 0,
  qte: 0,
  prix: 0,
};
let panier = []; // panier.push(ligneCmd)
let offre = { idproduit: "", dateEchance: "", reduction: "" };

const categories = [
  { id: 1, nom: "Smartphones" },
  { id: 2, nom: "Laptops" },
  { id: 3, nom: "Télévisions" },
  { id: 4, nom: "Électroménagers" },
  { id: 5, nom: "souris" },
  { id: 6, nom: "casque" },
];
// Tableau pour le litrage
const litrage = [
  { id: 1, taille: "30L", prix: 0 },
  { id: 2, taille: "50L", prix: 10 },
  { id: 3, taille: "80L", prix: 20 },
  { id: 4, taille: "100L", prix: 30 },
];

// Tableau pour le taux de rafraîchissement
const tauxDeRafraichissement = [
  { id: 1, taux: "60Hz", prix: 0 },
  { id: 2, taux: "75Hz", prix: 15 },
  { id: 5, taux: "144Hz", prix: 45 },
  { id: 9, taux: "360Hz", prix: 120 },
];

// Tableau pour le dpi
const dpi = [
  { id: 1, niveau: "800 DPI", prix: 0 },
  { id: 2, niveau: "Contrôle précis du curseur", prix: 10 },
  { id: 3, niveau: "Haute sensibilité", prix: 20 },
  { id: 4, niveau: "DPI ajustable", prix: 30 },
];
const taillesCasque = [
  { id: 1, taille: "S", prix: 0 },
  { id: 2, taille: "M", prix: 5 },
  { id: 3, taille: "L", prix: 10 },
  { id: 4, taille: "XL", prix: 15 },
];
const stockage = [
  { id: 1, taille: "250gb", prix: 0 },
  { id: 2, taille: "500gb", prix: 20 },
  { id: 3, taille: "1tb", prix: 30 },
];
const processeurPhone = [
  { id: 1, nom: "Exynos", prix: 0 },
  { id: 2, nom: "Snapdragon", prix: 50 },
];
const processeurPc = [
  { id: 1, nom: "AMD", prix: 0 },
  { id: 2, nom: "Intel", prix: 50 },
];
const TypeProcesseurPc = [
  { id: 1, id_processeur: 1, marque: "AMD", nom: "Ryzen 5 7600", prix: 0 },
  { id: 2, id_processeur: 1, marque: "AMD", nom: "Ryzen 7 7800X3D", prix: 20 },
  { id: 3, id_processeur: 1, marque: "AMD", nom: "Ryzen 7 5800X3D", prix: 30 },
  { id: 4, id_processeur: 1, marque: "AMD", nom: "Ryzen 9 7950X3D", prix: 40 },
  { id: 5, id_processeur: 1, marque: "AMD", nom: "Ryzen 5 7600X", prix: 50 },
  { id: 6, id_processeur: 1, marque: "AMD", nom: "Ryzen 5 5600X", prix: 60 },
  {
    id: 7,
    id_processeur: 1,
    marque: "AMD",
    nom: "AMD Ryzen 5 5600G",
    prix: 70,
  },
  { id: 8, id_processeur: 2, marque: "Intel", nom: "Core i3-13100F", prix: 10 },
  { id: 9, id_processeur: 2, marque: "Intel", nom: "Core i5-13600K", prix: 20 },
  {
    id: 10,
    id_processeur: 2,
    marque: "Intel",
    nom: "Core i9-13900K",
    prix: 40,
  },
  {
    id: 11,
    id_processeur: 2,
    marque: "Intel",
    nom: "Core i7-13700K",
    prix: 50,
  },
  {
    id: 12,
    id_processeur: 2,
    marque: "Intel",
    nom: "Intel Core i5-13400",
    prix: 60,
  },
];
const CarteGraphiquePC = [
  { id: 1, nom: "Nvidia", prix: 0 },
  { id: 2, nom: "AMD", prix: 50 },
  { id: 3, nom: "Intel", prix: 100 },
];
const TypeCarteGraphiquePC = [
  { id: 1, id_graphic: 1, marque: "Nvidia", nom: "RTX 4090", prix: 0 },
  { id: 2, id_graphic: 1, marque: "Nvidia", nom: "RTX 4070", prix: 20 },
  { id: 3, id_graphic: 1, marque: "Nvidia", nom: "GeForce RTX 4060", prix: 30 },
  { id: 4, id_graphic: 1, marque: "Nvidia", nom: "GeForce RTX 4080", prix: 40 },
  { id: 5, id_graphic: 1, marque: "Nvidia", nom: "RTX 4060 Ti", prix: 50 },
  { id: 6, id_graphic: 2, marque: "AMD", nom: "Radeon RX 7900 XTX", prix: 10 },
  { id: 7, id_graphic: 2, marque: "AMD", nom: "Radeon RX 7600", prix: 20 },
  { id: 8, id_graphic: 2, marque: "AMD", nom: "Radeon RX 7800 XT", prix: 30 },
  { id: 9, id_graphic: 2, marque: "AMD", nom: "Radeon RX 7900 XT", prix: 50 },
  { id: 10, id_graphic: 2, marque: "AMD", nom: "Radeon RX 6700 XT", prix: 60 },
  { id: 11, id_graphic: 3, marque: "Intel", nom: "Arc A750", prix: 20 },
  { id: 12, id_graphic: 3, marque: "Intel", nom: "Arc A380", prix: 30 },
];





/************************************** */
/************************************** */
/************************************** */
/*****  FIN Partie commune             *****/
/***************************************/
/************************************** */
/********  Mina *********************** */
/************************************** */



/*  declaration variable */
let pagination = 1;
let pageStart = 0;
let pageEnd = 70; // modifier par 12 apres

/******************************* */
/********* page categorie Mina *****/
/******************************* */
function getproduit(id_produit) {
  index = arr_produits.findIndex((prod) => prod.id == id_produit);
  prod = arr_produits[index];
  return prod;
}
function afficheProduit(id_produit) {

    let prod = getproduit(id_produit);
    console.log(prod) ;
  let card = document.createElement("card");

  let codeHtml = `
          <div class="product-card  border-2 border-gray-200 m-2.5  p-2.5">
              <img class="mx-auto "src="${prod.image}" alt="${prod.nom}">
              <h3>${prod.nom}</h3>
              <p>${prod.spec}</p>
              <p>Prix : ${prod.prix} €</p>
              <button onclick="ajoutFavori(${prod.id})"> ❤️ </button>
              <button onclick="AjoutPanier(${prod.id}, ${prod.prix})"><span class="material-symbols-outlined">shopping_cart</span></button>
               <a href="detail.html?id=${prod.id}">more</button>
              </div>
      `;
  card.innerHTML = codeHtml;

  document.getElementById("product-list").appendChild(card);
  return prod;
}

function affihcheAll(arr_produits, start, end) {
  let produitsAffiches = arr_produits.slice(start, end); // Prendre une tranche de produits
  produitsAffiches.forEach((prod) => {
    console.log(prod) ;
    afficheProduit(prod.id);
  });
}




  /* asri */



  /*function afficheAllFavoris() {
    // Get a subset (slice) of products from arr_produits
    let produitsAffiches = arr_produits.slice(0, 2);  // Slice the first 2 products (adjust indices as needed)

    produitsAffiches.forEach((prod) => {
        console.log(prod);  // Log the product details
        afficheProduit(prod.id);  // Display product details by ID
    });
}
*/
function afficheAllFavoris() {
    
    let produitsAffiches =[] ; 
    produitsAffiches.push(arr_produits[10]);
    produitsAffiches.push(arr_produits[22]);
    produitsAffiches.push(arr_produits[33]);
    produitsAffiches.push(arr_produits[36]);
 
    produitsAffiches.forEach((prod) => {
        console.log(prod);  // Log the product details
        afficheProduit(prod.id);  // Display product details by ID
    });
}


  // appel au fonction sur les pages :
