const fs = require('fs');

const rawText = `
Ananas - 3,00 €/komad.
Avokado Hass - 1,80 €/komad.
Baby ananas - 2,50 €/komad.
Baby banana - 4,50 €/kg.
Baby kivi - 2,50 €/pakiranje (125 g).
Baby krastavac - 2,00 €/pakiranje (200 g).
Banana - 1,50 €/kg.
Borovnica - 3,00 €/pakiranje (125 g).
Breskva - 2,50 €/kg.
Brestovača (Bukovača) - 4,00 €/pakiranje (250 g).
Brokula - 2,50 €/komad.
Brusnica svježa - 3,50 €/pakiranje (200 g).
Celer korijen - 1,50 €/kg.
Celer stabljika - 1,50 €/komad.
Cikla - 1,00 €/kg.
Crna rotkva - 1,50 €/kg.
Crveni kupus - 1,00 €/kg.
Cvjetača - 2,50 €/komad.
Češnjak - 5,00 €/kg.
Cherry rajčica - 2,50 €/pakiranje (250 g).
Čili papričica - 1,50 €/pakiranje (50 g).
Daikon (bijela rotkva) - 2,00 €/kg.
Datulje svježe - 4,00 €/pakiranje (500 g).
Dinja - 2,00 €/kg.
Đumbir - 4,00 €/kg.
Gljive šampinjoni - 2,50 €/pakiranje (500 g).
Gljive shiitake - 5,00 €/pakiranje (200 g).
Grah svježi - 3,00 €/kg.
Grašak svježi - 3,00 €/kg.
Grejp - 2,00 €/kg.
Grožđe bijelo - 3,00 €/kg.
Grožđe crno - 3,00 €/kg.
Guava - 3,50 €/komad.
Jabuka (razne sorte) - 1,50 €/kg.
Jagoda - 3,50 €/pakiranje (500 g).
Kaki (Persimon) - 2,00 €/komad.
Karambola (Star fruit) - 2,50 €/komad.
Kelj - 1,50 €/kg.
Kelj pupčar (Prokulica) - 2,50 €/pakiranje (500 g).
Kesten svježi - 5,00 €/kg.
Kivi - 2,00 €/kg.
Klementina - 2,00 €/kg.
Kokos orah - 2,50 €/komad.
Koraba - 1,00 €/komad.
Krastavac salatni - 1,50 €/komad.
Kruška (razne sorte) - 2,50 €/kg.
Krumpir mladi - 1,50 €/kg.
Krumpir obični - 1,00 €/kg.
Kukuruz šećerac - 1,00 €/klip.
Kumkvat - 3,50 €/pakiranje (250 g).
Kupina - 3,00 €/pakiranje (125 g).
Kupus bijeli - 1,00 €/kg.
Limeta - 0,50 €/komad.
Limun - 2,00 €/kg.
Lubenica - 1,00 €/kg.
Luk crveni - 1,20 €/kg.
Luk srebrenac - 1,50 €/kg.
Luk žuti - 1,00 €/kg.
Malina - 3,00 €/pakiranje (125 g).
Mandarija - 1,80 €/kg.
Mango - 2,50 €/komad.
Mango Alfonso (sezonski) - 4,00 €/komad.
Marakuja (Passion fruit) - 2,00 €/komad.
Marelica - 3,00 €/kg.
Matovilac - 2,00 €/pakiranje (100 g).
Mladi luk - 1,00 €/vezica.
Moruzgva (Romanesco) - 3,00 €/komad.
Mrkva - 1,20 €/kg.
Naranča - 1,80 €/kg.
Nektarina - 2,50 €/kg.
Papaja - 4,50 €/komad.
Paprika babura - 2,50 €/kg.
Paprika kapia - 2,50 €/kg.
Paprika roga - 2,50 €/kg.
Pastrnjak - 2,00 €/kg.
Patlidžan - 2,00 €/kg.
Peršin korijen - 2,50 €/kg.
Peršin list - 0,50 €/vezica.
Physalis (Zlatna bobica) - 2,50 €/pakiranje (100 g).
Pitaja (Zmajsko voće) - crvena - 6,00 €/komad.
Pitaja (Zmajsko voće) - žuta - 7,00 €/komad.
Rajčica grapolo - 2,50 €/kg.
Rajčica volovsko srce - 3,50 €/kg.
Rabarbara - 4,00 €/kg.
Radič crveni - 2,50 €/kg.
Rikola - 1,50 €/pakiranje (100 g).
Rotkvica - 1,00 €/vezica.
Salata kristalka - 1,00 €/komad.
Salata puterica - 1,00 €/komad.
Šljiva - 2,00 €/kg.
Šparoga svježa - 5,00 €/vezica (500 g).
Špinat - 2,50 €/kg.
Zelena salata (razne vrste) - 1,00 €/komad.
Zeleni papar (svježi u zrnu) - 4,00 €/pakiranje (50 g).
`;

const products = [];
let idCounter = 1;

rawText.split('\n').forEach(line => {
  if (line.trim() === '') return;
  const match = line.match(/(.+?)\s*-\s*(.+)/);
  if (match) {
    const name = match[1].trim();
    const price = match[2].trim().replace('.', ','); // Replace dot with comma for European format
    products.push({
      id: idCounter.toString(),
      name: name,
      description: `Svježe "${name}" provjerene kvalitete.`,
      price: price.replace(/\.$/, ''), // Remove trailing period
      image: 'https://picsum.photos/seed/fruit' + idCounter + '/800/1000',
      category: 'exotic'
    });
    idCounter++;
  }
});

fs.writeFileSync('parsed_products.json', JSON.stringify(products, null, 2));
console.log(`Parsed ${products.length} products`);
