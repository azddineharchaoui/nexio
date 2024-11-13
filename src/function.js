let arr_produits = [];
let arr_favori = [];

/***************************** */
/********* page categorie *****/
/**************************** */
function getproduit(id_produit) {
    return arr_produits.find(prod => prod.id === id_produit);
}
function afficheProduit(id_produit) {
    let produit = getproduit(id_produit);
    let codeHtml = `
        <div class="card col-span-1">
            <img src="img/phone1.png" alt="">
            <div>
                <p>${produit.nom}</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <p>${produit.prix}</p>
                <button onclick="ajoutFavori(${produit.id})">❤️ Ajouter aux favoris</button>
                <button onclick="AjoutPanier(${produit.id}, ${produit.prix})"><span class="material-symbols-outlined">shopping_cart</span></button>
            </div>
        </div>
    `;
    return codeHtml;
}


let pagination = 1;
let start = 0;
let end = 12;
/**function affihcheAll(arr_produits , start , end){    
Affichez l’ensemble des produits disponibles chez Nexio, incluant plusieurs catégories 
 * (smartphones, laptops, télévisions, électroménagers, etc.),
 *  avec un maximum de 12 produits par page (systeme de pagination). 
  
 // for start to end  fois {arr.produits.foreach(prod => )
 // create un li 

  // fait appel a la fonction afficheProduit(prod)

  //append ul }
}*/

function affihcheAll(arr_produits, start, end) {
    let produitsAffiches = arr_produits.slice(start, end); // prend une copie de arr_produit
    console.log(produitsAffiches);
    let ul = document.createElement('ul');
    produitsAffiches.forEach(prod => {
        let li = document.createElement('li');
        li.innerHTML = afficheProduit(prod.id);  // Affiche chaque produit
        ul.appendChild(li);
    });
    document.getElementById('product-list').appendChild(ul);  // Ajoute à la page
}


function pagination() {
    // clik su page les start increment ainsi que le end 
    start = end + 1;
    end = end + 12;
    affihcheAll(arr_produits, start, end)
}


function filtreCategorie(id_categorie) {
    // Mettez en place un système de filtres permettant aux utilisateurs de trier les produits par catégorie.
    let newArr = arr_produits.filter((prod) => prod.categorie === id_categorie);
    affihcheAll(newArr, 0, 12); // Affiche les produits filtrés
}

/*function AjoutPanier(id_produit , prixUnitaire ){
    getproduit(id_produit);
    // if produit not exist  
        // ajouter ligne de cmd de  produit au panier   //{id_ligneCmd:"" ,produit :"", prixUnitaire:0 , qte:0 , prix:0 }
    //else 
        // recupere panier et modifier quantite 
    
}*/
function AjoutPanier(id_produit, prixUnitaire) {
    let produit = getproduit(id_produit);
    let panier = JSON.parse(localStorage.getItem('panier')) || [];

    let produitDansPanier = panier.find(prod => prod.id === id_produit);

    if (produitDansPanier) {
        produitDansPanier.qte++; // Augmente la quantité si le produit existe déjà
        produitDansPanier.prix = produitDansPanier.qte * prixUnitaire;
    } else {
        panier.push({
            id: produit.id,
            nom: produit.nom,
            prixUnitaire: prixUnitaire,
            qte: 1,
            prix: prixUnitaire
        });
    }

    localStorage.setItem('panier', JSON.stringify(panier)); // Sauvegarde le panier dans LocalStorage
}


/************************************** */
/********* Page de Détail Produit : *****/
/***************************************/

function afficheDetail(id_produit) {
    getproduit(id_produit)
    /*La page de détail permettra de visualiser des informations complètes sur chaque produit, + buuton ajout au panier 
    incluant spécifications techniques, images, // on appel afficheProduit(produit)   +
     options de personnalisation si applicable.  // affiche detaille*/

    // switch produit.categorie
    // === smartphone :  affiche : couleur,  stockage ,processeur   => appel pour calcul  calculPrixProduit(prix_base, id_option )
    // === pc : affiche :couleur , stockage  ,processeur , carte   ; lors de selection de processeur un selectbox de type de processeur s affiche  => calculPrixProduit(prix_base, id_option )
    //lors d selection carte graphique un selectbox affiche type carte graphique  =>calculPrixProduit(prix_base, id_option )
    // === television et moniteur  couleur  ,   taux de rafraîchissement  
    // ==== casque :   affiche taille couleur 
    // === souris : affich dpi 
    // === electro menage : affiche couleur , littrage 
    // 
    /**** */

}


