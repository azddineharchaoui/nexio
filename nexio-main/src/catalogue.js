document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const collapsedMenu = document.getElementById("collapsed-menu");

  // Toggle the visibility of the hamburger menu
  menuButton.addEventListener("click", function () {
    collapsedMenu.classList.toggle("hidden");
  });
});

// Load products from localStorage
let arr_produits = JSON.parse(localStorage.getItem("arr_produits")) || [];
let arr_favori = JSON.parse(localStorage.getItem("arr_favori")) || [];

const panier1 = JSON.parse(localStorage.getItem('panier')) || [];
document.getElementById("nbProduit").innerHTML = panier1.length;
/***************************** */
/********* Page category *****/
/**************************** */

// Function to get a product by ID
function getproduit(id_produit) {
  return arr_produits.find((prod) => prod.id === id_produit);
}
//
// Function to display a product
function afficheProduit(id_produit) {
  let produit = getproduit(id_produit);
  let codeHtml = `
            <div class="card col-span-1 bg-white flex flex-col rounded-[25px] p-5 w-8/10   h-96 justify-between">
                <div class="flex h-[40%] justify-center"> 
                    <img src=${produit.image} class="w-8/10  mb-2.5" alt="">
                </div>
          
                

               <div class=" flex flex-col h-[70%] gap-y-2 justify-evenly">
                        <div class=" flex gap-y-2 justify-between m-2">
                            <p class="text-xs px-2 py-1 bg-[#ECC013] rounded-full text-white  ">${produit.marque}</p> 
                            <span id=coeur${produit.id} class=" iconfavori material-symbols-outlined text-gray-500 cursor-pointer" 
                            onclick="ajoutFavori(${produit.id}, event)">favorite</span>
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
                                <button onclick="AjoutPanier(${produit.id}, ${produit.prix})"><span class="material-symbols-outlined">shopping_cart</span></button>
                                <button><a href="detail.html?id=${produit.id}"  class="border-2 border-yellow-400 rounded-full text-xs px-2.5">Voir Plus</a></button>
                            </div>
                        </div>
                </div>
          </div>
        `;
   
  return codeHtml;
}

// Function to display all products with pagination
let paginationStart = 0;
let paginationEnd = 12;

function afficheAll(arr_produits, start, end) {
  let produitsAffiches = arr_produits.slice(start, end); // Slice the array to get the products for the current page
  let productListContainer = document.getElementById("product-list");
  productListContainer.innerHTML = ""; // Clear the product list before displaying new ones

  produitsAffiches.forEach((prod) => {
    let div = document.createElement("div");
    div.classList.add("mb-4"); // Add some margin between products
    div.innerHTML = afficheProduit(prod.id); // Display each product
    productListContainer.appendChild(div);

    /*  favori : le code qui permet de colorer les coeurs des produit favori lors d affichage */
    const coeur = document.getElementById(`coeur${prod.id}`);
    if (coeur) {
        let index = arr_favori.findIndex(f => parseInt(f.id) === parseInt(prod.id));
        if (index > -1) {
          coeur.classList.add("text-red-500"); // Si le produit est dans les favoris, on change la couleur du cœur
        }
      } 

      /***************** */
  });
}











// Function to filter products by category
let btnSmart = document.getElementById("btn_smart");
let btnelectro = document.getElementById("btn_electro");
let btnheadphone = document.getElementById("btn_headphone");
let btnMontre = document.getElementById("btn_Montre");
let btnMouse = document.getElementById("btn_Mouse");
let btnPc = document.getElementById("btn_Pc");
function filtreCategorie(id) {
  let newArr = arr_produits.filter((prod) => prod.id_cat === id);
  afficheAll(newArr, 0, 12); // Display filtered products
}

btnSmart.addEventListener("click", function () {
  filtreCategorie(1);
});

btnelectro.addEventListener("click", function () {
  filtreCategorie(4);
});

btnheadphone.addEventListener("click", function () {
  filtreCategorie(6);
});

btnMontre.addEventListener("click", function () {
  filtreCategorie(3);
});

btnMouse.addEventListener("click", function () {
  filtreCategorie(5);
});

btnPc.addEventListener("click", function () {
  filtreCategorie(2);
});

// Initial display of all products
afficheAll(arr_produits, paginationStart, paginationEnd);

// Pagination: Load the next set of products
function pagination(start, end) {
  afficheAll(arr_produits, start, end);
  paginationStart = paginationEnd;
  paginationEnd = paginationEnd + 12;
  console.log("start : " + paginationStart);
  console.log("end : " + paginationEnd);
}

// Optionally, add event listeners for pagination buttons

let page2 = document.getElementById("page2");
page2.onclick = function () {
  pagination(0, 12);
};
let page3 = document.getElementById("page3");
page3.onclick = function () {
  pagination(12, 24);
};
let page4 = document.getElementById("page4");
page4.onclick = function () {
  pagination(24, 36);
};
let prevPage = document.getElementById("prev-page");
prevPage.onclick = function () {
  paginationStart = paginationStart - 12;
  paginationEnd = paginationStart - 1;
  pagination(paginationStart, paginationEnd);
};
let NextPage = document.getElementById("next-page");
NextPage.onclick = function () {
  paginationStart = paginationStart + 12;
  paginationEnd = paginationStart + 1;
  pagination(paginationStart, paginationEnd);
};

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

function AjoutPanier(id_produit, prixUnitaire) {
  let produit = getproduit(id_produit);
  let panier = JSON.parse(localStorage.getItem("panier")) || [];

  let produitDansPanier = panier.find((prod) => prod.id === id_produit);

  if (produitDansPanier) {
    produitDansPanier.qte++; // Augmente la quantité si le produit existe déjà
    produitDansPanier.prixTotal = produitDansPanier.qte * prixUnitaire;
   // console.log("Produit ajouté aux favoris:", produit);
  } else {
    produit.qte = 1;
    produit.prixTotal = produit.qte * produit.prix;
    panier.push(produit);
     alert("Produit déjà ajouté aux favoris!");
  }
  alert("Produit ajouté au panier!");
  localStorage.setItem("panier", JSON.stringify(panier)); // Sauvegarde le panier dans LocalStorage
}

/*********** mina  */
function rechercherProduit() {
  const recherche = document
    .getElementById("champRecherche")
    .value.toLowerCase();
  const cart = JSON.parse(localStorage.getItem("panier")) || [];

  const produitsFiltres = cart.filter((produit) =>
    produit.nom.toLowerCase().includes(recherche)
  );
  afficheAll(produitsFiltres, 0, 12);
}

// tri
document.getElementById("btn_tri").addEventListener("click", function () {
  triPrix();
});

function triPrix() {
  let arr = arr_produits.sort((a, b) => a.prix - b.prix);
  console.log(arr);
  afficheAll(arr, 0, 12);
}

document.getElementById("btn_tri_nom").addEventListener("click", function () {
  triNom();
});

function triNom() {
  let arr = arr_produits.sort((a, b) => a.nom.localeCompare(b.nom));

  afficheAll(arr, 0, 12);
}

function afficheFavori() {
  afficheAll(arr_favori, 0, 12);
  const iconfavoris = document.querySelectorAll(".iconfavori");
  iconfavoris.forEach((icon) => {
    icon.classList.add("text-red-500");
  });
}
