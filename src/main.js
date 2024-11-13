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

arr_total =[];

panier= [{id:1 , nom: "phone1" , prix : 70 , qte : "2" , prixprixTotal : ""} , 
   {id:2 , nom: "pc" , prix :200, qte : "5" , prixTotal : ""} ,
    {id:3 , nom: "casque" , prix : 300 , qte : "2" , prixTotal : ""}
              
 ]
 localStorage.setItem('panier', JSON.stringify(panier));
 console.log()
 devis(panier)
 somme(arr_total)

function devis(panier){
   let  liste = document.getElementById("listDevis"); 
  
    panier.forEach(p => {
       let ligne = document.createElement("div")
       ligne.classList.add("grid", "grid-cols-4", "mx-[80px]", "py-5", "px-4", "text-center");
       p.prixprixTotal = p.prix * p.qte 
       code=` 
       <p>${p.nom}</p>
       <p>${p.prix}</p>
       <p>${p.qte}</p>
       <p>${p.prixprixTotal}</p>`
       ligne.innerHTML = code
       arr_total.push(p.prixprixTotal);
       
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




   