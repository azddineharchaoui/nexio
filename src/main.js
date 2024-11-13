document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const collapsedMenu = document.getElementById('collapsed-menu');

    // Toggle the visibility of the hamburger menu
    menuButton.addEventListener('click', function () {
        collapsedMenu.classList.toggle('hidden');
    });

    // Load products from localStorage
    let arr_produits = JSON.parse(localStorage.getItem("arr_produits")) || [];
    let arr_favori = [];  // List of favorites

    /***************************** */
    /********* Page category *****/
    /**************************** */

    // Function to get a product by ID
    function getproduit(id_produit) {
        return arr_produits.find(prod => prod.id === id_produit);
    }

    // Function to display a product
    function afficheProduit(id_produit) {
        let produit = getproduit(id_produit);
        let codeHtml = `
            <div class="card col-span-1">
            <img src=${produit.image} alt="">
            <div class=" flex flex-col gap-y-2">
                <p>${produit.nom}</p>
                <p>${produit.spec}</p>

                <div class="flex">
                    <i class="fa-solid fa-star text-[10px]"></i>
                    <i class="fa-solid fa-star text-[10px]"></i>
                    <i class="fa-solid fa-star text-[10px]"></i>
                    <i class="fa-solid fa-star text-[10px]"></i>
                    <i class="fa-solid fa-star text-[10px]"></i>
                </div>
                <div class="flex gap-[9em]">
                    <p>${produit.prix}</p>
                    <button onclick="AjoutPanier(${produit.id}, ${produit.prix})"><span class="material-symbols-outlined">shopping_cart</span></button>
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
        let produitsAffiches = arr_produits.slice(start, end);  // Slice the array to get the products for the current page
        let productListContainer = document.getElementById('product-list');
        productListContainer.innerHTML = ''; // Clear the product list before displaying new ones

        produitsAffiches.forEach(prod => {
            let div = document.createElement('div');
            div.classList.add('mb-4'); // Add some margin between products
            div.innerHTML = afficheProduit(prod.id);  // Display each product
            productListContainer.appendChild(div);
        });
    }

    // Pagination: Load the next set of products
    function pagination() {
        paginationStart = paginationEnd;
        paginationEnd = paginationEnd + 12;
        afficheAll(arr_produits, paginationStart, paginationEnd);
    }

    // Function to filter products by category
    let btnSmart = document.getElementById("btn_smart");
    let btnelectro = document.getElementById("btn_electro");
    let btnheadphone = document.getElementById("btn_headphone");
    let btnMontre = document.getElementById("btn_Montre");
    let btnPc = document.getElementById("btn_Pc");
    function filtreCategorie(id) {
        let newArr = arr_produits.filter((prod) => prod.id_cat === id);
        afficheAll(newArr, 0, 12);  // Display filtered products
    }

    btnSmart.addEventListener("click", function () {
        filtreCategorie(1);
    })

    btnelectro.addEventListener("click", function () {
        filtreCategorie(4);
    })

    btnheadphone.addEventListener("click", function () {
        filtreCategorie(3);
    })

    btnMontre.addEventListener("click", function () {
        filtreCategorie(5);
    })

    btnPc.addEventListener("click", function () {
        filtreCategorie(2);
    })


    // Add a product to the favorites list (just an example)
    function ajoutFavori(id_produit) {
        let produit = getproduit(id_produit);
        if (arr_favori.find(f => f.id === produit.id)) {
            alert("Produit déjà ajouté aux favoris!");
        } else {
            arr_favori.push(produit);
            console.log("Produit ajouté aux favoris:", produit);
        }
    }

    // Add a product to the cart (example function)
    function AjoutPanier(id_produit, prix) {
        console.log(`Produit ${id_produit} ajouté au panier pour ${prix} €.`);
    }

    // Initial display of all products
    afficheAll(arr_produits, paginationStart, paginationEnd);

    // Optionally, add event listeners for pagination buttons
    const nextPageButton = document.getElementById('next-page');
    if (nextPageButton) {
        nextPageButton.addEventListener('click', function () {
            pagination();
        });
    }
});
