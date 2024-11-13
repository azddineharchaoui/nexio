let produits;

// data 
// smartphone
let phone1 = {
    id: 10,
    nom: "Samsung Galaxy A05",
    spec: "Smartphone Apple avec écran OLED 6.1 pouces",
    prix: 2000,
    id_cat: 1,
    image: "img/phone.png",
    couleur: "noir",
    stockage: "250gb",
    processeur: "Exynos"
};

let phone2 = {
    id: 11,
    nom: "REDMI 14C",
    spec: "Smartphone avec écran Dynamic AMOLED 6.8 pouces et caméra 200 MP",
    prix: 1300,
    id_cat: 1,
    image: "img/phone1.png",
    couleur: "noir",
    stockage: "256gb",
    processeur: "Exynos"
};

let phone3 = {
    id: 12,
    nom: "XIAOMI Redmi A3x",
    spec: "Smartphone avec écran Dynamic AMOLED 6.8 pouces et caméra 200 MP",
    prix: 1300,
    id_cat: 1,
    image: "img/phone2.png",
    couleur: "noir",
    stockage: "250gb",
    processeur: "Exynos"
};  

let phone4 = {
    id: 13,
    nom: "OPPO Reno8 T",
    spec: "Smartphone pliable avec écran flexible AMOLED 7.2 pouces",
    prix: 2500,
    id_cat: 1,
    image: "img/phone3.png",
    couleur: "argent",
    stockage: "512gb",
    processeur: "Snapdragon"
};

let phone5 = {
    id: 14,
    nom: "Samsung Galaxy S23+",
    spec: "Smartphone compact avec écran OLED 5.4 pouces",
    prix: 900,
    id_cat: 1,
    image: "img/phone4.png",
    couleur: "rose",
    stockage: "128gb",
    processeur: "A15 Bionic"
};

let phone6 = {
    id: 15,
    nom: "Xiaomi Redmi Note 13 Pro",
    spec: "Smartphone haut de gamme avec écran AMOLED 6.1 pouces",
    prix: 849,
    id_cat: 1,
    image: "img/phone5.png",
    couleur: "noir",
    stockage: "128GB",
    processeur: "Snapdragon 8 Gen 2"
};

let phone7 = {
    id: 16,
    nom: "Nokia C20",
    spec: "Smartphone avec caméra 50MP et écran OLED 6.2 pouces",
    prix: 699,
    id_cat: 1,
    image: "img/phone6.png",
    couleur: "blanc",
    stockage: "128GB",
    processeur: "Google Tensor G3"
};

let phone8 = {
    id: 17,
    nom: "Samsung Galaxy M53",
    spec: "Smartphone performant avec écran AMOLED 6.7 pouces",
    prix: 799,
    id_cat: 1,
    image: "img/phone7.png",
    couleur: "vert",
    stockage: "256GB",
    processeur: "Snapdragon 8 Gen 2"
};

let phone9 = {
    id: 18,
    nom: "INFINIX NOTE 30",
    spec: "Smartphone avec écran AMOLED 6.73 pouces et caméra Leica",
    prix: 999,
    id_cat: 1,
    image: "img/phone8.png",
    couleur: "bleu",
    stockage: "256GB",
    processeur: "Snapdragon 8 Gen 2"
};

let phone10 = {
    id: 19,
    nom: "HUAWEI NOVA",
    spec: "Smartphone premium avec écran AMOLED 6.7 pouces et 5G",
    prix: 1100,
    id_cat: 1,
    image: "img/phone9.png",
    couleur: "gris",
    stockage: "256GB",
    processeur: "Snapdragon 8 Gen 1"
};

let phone11 = {
    id: 20,
    nom: "APPLE iPhone 14 Pro",
    spec: "Smartphone haut de gamme avec écran AMOLED 6.7 pouces et 5G",
    prix: 749,
    id_cat: 1,
    image: "img/phone10.png",
    couleur: "vert",
    stockage: "128GB",
    processeur: "Snapdragon 8 Gen 1"
};

let phone12 = {
    id: 21,
    nom: "OPPO A77s",
    spec: "Smartphone haut de gamme avec écran AMOLED 6.7 pouces et 5G",
    prix: 749,
    id_cat: 1,
    image: "img/phone11.png",
    couleur: "vert",
    stockage: "128GB",
    processeur: "Snapdragon 8 Gen 1"
};


