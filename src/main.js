/************************************** */
/************************************** */
/************************************** */
/***** Partie commune             *****/
/***************************************/
/************************************** */
/********  Mina *********************** */
/************************************** */

// burger 
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const collapsedMenu = document.getElementById("collapsed-menu");

  menuButton.addEventListener("click", function () {
    collapsedMenu.classList.toggle("hidden");
  });
});




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




let arr_favori = JSON.parse(localStorage.getItem("arr_favori")) || [];


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
function afficheProduitPromo(id_produit) {
  let produit = getproduit(id_produit);
  let codeHtml = `
            <div class=" relative card col-span-1 bg-white flex flex-col rounded-[25px] p-5 w-8/10   h-96 justify-between">
              
               <span  id="promo${produit.id}" class="  absolute top-2.5 bg-red-500 text-white px-2 py-1 rounded-full font-bold shadow-md text-sm">-20% sur les chaussures</span>

                <div class="flex h-[40%] justify-center"> 
                    <img src=${produit.image} class="w-8/10  mb-2.5" alt="">
                </div>
          
                

               <div class=" flex flex-col h-[70%] gap-y-2 justify-evenly">
                        <div class=" flex gap-y-2 justify-between m-2">
                            <p class="text-xs px-2 py-1 bg-[#ECC013] rounded-full text-white  ">${produit.marque}</p> 
                      
                        </div>
                        <div>
                            <p >${produit.nom}</p>
                            <p class="text-xs text-gray-400">${produit.spec}</p>
                        </div>
                        <div class="flex gap-1">
                            <i class="fa-solid fa-star text-[10px] text-[#ECC013]"></i>
                            <i class="fa-solid fa-star text-[10px] text-[#ECC013]"></i>
                            <i class="fa-solid fa-star text-[10px] text-[#ECC013]"></i>
                            <i class="fa-solid fa-star text-[10px] text-[#ECC013]"></i>
                            <i class="fa-solid fa-star text-[10px] text-[#ECC013]"></i>
                        </div>
                        <div>
                            <p>${produit.prix} $</p>
                            <div class="flex justify-between">
                                <button onclick="AjoutPanierPromo(${produit.id}, ${produit.prix})"><span class="material-symbols-outlined">shopping_cart</span></button>
                                <button><a href="detail.html?id=${produit.id}"  class="border-2 border-yellow-400 rounded-full text-xs px-2.5">Voir Plus</a></button>
                            </div>
                        </div>
                </div>
          </div>
        `;
   
  return codeHtml;
}

let arr_promo=[
  { idproduit: 39,  reduction: 50 },
  { idproduit: 22, reduction: 30 },
  { idproduit: 26,  reduction: 60 },
  { idproduit: 20,  reduction: 70 }  ,
]

