let produits;

// data 
// smartphone
let phone1 = {
    id: 10,
    nom: "Samsung Galaxy A05",
    spec: "Smartphone Apple avec écran OLED 6.1 pouces",
    prix: 2000,
    marque:"Samsung",
    id_cat: 1,
    image: "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/81/037446/1.jpg?4124",
    couleur: "noir",
    stockage: "250gb",
    processeur: "Exynos",
    FicheTechnique: [
        "Écran OLED 6.1 pouces",
        "Processeur Exynos",
        "Caméra arrière 50 MP",
        "Batterie 5000 mAh",
        "Mémoire RAM 4 GB",
        "Stockage interne 250 GB",
        "Support 5G"
    ],
};

let phone2 = {
    id: 11,
    nom: "REDMI 14C",
    spec: "Smartphone avec écran Dynamic AMOLED 6.8 pouces et caméra 200 MP",
    marque:"REDMI",
    prix: 1300,
    id_cat: 1,
    image: "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/01/314656/1.jpg?5886",
    couleur: "noir",
    stockage: "256gb",
    processeur: "Exynos",
    FicheTechnique: [
        "Écran Dynamic AMOLED 6.8 pouces",
        "Processeur Exynos",
        "Caméra arrière 200 MP",
        "Batterie 5000 mAh",
        "Mémoire RAM 6 GB",
        "Stockage interne 256 GB",
        "Support 5G"
    ],
};

let phone3 = {
    id: 12,
    nom: "XIAOMI Redmi A3x",
    spec: "Smartphone avec écran Dynamic AMOLED 6.8 pouces et caméra 200 MP",
    marque:"XIAOMI",
    prix: 1300,
    id_cat: 1,
    image: "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/76/840756/1.jpg?7147",
    couleur: "noir",
    stockage: "250gb",
    processeur: "Exynos",
    FicheTechnique: [
        "Écran Dynamic AMOLED 6.8 pouces",
        "Processeur Exynos",
        "Caméra arrière 200 MP",
        "Batterie 5000 mAh",
        "Mémoire RAM 6 GB",
        "Stockage interne 250 GB",
        "Support 5G"
    ],
};

let phone4 = {
    id: 13,
    nom: "OPPO Reno8 T",
    spec: "Smartphone pliable avec écran flexible AMOLED 7.2 pouces",
    marque:"OPPO",
    prix: 2500,
    id_cat: 1,
    image: "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/60/610916/1.jpg?2007",
    couleur: "argent",
    stockage: "512gb",
    processeur: "Snapdragon",
    FicheTechnique: [
        "Écran flexible AMOLED 7.2 pouces",
        "Processeur Snapdragon",
        "Caméra arrière 108 MP",
        "Batterie 4500 mAh",
        "Mémoire RAM 8 GB",
        "Stockage interne 512 GB",
        "Support 5G"
    ],
};

let phone5 = {
    id: 14,
    nom: "Samsung Galaxy S23+",
    spec: "Smartphone compact avec écran OLED 5.4 pouces",
    marque:"Samsung",
    prix: 900,
    id_cat: 1,
    image: "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/57/222746/1.jpg?1044",
    couleur: "rose",
    stockage: "128gb",
    processeur: "A15 Bionic",
    FicheTechnique: [
        "Écran OLED 5.4 pouces",
        "Processeur A15 Bionic",
        "Caméra arrière 50 MP",
        "Batterie 3800 mAh",
        "Mémoire RAM 4 GB",
        "Stockage interne 128 GB",
        "Support 5G"
    ],
};

let phone6 = {
    id: 15,
    nom: "Xiaomi Redmi Note 13 Pro",
    spec: "Smartphone haut de gamme avec écran AMOLED 6.1 pouces",
    marque:"Xiaomi",
    prix: 849,
    id_cat: 1,
    image: "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/87/324646/1.jpg?2450",
    couleur: "noir",
    stockage: "128GB",
    processeur: "Snapdragon 8 Gen 2",
    FicheTechnique: [
        "Écran AMOLED 6.1 pouces",
        "Processeur Snapdragon 8 Gen 2",
        "Caméra arrière 200 MP",
        "Batterie 5000 mAh",
        "Mémoire RAM 8 GB",
        "Stockage interne 128 GB",
        "Support 5G"
    ],
};

let phone7 = {
    id: 16,
    nom: "Apple iPhone 15 Pro Max",
    spec: "256GB Titane Bleu 6,7\" Bouton Action A17 Pro 8GB RAM iOS 17",
    marque:"Apple",
    prix: 699,
    id_cat: 1,
    image: "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/73/813046/1.jpg?1384",
    couleur: "blanc",
    stockage: "128GB",
    processeur: "Google Tensor G3",
    FicheTechnique: [
        "Écran OLED 6.2 pouces",
        "Processeur Google Tensor G3",
        "Caméra arrière 50 MP",
        "Batterie 4000 mAh",
        "Mémoire RAM 4 GB",
        "Stockage interne 128 GB",
        "Support 4G"
    ],
};

let phone8 = {
    id: 17,
    nom: "Samsung Galaxy M53",
    spec: "Smartphone performant avec écran AMOLED 6.7 pouces",
    marque:"Samsung",
    prix: 799,
    id_cat: 1,
    image: "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/56/695445/1.jpg?6124",
    couleur: "vert",
    stockage: "256GB",
    processeur: "Snapdragon 8 Gen 2",
    FicheTechnique: [
        "Écran AMOLED 6.7 pouces",
        "Processeur Snapdragon 8 Gen 2",
        "Caméra arrière 108 MP",
        "Batterie 5000 mAh",
        "Mémoire RAM 6 GB",
        "Stockage interne 256 GB",
        "Support 5G"
    ],
};

