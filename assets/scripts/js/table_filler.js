/*

  v.1.0.1.
  Interactive Periodic Table - Copyright 2023 (c) Arturo Olivares

  table_filler.js
    
*/

const elements = [
    {symbol: 'H', atomic_num: 1, name: 'Hydrogen', atomic_mass: 1.008, imgPath: 'assets/imgs/hydrogen.png'},
    {symbol: 'He', atomic_num: 2, name: 'Helium', atomic_mass: 4.0026, imgPath: 'assets/imgs/helium.png'}, 
    {symbol: 'Li', atomic_num: 3, name: 'Lithium', atomic_mass: 6.94, imgPath: 'assets/imgs/lithium.png'}, 
    {symbol: 'Be', atomic_num: 4, name: 'Beryllium', atomic_mass: 9.0122, imgPath: 'assets/imgs/beryllium.png'}, 
    {symbol: 'B', atomic_num: 5, name: 'Boron', atomic_mass: 10.81, imgPath: 'assets/imgs/boron.png'}, 
    {symbol: 'C', atomic_num: 6, name: 'Carbon', atomic_mass: 12.011, imgPath: 'assets/imgs/carbon.png'}, 
    {symbol: 'N', atomic_num: 7, name: 'Nitrogen', atomic_mass: 14.007, imgPath: 'assets/imgs/nitrogen.png'}, 
    {symbol: 'O', atomic_num: 8, name: 'Oxygen', atomic_mass: 15.999, imgPath: 'assets/imgs/oxygen.png'}, 
    {symbol: 'F', atomic_num: 9, name: 'Fluorine', atomic_mass: 18.998, imgPath: 'assets/imgs/fluorine.png'}, 
    {symbol: 'Ne', atomic_num: 10, name: 'Neon', atomic_mass: 20.180, imgPath: 'assets/imgs/neon.png'}, 
    {symbol: 'Na', atomic_num: 11, name: 'Sodium', atomic_mass: 22.990, imgPath: 'assets/imgs/sodium.png'}, 
    {symbol: 'Mg', atomic_num: 12, name: 'Magnesium', atomic_mass: 24.305, imgPath: 'assets/imgs/magnesium.png'}, 
    {symbol: 'Al', atomic_num: 13, name: 'Aluminium', atomic_mass: 26.982, imgPath: 'assets/imgs/aluminium.png'}, 
    {symbol: 'Si', atomic_num: 14, name: 'Silicon', atomic_mass: 28.085, imgPath: 'assets/imgs/silicon.png'}, 
    {symbol: 'P', atomic_num: 15, name: 'Phosphorus', atomic_mass: 30.974, imgPath: 'assets/imgs/phosphorus.png'}, 
    {symbol: 'S', atomic_num: 16, name: 'Sulfur', atomic_mass: 32.06, imgPath: 'assets/imgs/sulfur.png'}, 
    {symbol: 'Cl', atomic_num: 17, name: 'Chlorine', atomic_mass: 35.45, imgPath: 'assets/imgs/chlorine.png'}, 
    {symbol: 'Ar', atomic_num: 18, name: 'Argon', atomic_mass: 39.948, imgPath: 'assets/imgs/argon.png'}, 
    {symbol: 'K', atomic_num: 19, name: 'Potassium', atomic_mass: 39.098, imgPath: 'assets/imgs/potassium.png'},
    {symbol: 'Ca', atomic_num: 20, name: 'Calcium', atomic_mass: 40.078, imgPath: 'assets/imgs/calcium.png'}, 
    {symbol: 'Sc', atomic_num: 21, name: 'Scandium', atomic_mass: 44.956, imgPath: 'assets/imgs/scandium.png'}, 
    {symbol: 'Ti', atomic_num: 22, name: 'Titanium', atomic_mass: 47.867, imgPath: 'assets/imgs/titanium.png'}, 
    {symbol: 'V', atomic_num: 23, name: 'Vanadium', atomic_mass: 50.942, imgPath: 'assets/imgs/vanadium.png'}, 
    {symbol: 'Cr', atomic_num: 24, name: 'Chromium', atomic_mass: 51.996, imgPath: 'assets/imgs/chromium.png'}, 
    {symbol: 'Mn', atomic_num: 25, name: 'Manganese', atomic_mass: 54.938, imgPath: 'assets/imgs/manganese.png'}, 
    {symbol: 'Fe', atomic_num: 26, name: 'Iron', atomic_mass: 55.845, imgPath: 'assets/imgs/iron.png'}, 
    {symbol: 'Co', atomic_num: 27, name: 'Cobalt', atomic_mass: 58.993, imgPath: 'assets/imgs/cobalt.png'}, 
    {symbol: 'Ni', atomic_num: 28, name: 'Nickel', atomic_mass: 58.693, imgPath: 'assets/imgs/nickel.png'}, 
    {symbol: 'Cu', atomic_num: 29, name: 'Copper', atomic_mass: 63.546, imgPath: 'assets/imgs/copper.png'}, 
    {symbol: 'Zn', atomic_num: 30, name: 'Zinc', atomic_mass: 65.38, imgPath: 'assets/imgs/zinc.png'}, 
    {symbol: 'Ga', atomic_num: 31, name: 'Gallium', atomic_mass: 69.723, imgPath: 'assets/imgs/gallium.png'}, 
    {symbol: 'Ge', atomic_num: 32, name: 'Germanium', atomic_mass: 72.630, imgPath: 'assets/imgs/germanium.png'}, 
    {symbol: 'As', atomic_num: 33, name: 'Arsenic', atomic_mass: 74.922, imgPath: 'assets/imgs/arsenic.png'}, 
    {symbol: 'Se', atomic_num: 34, name: 'Selenium', atomic_mass: 78.971, imgPath: 'assets/imgs/selenium.png'},
    {symbol: 'Br', atomic_num: 35, name: 'Bromine', atomic_mass: 78.904, imgPath: 'assets/imgs/bromine.png'},
    {symbol: 'Kr', atomic_num: 36, name: 'Krypton', atomic_mass: 83.798, imgPath: 'assets/imgs/krypton.png'}, 
    {symbol: 'Rb', atomic_num: 37, name: 'Rubidium', atomic_mass: 85.468, imgPath: 'assets/imgs/rubidium.png'},
    {symbol: 'Sr', atomic_num: 38, name: 'Strontium', atomic_mass: 87.62, imgPath: 'assets/imgs/strontium.png'},
    {symbol: 'Y', atomic_num: 39, name: 'Yttrium', atomic_mass: 88.906, imgPath: 'assets/imgs/yttrium.png'}, 
    {symbol: 'Zr', atomic_num: 40, name: 'Zirconium', atomic_mass: 91.224, imgPath: 'assets/imgs/zirconium.png'}, 
    {symbol: 'Nb', atomic_num: 41, name: 'Niobium', atomic_mass: 92.906, imgPath: 'assets/imgs/niobium.png'},
    {symbol: 'Mo', atomic_num: 42, name: 'Molybdenum', atomic_mass: 95.95, imgPath: 'assets/imgs/molybdenum.png'},
    {symbol: 'Tc', atomic_num: 43, name: 'Technetium', atomic_mass: '(98)', imgPath: 'assets/imgs/technetium.png'},
    {symbol: 'Ru', atomic_num: 44, name: 'Ruthenium', atomic_mass: 101.07, imgPath: 'assets/imgs/ruthenium.png'}, 
    {symbol: 'Rh', atomic_num: 45, name: 'Rhodium', atomic_mass: 102.91, imgPath: 'assets/imgs/rhodium.png'},
    {symbol: 'Pd', atomic_num: 46, name: 'Palladium', atomic_mass: 106.42, imgPath: 'assets/imgs/palladium.png'}, 
    {symbol: 'Ag', atomic_num: 47, name: 'Silver', atomic_mass: 107.87, imgPath: 'assets/imgs/silver.png'}, 
    {symbol: 'Cd', atomic_num: 48, name: 'Cadmium', atomic_mass: 112.41, imgPath: 'assets/imgs/cadmium.png'},
    {symbol: 'In', atomic_num: 49, name: 'Indium', atomic_mass: 114.82, imgPath: 'assets/imgs/indium.png'}, 
    {symbol: 'Sn', atomic_num: 50, name: 'Tin', atomic_mass: 118.71, imgPath: 'assets/imgs/tin.png'},
    {symbol: 'Sb', atomic_num: 51, name: 'Antimony', atomic_mass: 121.76, imgPath: 'assets/imgs/antimony.png'}, 
    {symbol: 'Te', atomic_num: 52, name: 'Tellurium', atomic_mass: 127.60, imgPath: 'assets/imgs/tellurium.png'}, 
    {symbol: 'I', atomic_num: 53, name: 'Iodine', atomic_mass: 126.90, imgPath: 'assets/imgs/iodine.png'}, 
    {symbol: 'Xe', atomic_num: 54, name: 'Xenon', atomic_mass: 131.29, imgPath: 'assets/imgs/xenon.png'},  
    {symbol: 'Cs', atomic_num: 55, name: 'Caesium', atomic_mass: 132.91, imgPath: 'assets/imgs/caesium.png'}, 
    {symbol: 'Ba', atomic_num: 56, name: 'Barium', atomic_mass: 137.33, imgPath: 'assets/imgs/barium.png'}, 
    {symbol: 'Hf', atomic_num: 72, name: 'Hafnium', atomic_mass: 178.49, imgPath: 'assets/imgs/hafnium.png'}, 
    {symbol: 'Ta', atomic_num: 73, name: 'Tantalum', atomic_mass: 180.95, imgPath: 'assets/imgs/tantalum.png'}, 
    {symbol: 'W', atomic_num: 74, name: 'Tungsten', atomic_mass: 183.84, imgPath: 'assets/imgs/tungsten.png'}, 
    {symbol: 'Re', atomic_num: 75, name: 'Rhenium', atomic_mass: 186.21, imgPath: 'assets/imgs/rhenium.png'}, 
    {symbol: 'Os', atomic_num: 76, name: 'Osmium', atomic_mass: 190.23, imgPath: 'assets/imgs/osmium.png'},
    {symbol: 'Ir', atomic_num: 77, name: 'Iridium', atomic_mass: 192.22, imgPath: 'assets/imgs/iridium.png'}, 
    {symbol: 'Pt', atomic_num: 78, name: 'Platinum', atomic_mass: 195.08, imgPath: 'assets/imgs/platinum.png'},
    {symbol: 'Au', atomic_num: 79, name: 'Gold', atomic_mass: 196.97, imgPath: 'assets/imgs/gold.png'}, 
    {symbol: 'Hg', atomic_num: 80, name: 'Mercury', atomic_mass: 200.59, imgPath: 'assets/imgs/mercury.png'},
    {symbol: 'Tl', atomic_num: 81, name: 'Thallium', atomic_mass: 204.38, imgPath: 'assets/imgs/thallium.png'}, 
    {symbol: 'Pb', atomic_num: 82, name: 'Lead', atomic_mass: 207.2, imgPath: 'assets/imgs/lead.png'}, 
    {symbol: 'Bi', atomic_num: 83, name: 'Bismuth', atomic_mass: 208.98, imgPath: 'assets/imgs/bismuth.png'}, 
    {symbol: 'Po', atomic_num: 84, name: 'Polonium', atomic_mass: '(209)', imgPath: 'assets/imgs/polonium.png'}, 
    {symbol: 'At', atomic_num: 85, name: 'Astatine', atomic_mass: '(210)', imgPath: 'assets/imgs/astatine.png'}, 
    {symbol: 'Rn', atomic_num: 86, name: 'Radon', atomic_mass: '(222)', imgPath: 'assets/imgs/radon.png'},
    {symbol: 'Fr', atomic_num: 87, name: 'Francium', atomic_mass: '(223)', imgPath: 'assets/imgs/francium.png'}, 
    {symbol: 'Ra', atomic_num: 88, name: 'Radium', atomic_mass: '(226)', imgPath: 'assets/imgs/radium.png'},  
    {symbol: 'Rf', atomic_num: 104, name: 'Rutherfordium', atomic_mass: '(267)', imgPath: 'assets/imgs/rutherfordium.png'}, 
    {symbol: 'Db', atomic_num: 105, name: 'Dubnium', atomic_mass: '(268)', imgPath: 'assets/imgs/dubnium.png'}, 
    {symbol: 'Sg', atomic_num: 106, name: 'Seaborgium', atomic_mass: '(269)', imgPath: 'assets/imgs/seaborgium.png'},
    {symbol: 'Bh', atomic_num: 107, name: 'Bohrium', atomic_mass: '(270)', imgPath: 'assets/imgs/bohrium.png'}, 
    {symbol: 'Hs', atomic_num: 108, name: 'Hassium', atomic_mass: '(277)', imgPath: 'assets/imgs/hassium.png'}, 
    {symbol: 'Mt', atomic_num: 109, name: 'Meitnerium', atomic_mass: '(278)', imgPath: 'assets/imgs/meitnerium.png'},
    {symbol: 'Ds', atomic_num: 110, name: 'Darmstadtium', atomic_mass: '(281)', imgPath: 'assets/imgs/darmstadtium.png'}, 
    {symbol: 'Rg', atomic_num: 111, name: 'Roentgenium', atomic_mass: '(282)', imgPath: 'assets/imgs/roentgenium.png'},
    {symbol: 'Cn', atomic_num: 112, name: 'Copernicium', atomic_mass: '(285)', imgPath: 'assets/imgs/copernicium.png'}, 
    {symbol: 'Nh', atomic_num: 113, name: 'Nihonium', atomic_mass: '(286)', imgPath: 'assets/imgs/nihonium.png'}, 
    {symbol: 'Fl', atomic_num: 114, name: 'Flerovium', atomic_mass: '(289)', imgPath: 'assets/imgs/flerovium.png'}, 
    {symbol: 'Mc', atomic_num: 115, name: 'Moscovium', atomic_mass: '(290)', imgPath: 'assets/imgs/moscovium.png'}, 
    {symbol: 'Lv', atomic_num: 116, name: 'Livermorium', atomic_mass: '(293)', imgPath: 'assets/imgs/livermorium.png'}, 
    {symbol: 'Ts', atomic_num: 117, name: 'Tennessine', atomic_mass: '(294)', imgPath: 'assets/imgs/tennessine.png'}, 
    {symbol: 'Og', atomic_num: 118, name: 'Oganesson', atomic_mass: '(294)', imgPath: 'assets/imgs/oganesson.png'}
];

// Loop through each .contents div
const contentsDivs = document.querySelectorAll('.contents');
for (let i = 0; i < contentsDivs.length; i++) {
  const contentsDiv = contentsDivs[i];

  // Create HTML content with data from elements array
  const html = `
    <p id="elem-symbol">
      ${elements[i].symbol}
    </p>
    <p id="atomic-num">
      ${elements[i].atomic_num}
    </p>
    <img id="elem-img" src="${elements[i].imgPath}"/>
    <p id="elem-radioactivity">
      <i class="fas fa-radiation" style="font-weight: 900; font-size: 2em;"></i>
    </p>
    <p id="elem-name">
      ${elements[i].name}
    </p>
    <p id="atomic-mass">
      ${elements[i].atomic_mass}
    </p>
  `;

  // Set the innerHTML of .contents div with the created HTML content
  contentsDiv.innerHTML = html;
}