//laptop
let PC1 = {
    id: 22,
    nom: "PC PORTABLE W11 LENOVO",
    spec: "Ordinateur portable Dell avec écran 15.6 pouces 4K OLED, processeur Intel i7-12700H, carte graphique Nvidia RTX 3050, 16GB RAM",
    prix: 1500,
    id_cat: 2,
    image: "img/lap.png",
    couleur: "noir",
    stockage: "250gb",
    processeur: { id: 1, marque: "AMD", nom: "Ryzen 5 7600", prix: 0 },
    carteGraphique: { id: 1, marque: "Nvidia", nom: "RTX 4090", prix: 0 }
};

let PC2 = {
    id: 23,
    nom: "ASUS ExpertBook B1",
    spec: "PC de jeu HP Omen 16 avec écran 16.1 pouces Full HD, processeur AMD Ryzen 7 5800H, carte graphique Nvidia RTX 3060, 32GB RAM",
    prix: 2200,
    id_cat: 2,
    image: "img/lap1.png",
    couleur: "noir",
    stockage: "250gb",
    processeur: { id: 1, marque: "AMD", nom: "Ryzen 5 7600", prix: 0 },
    carteGraphique: { id: 1, marque: "Nvidia", nom: "RTX 4090", prix: 0 }
};

let PC3 = {
    id: 24,
    nom: "HP Victus PC Portable Gaming",
    spec: "Ordinateur portable Apple avec écran Retina 16 pouces, processeur Apple M1 Pro, carte graphique intégrée Apple, 32GB RAM",
    prix: 2800,
    id_cat: 2,
    image: "img/lap2.png",
    couleur: "noir",
    stockage: "250gb",
    processeur: { id: 1, marque: "AMD", nom: "Ryzen 5 7600", prix: 0 },
    carteGraphique: { id: 1, marque: "Nvidia", nom: "RTX 4090", prix: 0 }
};

let PC4 = {
    id: 25,
    nom: "HUAWEI MateBook 14 2023", 
    spec: "Ordinateur portable HUAWEI avec écran 14 pouces OLED, processeur Ryzen 9 5900HX, 16GB RAM", 
    prix: 2000, 
    id_cat: 2,
    image: "img/lap4.png",
    couleur: "noir",
    stockage: "1TB",
    processeur: { id: 2, marque: "AMD", nom: "Ryzen 9 5900HX", prix: 100 },
    carteGraphique: { id: 2, marque: "Nvidia", nom: "RTX 3060", prix: 0 }
};

let PC5 = {
    id: 26,
    nom: "PC Portable INFINIX Inbook X1 Pro", 
    spec: "Ordinateur portable INFINIX avec écran 13.5 pouces Full HD, Intel i5-1135G7, 8GB RAM, SSD 512GB", 
    prix: 1300,
    id_cat: 2,
    image: "img/lap5.png",
    couleur: "argenté", 
    stockage: "512gb", 
    processeur: { id: 3, marque: "Intel", nom: "Core i5-1135G7", prix: 50 }, 
    carteGraphique: { id: 3, marque: "Intel", nom: "Iris Xe", prix: 0 }
};

let PC6 = {
    id: 27,
    nom: "ACER PC PORTABLE ASPIRE 3 Pro", 
    spec: "Ordinateur portable ACER avec écran 15.6 pouces, Intel i7-1165G7, 16GB RAM, SSD 512GB", 
    prix: 1400, 
    id_cat: 2,
    image: "img/lap7.png",
    couleur: "gris", 
    stockage: "512gb", 
    processeur: { id: 4, marque: "Intel", nom: "Core i7-1165G7", prix: 150 },
    carteGraphique: { id: 4, marque: "Intel", nom: "Iris Xe", prix: 0 }
};

let PC7 = {
    id: 28,
    nom: "HP ProBook 440 G8 2023", 
    spec: "HP ProBook 440 G8 avec écran 14 pouces, Intel i7-1185G7, 16GB RAM, 512GB SSD", 
    prix: 1500, 
    id_cat: 2,
    image: "img/lap6.png",
    couleur: "argent", 
    stockage: "512gb", 
    processeur: { id: 5, marque: "Intel", nom: "Core i7-1185G7", prix: 200 },
    carteGraphique: { id: 5, marque: "Intel", nom: "Iris Xe", prix: 0 }
};

let PC8 = {
    id: 29,
    nom: "PC portable Acer Aspire 2023", 
    spec: "Ordinateur portable Acer avec écran 15.6 pouces, Intel i7-1165G7, 16GB RAM, 512GB SSD",
    prix: 1450, 
    id_cat: 2,
    image: "img/lap8.png",
    couleur: "argent", 
    stockage: "512gb",
    processeur: { id: 4, marque: "Intel", nom: "Core i7-1165G7", prix: 150 },
    carteGraphique: { id: 4, marque: "Intel", nom: "Iris Xe", prix: 0 }
};