function afficheAllPromo(arr_produits, start, end) {
  let produitsAffiches = arr_produits.slice(start, end); // Slice the array to get the products for the current page
  let productListContainer = document.getElementById("product-list");
  productListContainer.innerHTML = ""; // Clear the product list before displaying new ones

  produitsAffiches.forEach((prod) => {
    let div = document.createElement("div");
    div.classList.add("mb-4"); // Add some margin between products
    div.innerHTML = afficheProduitPromo(prod.id); // Display each product
    productListContainer.appendChild(div);

    /*  favori : le code qui permet de colorer les coeurs des produit favori lors d affichage */
    const coeur = document.getElementById(`coeur${prod.id}`);
    if (coeur) {
        let index = arr_favori.findIndex(f => parseInt(f.id) === parseInt(prod.id));
        if (index > -1) {
          coeur.classList.add("text-red-500"); // Si le produit est dans les favoris, on change la couleur du cœur
        }
      } 

      const promo = document.getElementById(`promo${prod.id}`);
      if (promo) {
          let index = arr_promo.findIndex(f => parseInt(f.idproduit) == parseInt(prod.id));
          if (index > -1) {
           let  p = arr_promo[index];
            promo.innerHTML=`-${p.reduction}%`; // Si le produit est dans les favoris, on change la couleur du cœur

          }
        } 
        
      /***************** */
  });
}
function AjoutPanierPromo(id_produit, prixUnitaire) {
  let produit = getproduit(id_produit);
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  let produitDansPanier = panier.find((prod) => prod.id === id_produit);
  const promo = document.getElementById(`promo${prod.id}`);
  let prixPromo = 1 ;
  if (promo) {
      let index = arr_promo.findIndex(f => parseInt(f.idproduit) == parseInt(prod.id));
      if (index > -1) {
       let  p = arr_promo[index];
        prixPromo=  p.reduction; // Si le produit est dans les favoris, on change la couleur du cœur

      }
    }
  if (produitDansPanier) {
    produitDansPanier.qte++; // Augmente la quantité si le produit existe déjà
    produitDansPanier.prixTotal = produitDansPanier.qte * prixUnitaire;
    console.log("Produit ajouté aux favoris:", produit);
  } else {
    produit.qte = 1;
    produit.prixTotal = produit.qte * ((produit.prix * (100-prixPromo)) /100);
    produit.promo = prixPromo ; 
    panier.push(produit);
    //  alert("Produit déjà ajouté aux favoris!");
  }
  alert("Produit ajouté au panier!");
  localStorage.setItem("panier", JSON.stringify(panier)); // Sauvegarde le panier dans LocalStorage
}



function afficheAllFavoris() {

  let produitsAffiches =[] ; 
  produitsAffiches.push(arr_produits[35]);
  produitsAffiches.push(arr_produits[22]);
  produitsAffiches.push(arr_produits[1]);
  produitsAffiches.push(arr_produits[20]);
  /*console.log(arr_produits[35])
  console.log(arr_produits[22])
  console.log(arr_produits[1])
  console.log(arr_produits[20])*/
  afficheAllPromo(produitsAffiches, 0, 4)

}
/********************************** ******************/
////// chemin sur server  local /////
/********************************** ******************/
 // gestion des chemins en local (appel au fonctions sur page index.html et detail.html:

const path = window.location.pathname;
 
  if (window.location.pathname === "/") {
    console.log("index.html  je suis la ");
    afficheAllFavoris() ; 
  } else if (window.location.pathname === "/detail.html") {
    // console.log(location.search)  //  par exemple ?id=12
    const param = new URLSearchParams(window.location.search);
    const id = param.get("id"); // Récupère la valeur de 'id'
     console.log("lkjkjlmjkkl"); // Affiche 12
     afficheDetail(id);
  }else if (window.location.pathname === "/index.html") {
    console.log("index.html  je suis la ");
    afficheAllFavoris() ; 
  } 
   else {
    console.log(window.location.pathname );
  }

/******************************************************** */


/********************************** ******************/
////// chemin sur server  local /////
/********************************** ******************/

// Gestion des chemins selon hitHub Pages

if (path.endsWith("/nexio/") || path.endsWith("/nexio/index.html")) {
    console.log("index.html  je suis là");
    afficheAllFavoris();
} else if (path.endsWith("/nexio/detail.html")) {
    const param = new URLSearchParams(window.location.search);
    const id = param.get("id"); // Récupère la valeur de 'id'
    console.log("Je suis sur detail.html avec ID :", id);
    afficheDetail(id);
} else {
    console.log("Chemin non reconnu :", path);
}



  // Obtenir le chemin relatif correctement pour GitHub Pages
/*const path = window.location.pathname;

// Gestion des chemins selon GitHub Pages
if (path.endsWith("/nexio/") || path.endsWith("/nexio/index.html")) {
    console.log("index.html  je suis là");
    afficheAllFavoris();
} else if (path.endsWith("/nexio/detail.html")) {
    const param = new URLSearchParams(window.location.search);
    const id = param.get("id"); // Récupère la valeur de 'id'
    console.log("Je suis sur detail.html avec ID :", id);
    afficheDetail(id);
} else {
    console.log("Chemin non reconnu :", path);
}*/