document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const collapsedMenu = document.getElementById("collapsed-menu");

  menuButton.addEventListener("click", function () {
    collapsedMenu.classList.toggle("hidden");
  });
});

let arr_produits = JSON.parse(localStorage.getItem("arr_produits"));
console.log(arr_produits);
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
/*  declaration variable */
let pagination = 1;
let pageStart = 0;
let pageEnd = 70; // modifier par 12 apres

/***************************** */
/********* page categorie *****/
/**************************** */
function getproduit(id_produit) {
  index = arr_produits.findIndex((prod) => prod.id == id_produit);
  prod = arr_produits[index];
  return prod;
}
function afficheProduit(id_produit) {
  let prod = getproduit(id_produit);

  let card = document.createElement("card");

  let codeHtml = `
          <div class="product-card  border-2 border-gray-200 m-2.5  p-2.5">
              <img class="mx-auto "src="img/10.jpg" alt="${prod.nom}">
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
  console.table(produitsAffiches);
  produitsAffiches.forEach((prod) => {
    afficheProduit(prod.id);
  });
}
/************************************** */
/************************************** */
/************************************** */
/********* Page de Détail Produit : *****/
/***************************************/
/************************************** */
/************************************** */
/************************************** */
const SelectProcesseur = document.getElementById("selectProcesseur");
const SelectCarteGraphic = document.getElementById("SelectCarteGraphic");
const TypeTauxDeRafraich = document.getElementById("SelectTauxRafraichissemnt");
const TypeLitrage = document.getElementById("SelectlitrageElectro");
const TypeTaille = document.getElementById("SelectTaille");
const selectStockagePhone = document.getElementById("selectStockagePhone");
const selectStockagePC = document.getElementById("selectStockagePC");
const divdetailPrix = document.getElementById("detailPrix");
const TypeProcesseur = document.getElementById("selectTypeProcesseur");
const TypeGraphic = document.getElementById("SelectTypeCarteGraphic");
const prixBase = document.getElementById("prixBase");
const prixTotal = document.getElementById("prixTotal");
const prixOptions = document.getElementById("prixOptions");
let prodAfficheSurPageDetail;

function afficheDetail(id_produit) {
  let prod = getproduit(id_produit);
  let card = document.createElement("card");
  let codeHtml = ` <div class="product-card flex lg:flex-row flex-col border-2 border-gray-200 m-2.5  p-2.5 ">
                <div class="w-full lg:w-1/2"><img class="w-full h-100  lg-m-10" src="img/laptop1.jpg" alt="${prod.nom}"></div>
                <div class="flex flex-col justify-center p-2.5 w-full lg:p-10 lg:w-1/2 ">
                    <h3 class="lg:text-2xl  font-normal tracking-normal  leading-8  lg:leading-10">${prod.nom}-${prod.spec}</h3>
                    <br>
                    <p class="lg:text-2xl  text-xl">Prix : ${prod.prix} </p>
                </div>
            </div>
    `;
  card.innerHTML = codeHtml;
  document.getElementById("product-list").appendChild(card);
  afficheSpec(prod.id_cat);
  prixBase.innerHTML = prod.prix;
  prodAfficheSurPageDetail = prod; // au debut le produt a meme caracteristique de produit basic avant changement selon l option
}

function afficheSpec(id_cat) {
  console.log(" hello 2 : " + prod.id_cat);

  const TypeDpi = document.getElementById("SelectDpi");
  switch (id_cat) {
    case 1: // phone
      console.log("case 1  : " + prod.id_cat);
      document.getElementById("specPhone").classList.remove("hidden");
      afficheTypeStockagePhone();
      console.log(" je suis telephone : " + prod.id_cat);
      break;
    case 2: // pc
      document.getElementById("specPC").classList.remove("hidden");
      afficheTypeStockagePC();
      processeurPc.forEach((processeur) => {
        const option = document.createElement("option");
        option.value = processeur.id;
        option.textContent = processeur.nom;
        SelectProcesseur.appendChild(option);
      });
      console.log(CarteGraphiquePC);
      CarteGraphiquePC.forEach((graph) => {
        console.log(graph);
        const option = document.createElement("option");
        option.value = graph.id;
        option.textContent = graph.nom;
        SelectCarteGraphic.appendChild(option);
      });

      SelectProcesseur.addEventListener("change", function () {
        let id_processeur = this.value;
        afficheTypeProcesseur(id_processeur);
      });
      SelectCarteGraphic.addEventListener("change", function () {
        let id_graphic = this.value;

        afficheTypeGraphic(id_graphic);
      });
      break;
    case 3: // television
      document.getElementById("specTelevision").classList.remove("hidden");
      tauxDeRafraichissement.forEach((tauxRef) => {
        const option = document.createElement("option");
        option.setAttribute("prix", tauxRef.prix);
        option.value = tauxRef.id;
        option.textContent = `${tauxRef.taux}`;
        TypeTauxDeRafraich.appendChild(option);
      });
      break;
    case 4: // electro
      document.getElementById("specElectro").classList.remove("hidden");
      litrage.forEach((lit) => {
        const option = document.createElement("option");
        option.setAttribute("prix", lit.prix);
        option.value = lit.id;
        option.textContent = `${lit.taille}`;
        TypeLitrage.appendChild(option);
      });
      break;

    case 5: // souris
      document.getElementById("specSouris").classList.remove("hidden");
      dpi.forEach((dp) => {
        const option = document.createElement("option");
        option.setAttribute("prix", dp.prix);
        option.value = dp.id;
        option.textContent = `${dp.niveau}`;
        TypeDpi.appendChild(option);
      });
      break;

    case 6: // casque
      document.getElementById("specCasque").classList.remove("hidden");
      taillesCasque.forEach((dp) => {
        const option = document.createElement("option");
        option.setAttribute("prix", taillesCasque.prix);
        option.value = dp.id;
        option.textContent = `${taillesCasque.niveau}`;
        TypeTaille.appendChild(option);
      });
      break;
    default:
      console.log("Catégorie non reconnue");
  }
}

//  selected de processeur >> affiche les type pour pc
function afficheTypeStockagePhone() {
  stockage.forEach((stk) => {
    let option = document.createElement("option");
    option.setAttribute("prix", stk.prix);
    option.value = stk.taille;
    option.textContent = stk.taille;
    selectStockagePhone.appendChild(option);
  });
}
function afficheTypeStockagePC() {
  stockage.forEach((stk) => {
    let option = document.createElement("option");
    option.setAttribute("prix", stk.prix);
    option.value = stk.taille;
    option.textContent = stk.taille;
    selectStockagePC.appendChild(option);
  });
}

function afficheTypeProcesseur(id_processeur) {
  TypeProcesseur.innerHTML = ``;
  TypeProcesseurPc.forEach((type) => {
    console.log("je suis for: " + type.prix);
    console.log(type);
    if (type.id_processeur == id_processeur) {
      const option = document.createElement("option");
      option.setAttribute("prix", type.prix);
      option.value = type.id;
      option.textContent = type.nom;
      TypeProcesseur.appendChild(option);
    }
  });
}

//  selected de carte graphic >> affiche les type pour pc
function afficheTypeGraphic(id_graphic) {
  TypeGraphic.innerHTML = ``;
  TypeCarteGraphiquePC.forEach((type) => {
    if (type.id_graphic == id_graphic) {
      const option = document.createElement("option");
      option.setAttribute("prix", type.prix);
      option.value = type.id;
      option.textContent = type.nom;
      TypeGraphic.appendChild(option);
    }
  });
}

/** Event listener */
//https://stackoverflow.com/questions/11957677/html-how-to-get-custom-attribute-of-option-tag-in-dropdown
selectStockagePhone.addEventListener("change", function () {
  // si l element exist on le supprime abord sinon on aura plusieur valeur a chaque fois qu il choisi un stock
  if (document.getElementById("prixStockage")) {
    document.getElementById("prixStockage").remove();
  }
  const d = document.createElement("div");
  d.setAttribute("id", "prixStockage");
  const selectoption = this.options[this.selectedIndex];
  prix = selectoption.getAttribute("prix");
  console.log(prix);
  d.innerHTML = ``;
  d.innerHTML = prix;
  prixOptions.appendChild(d);
  calculPrixProduit(prodAfficheSurPageDetail, prix, "Memoire de stokage");
});

selectStockagePC.addEventListener("change", function () {
  // si l element exist on le supprime abord sinon on aura plusieur valeur a chaque fois qu il choisi un stock
  if (document.getElementById("prixStockage")) {
    document.getElementById("prixStockage").remove();
  }
  const d = document.createElement("div");
  d.setAttribute("id", "prixStockage");
  const selectoption = this.options[this.selectedIndex];
  prix = selectoption.getAttribute("prix");
  console.log(prix);
  d.innerHTML = ``;
  d.innerHTML = prix;
  divdetailPrix.appendChild(d);

  calculPrixProduit(prodAfficheSurPageDetail, prix, "Memoire de stockage");
});

TypeProcesseur.addEventListener("change", function () {
  // si l element exist on le supprime abord sinon on aura plusieur valeur a chaque fois qu il choisi un stock
  if (document.getElementById("prixProcesseur")) {
    document.getElementById("prixProcesseur").remove();
  }
  const d = document.createElement("div");
  d.setAttribute("id", "prixProcesseur");
  const selectoption = this.options[this.selectedIndex];
  prix = selectoption.getAttribute("prix");
  console.log(prix);
  d.innerHTML = ``;
  d.innerHTML = prix;
  divdetailPrix.appendChild(d);
  calculPrixProduit(prodAfficheSurPageDetail, prix, "Processeur");
});

TypeGraphic.addEventListener("change", function () {
  // si l element exist on le supprime abord sinon on aura plusieur valeur a chaque fois qu il choisi un stock
  if (document.getElementById("prixGraphic")) {
    document.getElementById("prixGraphic").remove();
  }
  const d = document.createElement("div");
  d.setAttribute("id", "prixGraphic");
  const selectoption = this.options[this.selectedIndex];
  prix = selectoption.getAttribute("prix");
  console.log(prix);
  d.innerHTML = ``;
  d.innerHTML = prix;
  divdetailPrix.appendChild(d);

  calculPrixProduit(prodAfficheSurPageDetail, prix, "Carte Graphique");
});

//prodAfficheSurPageDetail
function calculPrixProduit(prod, prixOption, option) {
  // ;
  console.log("calcul prix ");
  console.log(option);
  prixUnitaire = prod.prix;
  prixUnitaire = parseInt(prixUnitaire) + parseInt(prixOption);
  prixTotal.innerHTML = prixUnitaire;
  prod.prix = prixUnitaire;
  return prod;
}

// appel au fonction sur les pages :
if (window.location.pathname === "/index.html") {
  affihcheAll(arr_produits, pageStart, pageEnd);
} else if (window.location.pathname === "/detail.html") {
  // console.log(location.search)  //  par exemple ?id=12
  const param = new URLSearchParams(window.location.search);
  const id = param.get("id"); // Récupère la valeur de 'id'
  console.log(id); // Affiche 12
  afficheDetail(id);
}