let phone9 = {
    id: 18,
    nom: "INFINIX NOTE 30",
    spec: "Smartphone avec écran AMOLED 6.73 pouces et caméra Leica",
    marque:"INFINIX",
    prix: 999,
    id_cat: 1,
    image: "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/90/340246/1.jpg?4391",
    couleur: "bleu",
    stockage: "256GB",
    processeur: "Snapdragon 8 Gen 2",
    FicheTechnique: [
        "Écran AMOLED 6.73 pouces",
        "Processeur Snapdragon 8 Gen 2",
        "Caméra Leica 108 MP",
        "Batterie 4500 mAh",
        "Mémoire RAM 8 GB",
        "Stockage interne 256 GB",
        "Support 5G"
    ],
};

let phone10 = {
    id: 19,
    nom: "Samsung Galaxy Z Flip 6",
    spec: "Smartphone premium avec écran AMOLED 6.7 pouces et 5G ",
    marque:"Samsung",
    prix: 1100,
    id_cat: 1,
    image: "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/77/065556/1.jpg?5343",
    couleur: "gris",
    stockage: "256GB",
    processeur: "Snapdragon 8 Gen 1",
    FicheTechnique: [
        "Écran AMOLED 6.7 pouces",
        "Processeur Snapdragon 8 Gen 1",
        "Caméra arrière 50 MP",
        "Batterie 4000 mAh",
        "Mémoire RAM 6 GB",
        "Stockage interne 256 GB",
        "Support 5G"
    ],
};

let phone11 = {
    id: 20,
    nom: "APPLE iPhone 14 ",
    spec: "Smartphone haut de gamme avec écran AMOLED 6.7 pouces et 5G",
    marque:"Apple",
    prix: 749,
    id_cat: 1,
    image: "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/52/579585/1.jpg?4771",
    couleur: "vert",
    stockage: "128GB",
    processeur: "Snapdragon 8 Gen 1",
    FicheTechnique: [
        "Écran AMOLED 6.7 pouces",
        "Processeur Snapdragon 8 Gen 1",
        "Caméra arrière 48 MP",
        "Batterie 3300 mAh",
        "Mémoire RAM 6 GB",
        "Stockage interne 128 GB",
        "Support 5G"
    ],
};

let phone12 = {
    id: 21,
    nom: "Samsung Galaxy Z Fold 6",
    spec: "Smartphone haut de gamme avec écran AMOLED 6.7 pouces et 5G",
    marque:"Samsung",
    prix: 749,
    id_cat: 1,
    image: "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/14/294656/1.jpg?8163",
    couleur: "vert",
    stockage: "128GB",
    processeur: "Snapdragon 8 Gen 3",
    FicheTechnique: [
        "Écran AMOLED 6.7 pouces",
        "Processeur Snapdragon 8 Gen 3",
        "Caméra arrière 50 MP",
        "Batterie 4500 mAh",
        "Mémoire RAM 6 GB",
        "Stockage interne 128 GB",
        "Support 5G"
    ],
};


//laptop
let PC1 = {
    id: 22,
    nom: "PC PORTABLE W11 LENOVO",
    spec: "Ordinateur portable Dell avec écran 15.6 pouces 4K OLED, processeur Intel i7-12700H, carte graphique Nvidia RTX 3050, 16GB RAM",
    marque:"LONOVO",
    prix: 1500,
    id_cat: 2,
    image: "https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_7_5_3_1_700x700_AAAMG18753.jpg",
    couleur: "noir",
    stockage: "250gb",
    processeur: { id: 1, marque: "AMD", nom: "Ryzen 5 7600", prix: 0 },
    carteGraphique: { id: 1, marque: "Nvidia", nom: "RTX 4090", prix: 0 },
    FicheTechnique: [
        "Écran 15.6 pouces 4K OLED",
        "Processeur Intel i7-12700H",
        "Carte graphique Nvidia RTX 3050",
        "Mémoire RAM 16 GB",
        "Stockage interne 250 GB SSD",
        "Système d'exploitation Windows 11"
    ],
};

let PC2 = {
    id: 23,
    nom: "ASUS ExpertBook B1",
    spec: "PC de jeu HP Omen 16 avec écran 16.1 pouces Full HD, processeur AMD Ryzen 7 5800H, carte graphique Nvidia RTX 3060, 32GB RAM",
    marque:"ASUS",
    prix: 2200,
    id_cat: 2,
    image: "https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_1_6_4_1_700x700_AAAMD62164.jpg",
    couleur: "noir",
    stockage: "250gb",
    processeur: { id: 1, marque: "AMD", nom: "Ryzen 5 7600", prix: 0 },
    carteGraphique: { id: 1, marque: "Nvidia", nom: "RTX 4090", prix: 0 },
    FicheTechnique: [
        "Écran 16.1 pouces Full HD",
        "Processeur AMD Ryzen 7 5800H",
        "Carte graphique Nvidia RTX 3060",
        "Mémoire RAM 32 GB",
        "Stockage interne 250 GB SSD",
        "Système d'exploitation Windows 11"
    ],
};

let PC3 = {
    id: 24,
    nom: "HP Victus PC Portable Gaming",
    spec: "Ordinateur portable Apple avec écran Retina 16 pouces, processeur Apple M1 Pro, carte graphique intégrée Apple, 32GB RAM",
    marque:"HP",
    prix: 2800,
    id_cat: 2,
    image: "https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_6_2_8_1_700x700_hp0197192608326240628.jpg",
    couleur: "noir",
    stockage: "250gb",
    processeur: { id: 1, marque: "AMD", nom: "Ryzen 5 7600", prix: 0 },
    carteGraphique: { id: 1, marque: "Nvidia", nom: "RTX 4090", prix: 0 },
    FicheTechnique: [
        "Écran Retina 16 pouces",
        "Processeur Apple M1 Pro",
        "Carte graphique intégrée Apple",
        "Mémoire RAM 32 GB",
        "Stockage interne 250 GB SSD",
        "Système d'exploitation macOS"
    ],
};

