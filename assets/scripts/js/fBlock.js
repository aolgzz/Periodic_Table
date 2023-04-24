/*!
 *
 *      Interactive Periodic Table
 *      Copyright (c) 2023 Arturo Olivares
 *      Licensed under the MIT license
 *      fBlock.js
 *
 */

const fBlockElems = [
    //Lanthanides
    {symbol: 'La', atomic_num: 57, name: 'Lanthanum', atomic_mass: 138.91, imgPath: 'assets/imgs/hydrogen.png'},
    {symbol: 'Ce', atomic_num: 58, name: 'Cerium', atomic_mass: 140.12, imgPath: 'assets/imgs/helium.png'}, 
    {symbol: 'Pr', atomic_num: 59, name: 'Praseodymium', atomic_mass: 140.91, imgPath: 'assets/imgs/lithium.png'}, 
    {symbol: 'Nd', atomic_num: 60, name: 'Neodymium', atomic_mass: 144.24, imgPath: 'assets/imgs/beryllium.png'}, 
    {symbol: 'Pm', atomic_num: 61, name: 'Promethium', atomic_mass: '(145)', imgPath: 'assets/imgs/boron.png'}, 
    {symbol: 'Sm', atomic_num: 62, name: 'Samarium', atomic_mass: 150.36, imgPath: 'assets/imgs/carbon.png'}, 
    {symbol: 'Eu', atomic_num: 63, name: 'Europium', atomic_mass: 151.96, imgPath: 'assets/imgs/nitrogen.png'}, 
    {symbol: 'Gd', atomic_num: 64, name: 'Gadolinium', atomic_mass: 157.25, imgPath: 'assets/imgs/oxygen.png'}, 
    {symbol: 'Tb', atomic_num: 65, name: 'Terbium', atomic_mass: 158.93, imgPath: 'assets/imgs/fluorine.png'}, 
    {symbol: 'Dy', atomic_num: 66, name: 'Dysprosium', atomic_mass: 162.50, imgPath: 'assets/imgs/neon.png'}, 
    {symbol: 'Ho', atomic_num: 67, name: 'Holmium', atomic_mass: 164.93, imgPath: 'assets/imgs/sodium.png'}, 
    {symbol: 'Er', atomic_num: 68, name: 'Erbium', atomic_mass: 167.26, imgPath: 'assets/imgs/magnesium.png'}, 
    {symbol: 'Tm', atomic_num: 69, name: 'Thulium', atomic_mass: 168.93, imgPath: 'assets/imgs/aluminium.png'}, 
    {symbol: 'Yb', atomic_num: 70, name: 'Ytterbium', atomic_mass: 173.05, imgPath: 'assets/imgs/silicon.png'},
    {symbol: 'Lu', atomic_num: 71, name: 'Lutetium', atomic_mass: 174.97, imgPath: 'assets/imgs/phosphorus.png'},
    
    //Actinides
    {symbol: 'Ac', atomic_num: 89, name: 'Actinium', atomic_mass: '(227)', imgPath: 'assets/imgs/actinium.png'}, 
    {symbol: 'Th', atomic_num: 90, name: 'Thorium', atomic_mass: 232.04, imgPath: 'assets/imgs/thorium.png'}, 
    {symbol: 'Pa', atomic_num: 91, name: 'Protactinium', atomic_mass: 231.04, imgPath: 'assets/imgs/protactinium.png'}, 
    {symbol: 'U', atomic_num: 92, name: 'Uranium', atomic_mass: 238.03, imgPath: 'assets/imgs/uranium.png'},
    {symbol: 'Np', atomic_num: 93, name: 'Neptunium', atomic_mass: '(237)', imgPath: 'assets/imgs/neptunium.png'}, 
    {symbol: 'Pu', atomic_num: 94, name: 'Plutonium', atomic_mass: '(244)', imgPath: 'assets/imgs/plutonium.png'}, 
    {symbol: 'Am', atomic_num: 95, name: 'Americium', atomic_mass: '(243)', imgPath: 'assets/imgs/americium.png'}, 
    {symbol: 'Cu', atomic_num: 96, name: 'Curium', atomic_mass: '(247)', imgPath: 'assets/imgs/curium.png'}, 
    {symbol: 'Bk', atomic_num: 97, name: 'Berkelium', atomic_mass: '(247)', imgPath: 'assets/imgs/berkelium.png'}, 
    {symbol: 'Cf', atomic_num: 98, name: 'Californium', atomic_mass: '(251)', imgPath: 'assets/imgs/californium.png'}, 
    {symbol: 'Es', atomic_num: 99, name: 'Einstenium', atomic_mass: '(252)', imgPath: 'assets/imgs/einstenium.png'}, 
    {symbol: 'Fm', atomic_num: 100, name: 'Fermium', atomic_mass: '(257)', imgPath: 'assets/imgs/fermium.png'}, 
    {symbol: 'Md', atomic_num: 101, name: 'Mendelevium', atomic_mass: '(258)', imgPath: 'assets/imgs/mendelevium.png'},
    {symbol: 'No', atomic_num: 102, name: 'Nobelium', atomic_mass: '(259)', imgPath: 'assets/imgs/nobelium.png'},
    {symbol: 'Lr', atomic_num: 103, name: 'Lawrencium', atomic_mass: '(266)', imgPath: 'assets/imgs/lawrencium.png'}
]

// f-Block
const fBlock = document.getElementById("f-block");

for(let i=0; i<2; i++){
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < 15; j++){
        const elementDiv = document.createElement("div");
        elementDiv.id = `fcell-${i}-${j + 1}`;

        rowDiv.appendChild(elementDiv);
        elementDiv.classList.add("element-cell");
        const contentsDiv = document.createElement("div");
        contentsDiv.classList.add("fcontents");
        elementDiv.appendChild(contentsDiv);

    }
    fBlock.appendChild(rowDiv);
}

// Loop through each .contents div
const fcontentsDivs = document.querySelectorAll('.fcontents');
for (let i = 0; i < fcontentsDivs.length; i++) {
  const contentsDiv = fcontentsDivs[i];

  // Create HTML content with data from elements array
  const html = `
    <p id="elem-symbol">
      ${fBlockElems[i].symbol}
    </p>
    <p id="atomic-num">
      ${fBlockElems[i].atomic_num}
    </p>
    <img id="elem-img" src="${fBlockElems[i].imgPath}"/>
    <p id="elem-radioactivity">
      <i class="fas fa-radiation" style="font-weight: 900; font-size: 2em;"></i>
    </p>
    <p id="elem-name">
      ${fBlockElems[i].name}
    </p>
    <p id="atomic-mass">
      ${fBlockElems[i].atomic_mass}
    </p>
  `;

  // Set the innerHTML of .contents div with the created HTML content
  contentsDiv.innerHTML = html;
}