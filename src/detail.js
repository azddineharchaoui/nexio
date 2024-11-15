/************************************** */
/************************************** */
/************************************** */
/********* Page de Détail Produit : *****/
/***************************************/
/************************************** */
/********  Mina *********************** */
/************************************** */


const SelectTauxDeRafraich = document.getElementById("SelectTauxRafraich");
const SelectLitrage = document.getElementById("SelectlitrageElectro");
const SelectTaille = document.getElementById("SelectTaille");
const SelectDpi = document.getElementById("SelectDpi");

const selectStockagePhone = document.getElementById("selectStockagePhone");
const selectProcesseurPhone = document.getElementById("selectProcesseurPhone");
const selectStockagePC = document.getElementById("selectStockagePC");
const SelectProcesseur = document.getElementById("selectProcesseur");
const SelectCarteGraphic = document.getElementById("SelectCarteGraphic");
// const divdetailPrix= document.getElementById("detailPrix");
const TypeProcesseur = document.getElementById("selectTypeProcesseur");
const TypeGraphic = document.getElementById("SelectTypeCarteGraphic");
const prixBase = document.getElementById("prixBase");
const divPrixConfigure = document.getElementById("PrixConfigure");
const prixOptions = document.getElementById("prixOptions");
const prixTotal = document.getElementById("prixTotal");
const divQte = document.getElementById("divqte");

let prodAfficheSurPageDetail; // faire une copie de produit pour manipule et le rendre ligne de cmd apres

function afficheDetail(id_produit) {
  let prod = getproduit(id_produit);
  let card = document.createElement("card");
  let codeHtml = ` <div class="product-card flex lg:flex-row flex-col  ">
                <div class="w-full lg:w-1/2"><img class="w-50 lg:w-92 mx-auto lg:mx-auto lg:m-10" src="${prod.image}" alt="${prod.nom}"></div>
                <div class="flex flex-col justify-center p-2.5 w-full lg:p-10 lg:w-1/2 ">
                    <h3 class="lg:text-2xl px-8 font-normal tracking-normal  leading-8  lg:leading-10">${prod.nom}-${prod.spec}</h3>
                    <br>
                    <p class="lg:text-2xl px-8 text-xl">Prix : $${prod.prix} </p>
                </div>
            </div>
    `;
  card.innerHTML = codeHtml;
  document.getElementById("product-list").appendChild(card);

  let codeHTMLficheTechnique="" ; 
 prod.FicheTechnique.forEach((f)=>{
  codeHTMLficheTechnique +=`<li>${f}</li>`
 }) ; 
  codeHTMLficheTechnique +=` <li> couleur :  <span  id="couleur"> ${prod.couleur} <span>  </li>`

  document.getElementById("ulFicheTechnique").innerHTML = codeHTMLficheTechnique;
 


  afficheSpec(prod.id_cat);
  

  prodAfficheSurPageDetail = prod; // au debut le produt a meme caracteristique de produit basic avant changement selon l option
  prodAfficheSurPageDetail.PrixConfigure = prod.prix;
  prodAfficheSurPageDetail.qte = 1;
  prodAfficheSurPageDetail.prixTotal = prod.prix * 1; //  j ecris 1 juste pr comprendre le pt =qte * p unit
  prodAfficheSurPageDetail.arr_option = []; // au debut  n y a pas d option supp


  //remplir notif de detail de prix  : 
  divQte.innerHTML = prodAfficheSurPageDetail.qte ; 
  prixTotal.innerHTML = `$${prod.prix}`
  prixBase.innerHTML = `$${prod.prix}`;
  divPrixConfigure.innerHTML = `-`;  
  // console.log(prodAfficheSurPageDetail) ;
}