let PC4 = {
    id: 25,
    nom: "HUAWEI MateBook 14 2023", 
    spec: "Ordinateur portable HUAWEI avec écran 14 pouces OLED, processeur Ryzen 9 5900HX, 16GB RAM", 
    marque:"HUAWEI",
    prix: 2000, 
    id_cat: 2,
    image: "https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_5_5_0_1_700x700_hua6941487232550_rw_ordinateur-portable-huawei-matebook-b3-420-14-i.jpg",
    couleur: "noir",
    stockage: "1TB",
    processeur: { id: 2, marque: "AMD", nom: "Ryzen 9 5900HX", prix: 100 },
    carteGraphique: { id: 2, marque: "Nvidia", nom: "RTX 3060", prix: 0 },
    FicheTechnique: [
        "Écran OLED 14 pouces",
        "Processeur Ryzen 9 5900HX",
        "Carte graphique Nvidia RTX 3060",
        "Mémoire RAM 16 GB",
        "Stockage interne 1 TB SSD",
        "Système d'exploitation Windows 11"
    ],
};

let PC5 = {
    id: 26,
    nom: "PC Portable INFINIX Inbook X1 Pro", 
    spec: "Ordinateur portable INFINIX avec écran 13.5 pouces Full HD, Intel i5-1135G7, 8GB RAM, SSD 512GB", 
    marque:"INFINIX",
    prix: 1300,
    id_cat: 2,
    image: "https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_6_5_7_1_700x700_inf4895180766657_rw_inbook-x1-pro-14-core-i7-1065g7-16g-512g-grey.jpg",
    couleur: "argenté", 
    stockage: "512gb", 
    processeur: { id: 3, marque: "Intel", nom: "Core i5-1135G7", prix: 50 }, 
    carteGraphique: { id: 3, marque: "Intel", nom: "Iris Xe", prix: 0 },
    FicheTechnique: [
        "Écran Full HD 13.5 pouces",
        "Processeur Intel i5-1135G7",
        "Carte graphique Intel Iris Xe",
        "Mémoire RAM 8 GB",
        "Stockage interne 512 GB SSD",
        "Système d'exploitation Windows 11"
    ],
};

let PC6 = {
    id: 27,
    nom: "ACER PC PORTABLE ASPIRE 3 Pro", 
    spec: "Ordinateur portable ACER avec écran 15.6 pouces, Intel i7-1165G7, 16GB RAM, SSD 512GB", 
    marque:"ACER",
    prix: 1400, 
    id_cat: 2,
    image: "https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_9_1_1_1_700x700_AAAAH51911.jpg",
    couleur: "gris", 
    stockage: "512gb", 
    processeur: { id: 4, marque: "Intel", nom: "Core i7-1165G7", prix: 150 },
    carteGraphique: { id: 4, marque: "Intel", nom: "Iris Xe", prix: 0 },
    FicheTechnique: [
        "Écran 15.6 pouces Full HD",
        "Processeur Intel i7-1165G7",
        "Carte graphique Intel Iris Xe",
        "Mémoire RAM 16 GB",
        "Stockage interne 512 GB SSD",
        "Système d'exploitation Windows 11"
    ],
};

let PC7 = {
    id: 28,
    nom: "HP ProBook 440 G8 2023", 
    spec: "HP ProBook 440 G8 avec écran 14 pouces, Intel i7-1185G7, 16GB RAM, 512GB SSD", 
    marque:"HP",
    prix: 1500, 
    id_cat: 2,
    image: "https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_7_1_8_1_700x700_AAALQ82718.jpg",
    couleur: "argent", 
    stockage: "512gb", 
    processeur: { id: 5, marque: "Intel", nom: "Core i7-1185G7", prix: 200 },
    carteGraphique: { id: 5, marque: "Intel", nom: "Iris Xe", prix: 0 },
    FicheTechnique: [
        "Écran 14 pouces Full HD",
        "Processeur Intel i7-1185G7",
        "Carte graphique Intel Iris Xe",
        "Mémoire RAM 16 GB",
        "Stockage interne 512 GB SSD",
        "Système d'exploitation Windows 11"
    ],
};

let PC8 = {
    id: 29,
    nom: "PC portable Acer Aspire 2023", 
    spec: "Ordinateur portable Acer avec écran 15.6 pouces, Intel i7-1165G7, 16GB RAM, 512GB SSD",
    marque:"Acer",
    prix: 1450, 
    id_cat: 2,
    image: "https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_9_1_0_1_700x700_AAAAH51910.jpg",
    couleur: "argent", 
    stockage: "512gb",
    processeur: { id: 4, marque: "Intel", nom: "Core i7-1165G7", prix: 150 },
    carteGraphique: { id: 4, marque: "Intel", nom: "Iris Xe", prix: 0 },
    FicheTechnique: [
        "Écran 15.6 pouces Full HD",
        "Processeur Intel i7-1165G7",
        "Carte graphique Intel Iris Xe",
        "Mémoire RAM 16 GB",
        "Stockage interne 512 GB SSD",
        "Système d'exploitation Windows 11"
    ],
};

