let produits ;

  // data 
  let phone1 = {
    id: 10,
    nom: "Nexio 14 Pro",
    spec: "Smartphone Apple avec écran OLED 6.1 pouces",
    prix: 2000,
    id_cat: 1,
    image: "./img/",
    couleur: "noir",
    stockage: "250gb",
    processeur: "Exynos"
};

let phone2 = {
    id: 11,
    nom: "Nexio S23 Ultra",
    spec: "Smartphone avec écran Dynamic AMOLED 6.8 pouces et caméra 200 MP",
    prix: 1300,
    id_cat: 1,
    image: "url_vers_image_s23_ultra.jpg",
    couleur: "noir",
    stockage: "256gb",
    processeur: "Exynos"
};

let phone3 = {
    id: 12,
    nom: "Nexio S23 Ultra",
    spec: "Smartphone avec écran Dynamic AMOLED 6.8 pouces et caméra 200 MP",
    prix: 1300,
    id_cat: 1,
    image: "url_vers_image_s23_ultra.jpg",
    couleur: "noir",
    stockage: "250gb",
    processeur: "Exynos"
};4
let phone4 = {
    id: 13,
    nom: "Nexio Fold",
    spec: "Smartphone pliable avec écran flexible AMOLED 7.2 pouces",
    prix: 2500,
    id_cat: 1,
    image: "url_vers_image_fold.jpg",
    couleur: "argent",
    stockage: "512gb",
    processeur: "Snapdragon"
};

let phone5 = {
    id: 14,
    nom: "Nexio 13 Mini",
    spec: "Smartphone compact avec écran OLED 5.4 pouces",
    prix: 900,
    id_cat: 1,
    image: "url_vers_image_mini.jpg",
    couleur: "rose",
    stockage: "128gb",
    processeur: "A15 Bionic"
};



let PC1 = {
    id: 20,
    nom: "Nex XPS 15",
    spec: "Ordinateur portable Dell avec écran 15.6 pouces 4K OLED, processeur Intel i7-12700H, carte graphique Nvidia RTX 3050, 16GB RAM",
    prix: 1500,
    id_cat: 2,
    image: "url_vers_image_dell_xps_15.jpg",
    couleur: "noir",
    stockage: "250gb",
    processeur: { id: 1, marque: "AMD", nom: "Ryzen 5 7600", prix: 0 },
    carteGraphique: { id: 1, marque: "Nvidia", nom: "RTX 4090", prix: 0 }
};

let PC2 = {
    id: 21,
    nom: "Nex OL 16",
    spec: "PC de jeu HP Omen 16 avec écran 16.1 pouces Full HD, processeur AMD Ryzen 7 5800H, carte graphique Nvidia RTX 3060, 32GB RAM",
    prix: 2200,
    id_cat: 2,
    image: "url_vers_image_hp_omen_16.jpg",
    couleur: "noir",
    stockage: "250gb",
    processeur: { id: 1, marque: "AMD", nom: "Ryzen 5 7600", prix: 0 },
    carteGraphique: { id: 1, marque: "Nvidia", nom: "RTX 4090", prix: 0 }
};

let PC3 = {
    id: 22,
    nom: "Nex MacBook Pro 16",
    spec: "Ordinateur portable Apple avec écran Retina 16 pouces, processeur Apple M1 Pro, carte graphique intégrée Apple, 32GB RAM",
    prix: 2800,
    id_cat: 2,
    image: "url_vers_image_macbook_pro_16.jpg",
    couleur: "noir",
    stockage: "250gb",
    processeur: { id: 1, marque: "AMD", nom: "Ryzen 5 7600", prix: 0 },
    carteGraphique: { id: 1, marque: "Nvidia", nom: "RTX 4090", prix: 0 }
};
let PC4 = {
    id: 23,
    nom: "Nex ZenBook Pro",
    spec: "Ordinateur portable ASUS avec écran 14 pouces OLED, processeur Ryzen 9, 16GB RAM",
    prix: 1800,
    id_cat: 2,
    image: "url_vers_image_zenbook_pro.jpg",
    couleur: "bleu",
    stockage: "512gb",
    processeur: { id: 2, marque: "AMD", nom: "Ryzen 9 5900HX", prix: 0 },
    carteGraphique: { id: 2, marque: "Nvidia", nom: "RTX 3060", prix: 0 }
};

