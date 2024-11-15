        // Chargement des produits dans le panier depuis localStorage
        // function loadCart() {
        //     const cart = JSON.parse(localStorage.getItem('arr_produits')) || [];
        //     const cartItemsContainer = document.getElementById('cart-items');
        //     cartItemsContainer.innerHTML = ''; // Réinitialiser les éléments du panier
        //     let totalPrice = 0;
        //     let totalItems = 0;

        //     cart.forEach(product => {
        //         const productElement = document.createElement('div');
        //         productElement.classList.add('bg-white', 'p-4', 'rounded-lg');
        //         productElement.setAttribute('data-product-id', product.id);
        //         productElement.innerHTML = `
        //         <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        //         <div class="flex text-font text-xl font-bold justify-between">
        //             <h2 >${product.nom}</h2>
        //             <p class="justify-end">${product.prix}dhs</p>
        //             </div>
        //             <p class="text-font">${product.spec}</p>
        //             <div class="flex items-center text-font space-x-4">
        //                 <button class="text-red-500" onclick="removeItem(${product.id})">🗑️</button>
        //                 <div class="flex items-center">
        //                 <button class="px-2 py-1 bg-[#ECC013] text-white rounded-l" onclick="decrementQuantity(${product.id})">-</button>
        //                 <span class="px-4 py-1 bg-white" id="quantity-${product.id}">${product.qte}</span>
        //                 <button class="px-2 py-1 bg-[#ECC013] text-white rounded-r" onclick="incrementQuantity(${product.id})">+</button>
        //             </div>
        //         </div>

        //         `;

        //         cartItemsContainer.appendChild(productElement);

        //         totalItems += product.qte;
        //         totalPrice += product.prix * product.qte;
        //     });

        //     // Mettre à jour le résumé de la commande
        //     document.getElementById('total-price').textContent = totalPrice.toFixed(2) + 'dhs';
        //     document.getElementById('total-items').textContent = totalItems.toFixed(2) + ' articles';
        // }

        // function updateCart() {
        //     const cart = JSON.parse(localStorage.getItem('arr_produits')) || [];
        //     let totalItems = 0;

        //     // Calcul du nombre total d'articles dans le panier
        //     cart.forEach(product => {
        //         totalItems += product.qte;
        //     });

        //     // Mettre à jour le nombre d'articles dans le compteur du panier
        //     document.getElementById('cart-count').textContent = totalItems;

        //     // Mettre à jour l'affichage du panier
        //     localStorage.setItem('arr_produits', JSON.stringify(cart));
        //     loadCart(); // Recharger le panier avec les nouvelles valeurs
        // }


        // function removeItem(id) {
        //     let cart = JSON.parse(localStorage.getItem('arr_produits')) || [];
        //     cart = cart.filter(item => item.id !== id);
        //     localStorage.setItem('arr_produits', JSON.stringify(cart));
        //     updateCart();
        // }

        // function incrementQuantity(id) {
        //     let cart = JSON.parse(localStorage.getItem('arr_produits')) || [];
        //     const product = cart.find(item => item.id === id);
        //     if (product) {
        //         product.qte += 1;
        //         updateCart();
        //     }
        // }

        // function decrementQuantity(id) {
        //     let cart = JSON.parse(localStorage.getItem('arr_produits')) || [];
        //     const product = cart.find(item => item.id === id);
        //     if (product && product.qte > 1) {
        //         product.qte -= 1;
        //         updateCart();
        //     }
        // }

        // function clearCart() {
        //     localStorage.removeItem('arr_produits');
        //     updateCart();
        // }

        // // Fonction de validation de commande
        // function validateOrder() {
        //     alert("Commande validée!");
        //     clearCart();
        // }

        // // Fonction pour demander un devis
        // function requestQuote() {
        //     alert("Demande de devis envoyée!");
        // }

        // // Charger le panier au démarrage
        // window.onload = loadCart;



    // Chargement des produits dans le panier depuis localStorage
    function loadCart() {
        // Récupérer les produits du localStorage sous la clé 'panier'
        const cart = JSON.parse(localStorage.getItem('panier')) || [];
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = ''; // Réinitialiser les éléments du panier

        let totalPrice = 0;
        let totalItems = 0;

        cart.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow', 'mb-4');
            productElement.setAttribute('data-product-id', product.id);

            // Créer le contenu HTML pour chaque produit
            productElement.innerHTML = `
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <img src="${product.image || './img/placeholder.jpg'}" alt="${product.nom}" class="w-16 h-16 mr-4">
                        <div>
                            <h2 class="text-xl font-semibold">${product.nom}</h2>
                            <p class="text-gray-500">${product.spec}</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-gray-800 font-bold">${product.prix} dhs</p>
                        <div class="flex items-center mt-2">
                            <button class="px-2 py-1 bg-[#ECC013] text-white rounded-l" onclick="decrementQuantity(${product.id})">-</button>
                            <span class="px-4 py-1 bg-white border" id="quantity-${product.id}">${product.qte}</span>
                            <button class="px-2 py-1 bg-[#ECC013] text-white rounded-r" onclick="incrementQuantity(${product.id})">+</button>
                        </div>
                    </div>
                    <button class="text-red-500 ml-4" onclick="removeItem(${product.id})">🗑️</button>
                </div>
            `;

            // Ajouter l'élément produit dans le conteneur du panier
            cartItemsContainer.appendChild(productElement);

            // Calculer le total des articles et du prix
            totalItems += product.qte;
            totalPrice += product.prix * product.qte;
        });

        // Mettre à jour le résumé de la commande
        document.getElementById('total-price').textContent = totalPrice.toFixed(2) + ' dhs';
        document.getElementById('compteurPanier').textContent = totalItems;
        document.getElementById('cart-count').textContent = totalItems;
    }

    // Fonction pour augmenter la quantité d'un article
    function incrementQuantity(id) {
        let cart = JSON.parse(localStorage.getItem('panier')) || [];
        const product = cart.find(item => item.id === id);
        if (product) {
            product.qte += 1;
            localStorage.setItem('panier', JSON.stringify(cart));
            loadCart();
        }
    }

    // Fonction pour diminuer la quantité d'un article
    function decrementQuantity(id) {
        let cart = JSON.parse(localStorage.getItem('panier')) || [];
        const product = cart.find(item => item.id === id);
        if (product && product.qte > 1) {
            product.qte -= 1;
            localStorage.setItem('panier', JSON.stringify(cart));
            loadCart();
        }
    }

    // Fonction pour supprimer un article du panier
    function removeItem(id) {
        let cart = JSON.parse(localStorage.getItem('panier')) || [];
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem('panier', JSON.stringify(cart));
        loadCart();
    }

    // Fonction pour vider tout le panier
    function clearCart() {
        localStorage.removeItem('panier');
        loadCart();
    }

    // Charger le panier au démarrage de la page
    window.onload = loadCart;