let PC9 = {
    id: 30,
    nom: "DELL LATITUDE 5540 2023", 
    spec: "Ordinateur portable Dell avec écran 14 pouces, Intel i7-1185G7, 16GB RAM, 512GB SSD", 
    marque:"DELL",
    prix: 1600, 
    id_cat: 2,
    image: "https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_0_0_9_1_700x700_AAAAE72009_1.jpg",
    couleur: "noir", 
    stockage: "512gb",
    processeur: { id: 5, marque: "Intel", nom: "Core i7-1185G7", prix: 200 },
    carteGraphique: { id: 5, marque: "Intel", nom: "Iris Xe", prix: 0 },
    FicheTechnique: [
        "Écran 14 pouces Full HD",
        "Processeur Intel i7-1185G7",
        "Carte graphique Intel Iris Xe",
        "Mémoire RAM 16 GB",
        "Stockage interne 512 GB SSD",
        "Système d'exploitation Windows 11"
    ],
};

let PC10 = {
    id: 31,
    nom: "Acer Swift 3 2023", 
    spec: "Ordinateur portable Acer avec écran 13.5 pouces, Intel i7-1165G7, 16GB RAM, 512GB SSD", 
    marque:"Acer",
    prix: 1550, 
    id_cat: 2,
    image: "https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_0_0_m_1_700x700_nxa0mef00m_rw_pc-portable-acer-swift-3-sf314-59-54xf-14-fhd_3.jpg",
    couleur: "noir", 
    stockage: "512gb",
    processeur: { id: 5, marque: "Intel", nom: "Core i7-1165G7", prix: 200 },
    carteGraphique: { id: 5, marque: "Intel", nom: "Iris Xe", prix: 0 },
    FicheTechnique: [
        "Écran 13.5 pouces Full HD",
        "Processeur Intel i7-1165G7",
        "Carte graphique Intel Iris Xe",
        "Mémoire RAM 16 GB",
        "Stockage interne 512 GB SSD",
        "Système d'exploitation Windows 11"
    ],
};

let PC11 = {
    id: 32,
    nom: "Apple - 15,3\" MacBook Air M2", 
    spec: "Ordinateur portable Huawei avec écran 13.9 pouces, Intel i7-1185G7, 16GB RAM, SSD 512GB", 
    marque:"Apple",
    prix: 1700, 
    id_cat: 2,
    image: "https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_f_n_a_1_700x700_mqkx3fna_rw_apple-15-3-macbook-air-m2-2023-ram-8go-st.jpg",
    couleur: "argenté", 
    stockage: "512gb",    
    processeur: { id: 5, marque: "Intel", nom: "Core i7-1185G7", prix: 200 },
    carteGraphique: { id: 5, marque: "Intel", nom: "Iris Xe", prix: 0 },
    FicheTechnique: [
        "Écran 13.9 pouces Full HD",
        "Processeur Intel i7-1185G7",
        "Carte graphique Intel Iris Xe",
        "Mémoire RAM 16 GB",
        "Stockage interne 512 GB SSD",
        "Système d'exploitation Windows 11"
    ],
};

let PC12 = {
    id: 33,
    nom: "Apple MacBook Air M2 2023", 
    spec: "MacBook Air avec puce M2, écran 15.3 pouces, 16GB RAM, 512GB SSD", 
    marque:"Apple",
    prix: 1800, 
    id_cat: 2,
    image: "https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_f_n_a_1_700x700_mqku3fna_rw_apple-15-3-macbook-air-m2-2023-ram-8go-st.jpg",
    couleur: "argenté", 
    stockage: "512gb", 
    processeur: { id: 6, marque: "Apple", nom: "Puce Apple M2", prix: 0 }, 
    carteGraphique: { id: 6, marque: "Apple", nom: "Puce Apple M2", prix: 0 },
    FicheTechnique: [
        "Écran 15.3 pouces Retina",
        "Puce Apple M2",
        "Carte graphique intégrée Apple",
        "Mémoire RAM 16 GB",
        "Stockage interne 512 GB SSD",
        "Système d'exploitation macOS"
    ],
};

// Casques
let casq1 = {
    id: 34,
    nom: "Sony WH-1000XM4",
    spec: "Circum-aural, réduction de bruit active, Bluetooth 5.0, autonomie 20 heures",
    marque: "Sony",
    prix: 120,
    id_cat: 6,
    taille: "s",
    couleur: "noir",
    image: "https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_9_7_0_1_700x700_AAACD10970.jpg",
    FicheTechnique: [
        "Type : Circum-aural",
        "Réduction de bruit active",
        "Bluetooth 5.0",
        "Autonomie : 20 heures",
        "Couleur : Noir"
    ],
};

let casq2 = {
    id: 35,
    nom: "Bose QuietComfort 35 II",
    spec: "Supra-aural, Bluetooth, autonomie 15 heures",
    marque: "Bose",
    prix: 90,
    id_cat: 6,
    taille: "l",
    couleur: "noir",
    image: "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/25/245756/1.jpg?4665",
    FicheTechnique: [
        "Type : Supra-aural",
        "Bluetooth",
        "Autonomie : 15 heures",
        "Couleur : Noir"
    ],
};

let casq3 = {
    id: 36,
    nom: "Sennheiser CX 400BT",
    spec: "Intra-auriculaire, réduction de bruit passive, filaire",
    marque: "Sennheiser",
    prix: 50,
    id_cat: 6,
    taille: "m",
    couleur: "noir",
    image: "https://m.media-amazon.com/images/I/61W1MK0l2HL._AC_SX425_.jpg",
    FicheTechnique: [
        "Type : Intra-auriculaire",
        "Réduction de bruit passive",
        "Connexion : Filaire",
        "Couleur : Noir"
    ],
};

