
let totalHT = document.getElementById("totalHT")
let tva = document.getElementById("tva")
let totalTCC = document.getElementById("totalTCC")
const liste = document.getElementById("listDevis");


document.addEventListener('DOMContentLoaded', function() {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    
    devis(panier);

    let arr_total = [];
    panier.forEach(p => {
        p.prixTotal = p.prix * p.qte;
        arr_total.push(p.prixTotal);
    });
    somme(arr_total);
});

  function dateAujourd(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate  ; 

  }
function devis(panier) {
    const liste = document.getElementById("listDevis");
    const date_now= document.getElementById("date_now");
    date_now.innerHTML =   dateAujourd(); 
    panier.forEach(p => {
        let ligne = document.createElement("div");
        ligne.classList.add("grid", "grid-cols-4",  "py-5", "px-4", "text-center");
        
        // Remplir la ligne avec les informations du produit
        ligne.innerHTML = `
            <p>${p.nom}</p>
            <p>${p.prix} $</p>
            <p>${p.qte}</p>
            <p>${p.prixTotal} $</p>
        `;
        
        // Ajouter la ligne dans le tableau de devis
        liste.appendChild(ligne);
    });
}

// calcule de nbr total et 
function somme(arr_total) {
    
    let nbtotal=0;
    console.log(nbtotal);
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
    
    let confirmationMessage = "Order Summary:\n\n";
    
    
    panier.forEach(item => {
        confirmationMessage += `${item.nom} - ${item.prix} $ x ${item.qte} = ${item.prixTotal} $\n`;
    });

    
    confirmationMessage += `\nTotal HT: ${totalHT.textContent}\n`;
    confirmationMessage += `TVA (20%): ${tva.textContent}\n`;
    confirmationMessage += `Total TTC: ${totalTCC.textContent}`;

    
    alert(confirmationMessage);

    
    panier = [];
    arr_total = [];

    
    localStorage.setItem('panier', JSON.stringify(panier));

    
    liste.innerHTML = '';

    
    totalHT.textContent = '0 $';
    tva.textContent = '0 $';
    totalTCC.textContent = '0 $';
});






   