let PC5 = {
    id: 24,
    nom: "Nex Surface Laptop 5",
    spec: "Ordinateur portable Microsoft avec écran 13.5 pouces PixelSense, Intel i5, 8GB RAM",
    prix: 1200,
    id_cat: 2,
    image: "url_vers_image_surface.jpg",
    couleur: "platine",
    stockage: "256gb",
    processeur: { id: 3, marque: "Intel", nom: "Core i5-1135G7", prix: 0 },
    carteGraphique: { id: 3, marque: "Intel", nom: "Iris Xe", prix: 0 }
};
// Casques
let casq1 = {
    id: 30,
    spec: "Circum-aural, réduction de bruit active, Bluetooth 5.0, autonomie 20 heures",
    nom: "casque Nex 1",
    taille: "s",
    couleur: "noir",
    image: "url_vers_image_macbook_pro_16.jpg",
    prix: 120,
    id_cat: 6,// Correspond à "casque"
};

let casq2 = {
    id: 31,
    spec: "Supra-aural, Bluetooth, autonomie 15 heures",
    nom: "cask N1",
    taille: "l",
    couleur: "noir",
    image: "url_vers_image_macbook_pro_16.jpg",
    prix: 90,
    id_cat: 6,
};

let casq3 = {
    id: 32,
    spec: "Intra-auriculaire, réduction de bruit passive, filaire",
    nom: "cask N1",
    taille: "m",
    couleur: "noir",
    image: "url_vers_image_macbook_pro_16.jpg",
    prix: 50,
    id_cat: 6,
};
let casq4 = {
    id: 33,
    spec: "Over-ear, réduction de bruit, autonomie 30 heures",
    nom: "casque Nex SoundMax",
    taille: "m",
    couleur: "blanc",
    image: "url_vers_image_soundmax.jpg",
    prix: 140,
    id_cat: 6,
};

let casq5 = {
    id: 34,
    spec: "Intra-auriculaire, sans fil, Bluetooth 5.2, autonomie 10 heures",
    nom: "casque Nex AirPods",
    taille: "s",
    couleur: "argent",
    image: "url_vers_image_airpods.jpg",
    prix: 200,
    id_cat: 6,
};

// Souris
let souris1 = {
    id: 40,
    nom: "mousNex",
    spec: "Sans fil, Bluetooth, capteur optique, 2 boutons programmables",
    couleur: "noir",
    dpi: 10,
    image: "url_vers_image_macbook_pro_16.jpg",
    prix: 30,
    id_cat: 5, // Correspond à "souris"
};

let souris2 = {
    id: 41,
    nom: "mSNex",
    spec: "Filaire, USB, capteur laser, 3 boutons programmables",
    couleur: "noir",
    dpi: 10,
    image: "url_vers_image_macbook_pro_16.jpg",
    prix: 25,
    id_cat: 5
};

let souris3 = {
    id: 42,
    nom: "Souris full",
    spec: "Sans fil, Bluetooth, capteur optique, 5 boutons programmables",
    couleur: "noir",
    dpi: 10,
    image: "url_vers_image_macbook_pro_16.jpg",
    prix: 40,
    id_cat: 5
};
let souris4 = {
    id: 43,
    nom: "mousPro",
    spec: "Filaire, USB, capteur optique, 6 boutons programmables",
    couleur: "rouge",
    dpi: 1600,
    image: "url_vers_image_mouspro.jpg",
    prix: 20,
    id_cat:5
};