function calculPrixProduit(prix_base, id_option) {

    getproduit();
    prixUnitaire = prixUnitaire + id_option.prix

    return prixUnitaire;

    // ......
}
/************************* */
/**Panier ******************/
/********************** */
/*Le panier affichera le total des produits ajoutés par l'utilisateur, avec la possibilité d’augmenter ou de réduire la quantité de chaque article.
Affichez le montant total de la commande et intégrez deux boutons : valider la commande et demander un devis. */

function affichePanier() {

    //panier.foreach((prod)=>    )
    // affiche les ligne de cmd +
    prixtotal = prixtotal + prod.prix

}

/*function augmentQteProd(id_ligneCmd){
    /*panier.find((ligne_cmd) => 
        ligne_cmd.id_ligneCmd   =  id_ligneCmd 
        qte++
        prix = prix+ prixUnitaire
    )
     
}*/

function augmentQteProd(id_ligneCmd) {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    let produit = panier.find(item => item.id === id_ligneCmd);
    if (produit) {
        produit.qte++;
        produit.prix = produit.qte * produit.prixUnitaire;
        localStorage.setItem('panier', JSON.stringify(panier));
    }
}

/*function reduireProd(id_ligneCmd){
    /*panier.find((ligne_cmd) => 
        ligne_cmd.id_ligneCmd   =  id_ligneCmd 
        qte--
        prix = prix- prixUnitaire
    )
     
}*/
function reduireProd(id_ligneCmd) {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    let produit = panier.find(item => item.id === id_ligneCmd);
    if (produit && produit.qte > 1) {
        produit.qte--;
        produit.prix = produit.qte * produit.prixUnitaire;
        localStorage.setItem('panier', JSON.stringify(panier));
    }
}

/************************* */
/**Page Devis : ******************/
/********************** */


/*L'internaute peut demander un devis avant de payer la facture. Ce dernier pourra être imprimé par la suite. Le devis se compose de :
Le lieu et la date de rédaction du devis
Le nom et les coordonnées de l'entreprise
La liste des produits, leur quantité, le prix HT et la TVA (20%) ajoutée dans le panier
Le montant Total hors taxes
Le montant Total TVA
Le montant Total toutes taxes comprises
Cette page contiendra un bouton pour imprimer le devis et un autre pour valider la commande (ce dernier affichera un message de confirmation qui contient le récapitulatif de la commande et vide le panier).
 */













/**Page À Propos :

Ajoutez une section FAQ pour repondre au questions des utilisateurs. //js
​

/**Page Contact :


Validez les champs du formulaire à l'aide de Regex et affichez un message de confirmation une fois le formulaire soumis avec succès.//js
​

/**Panier :

Le panier affichera le total des produits ajoutés par l'utilisateur, avec la possibilité d’augmenter ou de réduire la quantité de chaque article.
Affichez le montant total de la commande et intégrez deux boutons : valider la commande et demander un devis. */














/* bonus */

/*function ajoutFavori(id_produit){
    //produit = getProduit(id_produit)
    // arr_favori.push(produit )
    //localstorage 
}*/
function ajoutFavori(id_produit) {
    let produit = getproduit(id_produit);
    let favoris = JSON.parse(localStorage.getItem('favoris')) || [];
    favoris.push(produit);
    localStorage.setItem('favoris', JSON.stringify(favoris));
}

/*function consultFavori(){
    affihcheAll(arr_favori)
}*/
function consultFavori() {
    let favoris = JSON.parse(localStorage.getItem('favoris')) || [];
    affihcheAll(favoris, 0, 12);  // Affiche les favoris
}


function Recherche() {
    // arr_produits.filtre
}

function tri() {

}