let PC9 = {
    id: 30,
    nom: "DELL LATITUDE 5540 2023", 
    spec: "Ordinateur portable Dell avec écran 14 pouces, Intel i7-1185G7, 16GB RAM, 512GB SSD", 
    prix: 1600, 
    id_cat: 2,
    image: "img/lap8.png",
    couleur: "noir", 
    stockage: "512gb",
    processeur: { id: 5, marque: "Intel", nom: "Core i7-1185G7", prix: 200 },
    carteGraphique: { id: 5, marque: "Intel", nom: "Iris Xe", prix: 0 }
};

let PC10 = {
    id: 31,
    nom: "Acer Swift 3 2023", 
    spec: "Ordinateur portable Acer avec écran 13.5 pouces, Intel i7-1165G7, 16GB RAM, 512GB SSD", 
    prix: 1550, 
    id_cat: 2,
    image: "img/lap10.png",
    couleur: "noir", 
    stockage: "512gb",
    processeur: { id: 5, marque: "Intel", nom: "Core i7-1165G7", prix: 200 },
    carteGraphique: { id: 5, marque: "Intel", nom: "Iris Xe", prix: 0 }
};

let PC11 = {
    id: 32,
    nom: "HUAWEI MateBook X Pro", 
    spec: "Ordinateur portable Huawei avec écran 13.9 pouces, Intel i7-1185G7, 16GB RAM, SSD 512GB", 
    prix: 1700, 
    id_cat: 2,
    image: "img/lap11.png",
    couleur: "argenté", 
    stockage: "512gb",    
    processeur: { id: 5, marque: "Intel", nom: "Core i7-1185G7", prix: 200 },
    carteGraphique: { id: 5, marque: "Intel", nom: "Iris Xe", prix: 0 }
};

let PC12 = {
    id: 33,
    nom: "Apple MacBook Air M2 2023", 
    spec: "MacBook Air avec puce M2, écran 15.3 pouces, 16GB RAM, 512GB SSD", 
    prix: 1800, 
    id_cat: 2,
    image: "img/lap3.png",
    couleur: "argenté", 
    stockage: "512gb", 
    processeur: { id: 6, marque: "Apple", nom: "Puce Apple M2", prix: 0 }, 
    carteGraphique: { id: 6, marque: "Apple", nom: "Puce Apple M2", prix: 0 }
};

// Casques
let casq1 = {
    id: 34,
    spec: "Circum-aural, réduction de bruit active, Bluetooth 5.0, autonomie 20 heures",
    nom: "casque Nex 1",
    taille: "s",
    couleur: "noir",
    image: "url_vers_image_macbook_pro_16.jpg",
    prix: 120,
    id_cat: 6,// Correspond à "casque"
};

let casq2 = {
    id: 35,
    spec: "Supra-aural, Bluetooth, autonomie 15 heures",
    nom: "cask N1",
    taille: "l",
    couleur: "noir",
    image: "url_vers_image_macbook_pro_16.jpg",
    prix: 90,
    id_cat: 6,
};

let casq3 = {
    id: 36,
    spec: "Intra-auriculaire, réduction de bruit passive, filaire",
    nom: "cask N1",
    taille: "m",
    couleur: "noir",
    image: "url_vers_image_macbook_pro_16.jpg",
    prix: 50,
    id_cat: 6,
};
let casq4 = {
    id: 37,
    spec: "Over-ear, réduction de bruit, autonomie 30 heures",
    nom: "casque Nex SoundMax",
    taille: "m",
    couleur: "blanc",
    image: "url_vers_image_soundmax.jpg",
    prix: 140,
    id_cat: 6,
};

let casq5 = {
    id: 38,
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
    id_cat: 5
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






produits = [phone1, phone2, phone3, phone4, phone5, phone6, phone7, phone8, phone9, phone10, phone11, phone12, PC1, PC2, PC3, PC4, PC5, PC6, PC7, PC8, PC9, PC10, PC11, PC12, casq1, casq2, casq3, casq4, casq5, souris1
    , souris2, souris3, souris4, souris5, television1, television2, television3, television4, moniteur1, moniteur2, moniteur3, moniteur4,
    machineLaver1, machineLaver2, machineLaver3, machineLaver4, microOnde1, microOnde2, microOnde3, microOnde4, refrigerateur1, refrigerateur2,
    refrigerateur3, refrigerateur4
];







/* stock en local storage */

localStorage.setItem("arr_produits", JSON.stringify(produits)); 