let casq4 = {
    id: 37,
    nom: "JBL Club One",
    spec: "Over-ear, réduction de bruit, autonomie 30 heures",
    marque: "JBL",
    prix: 140,
    id_cat: 6,
    taille: "m",
    couleur: "blanc",
    image: "https://m.media-amazon.com/images/I/51JNhjr4McL.__AC_SX300_SY300_QL70_ML2_.jpg",
    FicheTechnique: [
        "Type : Over-ear",
        "Réduction de bruit",
        "Autonomie : 30 heures",
        "Couleur : Blanc"
    ],
};

let casq5 = {
    id: 38,
    nom: "Beats Fit Pro",
    spec: "Intra-auriculaire, sans fil, Bluetooth 5.2, autonomie 10 heures",
    marque: "JBL",
    prix: 200,
    id_cat: 6,
    taille: "s",
    couleur: "argent",
    image: "https://m.media-amazon.com/images/I/61yp+9ZkcaL._AC_SX425_.jpg",
    FicheTechnique: [
        "Type : Intra-auriculaire",
        "Connexion : Sans fil (Bluetooth 5.2)",
        "Autonomie : 10 heures",
        "Couleur : Argent"
    ],
};

let casq6 = {
    id: 39,
    nom: "Bose 700",
    spec: "Over-ear, sans fil, Bluetooth 5.3, autonomie 30 heures, réduction active du bruit",
    marque: "Bose",
    prix: 250,
    id_cat: 6,
    taille: "M",
    couleur: "Noir",
    image: "https://m.media-amazon.com/images/I/61rgsnfRJlL._AC_SX425_.jpg",
    FicheTechnique: [
        "Type : Over-ear",
        "Connexion : Sans fil (Bluetooth 5.3)",
        "Autonomie : 30 heures",
        "Réduction active du bruit",
        "Couleur : Noir"
    ],
};

let casq7 = {
    id: 40,
    nom: "Beats Studio Buds",
    spec: "Intra-auriculaire, sans fil, Bluetooth 5.2, autonomie 10 heures, son haute fidélité",
    marque: "JBL",
    prix: 200,
    id_cat: 6,
    taille: "S",
    couleur: "Argent",
    image: "https://m.media-amazon.com/images/I/61p1-gm4RwL.__AC_SX300_SY300_QL70_ML2_.jpg",
    FicheTechnique: [
        "Type : Intra-auriculaire",
        "Connexion : Sans fil (Bluetooth 5.2)",
        "Autonomie : 10 heures",
        "Son haute fidélité",
        "Couleur : Argent"
    ],
};

let casq8 = {
    id: 41,
    nom: "Sony WH-XB900N",
    spec: "Casque supra-auriculaire, sans fil, Bluetooth 5.0, autonomie 15 heures, commande tactile",
    marque: "Sony",
    prix: 180,
    id_cat: 6,
    taille: "L",
    couleur: "Bleu électrique",
    image: "https://m.media-amazon.com/images/I/61NTYVZTtfL._AC_SX425_.jpg",
    FicheTechnique: [
        "Type : Supra-auriculaire",
        "Connexion : Sans fil (Bluetooth 5.0)",
        "Autonomie : 15 heures",
        "Commande tactile",
        "Couleur : Bleu électrique"
    ],
};

let casq9 = {
    id: 42,
    nom: "Jabra Elite 75t",
    spec: "Intra-auriculaire, sans fil, Bluetooth 5.3, autonomie 12 heures, résistance à l'eau IPX7",
    marque: "Jabra",
    prix: 220,
    id_cat: 6,
    taille: "M",
    couleur: "Noir mat",
    image: "https://m.media-amazon.com/images/I/51oTjUjU87L._AC_SX425_.jpg",
    FicheTechnique: [
        "Type : Intra-auriculaire",
        "Connexion : Sans fil (Bluetooth 5.3)",
        "Autonomie : 12 heures",
        "Résistance à l'eau IPX7",
        "Couleur : Noir mat"
    ],
};

let casq10 = {
    id: 43,
    nom: "Sennheiser Momentum 3",
    spec: "Over-ear, sans fil, Bluetooth 5.0, autonomie 20 heures, réduction passive du bruit",
    marque: "Sennheiser",
    prix: 230,
    id_cat: 6,
    taille: "L",
    couleur: "Gris argenté",
    image: "https://m.media-amazon.com/images/I/61Iw5plJy4L.__AC_SX300_SY300_QL70_ML2_.jpg",
    FicheTechnique: [
        "Type : Over-ear",
        "Connexion : Sans fil (Bluetooth 5.0)",
        "Autonomie : 20 heures",
        "Réduction passive du bruit",
        "Couleur : Gris argenté"
    ],
};

let casq11 = {
    id: 44,
    nom: "Sony WF-1000XM4",
    spec: "Intra-auriculaire, sans fil, Bluetooth 5.1, autonomie 8 heures, son stéréo dynamique",
    marque: "Sony",
    prix: 150,
    id_cat: 6,
    taille: "S",
    couleur: "Rouge",
    image: "https://m.media-amazon.com/images/I/71ARBeyX02L._AC_SX425_.jpg",
    FicheTechnique: [
        "Type : Intra-auriculaire",
        "Connexion : Sans fil (Bluetooth 5.1)",
        "Autonomie : 8 heures",
        "Son stéréo dynamique",
        "Couleur : Rouge"
    ],
};

let casq12 = {
    id: 4,
    nom: "Bose SoundSport Free",
    spec: "Casque supra-auriculaire, sans fil, Bluetooth 5.0, autonomie 25 heures, confortable et léger",
    marque: "Bose",
    prix: 200,
    id_cat: 6,
    taille: "M",
    couleur: "Vert",
    image: "https://m.media-amazon.com/images/I/61T9qkb+KQL._AC_SX425_.jpg",
    FicheTechnique: [
        "Type : Supra-auriculaire",
        "Connexion : Sans fil (Bluetooth 5.0)",
        "Autonomie : 25 heures",
        "Confortable et léger",
        "Couleur : Vert"
    ],
};