let souris5 = {
    id: 44,
    nom: "NexAir Mouse",
    spec: "Sans fil, Bluetooth, rechargeable, capteur laser",
    couleur: "argent",
    dpi: 2000,
    image: "url_vers_image_air_mouse.jpg",
    prix: 50,
    id_cat: 5
};

// Télévisions
let television1 = {
    id: 50,
    nom: "TV Ultra HD Samsung",
    spec: "Résolution 4K, OLED, Smart TV, HDMI 2.1",
    image: "url_vers_image_tv_samsung.jpg",
    couleur: "noir",
    tauxDeRafraichissement: "120Hz",
    prix: 800,
    id_cat: 3 // Correspond à "Télévisions"
};

let television2 = {
    id: 51,
    nom: "LG NanoCell",
    spec: "Résolution 8K, NanoCell, AI ThinQ, HDMI 2.1",
    image: "url_vers_image_tv_lg.jpg",
    couleur: "gris",
    tauxDeRafraichissement: "60Hz",
    prix: 1200,
    id_cat: 3 
};
let television3 = {
    id: 52,
    nom: "Sony Bravia 65\"",
    spec: "Résolution 4K, OLED, Google TV intégré",
    image: "url_vers_image_bravia.jpg",
    couleur: "noir",
    tauxDeRafraichissement: "120Hz",
    prix: 1500,
    id_cat: 3 
};

let television4 = {
    id: 53,
    nom: "TCL 50\" QLED",
    spec: "Résolution 4K, QLED, Dolby Vision, HDMI 2.1",
    image: "url_vers_image_tcl.jpg",
    couleur: "noir",
    tauxDeRafraichissement: "60Hz",
    prix: 600,
    id_cat: 3 
};
// Moniteurs
let moniteur1 = {
    id: 60,
    nom: "Moniteur Gamer Asus",
    spec: "Résolution Full HD, LED, HDMI, DisplayPort",
    image: "url_vers_image_moniteur_asus.jpg",
    couleur: "noir",
    tauxDeRafraichissement: "144Hz",
    prix: 250,
    id_cat: 3 
};

let moniteur2 = {
    id: 61,
    nom: "Dell Ultrasharp",
    spec: "Résolution 4K, IPS, USB-C, ajustable",
    image: "url_vers_image_moniteur_dell.jpg",
    couleur: "argent",
    tauxDeRafraichissement: "60Hz",
    prix: 350,
    id_cat: 3 
};
let moniteur3 = {
    id: 62,
    nom: "Samsung Odyssey G9",
    spec: "Résolution Dual QHD, courbé, HDMI, DisplayPort",
    image: "url_vers_image_odyssey.jpg",
    couleur: "noir",
    tauxDeRafraichissement: "240Hz",
    prix: 1200,
    id_cat: 3 
};

let moniteur4 = {
    id: 63,
    nom: "Acer Predator XB273",
    spec: "Résolution Full HD, HDR, G-Sync, DisplayPort",
    image: "url_vers_image_predator.jpg",
    couleur: "noir",
    tauxDeRafraichissement: "144Hz",
    prix: 450,
    id_cat: 3 
};

// Réfrigérateurs
let refrigerateur1 = {
    id: 70,
    nom: "Réfrigérateur Samsung Double Porte",
    spec: "Technologie No Frost, distributeur d'eau, congélateur supérieur",
    couleur: "argent",
    image: "url_vers_image_refrigerateur_samsung.jpg",
    litrage: "350L",
    prix: 600,
    id_cat: 4 // Correspond à "Électroménagers"
};

let refrigerateur2 = {
    id: 71,
    nom: "Réfrigérateur LG Multi-Door",
    spec: "Inverter Linear Compressor, réfrigérateur intelligent",
    couleur: "inox",
    image: "url_vers_image_refrigerateur_lg.jpg",
    litrage: "500L",
    prix: 1000,
    id_cat: 4 
};
let refrigerateur3 = {
    id: 72,
    nom: "Réfrigérateur Haier 3D",
    spec: "Triple porte, inverter, réfrigération rapide",
    couleur: "blanc",
    image: "url_vers_image_haier.jpg",
    litrage: "400L",
    prix: 700,
    id_cat: 4 
};