function changeColor(c){
  let couleur = document.getElementById("couleur");
  couleur.innerHTML = c;
}
function afficheSpec(id_cat) {
    console.log(" hello 2 : " +prod.id_cat)

 
  switch (id_cat) {
    case 1: // phone
      //console.log("case 1  : " +prod.id_cat)
      document.getElementById("specPhone").classList.remove("hidden");
      afficheTypeStockagePhone();
      processeurPhone.forEach((processeur) => {
        const option = document.createElement("option");
        option.setAttribute("prix" , processeur.prix);
        option.value = processeur.id;
        option.textContent = processeur.nom;
        selectProcesseurPhone.appendChild(option);
      });
      break ; 
    //  console.log(" je suis telephone : " +prod.id_cat) ; break ;
    case 2: // pc
      document.getElementById("specPC").classList.remove("hidden");
      console.log("mmmmmmmm"); 
      console.log(id_cat) ; 
      afficheTypeStockagePC();
      processeurPc.forEach((processeur) => {
        const option = document.createElement("option");
        option.value = processeur.id;
        option.textContent = processeur.nom;
        SelectProcesseur.appendChild(option);
      });
      //   console.log( CarteGraphiquePC) ;
      CarteGraphiquePC.forEach((graph) => {
        // console.log( graph) ;
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
        SelectTauxDeRafraich.appendChild(option);
      });
      break;
    case 4: // electro
      document.getElementById("specElectro").classList.remove("hidden");
    console.log("fjsdhfs") ; 
      litrage.forEach((lit) => {
        const option = document.createElement("option");
        option.setAttribute("prix", lit.prix);
        option.value = lit.id;
        option.textContent = `${lit.taille}`;
        SelectLitrage.appendChild(option);
      });
      break;

    case 5: // souris
      document.getElementById("specSouris").classList.remove("hidden");
      dpi.forEach((dp) => {
        const option = document.createElement("option");
        option.setAttribute("prix", dp.prix);
        option.value = dp.id;
        option.textContent = `${dp.niveau}`;
        SelectDpi.appendChild(option);
      });
      break;

    case 6: // casque
      document.getElementById("specCasque").classList.remove("hidden");
      taillesCasque.forEach((tc) => {
        const option = document.createElement("option");
        option.setAttribute("prix", tc.prix);
        option.value = tc.id;
        option.textContent = `${tc.taille}`;
        SelectTaille.appendChild(option);
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
    // console.log("je suis for: " + type.prix) ;
    // console.log( type) ;
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

function gestionChangementPrix(selectElement, selectElementPrix, option) {
  // si l prix d element   existe deja, on le supprime pour eviter les doublons
  const elementPrixExist = document.getElementById(selectElementPrix);
  if (elementPrixExist) {
    elementPrixExist.remove();
  }
  const divPrix = document.createElement("div");
  divPrix.setAttribute("id", selectElementPrix); // prix de processeur / stock precise prix de quoi
  const optionSelect = selectElement.options[selectElement.selectedIndex];
  const prix = optionSelect.getAttribute("prix");
  divPrix.innerHTML = `<div class="flex justify-between px-2.5"><h5 class="text-gray-500"> ${option} : </h5>  <div >$${prix}</div></div>`;
  
  prixOptions.appendChild(divPrix);
  calculPrixProduit(prodAfficheSurPageDetail, prix, option);
}
// pc
selectStockagePhone.addEventListener("change", function () {
  gestionChangementPrix(this, "prixStockage", "Mémoire de stockage");
});


selectStockagePC.addEventListener("change", function () {
  gestionChangementPrix(this, "prixStockage", "Mémoire de stockage");
});


TypeProcesseur.addEventListener("change", function () {
  gestionChangementPrix(this, "prixProcesseur", "Processeur");
});


TypeGraphic.addEventListener("change", function () {
  gestionChangementPrix(this, "prixGraphic", "Carte Graphique");
});

//phone
selectProcesseurPhone.addEventListener("change", function () {
  gestionChangementPrix(this, "prixProcesseur", "Processeur");
});

// electo 
SelectLitrage.addEventListener("change", function () {
  gestionChangementPrix(this, "prixLitrage", "Litrage");
});

// Television
SelectTauxDeRafraich.addEventListener("change", function () {
  gestionChangementPrix(this, "prixRafraich", "Rafraichissement");
});

// casque
SelectTaille.addEventListener("change", function () {
  gestionChangementPrix(this, "prixTraille", "TailleCasque");
});

// souri 
SelectDpi.addEventListener("change", function () {
  gestionChangementPrix(this, "prixDPI", "DPI");
});

// btn increment decrement 
document.getElementById("btnDecrement").addEventListener("click", DecrementQteProdDetailProduit);
document.getElementById("btnIncrement").addEventListener("click", IncrementQteProdDetailProduit);

const qteDetailProduit = document.getElementById("qteDetailProduit");
let qte = parseInt(qteDetailProduit.getAttribute("qte"));

function IncrementQteProdDetailProduit() {
  console.log("produit ");
  console.log(prodAfficheSurPageDetail);
  qte++;
  qteDetailProduit.setAttribute("qte", qte);
  prodAfficheSurPageDetail.qte = qte;
  qteDetailProduit.innerHTML = qte;
  let qpu = qte * prodAfficheSurPageDetail.PrixConfigure; //https://www.w3schools.com/js/js_object_property.asp
  prixTotal.innerHTML = `$${qpu}`;
  prod.prixTotal = qpu;
  divQte.innerHTML = prodAfficheSurPageDetail.qte ; 
}
function DecrementQteProdDetailProduit() {
  if (qte > 0) {
    qte--;
    qteDetailProduit.setAttribute("qte", qte);
    prodAfficheSurPageDetail.qte = qte;
    qteDetailProduit.innerHTML = qte;
    let qpu = qte * prodAfficheSurPageDetail.PrixConfigure; //https://www.w3schools.com/js/js_object_property.asp
    prixTotal.innerHTML = `$${qpu}`;
    prod.prixTotal = qpu;
    divQte.innerHTML = prodAfficheSurPageDetail.qte ; 
  }
}




// on ajout un array d option to  objet prodafficheDETAIL pour savoir les option ajoute en plus , on a besoin car si l user change meme option deux fois le prix s ajout donc pour resoudre ca on stock un array d objet qui stock les options choisi ,
//prodAfficheSurPageDetail
function calculPrixProduit(prod, prixOpt, opt) {
  let prodexist = prod.arr_option.findIndex((op) => op.option == opt);
  if (!(prodexist == -1)) {
    // si  l option 'processeur' exist  donc je modifier prixopton sinon j ajout l option au arr option de produit
    prod.PrixConfigure = prod.prix;
    prod.arr_option.forEach((op) => {
      if (op.option === opt) {
        op.prixOption = prixOpt;
      }
      prod.PrixConfigure = parseFloat(prod.PrixConfigure) + parseFloat(op.prixOption);
      console.log(typeof parseFloat(op.prixOption));
      console.log(prod.PrixConfigure); // m affiche nan
    });
    divPrixConfigure.innerHTML = `$${prod.PrixConfigure}`;
  } else {
    console.log("not exist");
    prod.PrixConfigure = parseFloat(prod.PrixConfigure) + parseFloat(prixOpt); // ici pas de probleme
    divPrixConfigure.innerHTML = `$${prod.PrixConfigure}`;
    //https://www.w3schools.com/js/js_object_property.asp
 
    //console.log(prod);
    prod.arr_option.push({ option: opt, prixOption: parseFloat(prixOpt) });
  }
   let qpu = qte * prod.PrixConfigure ;
  prixTotal.innerHTML = `$${qpu}`;
  prod.prixTotal = qpu
  
  //https://www.w3schools.com/js/js_object_property.asp

  return prod;
}


document.getElementById("btnAjoutPanier").addEventListener('click' , function(){
  ajouterPanierDepuisPageDetail(prod)
})


function ajouterPanierDepuisPageDetail(){
  let prod = prodAfficheSurPageDetail ;
  let panier = JSON.parse(localStorage.getItem('panier')) || [];
  let produitDansPanier = panier.find(p => prod.id === p.id);
  let index = panier.findIndex(p => prod.id === p.id);
  console.log(" index : "  ) ; 
  console.log( index ) ; 
  compareOptions(prod.arr_option, produitDansPanier.arr_option);
  if ((index>-1)  && (  compareOptions(prod.arr_option, produitDansPanier.arr_option))) { //&& (prod.PrixConfigure  ==  produitDansPanier.PrixConfigure )
   
   /* console.log( "------******----") ; 
   console.log( prod.arr_option) ; 
   console.log( "---------") ; 
    console.log( produitDansPanier.arr_option) ; 
    console.log( "-----*******----") ; */
      produitDansPanier.qte += prod.qte ; // Augmente la quantité si le produit existe déjà  
        produitDansPanier.prix = produitDansPanier.qte * produitDansPanier.prixUnitaire; 
        console.log(" exist au panier: "  ) ; 
  } else {
     //produitDansPanier.prix = prod.prixTotal; 
      panier.push(prod);
  }
  localStorage.setItem('panier', JSON.stringify(panier)); // Sauvegarde le panier da
}



/*  cette fonction et pour objectif de comparer table d option entre deux produit */

function compareOptions(optionProd1, optionProd2) {
  if (optionProd1.length !== optionProd2.length) { // s ils ont meme longeue alors , ils sont pas egaux
    return false;
  }
  else { // on tri les element pr chaque table afin de facilite la recherche apres 
  optionProd1.sort((a, b) => a.option.localeCompare(b.option));
  optionProd2.sort((a, b) => a.option.localeCompare(b.option));
  /*console.log(" option 1 : "  );
  console.log(optionProd1);
  console.log(" option 2 : "  );
  console.log(optionProd2);*/
   ; 
  for (let i = 0; i < optionProd1.length; i++) {   // on compare p.option et p.prix des deux produit 
    if (optionProd1[i].option !== optionProd2[i].option || optionProd1[i].prixOption !== optionProd2[i].prixOption) {
      //console.log(optionProd1[i].option + "false" + optionProd2[i].option );
      console.log("false");
      return false;  
    }
  }
  console.log("true");
  return true;  
}
}

/************************************** */
/********* produit offre  ************* */
/************************************** */









/************************************** */
/************************************** */
/************************************** */
/******Fin Page de Détail Produit : *****/
/***************************************/
/************************************** */
/********  Mina *********************** */
/************************************** */