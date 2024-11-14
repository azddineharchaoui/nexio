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
// 
    // Function to display a product
    function afficheProduit(id_produit) {
        let produit = getproduit(id_produit);
        let codeHtml = `
            <div class="card col-span-1 bg-white flex flex-col rounded-[25px] p-5 w-8/10">
            <div class="flex justify-center"> 
                <img src=${produit.image} class="  mb-2.5" alt="">
            </div>
          
            <div class=" flex gap-y-2 justify-between m-2">
                <p class="text-xs px-2 py-1 bg-[#ECC013] rounded-full text-white  ">${produit.marque}</p> 
                <button onclick="ajoutFavori(${produit.id})" class="left-align"> ❤️ </button>
            </div>

            <div class=" flex flex-col gap-y-2">
                <p >${produit.nom}</p>
                <p class="text-xs text-gray-400">${produit.spec}</p>

                <div class="flex gap-1">
                    <i class="fa-solid fa-star text-[10px] text-[#ECC013]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#ECC013]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#ECC013]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#ECC013]"></i>
                    <i class="fa-solid fa-star text-[10px] text-[#ECC013]"></i>
                </div>
                <p>${produit.prix} $</p>
                <div class="flex justify-between">
                    <button onclick="AjoutPanier(${produit.id}, ${produit.prix})"><span class="material-symbols-outlined">shopping_cart</span></button>
                    <button><a href="detail.html?id=${produit.id}">more</a></button>
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

    
    // Function to filter products by category
    let btnSmart = document.getElementById("btn_smart");
    let btnelectro = document.getElementById("btn_electro");
    let btnheadphone = document.getElementById("btn_headphone");
    let btnMontre = document.getElementById("btn_Montre");
    let btnMouse = document.getElementById("btn_Mouse");
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
        filtreCategorie(6);
    })
    
    btnMontre.addEventListener("click", function () {
        filtreCategorie(3);
    })
    
    btnMouse.addEventListener("click", function () {
        filtreCategorie(5);
    })
    
    btnPc.addEventListener("click", function () {
        filtreCategorie(2);
    })
    
    // Initial display of all products
    afficheAll(arr_produits, paginationStart, paginationEnd);

    // Pagination: Load the next set of products
    function pagination() {
        paginationStart = paginationEnd;
        paginationEnd = paginationEnd + 12;
        afficheAll(arr_produits, paginationStart, paginationEnd);
    }

    // Optionally, add event listeners for pagination buttons
    const nextPageButton = document.getElementById('next-page');
    if (nextPageButton) {
        nextPageButton.addEventListener('click', function () {
            pagination();
        });
    }
    
});


    // Add a product to the favorites list (just an example)
    let arr_favori = [];  // List of favorites
    function ajoutFavori(produit) {
        // let produit = getProduit(id_produit);  // This line is commented out, if necessary, use it
        if (arr_favori.find(f => f.id === produit.id)) {
            alert("Produit déjà ajouté aux favoris!");
        } else {
            arr_favori.push(produit);
            console.log("Produit ajouté aux favoris:", produit);  // Added closing parenthesis and semicolon
        }
    }
    

    // Add a product to the cart (example function)
    
    function AjoutPanier(id_produit, prix) {
        console.log(`Produit ${id_produit} ajouté au panier pour ${prix} €.`);
    }

