document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const collapsedsearch = document.getElementById('champRecherche');

    searchButton.addEventListener('click', function () {
        collapsedsearch.classList.remove('hidden');
    });
});
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('panier')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; 

    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow', 'mb-4', 'flex');
        productElement.setAttribute('data-product-id', product.id);

        productElement.innerHTML = `
            <div class="flex flex-wrap gap-[50px] ">
                
                <button class="text-red-500 ml-4" onclick="removeItem(${product.id})">🗑️</button>
                <button onclick="addToFavorites(${product.id})" class="favorite-button">
❤️
</button>
                <div class="flex w-[60vw] justify-between">
                    <div class="flex gap-[5px]">
                    <img src="${product.image}" alt="${product.nom}" class="w-16 h-16 mr-4">                        
                    <div class="flex flex-col">
                        <div class="flex justify-between ">
                        <h2 class="text-xl font-semibold">${product.nom}</h2>
                        

                    </div>
                        
                        <p class="text-gray-500">${product.spec}</p>
                    <div class="flex items-center mt-2">
                        <button class="px-2 py-1 bg-[#ECC013] text-white rounded-l" onclick="decrementQuantity(${product.id})">-</button>
                        <span class="px-4 py-1 bg-white border" id="quantity-${product.id}">${product.qte}</span>
                        <button class="px-2 py-1 bg-[#ECC013] text-white rounded-r" onclick="incrementQuantity(${product.id})">+</button>
                    
                    </div>
                    </div>
                </div>
                    <p class="text-gray-800 font-bold">${product.prix*product.qte} $</p>
                    
                </div>
                
                
            </div>
            
        `;

        cartItemsContainer.appendChild(productElement);

        totalItems += product.qte;
        totalPrice += product.prix * product.qte;
    });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2) + ' $';
    document.getElementById('compteurPanier').textContent = totalItems;
    document.getElementById('cart-count').textContent = totalItems;
}
function rechercherProduit() {
const recherche = document.getElementById("champRecherche").value.toLowerCase();
const cart = JSON.parse(localStorage.getItem("panier")) || [];

const produitsFiltres = cart.filter(produit => produit.nom.toLowerCase().includes(recherche));
afficherProduits(produitsFiltres);
}

function afficherProduits(produits) {
const cartItemsContainer = document.getElementById('cart-items');
cartItemsContainer.innerHTML = ''; 

produits.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('bg-white', 'p-4', 'rounded-lg', 'mb-4', 'shadow');
    productElement.setAttribute('data-product-id', product.id);

    productElement.innerHTML = `
        <div class="flex flex-wrap gap-[10px] ">
                
                <button class="text-red-500 ml-4" onclick="removeItem(${product.id})">🗑️</button>
                <button onclick="addToFavorites(${product.id})" class="favorite-button">
❤️
</button>
                <div class="flex w-[55vw] justify-between">
                    <div class="flex gap-[5px]">
                    <img src="${product.image}" alt="${product.nom}" class="w-16 h-16 mr-4">                        
                    <div class="flex flex-col">
                        <div class="flex justify-between ">
                        <h2 class="text-xl font-semibold">${product.nom}</h2>
                        

                    </div>
                        
                        <p class="text-gray-500">${product.spec}</p>
                    <div class="flex items-center mt-2">
                        <button class="px-2 py-1 bg-[#ECC013] text-white rounded-l" onclick="decrementQuantity(${product.id})">-</button>
                        <span class="px-4 py-1 bg-white border" id="quantity-${product.id}">${product.qte}</span>
                        <button class="px-2 py-1 bg-[#ECC013] text-white rounded-r" onclick="incrementQuantity(${product.id})">+</button>
                    
                    </div>
                    </div>
                </div>
                    <p class="text-gray-800 font-bold">${product.prix*product.qte} $</p>
                    

                </div>
                
                
            </div>
    `;

    cartItemsContainer.appendChild(productElement);
});
}
function calculerPrixReduit(prixOriginal, pourcentageReduction) {
const reduction = (prixOriginal * pourcentageReduction) / 100;
const prixReduit = prixOriginal - reduction;
return prixReduit.toFixed(2); 
}
function afficherPrixReduitPromotion() {
const promotionProducts = document.querySelectorAll(".promotion-product");

promotionProducts.forEach((element) => {
    const productId = parseInt(element.getAttribute("data-id"));
    const produit = produits.find(item => item.id === productId);

    if (produit) {
        const prixReduit = calculerPrixReduit(produit.prix, pourcentageReduction);
        element.querySelector(".prix-reduit").textContent = `${prixReduit} $`;
    }
});
}
function filterByCategory(id_cat) {
const cart = JSON.parse(localStorage.getItem('panier')) || [];
const produitsFiltres = id_cat === "All" ? cart : cart.filter(prod => prod.id_cat === id_cat);
afficherProduits(produitsFiltres);
}

document.getElementById("btn_smart").addEventListener("click", () => filterByCategory(1));
document.getElementById("btn_electro").addEventListener("click", () => filterByCategory(4));
document.getElementById("btn_headphone").addEventListener("click", () => filterByCategory(3));
document.getElementById("btn_Montre").addEventListener("click", () => filterByCategory(5));
document.getElementById("btn_Pc").addEventListener("click", () => filterByCategory(2));
const btnAll = document.createElement("button");
btnAll.className = "bg-black text-white m-2 p-3 rounded-full font-light text-center w-[191px]";
btnAll.textContent = "Tous";
btnAll.addEventListener("click", () => filterByCategory("All"));
document.querySelector(".flex.justify-center").appendChild(btnAll);

afficherProduits(JSON.parse(localStorage.getItem('panier')) || []);
function incrementQuantity(id) {
    let cart = JSON.parse(localStorage.getItem('panier')) || [];
    const product = cart.find(item => item.id === id);
    if (product) {
        product.qte += 1;
        localStorage.setItem('panier', JSON.stringify(cart));
        loadCart();
    }
}
function decrementQuantity(id) {
    let cart = JSON.parse(localStorage.getItem('panier')) || [];
    const product = cart.find(item => item.id === id);
    if (product && product.qte > 1) {
        product.qte -= 1;
        localStorage.setItem('panier', JSON.stringify(cart));
        loadCart();
    }
}
function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem('panier')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('panier', JSON.stringify(cart));
    loadCart();
}

window.onload = loadCart;
function addToFavorites(productId) {
    let favorites = JSON.parse(localStorage.getItem("favoris")) || [];

    // Trouver le produit dans 'produits'
    const product = produits.find(item => item.id === productId);


    // Vérifier s'il est déjà dans les favoris
    const isFavorited = favorites.some(item => item.id === productId);

    if (!isFavorited) {
        favorites.push(product);
        localStorage.setItem("favoris", JSON.stringify(favorites));
        alert("Produit ajouté aux favoris !");
        console.log("Produit ajouté aux favoris:", produit);
    } else {
        alert("Produit déjà dans les favoris !");
        console.log("Produit ajouté aux favoris:", produit);
    }
}
function Recherche(nom) {
    // Mettez en place un système de filtres permettant aux utilisateurs de trier les produits par catégorie.
    return produits.filter(produit => 
        produit.nom.toLowerCase().includes(motCle.toLowerCase()));

    affihcheAll(newArr, 0, 12); // Affiche les produits filtrés
}
