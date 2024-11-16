

function afficheAllFavoris() {

    let produitsAffiches =[] ; 
    produitsAffiches.push(arr_produits[35]);
    produitsAffiches.push(arr_produits[22]);
    produitsAffiches.push(arr_produits[1]);
    produitsAffiches.push(arr_produits[20]);
   
    produitsAffiches.forEach((prod) => {
        console.log(prod);  // Log the product details
        afficheProduit(prod.id);  // Display product details by ID
    });
  }
  
  
  // appel au fonction sur les pages :
  if (window.location.pathname === "/") {
    console.log("index.html  je suis la ");
    afficheAllFavoris() ; 
  } else if (window.location.pathname === "/detail.html") {
    // console.log(location.search)  //  par exemple ?id=12
    const param = new URLSearchParams(window.location.search);
    const id = param.get("id"); // Récupère la valeur de 'id'
     console.log("lkjkjlmjkkl"); // Affiche 12
    afficheDetail(id);
  }else if (window.location.pathname === "/index.html") {
    console.log("index.html  je suis la ");
    afficheAllFavoris() ; 
  } 
   else {
    console.log(window.location.pathname );
  }