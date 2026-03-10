import { BusinessInfo, Product } from './types';

export interface Smoothie {
  id: string;
  name: string;
  titleMain: string;
  titleAccent: string;
  titleEnd: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
}

/**
 * ASSET REGISTRY
 * Using './assets/images/' ensures the browser looks in the local folder
 * relative to the index.html file.
 */
export const ASSETS = {
  // Brand & UI
  LOGO: "./assets/images/logo.png",
  FAVICON: "./assets/images/favicon.png",

  // Hero Floating Elements
  DRAGON_FRUIT: "./assets/images/products/dragonfruit.png",
  MANGO: "./assets/images/products/mango.png",
  LIME: "./assets/images/products/lime.png",
  BERRY: "./assets/images/products/raspberry.jpg", // Corrected from cherry.png to raspberry.jpg
  LITCHI: "./assets/images/products/lychee.png", // Corrected litchi.png to lychee.png
  PASSION: "./assets/images/products/passionfruit.png",

  // Catalog / Showcase Images
  CATALOG_DRAGON: "./assets/images/products/catalog-dragon.jpg",
  CATALOG_MANGO: "./assets/images/products/catalog-mango..jpg", // Matching the double dot in your file list
  CATALOG_BOX: "./assets/images/products/catalog-box.jpg",
  CATALOG_YELLOW_PITAYA: "./assets/images/products/catalog-yellow-pitaya.jpg",

  // Fresh Bar Images
  SMOOTHIE_DRAGON: "./assets/images/products/smoothie-dragon.jpg",
  SMOOTHIE_MANGO: "./assets/images/products/smoothie-mango.jpg",
  SMOOTHIE_LIME: "./assets/images/products/smoothie-lime.jpg",
  SMOOTHIE_BERRY: "./assets/images/products/smoothie-berry.jpg",
};

export const PLACEHOLDERS = {
  PHONE: "+385 1 234 5678",
  EMAIL: "hello@frootamarket.hr",
  INSTAGRAM_URL: "https://instagram.com/frootamarket",
  TIKTOK_URL: "#",
  WOLT_URL: "https://wolt.com",
  GLOVO_URL: "https://glovoapp.com",
  WORKING_HOURS: "Pon-Sub 08:00–20:00 • Ned 09:00–14:00",
  MAP_EMBED: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.567366367389!2d15.9525673!3d45.7998673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6c2912443e1%3A0x2e04374528189569!2sOzaljska%20ul.%2083%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1709999999999!5m2!1sen!2shr"
};