let refrigerateur4 = {
    id: 73,
    nom: "Réfrigérateur Sharp Double Porte",
    spec: "Technologie PlasmaCluster, No Frost, distributeur d'eau",
    couleur: "inox",
    image: "url_vers_image_sharp.jpg",
    litrage: "450L",
    prix: 950,
    id_cat: 4 
};

// Machines à Laver
let machineLaver1 = {
    id: 80,
    nom: "Machine à Laver Bosch Série 6",
    spec: "EcoSilence Drive, programme rapide 30 min, chargement frontal",
    couleur: "blanc",
    image: "url_vers_image_machine_laver_bosch.jpg",
    litrage: "8kg",
    prix: 400,
    id_cat: 4 
};

let machineLaver2 = {
    id: 81,
    nom: "Machine à Laver Whirlpool FreshCare+",
    spec: "SteamCare, programme rapide, chargement par le haut",
    couleur: "gris",
    image: "url_vers_image_machine_laver_whirlpool.jpg",
    litrage: "7kg",
    prix: 350,
    id_cat: 4 
};
let machineLaver3 = {
    id: 82,
    nom: "Machine à Laver LG TurboWash",
    spec: "Direct Drive, chargement frontal, programme vapeur",
    couleur: "blanc",
    image: "url_vers_image_lg_turbowash.jpg",
    litrage: "9kg",
    prix: 500,
    id_cat: 4 
};

let machineLaver4 = {
    id: 83,
    nom: "Machine à Laver Electrolux PerfectCare",
    spec: "EcoCare, chargement frontal, programme rapide",
    couleur: "gris",
    image: "url_vers_image_electrolux.jpg",
    litrage: "8kg",
    prix: 450,
    id_cat: 4  
};


// Micro-ondes
let microOnde1 = {
    id: 90,
    nom: "Micro-ondes Panasonic Inverter",
    spec: "Inverter Technology, fonction grill, décongélation rapide",
    couleur: "noir",
    image: "url_vers_image_micro_ondes_panasonic.jpg",
    litrage: "30L",
    prix: 150,
    id_cat: 4 
};

let microOnde2 = {
    id: 91,
    nom: "Micro-ondes Samsung Solo",
    spec: "Triple Distribution System, revêtement céramique",
    couleur: "argent",
    image: "url_vers_image_micro_ondes_samsung.jpg",
    litrage: "23L",
    prix: 120,
    id_cat: 4 
};
let microOnde3 = {
    id: 92,
    nom: "Micro-ondes LG NeoChef",
    spec: "Smart Inverter, cuisson uniforme, fonction de décongélation",
    couleur: "noir",
    image: "url_vers_image_neochef.jpg",
    litrage: "25L",
    prix: 160,
    id_cat: 4 
};

let microOnde4 = {  
    id: 93,
    nom: "Micro-ondes Bosch Serie 4",
    spec: "AutoPilot, fonction grill, 5 niveaux de puissance",
    couleur: "argent",
    image: "url_vers_image_bosch.jpg",
    litrage: "28L",
    prix: 200,
    id_cat: 4 
};






  produits =[phone1 , phone2 , phone3 , phone4 , phone5 , PC1 , PC2 , PC3 , PC4 , PC5 , casq1 , casq2 , casq3 , casq4 , casq5 , souris1
    , souris2 , souris3 , souris4 , souris5 , television1 , television2 , television3 , television4 , moniteur1 , moniteur2 , moniteur3 , moniteur4 , 
    machineLaver1 , machineLaver2 , machineLaver3 , machineLaver4 , microOnde1 , microOnde2, microOnde3 , microOnde4 , refrigerateur1 , refrigerateur2 , 
    refrigerateur3 , refrigerateur4
  ] ; 







  /* stock en local storage */
  
  localStorage.setItem("arr_produits" , JSON.stringify(produits)) ; 