// Souris
let souris1 = {
    id: 46,
    nom: "Logitech MX Master 3",  // Marque réelle
    spec: "Sans fil, Bluetooth, capteur optique, 2 boutons programmables",
    couleur: "noir",
    dpi: 10,
    image: "https://m.media-amazon.com/images/I/61ni3t1ryQL.__AC_SX300_SY300_QL70_ML2_.jpg",
    marque:"samsung",
    prix: 30,
    id_cat: 5, // Correspond à "souris"
};

let souris2 = {
    id: 47,
    nom: "Razer DeathAdder V2",  // Marque réelle
    spec: "Filaire, USB, capteur laser, 3 boutons programmables",
    couleur: "noir",
    dpi: 10,
    image: "https://m.media-amazon.com/images/I/51nxsHroOLL.__AC_SX300_SY300_QL70_ML2_.jpg",
    marque:"samsung",
    prix: 25,
    id_cat: 5
};

let souris3 = {
    id: 48,
    nom: "Logitech G Pro X Superlight",  // Marque réelle
    spec: "Sans fil, Bluetooth, capteur optique, 5 boutons programmables",
    couleur: "noir",
    dpi: 10,
    image: "https://m.media-amazon.com/images/I/51RPDnJWb1L._AC_SX425_.jpg",
    marque:"samsung",
    prix: 40,
    id_cat: 5
};

let souris4 = {
    id: 49,
    nom: "SteelSeries Rival 600",  // Marque réelle
    spec: "Filaire, USB, capteur optique, 6 boutons programmables",
    couleur: "rouge",
    dpi: 1600,
    image: "img/souris3.png",
    marque:"samsung",
    prix: 20,
    id_cat: 5
};

let souris5 = {
    id: 50,
    nom: "Corsair Dark Core RGB/SE",  // Marque réelle
    spec: "Sans fil, Bluetooth, rechargeable, capteur laser",
    couleur: "argent",
    dpi: 2000,
    image: "https://m.media-amazon.com/images/I/61olRm7DV8L.__AC_SX300_SY300_QL70_ML2_.jpg",
    marque:"samsung",
    prix: 50,
    id_cat: 5
};

// Télévisions
let television1 = {
    id: 51,
    nom: "TV Ultra HD Samsung",
    spec: "Résolution 4K, OLED, Smart TV, HDMI 2.1",
    marque:"samsung",
    prix: 800,
    id_cat: 3,
    couleur: "noir",
    tauxDeRafraichissement: "120Hz",
    image: "https://m.media-amazon.com/images/I/61jjw5B7QTL.__AC_SX300_SY300_QL70_ML2_.jpg",
    FicheTechnique: [
        "Résolution : 4K",
        "Technologie : OLED",
        "Smart TV : Oui",
        "HDMI : 2.1",
        "Taux de rafraîchissement : 120Hz",
        "Couleur : Noir"
    ]
};

let television2 = {
    id: 52,
    nom: "LG NanoCell",
    spec: "Résolution 8K, NanoCell, AI ThinQ, HDMI 2.1",
    marque:"LG",
    prix: 1200,
    id_cat: 3,
    couleur: "gris",
    tauxDeRafraichissement: "60Hz",
    image: "https://m.media-amazon.com/images/I/61b+hDdTmOL._AC_SX425_.jpg",
    FicheTechnique: [
        "Résolution : 8K",
        "Technologie : NanoCell",
        "Smart TV : AI ThinQ",
        "HDMI : 2.1",
        "Taux de rafraîchissement : 60Hz",
        "Couleur : Gris"
    ]
};

let television3 = {
    id: 53,
    nom: "Sony Bravia 65\"",
    spec: "Résolution 4K, OLED, Google TV intégré",
    marque:"Sony",
    prix: 1500,
    id_cat: 3,
    couleur: "noir",
    tauxDeRafraichissement: "120Hz",
    image: "https://m.media-amazon.com/images/I/71u1IXdPEzL._AC_SX679_.jpg",
    FicheTechnique: [
        "Résolution : 4K",
        "Technologie : OLED",
        "Smart TV : Google TV",
        "Taux de rafraîchissement : 120Hz",
        "Couleur : Noir"
    ]
};

let television4 = {
    id: 54,
    nom: "TCL 50\" QLED",
    spec: "Résolution 4K, QLED, Dolby Vision, HDMI 2.1",
    marque:"TCL",
    prix: 600,
    id_cat: 3,
    couleur: "noir",
    tauxDeRafraichissement: "60Hz",
    image: "https://m.media-amazon.com/images/I/91VJ+sPbMZL._AC_SX300_SY300_.jpg",
    FicheTechnique: [
        "Résolution : 4K",
        "Technologie : QLED",
        "Dolby Vision : Oui",
        "HDMI : 2.1",
        "Taux de rafraîchissement : 60Hz",
        "Couleur : Noir"
    ]
};

// Moniteurs
let moniteur1 = {
    id: 60,
    nom: "Moniteur Gamer Asus",
    spec: "Résolution Full HD, LED, HDMI, DisplayPort",
    marque:"Asus",
    prix: 250,
    id_cat: 3,
    couleur: "noir",
    tauxDeRafraichissement: "144Hz",
    image: "https://m.media-amazon.com/images/I/71LkTlKhnQL.__AC_SY300_SX300_QL70_ML2_.jpg",
    FicheTechnique: [
        "Résolution : Full HD",
        "Technologie : LED",
        "Connexions : HDMI, DisplayPort",
        "Taux de rafraîchissement : 144Hz",
        "Couleur : Noir"
    ]
};

