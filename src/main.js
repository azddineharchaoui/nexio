/*document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const collapsedMenu = document.getElementById('collapsed-menu');

    menuButton.addEventListener('click', function () {
        collapsedMenu.classList.toggle('hidden');
    });
});*/
let totalHT = document.getElementById("totalHT")
let tva = document.getElementById("tva")
let totalTCC = document.getElementById("totalTCC")
const liste = document.getElementById("listDevis");

arr_total =[];

panier= [{id:1 , nom: "phone1" , prix : 70 , qte : "2" , prixprixTotal : ""} , 
   {id:2 , nom: "pc" , prix :200, qte : "5" , prixTotal : ""} ,
    {id:3 , nom: "casque" , prix : 300 , qte : "2" , prixTotal : ""}
 ]
 localStorage.getItem('panier', JSON.stringify(panier));
 
 devis(panier)
 somme(arr_total)

 function devis(panier) {
    const liste = document.getElementById("listDevis");
    if (!liste) {
        console.error("L'élément avec l'ID 'listDevis' n'a pas été trouvé dans le DOM.");
        return; // Si l'élément n'existe pas, on sort de la fonction
    }
  
    panier.forEach(p => {
       let ligne = document.createElement("div")
       ligne.classList.add("grid", "grid-cols-4", "mx-[80px]", "py-5", "px-4", "text-center");
       p.prixTotal = p.prix * p.qte 
       code=` 
       <p>${p.nom}</p>
       <p>${p.prix}</p>
       <p>${p.qte}</p>
       <p>${p.prixTotal}</p>`
       ligne.innerHTML = code
       arr_total.push(p.prixTotal);
       
       liste.appendChild(ligne);
      
    });
}
// calcule de nbr total et 
function somme(arr_total) {
    
    let nbtotal=0;
    console.log(nbtotal)
    for(let i=0;i<arr_total.length;i++){
        nbtotal+=arr_total[i];
        
    }
    console.log(nbtotal)
    totalHT.textContent = nbtotal + " $" ;
    tva.textContent = nbtotal * 0.2 + " $" ;
    totalTCC.textContent= nbtotal + (nbtotal * 0.2 ) + " $";
    
}


//limpression
document.getElementById('button').addEventListener('click', function() {
    console.log("Print button clicked");
    window.print();
});
document.getElementById('validate').addEventListener('click', function() {
    // Create a confirmation message string
    let confirmationMessage = "Order Summary:\n\n";
    
    // Add product details to the confirmation message
    panier.forEach(item => {
        confirmationMessage += `${item.nom} - ${item.prix} $ x ${item.qte} = ${item.prixTotal} $\n`;
    });

    // Add total values (HT, TVA, and TTC) to the confirmation message
    confirmationMessage += `\nTotal HT: ${totalHT.textContent}\n`;
    confirmationMessage += `TVA (20%): ${tva.textContent}\n`;
    confirmationMessage += `Total TTC: ${totalTCC.textContent}`;

    // Display the confirmation message in an alert box
    alert(confirmationMessage);

    // Clear the cart (empty the panier array and the arr_total array)
    panier = [];
    arr_total = [];

    // Update localStorage to reflect the empty cart
    localStorage.setItem('panier', JSON.stringify(panier));

    // Clear the product list from the page
    liste.innerHTML = '';

    // Reset the totals to zero
    totalHT.textContent = '0 $';
    tva.textContent = '0 $';
    totalTCC.textContent = '0 $';
});






   