export const BUSINESS_INFO: BusinessInfo = {
  address: "Ozaljska ul. 83",
  city: "10000 Zagreb",
  mapUrl: PLACEHOLDERS.MAP_EMBED,
  phone: PLACEHOLDERS.PHONE,
  email: PLACEHOLDERS.EMAIL,
  woltUrl: PLACEHOLDERS.WOLT_URL,
  glovoUrl: PLACEHOLDERS.GLOVO_URL,
  instagramUrl: PLACEHOLDERS.INSTAGRAM_URL,
  tiktokUrl: PLACEHOLDERS.TIKTOK_URL,
  workingHours: PLACEHOLDERS.WORKING_HOURS
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ananas',
    description: 'Svježe Ananas provjerene kvalitete.',
    price: '3,00 €/komad',
    image: './assets/images/products/ananas.jpg',
    category: 'exotic'
  },
  {
    id: '2',
    name: 'Avokado Hass',
    description: 'Svježe Avokado Hass provjerene kvalitete.',
    price: '1,80 €/komad',
    image: 'https://picsum.photos/seed/fruit2/800/1000',
    category: 'exotic'
  },
  {
    id: '3',
    name: 'Baby ananas',
    description: 'Svježe Baby ananas provjerene kvalitete.',
    price: '2,50 €/komad',
    image: 'https://picsum.photos/seed/fruit3/800/1000',
    category: 'exotic'
  },
  {
    id: '4',
    name: 'Baby banana',
    description: 'Svježe Baby banana provjerene kvalitete.',
    price: '4,50 €/kg',
    image: 'https://picsum.photos/seed/fruit4/800/1000',
    category: 'exotic'
  },
  {
    id: '5',
    name: 'Baby kivi',
    description: 'Svježe Baby kivi provjerene kvalitete.',
    price: '2,50 €/pakiranje (125 g)',
    image: 'https://picsum.photos/seed/fruit5/800/1000',
    category: 'exotic'
  },
  {
    id: '6',
    name: 'Baby krastavac',
    description: 'Svježe Baby krastavac provjerene kvalitete.',
    price: '2,00 €/pakiranje (200 g)',
    image: 'https://picsum.photos/seed/fruit6/800/1000',
    category: 'exotic'
  },
  {
    id: '7',
    name: 'Banana',
    description: 'Svježe Banana provjerene kvalitete.',
    price: '1,50 €/kg',
    image: 'https://picsum.photos/seed/fruit7/800/1000',
    category: 'exotic'
  },
  {
    id: '8',
    name: 'Borovnica',
    description: 'Svježe Borovnica provjerene kvalitete.',
    price: '3,00 €/pakiranje (125 g)',
    image: 'https://picsum.photos/seed/fruit8/800/1000',
    category: 'exotic'
  },
  {
    id: '9',
    name: 'Breskva',
    description: 'Svježe Breskva provjerene kvalitete.',
    price: '2,50 €/kg',
    image: 'https://picsum.photos/seed/fruit9/800/1000',
    category: 'exotic'
  },
  {
    id: '10',
    name: 'Brestovača (Bukovača)',
    description: 'Svježe Brestovača (Bukovača) provjerene kvalitete.',
    price: '4,00 €/pakiranje (250 g)',
    image: 'https://picsum.photos/seed/fruit10/800/1000',
    category: 'exotic'
  },
  {
    id: '11',
    name: 'Brokula',
    description: 'Svježe Brokula provjerene kvalitete.',
    price: '2,50 €/komad',
    image: 'https://picsum.photos/seed/fruit11/800/1000',
    category: 'exotic'
  },
  {
    id: '12',
    name: 'Brusnica svježa',
    description: 'Svježe Brusnica svježa provjerene kvalitete.',
    price: '3,50 €/pakiranje (200 g)',
    image: 'https://picsum.photos/seed/fruit12/800/1000',
    category: 'exotic'
  },
  {
    id: '13',
    name: 'Celer korijen',
    description: 'Svježe Celer korijen provjerene kvalitete.',
    price: '1,50 €/kg',
    image: 'https://picsum.photos/seed/fruit13/800/1000',
    category: 'exotic'
  },
  {
    id: '14',
    name: 'Celer stabljika',
    description: 'Svježe Celer stabljika provjerene kvalitete.',
    price: '1,50 €/komad',
    image: 'https://picsum.photos/seed/fruit14/800/1000',
    category: 'exotic'
  },
  {
    id: '15',
    name: 'Cikla',
    description: 'Svježe Cikla provjerene kvalitete.',
    price: '1,00 €/kg',
    image: 'https://picsum.photos/seed/fruit15/800/1000',
    category: 'exotic'
  },
  {
    id: '16',
    name: 'Crna rotkva',
    description: 'Svježe Crna rotkva provjerene kvalitete.',
    price: '1,50 €/kg',
    image: 'https://picsum.photos/seed/fruit16/800/1000',
    category: 'exotic'
  },
  {
    id: '17',
    name: 'Crveni kupus',
    description: 'Svježe Crveni kupus provjerene kvalitete.',
    price: '1,00 €/kg',
    image: 'https://picsum.photos/seed/fruit17/800/1000',
    category: 'exotic'
  },
  {
    id: '18',
    name: 'Cvjetača',
    description: 'Svježe Cvjetača provjerene kvalitete.',
    price: '2,50 €/komad',
    image: 'https://picsum.photos/seed/fruit18/800/1000',
    category: 'exotic'
  },
  {
    id: '19',
    name: 'Češnjak',
    description: 'Svježe Češnjak provjerene kvalitete.',
    price: '5,00 €/kg',
    image: 'https://picsum.photos/seed/fruit19/800/1000',
    category: 'exotic'
  },
  {
    id: '20',
    name: 'Cherry rajčica',
    description: 'Svježe Cherry rajčica provjerene kvalitete.',
    price: '2,50 €/pakiranje (250 g)',
    image: 'https://picsum.photos/seed/fruit20/800/1000',
    category: 'exotic'
  },
  {
    id: '21',
    name: 'Čili papričica',
    description: 'Svježe Čili papričica provjerene kvalitete.',
    price: '1,50 €/pakiranje (50 g)',
    image: 'https://picsum.photos/seed/fruit21/800/1000',
    category: 'exotic'
  },
  {
    id: '22',
    name: 'Daikon (bijela rotkva)',
    description: 'Svježe Daikon (bijela rotkva) provjerene kvalitete.',
    price: '2,00 €/kg',
    image: 'https://picsum.photos/seed/fruit22/800/1000',
    category: 'exotic'
  },
  {
    id: '23',
    name: 'Datulje svježe',
    description: 'Svježe Datulje svježe provjerene kvalitete.',
    price: '4,00 €/pakiranje (500 g)',
    image: 'https://picsum.photos/seed/fruit23/800/1000',
    category: 'exotic'
  },
  {
    id: '24',
    name: 'Dinja',
    description: 'Svježe Dinja provjerene kvalitete.',
    price: '2,00 €/kg',
    image: 'https://picsum.photos/seed/fruit24/800/1000',
    category: 'exotic'
  },
  {
    id: '25',
    name: 'Đumbir',
    description: 'Svježe Đumbir provjerene kvalitete.',
    price: '4,00 €/kg',
    image: 'https://picsum.photos/seed/fruit25/800/1000',
    category: 'exotic'
  },
  {
    id: '26',
    name: 'Gljive šampinjoni',
    description: 'Svježe Gljive šampinjoni provjerene kvalitete.',
    price: '2,50 €/pakiranje (500 g)',
    image: 'https://picsum.photos/seed/fruit26/800/1000',
    category: 'exotic'
  },
  {
    id: '27',
    name: 'Gljive shiitake',
    description: 'Svježe Gljive shiitake provjerene kvalitete.',
    price: '5,00 €/pakiranje (200 g)',
    image: 'https://picsum.photos/seed/fruit27/800/1000',
    category: 'exotic'
  },
  {
    id: '28',
    name: 'Grah svježi',
    description: 'Svježe Grah svježi provjerene kvalitete.',
    price: '3,00 €/kg',
    image: 'https://picsum.photos/seed/fruit28/800/1000',
    category: 'exotic'
  },
  {
    id: '29',
    name: 'Grašak svježi',
    description: 'Svježe Grašak svježi provjerene kvalitete.',
    price: '3,00 €/kg',
    image: 'https://picsum.photos/seed/fruit29/800/1000',
    category: 'exotic'
  },
  {
    id: '30',
    name: 'Grejp',
    description: 'Svježe Grejp provjerene kvalitete.',
    price: '2,00 €/kg',
    image: 'https://picsum.photos/seed/fruit30/800/1000',
    category: 'exotic'
  },
  {
    id: '31',
    name: 'Grožđe bijelo',
    description: 'Svježe Grožđe bijelo provjerene kvalitete.',
    price: '3,00 €/kg',
    image: 'https://picsum.photos/seed/fruit31/800/1000',
    category: 'exotic'
  },
  {
    id: '32',
    name: 'Grožđe crno',
    description: 'Svježe Grožđe crno provjerene kvalitete.',
    price: '3,00 €/kg',
    image: 'https://picsum.photos/seed/fruit32/800/1000',
    category: 'exotic'
  },
  {
    id: '33',
    name: 'Guava',
    description: 'Svježe Guava provjerene kvalitete.',
    price: '3,50 €/komad',
    image: 'https://picsum.photos/seed/fruit33/800/1000',
    category: 'exotic'
  },
  {
    id: '34',
    name: 'Jabuka (razne sorte)',
    description: 'Svježe Jabuka (razne sorte) provjerene kvalitete.',
    price: '1,50 €/kg',
    image: 'https://picsum.photos/seed/fruit34/800/1000',
    category: 'exotic'
  },
  {
    id: '35',
    name: 'Jagoda',
    description: 'Svježe Jagoda provjerene kvalitete.',
    price: '3,50 €/pakiranje (500 g)',
    image: 'https://picsum.photos/seed/fruit35/800/1000',
    category: 'exotic'
  },
  {
    id: '36',
    name: 'Kaki (Persimon)',
    description: 'Svježe Kaki (Persimon) provjerene kvalitete.',
    price: '2,00 €/komad',
    image: 'https://picsum.photos/seed/fruit36/800/1000',
    category: 'exotic'
  },
  {
    id: '37',
    name: 'Karambola (Star fruit)',
    description: 'Svježe Karambola (Star fruit) provjerene kvalitete.',
    price: '2,50 €/komad',
    image: 'https://picsum.photos/seed/fruit37/800/1000',
    category: 'exotic'
  },
  {
    id: '38',
    name: 'Kelj',
    description: 'Svježe Kelj provjerene kvalitete.',
    price: '1,50 €/kg',
    image: 'https://picsum.photos/seed/fruit38/800/1000',
    category: 'exotic'
  },
  {
    id: '39',
    name: 'Kelj pupčar (Prokulica)',
    description: 'Svježe Kelj pupčar (Prokulica) provjerene kvalitete.',
    price: '2,50 €/pakiranje (500 g)',
    image: 'https://picsum.photos/seed/fruit39/800/1000',
    category: 'exotic'
  },
  {
    id: '40',
    name: 'Kesten svježi',
    description: 'Svježe Kesten svježi provjerene kvalitete.',
    price: '5,00 €/kg',
    image: 'https://picsum.photos/seed/fruit40/800/1000',
    category: 'exotic'
  },
  {
    id: '41',
    name: 'Kivi',
    description: 'Svježe Kivi provjerene kvalitete.',
    price: '2,00 €/kg',
    image: 'https://picsum.photos/seed/fruit41/800/1000',
    category: 'exotic'
  },
  {
    id: '42',
    name: 'Klementina',
    description: 'Svježe Klementina provjerene kvalitete.',
    price: '2,00 €/kg',
    image: 'https://picsum.photos/seed/fruit42/800/1000',
    category: 'exotic'
  },
  {
    id: '43',
    name: 'Kokos orah',
    description: 'Svježe Kokos orah provjerene kvalitete.',
    price: '2,50 €/komad',
    image: 'https://picsum.photos/seed/fruit43/800/1000',
    category: 'exotic'
  },
  {
    id: '44',
    name: 'Koraba',
    description: 'Svježe Koraba provjerene kvalitete.',
    price: '1,00 €/komad',
    image: 'https://picsum.photos/seed/fruit44/800/1000',
    category: 'exotic'
  },
  {
    id: '45',
    name: 'Krastavac salatni',
    description: 'Svježe Krastavac salatni provjerene kvalitete.',
    price: '1,50 €/komad',
    image: 'https://picsum.photos/seed/fruit45/800/1000',
    category: 'exotic'
  },
  {
    id: '46',
    name: 'Kruška (razne sorte)',
    description: 'Svježe Kruška (razne sorte) provjerene kvalitete.',
    price: '2,50 €/kg',
    image: 'https://picsum.photos/seed/fruit46/800/1000',
    category: 'exotic'
  },
  {
    id: '47',
    name: 'Krumpir mladi',
    description: 'Svježe Krumpir mladi provjerene kvalitete.',
    price: '1,50 €/kg',
    image: 'https://picsum.photos/seed/fruit47/800/1000',
    category: 'exotic'
  },
  {
    id: '48',
    name: 'Krumpir obični',
    description: 'Svježe Krumpir obični provjerene kvalitete.',
    price: '1,00 €/kg',
    image: 'https://picsum.photos/seed/fruit48/800/1000',
    category: 'exotic'
  },
  {
    id: '49',
    name: 'Kukuruz šećerac',
    description: 'Svježe Kukuruz šećerac provjerene kvalitete.',
    price: '1,00 €/klip',
    image: 'https://picsum.photos/seed/fruit49/800/1000',
    category: 'exotic'
  },
  {
    id: '50',
    name: 'Kumkvat',
    description: 'Svježe Kumkvat provjerene kvalitete.',
    price: '3,50 €/pakiranje (250 g)',
    image: 'https://picsum.photos/seed/fruit50/800/1000',
    category: 'exotic'
  },
  {
    id: '51',
    name: 'Kupina',
    description: 'Svježe Kupina provjerene kvalitete.',
    price: '3,00 €/pakiranje (125 g)',
    image: 'https://picsum.photos/seed/fruit51/800/1000',
    category: 'exotic'
  },
  {
    id: '52',
    name: 'Kupus bijeli',
    description: 'Svježe Kupus bijeli provjerene kvalitete.',
    price: '1,00 €/kg',
    image: 'https://picsum.photos/seed/fruit52/800/1000',
    category: 'exotic'
  },
  {
    id: '53',
    name: 'Limeta',
    description: 'Svježe Limeta provjerene kvalitete.',
    price: '0,50 €/komad',
    image: './assets/images/products/lime.png',
    category: 'exotic'
  },
  {
    id: '54',
    name: 'Limun',
    description: 'Svježe Limun provjerene kvalitete.',
    price: '2,00 €/kg',
    image: 'https://picsum.photos/seed/fruit54/800/1000',
    category: 'exotic'
  },
  {
    id: '55',
    name: 'Lubenica',
    description: 'Svježe Lubenica provjerene kvalitete.',
    price: '1,00 €/kg',
    image: 'https://picsum.photos/seed/fruit55/800/1000',
    category: 'exotic'
  },
  {
    id: '56',
    name: 'Luk crveni',
    description: 'Svježe Luk crveni provjerene kvalitete.',
    price: '1,20 €/kg',
    image: 'https://picsum.photos/seed/fruit56/800/1000',
    category: 'exotic'
  },
  {
    id: '57',
    name: 'Luk srebrenac',
    description: 'Svježe Luk srebrenac provjerene kvalitete.',
    price: '1,50 €/kg',
    image: 'https://picsum.photos/seed/fruit57/800/1000',
    category: 'exotic'
  },
  {
    id: '58',
    name: 'Luk žuti',
    description: 'Svježe Luk žuti provjerene kvalitete.',
    price: '1,00 €/kg',
    image: 'https://picsum.photos/seed/fruit58/800/1000',
    category: 'exotic'
  },
  {
    id: '59',
    name: 'Malina',
    description: 'Svježe Malina provjerene kvalitete.',
    price: '3,00 €/pakiranje (125 g)',
    image: './assets/images/products/raspberry.jpg',
    category: 'exotic'
  },
  {
    id: '60',
    name: 'Mandarija',
    description: 'Svježe Mandarija provjerene kvalitete.',
    price: '1,80 €/kg',
    image: 'https://picsum.photos/seed/fruit60/800/1000',
    category: 'exotic'
  },
  {
    id: '61',
    name: 'Mango',
    description: 'Svježe Mango provjerene kvalitete.',
    price: '2,50 €/komad',
    image: './assets/images/products/mango.png',
    category: 'exotic'
  },
  {
    id: '62',
    name: 'Mango Alfonso (sezonski)',
    description: 'Svježe Mango Alfonso (sezonski) provjerene kvalitete.',
    price: '4,00 €/komad',
    image: './assets/images/products/mango.png',
    category: 'exotic'
  },
  {
    id: '63',
    name: 'Marakuja (Passion fruit)',
    description: 'Svježe Marakuja (Passion fruit) provjerene kvalitete.',
    price: '2,00 €/komad',
    image: 'https://picsum.photos/seed/fruit63/800/1000',
    category: 'exotic'
  },
  {
    id: '64',
    name: 'Marelica',
    description: 'Svježe Marelica provjerene kvalitete.',
    price: '3,00 €/kg',
    image: 'https://picsum.photos/seed/fruit64/800/1000',
    category: 'exotic'
  },
  {
    id: '65',
    name: 'Matovilac',
    description: 'Svježe Matovilac provjerene kvalitete.',
    price: '2,00 €/pakiranje (100 g)',
    image: 'https://picsum.photos/seed/fruit65/800/1000',
    category: 'exotic'
  },
  {
    id: '66',
    name: 'Mladi luk',
    description: 'Svježe Mladi luk provjerene kvalitete.',
    price: '1,00 €/vezica',
    image: 'https://picsum.photos/seed/fruit66/800/1000',
    category: 'exotic'
  },
  {
    id: '67',
    name: 'Moruzgva (Romanesco)',
    description: 'Svježe Moruzgva (Romanesco) provjerene kvalitete.',
    price: '3,00 €/komad',
    image: 'https://picsum.photos/seed/fruit67/800/1000',
    category: 'exotic'
  },
  {
    id: '68',
    name: 'Mrkva',
    description: 'Svježe Mrkva provjerene kvalitete.',
    price: '1,20 €/kg',
    image: 'https://picsum.photos/seed/fruit68/800/1000',
    category: 'exotic'
  },
  {
    id: '69',
    name: 'Naranča',
    description: 'Svježe Naranča provjerene kvalitete.',
    price: '1,80 €/kg',
    image: 'https://picsum.photos/seed/fruit69/800/1000',
    category: 'exotic'
  },
  {
    id: '70',
    name: 'Nektarina',
    description: 'Svježe Nektarina provjerene kvalitete.',
    price: '2,50 €/kg',
    image: 'https://picsum.photos/seed/fruit70/800/1000',
    category: 'exotic'
  },
  {
    id: '71',
    name: 'Papaja',
    description: 'Svježe Papaja provjerene kvalitete.',
    price: '4,50 €/komad',
    image: 'https://picsum.photos/seed/fruit71/800/1000',
    category: 'exotic'
  },
  {
    id: '72',
    name: 'Paprika babura',
    description: 'Svježe Paprika babura provjerene kvalitete.',
    price: '2,50 €/kg',
    image: 'https://picsum.photos/seed/fruit72/800/1000',
    category: 'exotic'
  },
  {
    id: '73',
    name: 'Paprika kapia',
    description: 'Svježe Paprika kapia provjerene kvalitete.',
    price: '2,50 €/kg',
    image: 'https://picsum.photos/seed/fruit73/800/1000',
    category: 'exotic'
  },
  {
    id: '74',
    name: 'Paprika roga',
    description: 'Svježe Paprika roga provjerene kvalitete.',
    price: '2,50 €/kg',
    image: 'https://picsum.photos/seed/fruit74/800/1000',
    category: 'exotic'
  },
  {
    id: '75',
    name: 'Pastrnjak',
    description: 'Svježe Pastrnjak provjerene kvalitete.',
    price: '2,00 €/kg',
    image: 'https://picsum.photos/seed/fruit75/800/1000',
    category: 'exotic'
  },
  {
    id: '76',
    name: 'Patlidžan',
    description: 'Svježe Patlidžan provjerene kvalitete.',
    price: '2,00 €/kg',
    image: 'https://picsum.photos/seed/fruit76/800/1000',
    category: 'exotic'
  },
  {
    id: '77',
    name: 'Peršin korijen',
    description: 'Svježe Peršin korijen provjerene kvalitete.',
    price: '2,50 €/kg',
    image: 'https://picsum.photos/seed/fruit77/800/1000',
    category: 'exotic'
  },
  {
    id: '78',
    name: 'Peršin list',
    description: 'Svježe Peršin list provjerene kvalitete.',
    price: '0,50 €/vezica',
    image: 'https://picsum.photos/seed/fruit78/800/1000',
    category: 'exotic'
  },
  {
    id: '79',
    name: 'Physalis (Zlatna bobica)',
    description: 'Svježe Physalis (Zlatna bobica) provjerene kvalitete.',
    price: '2,50 €/pakiranje (100 g)',
    image: 'https://picsum.photos/seed/fruit79/800/1000',
    category: 'exotic'
  },
  {
    id: '80',
    name: 'Pitaja (Zmajsko voće)',
    description: 'Svježe Pitaja (Zmajsko voće) provjerene kvalitete.',
    price: 'crvena - 6,00 €/komad',
    image: './assets/images/products/dragonfruit.png',
    category: 'exotic'
  },
  {
    id: '81',
    name: 'Pitaja (Zmajsko voće)',
    description: 'Svježe Pitaja (Zmajsko voće) provjerene kvalitete.',
    price: 'žuta - 7,00 €/komad',
    image: './assets/images/products/catalog-yellow-pitaya.jpg',
    category: 'exotic'
  },
  {
    id: '82',
    name: 'Rajčica grapolo',
    description: 'Svježe Rajčica grapolo provjerene kvalitete.',
    price: '2,50 €/kg',
    image: 'https://picsum.photos/seed/fruit82/800/1000',
    category: 'exotic'
  },
  {
    id: '83',
    name: 'Rajčica volovsko srce',
    description: 'Svježe Rajčica volovsko srce provjerene kvalitete.',
    price: '3,50 €/kg',
    image: 'https://picsum.photos/seed/fruit83/800/1000',
    category: 'exotic'
  },
  {
    id: '84',
    name: 'Rabarbara',
    description: 'Svježe Rabarbara provjerene kvalitete.',
    price: '4,00 €/kg',
    image: 'https://picsum.photos/seed/fruit84/800/1000',
    category: 'exotic'
  },
  {
    id: '85',
    name: 'Radič crveni',
    description: 'Svježe Radič crveni provjerene kvalitete.',
    price: '2,50 €/kg',
    image: 'https://picsum.photos/seed/fruit85/800/1000',
    category: 'exotic'
  },
  {
    id: '86',
    name: 'Rikola',
    description: 'Svježe Rikola provjerene kvalitete.',
    price: '1,50 €/pakiranje (100 g)',
    image: 'https://picsum.photos/seed/fruit86/800/1000',
    category: 'exotic'
  },
  {
    id: '87',
    name: 'Rotkvica',
    description: 'Svježe Rotkvica provjerene kvalitete.',
    price: '1,00 €/vezica',
    image: 'https://picsum.photos/seed/fruit87/800/1000',
    category: 'exotic'
  },
  {
    id: '88',
    name: 'Salata kristalka',
    description: 'Svježe Salata kristalka provjerene kvalitete.',
    price: '1,00 €/komad',
    image: 'https://picsum.photos/seed/fruit88/800/1000',
    category: 'exotic'
  },
  {
    id: '89',
    name: 'Salata puterica',
    description: 'Svježe Salata puterica provjerene kvalitete.',
    price: '1,00 €/komad',
    image: 'https://picsum.photos/seed/fruit89/800/1000',
    category: 'exotic'
  },
  {
    id: '90',
    name: 'Šljiva',
    description: 'Svježe Šljiva provjerene kvalitete.',
    price: '2,00 €/kg',
    image: 'https://picsum.photos/seed/fruit90/800/1000',
    category: 'exotic'
  },
  {
    id: '91',
    name: 'Šparoga svježa',
    description: 'Svježe Šparoga svježa provjerene kvalitete.',
    price: '5,00 €/vezica (500 g)',
    image: 'https://picsum.photos/seed/fruit91/800/1000',
    category: 'exotic'
  },
  {
    id: '92',
    name: 'Špinat',
    description: 'Svježe Špinat provjerene kvalitete.',
    price: '2,50 €/kg',
    image: 'https://picsum.photos/seed/fruit92/800/1000',
    category: 'exotic'
  },
  {
    id: '93',
    name: 'Zelena salata (razne vrste)',
    description: 'Svježe Zelena salata (razne vrste) provjerene kvalitete.',
    price: '1,00 €/komad',
    image: 'https://picsum.photos/seed/fruit93/800/1000',
    category: 'exotic'
  },
  {
    id: '94',
    name: 'Zeleni papar (svježi u zrnu)',
    description: 'Svježe Zeleni papar (svježi u zrnu) provjerene kvalitete.',
    price: '4,00 €/pakiranje (50 g)',
    image: 'https://picsum.photos/seed/fruit94/800/1000',
    category: 'exotic'
  },
  {
    id: '95',
    name: 'Liči (Lychee)',
    description: 'Svježe Liči (Lychee) provjerene kvalitete.',
    price: '6,00 €/pakiranje',
    image: './assets/images/products/lychee.png',
    category: 'exotic'
  }
];