let moniteur2 = {
    id: 61,
    nom: "Dell Ultrasharp",
    spec: "Résolution 4K, IPS, USB-C, ajustable",
    marque:"Dell",
    prix: 350,
    id_cat: 3,
    couleur: "argent",
    tauxDeRafraichissement: "60Hz",
    image: "https://m.media-amazon.com/images/I/61opqYPSQgS.__AC_SX300_SY300_QL70_ML2_.jpg",
    FicheTechnique: [
        "Résolution : 4K",
        "Technologie : IPS",
        "Connexions : USB-C",
        "Ajustable : Oui",
        "Taux de rafraîchissement : 60Hz",
        "Couleur : Argent"
    ]
};

let moniteur3 = {
    id: 62,
    nom: "Samsung Odyssey G9",
    spec: "Résolution Dual QHD, courbé, HDMI, DisplayPort",
    marque:"Samsung",
    prix: 1200,
    id_cat: 3,
    couleur: "noir",
    tauxDeRafraichissement: "240Hz",
    image: "https://m.media-amazon.com/images/I/81UXBOWJ-uL.__AC_SY300_SX300_QL70_ML2_.jpg",
    FicheTechnique: [
        "Résolution : Dual QHD",
        "Courbé : Oui",
        "Connexions : HDMI, DisplayPort",
        "Taux de rafraîchissement : 240Hz",
        "Couleur : Noir"
    ]
};

let moniteur4 = {
    id: 63,
    nom: "Acer Predator XB273",
    spec: "Résolution Full HD, HDR, G-Sync, DisplayPort",
    marque:"Acer",
    prix: 450,
    id_cat: 3,
    couleur: "noir",
    tauxDeRafraichissement: "144Hz",
    image: "https://m.media-amazon.com/images/I/71gK5omFfyL._AC_SX425_.jpg",
    FicheTechnique: [
        "Résolution : Full HD",
        "HDR : Oui",
        "G-Sync : Oui",
        "Connexions : DisplayPort",
        "Taux de rafraîchissement : 144Hz",
        "Couleur : Noir"
    ]
};

// Réfrigérateurs
let refrigerateur1 = {
    id: 70,
    nom: "Réfrigérateur Samsung Double Porte",
    spec: "Technologie No Frost, distributeur d'eau, congélateur supérieur",
    marque:"samsung",
    prix: 600,
    id_cat: 4,
    couleur: "argent",
    litrage: "350L",
    image: "https://m.media-amazon.com/images/I/61+cQCm3DRL._AC_SX522_.jpg",
    FicheTechnique: [
        "Technologie : No Frost",
        "Distributeur d'eau : Oui",
        "Type de congélateur : Supérieur",
        "Litrage : 350L",
        "Couleur : Argent"
    ]
};

let refrigerateur2 = {
    id: 71,
    nom: "Réfrigérateur LG Multi-Door",
    spec: "Inverter Linear Compressor, réfrigérateur intelligent",
    marque:"samsung",
    prix: 1000,
    id_cat: 4,
    couleur: "inox",
    litrage: "500L",
    image: "https://m.media-amazon.com/images/I/51SleTF8hqL._AC_SY500_.jpg",
    FicheTechnique: [
        "Technologie : Inverter Linear Compressor",
        "Réfrigérateur intelligent : Oui",
        "Litrage : 500L",
        "Couleur : Inox"
    ]
};

let refrigerateur3 = {
    id: 72,
    nom: "Réfrigérateur Haier 3D",
    spec: "Triple porte, inverter, réfrigération rapide",
    marque:"samsung",
    prix: 700,
    id_cat: 4,
    couleur: "blanc",
    litrage: "400L",
    image: "https://m.media-amazon.com/images/I/61v8pWWLJQL.__AC_SX342_SY445_QL70_ML2_.jpg",
    FicheTechnique: [
        "Type de porte : Triple",
        "Technologie : Inverter",
        "Fonctionnalité : Réfrigération rapide",
        "Litrage : 400L",
        "Couleur : Blanc"
    ]
};

let refrigerateur4 = {
    id: 73,
    nom: "Réfrigérateur Sharp Double Porte",
    spec: "Technologie PlasmaCluster, No Frost, distributeur d'eau",
    marque:"samsung",
    prix: 950,
    id_cat: 4,
    couleur: "inox",
    litrage: "450L",
    image: "https://m.media-amazon.com/images/I/61HuqCmn0TL.__AC_SX342_SY445_QL70_ML2_.jpg",
    FicheTechnique: [
        "Technologie : PlasmaCluster",
        "Technologie : No Frost",
        "Distributeur d'eau : Oui",
        "Litrage : 450L",
        "Couleur : Inox"
    ]
};

// Machines à Laver
let machineLaver1 = {
    id: 80,
    nom: "Machine à Laver Bosch Série 6",
    spec: "EcoSilence Drive, programme rapide 30 min, chargement frontal",
    marque:"samsung",
    prix: 400,
    id_cat: 4,
    couleur: "blanc",
    litrage: "8kg",
    image: "https://m.media-amazon.com/images/I/81UQFHSefuL._AC_SX425_.jpg",
    FicheTechnique: [
        "Technologie : EcoSilence Drive",
        "Programme rapide : 30 minutes",
        "Type de chargement : Frontal",
        "Litrage : 8kg",
        "Couleur : Blanc"
    ]
};