export const SMOOTHIES: Smoothie[] = [
  {
    id: 's1',
    name: "Dragon Elixir",
    titleMain: "Vibrant",
    titleAccent: "Dragon",
    titleEnd: "Elixir",
    description: "A high-performance blend of red dragon fruit, coconut water, and a hint of lime for ultimate hydration.",
    image: ASSETS.SMOOTHIE_DRAGON,
    color: "#FF2D55",
    textColor: "text-white"
  },
  {
    id: 's2',
    name: "Mango Glow",
    titleMain: "Golden",
    titleAccent: "Mango",
    titleEnd: "Glow",
    description: "Sun-ripened mangoes blended with turmeric and ginger for an anti-inflammatory energy boost.",
    image: ASSETS.SMOOTHIE_MANGO,
    color: "#FFCC00",
    textColor: "text-froota-dark"
  },
  {
    id: 's3',
    name: "Lime Detox",
    titleMain: "Zesty",
    titleAccent: "Lime",
    titleEnd: "Detox",
    description: "Refreshing lime and mint infusion with activated charcoal for a deep system cleanse.",
    image: ASSETS.SMOOTHIE_LIME,
    color: "#32D74B",
    textColor: "text-froota-dark"
  },
  {
    id: 's4',
    name: "Berry Blast",
    titleMain: "Wild",
    titleAccent: "Berry",
    titleEnd: "Blast",
    description: "A powerful antioxidant mix of wild berries and acai for cognitive focus and recovery.",
    image: ASSETS.SMOOTHIE_BERRY,
    color: "#AF52DE",
    textColor: "text-white"
  }
];