let machineLaver2 = {
    id: 81,
    nom: "Machine à Laver Whirlpool FreshCare+",
    spec: "SteamCare, programme rapide, chargement par le haut",
    marque:"samsung",
    prix: 350,
    id_cat: 4,
    couleur: "gris",
    litrage: "7kg",
    image: "https://m.media-amazon.com/images/I/518ylki8IfL.__AC_SY445_SX342_QL70_ML2_.jpg",
    FicheTechnique: [
        "Technologie : SteamCare",
        "Programme rapide : Oui",
        "Type de chargement : Par le haut",
        "Litrage : 7kg",
        "Couleur : Gris"
    ]
};

let machineLaver3 = {
    id: 82,
    nom: "Machine à Laver LG TurboWash",
    spec: "Direct Drive, chargement frontal, programme vapeur",
    marque:"samsung",
    prix: 500,
    id_cat: 4,
    couleur: "blanc",
    litrage: "9kg",
    image: "https://m.media-amazon.com/images/I/61zawnXNHjL.__AC_SY445_SX342_QL70_ML2_.jpg",
    FicheTechnique: [
        "Technologie : Direct Drive",
        "Programme vapeur : Oui",
        "Type de chargement : Frontal",
        "Litrage : 9kg",
        "Couleur : Blanc"
    ]
};

let machineLaver4 = {
    id: 83,
    nom: "Machine à Laver Electrolux PerfectCare",
    spec: "EcoCare, chargement frontal, programme rapide",
    marque:"samsung",
    prix: 450,
    id_cat: 4,
    couleur: "gris",
    litrage: "8kg",
    image: "https://m.media-amazon.com/images/I/412DDVxbDBL.__AC_SX300_SY300_QL70_ML2_.jpg",
    FicheTechnique: [
        "Technologie : EcoCare",
        "Programme rapide : Oui",
        "Type de chargement : Frontal",
        "Litrage : 8kg",
        "Couleur : Gris"
    ]
};


// Micro-ondes
let microOnde1 = {
    id: 90,
    nom: "Micro-ondes Panasonic Inverter",
    spec: "Inverter Technology, fonction grill, décongélation rapide",
    couleur: "noir",
    image: "https://m.media-amazon.com/images/I/51ghoPy3ptL.__AC_SX300_SY300_QL70_ML2_.jpg",
    litrage: "30L",
    marque: "Panasonic",
    prix: 150,
    id_cat: 4,
    FicheTechnique: [
        "Technologie : Inverter",
        "Fonction grill : Oui",
        "Décongélation rapide : Oui",
        "Capacité : 30L",
        "Couleur : Noir",
        "Puissance micro-ondes : 900W",
        "Dimensions (L x H x P) : 51 x 30 x 40 cm"
    ]
};

let microOnde2 = {
    id: 91,
    nom: "Micro-ondes Samsung Solo",
    spec: "Triple Distribution System, revêtement céramique",
    couleur: "argent",
    image: "https://m.media-amazon.com/images/I/41DaUCtyl8L._AC_SX679_.jpg",
    litrage: "23L",
    marque: "Samsung",
    prix: 120,
    id_cat: 4,
    FicheTechnique: [
        "Système de distribution : Triple Distribution System",
        "Revêtement intérieur : Céramique",
        "Capacité : 23L",
        "Puissance micro-ondes : 800W",
        "Fonction de décongélation : Oui",
        "Couleur : Argent",
        "Dimensions (L x H x P) : 48 x 27 x 39 cm"
    ]
};

let microOnde3 = {
    id: 92,
    nom: "Micro-ondes LG NeoChef",
    spec: "Smart Inverter, cuisson uniforme, fonction de décongélation",
    couleur: "noir",
    image: "https://m.media-amazon.com/images/I/71xa-kq1SnL.__AC_SY445_SX342_QL70_ML2_.jpg",
    litrage: "25L",
    marque: "LG",
    prix: 160,
    id_cat: 4,
    FicheTechnique: [
        "Technologie : Smart Inverter",
        "Cuisson uniforme : Oui",
        "Fonction de décongélation : Oui",
        "Capacité : 25L",
        "Puissance micro-ondes : 1000W",
        "Couleur : Noir",
        "Dimensions (L x H x P) : 51 x 30 x 40 cm"
    ]
};

let microOnde4 = {
    id: 93,
    nom: "Micro-ondes Bosch Serie 4",
    spec: "AutoPilot, fonction grill, 5 niveaux de puissance",
    couleur: "argent",
    image: "https://m.media-amazon.com/images/I/51+EzU7JRXL._AC_SX342_SY445_.jpg",
    litrage: "28L",
    marque: "Bosch",
    prix: 200,
    id_cat: 4,
    FicheTechnique: [
        "Fonction AutoPilot : Oui",
        "Fonction grill : Oui",
        "Niveaux de puissance : 5",
        "Capacité : 28L",
        "Puissance micro-ondes : 900W",
        "Couleur : Argent",
        "Dimensions (L x H x P) : 50 x 29 x 43 cm"
    ]
};






produits = [phone1,PC5, PC6, casq2, casq3, television1, television2,  moniteur1, moniteur2, phone2, phone3, souris4, souris5, phone4, phone5, phone6, phone7, phone8, phone9, phone10, phone11, phone12, PC1, PC2, PC3, PC4, PC7, PC8, PC9, PC10, PC11, PC12, casq1,  casq4, casq5, casq6, casq7, casq8, casq9, casq10, casq11, casq12, souris1
    , souris2, souris3,  television3, television4, moniteur3, moniteur4,
    machineLaver1, machineLaver2, machineLaver3, machineLaver4, microOnde1, microOnde2, microOnde3, microOnde4, refrigerateur1, refrigerateur2,
    refrigerateur3, refrigerateur4
];







/* stock en local storage */

localStorage.setItem("arr_produits", JSON.stringify(produits)); 