const elements = {}
var a = 'Hydrogen Helium Lithium Beryllium Boron Carbon Nitrogen Oxygen Fluorine Neon Sodium Magnesium Aluminum Silicon Phosphorus Sulfur Chlorine Argon Potassium Calcium Scandium Titanium Vanadium Chromium Manganese Iron Cobalt Nickel Copper Zinc Gallium Germanium Arsenic Selenium Bromine Krypton Rubidium Strontium Yttrium Zirconium Niobium Molybdenum Technetium Ruthenium Rhodium Palladium Silver Cadmium Indium Tin Antimony Tellurium Iodine Xenon Cesium Barium Lanthanum Cerium Praseodymium Neodymium Promethium Samarium Europium Gadolinium Terbium Dysprosium Holmium Erbium Thulium Ytterbium Lutetium Hafnium Tantalum Tungsten Rhenium Osmium Iridium Platinum Gold Mercury Thallium Lead Bismuth Polonium Astatine Radon Francium Radium Actinium Thorium Protactinium Uranium Neptunium Plutonium Americium Curium Berkelium Californium Einsteinium Fermium Mendelevium Nobelium Lawrencium Rutherfordium Dubnium Seaborgium Bohrium Hassium Meitnerium Darmstadtium Roentgenium Copernicum Nihonium Flerovium Moscovium Livermorium Tennessine Oganesson'
var b = 'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og'
var c = '1.008 4.003 6.941 9.012 10.811 12.011 14.007 15.999 18.998 20.18 22.99 24.305 26.982 28.086 30.974 32.065 35.453 39.948 39.098 40.078 44.956 47.867 50.942 51.996 54.938 55.845 58.933 58.693 63.546 65.39 69.723 72.64 74.922 78.96 79.904 83.8 85.468 87.62 88.906 91.224 92.906 95.94 98 101.07 102.906 106.42 107.868 112.411 114.818 118.71 121.76 127.6 126.905 131.293 132.906 137.327 138.906 140.116 140.908 144.24 145 150.36 151.964 157.25 158.925 162.5 164.93 167.259 168.934 173.04 174.967 178.49 180.948 183.84 186.207 190.23 192.217 195.078 196.967 200.59 204.383 207.2 208.98 209 210 222 223 226 227 232.038 231.036 238.029 237 244 243 247 247 251 252 257 258 259 266 267 268 269 270 277 278 281 282 285 286 289 290 293 294 294'
const names = a.split(' ')
const abbrs = b.split(' ')
const masses = c.split(' ')
var i = 0
const elems = []

class Element {
  constructor (name, abbr, atNum, atWght) {
    this._abbr = abbr
    this._num = atNum
    this._name = name
    this._mass = atWght
    elements[this._num] = this
  }

  shortexplanation () {
    return `${this._name.fontcolor('blue')}'s abbreviation is ${this._abbr.fontcolor('blue')}. <br> It has an atomic number of ${this._num.toString().fontcolor('blue')}, which means it has that many protons (and the same number of electrons in a neutral atom). <br> It has an average atomic mass of ${this._mass.toString().fontcolor('blue')}, which is the number of protons and neutrons in that atom. <br> You can find the number of neutrons by subtracting the atomic number.`
  }
}

while (i < names.length) {
  eval('const ' + names[i] + ' = new Element(\'' + names[i] + '\', \'' + abbrs[i] + '\', ' + (i + 1) + ',' + masses[i] + ')')
  i++
}

function getinput (value) {
  var paragraph = document.getElementById('p1')
  var check = Number(value)
  if (isNaN(check)) {
    console.log('not a number')
  } else {
    value = Number(value)
  }
  if (typeof value === 'number') {
    console.log('is number')
    paragraph.innerHTML = elements[value].shortexplanation()
    setCurrentById(value)
    document.getElementById('myInput').value = ''
  } else if (typeof value === 'string') {
    if (value.length <= 2) {
      console.log('is abbr')
      for (var key in elements) {
        setCurrentById(key)
        if (elements[key]._abbr.toUpperCase() === value.toUpperCase()) {
          paragraph.innerHTML = elements[key].shortexplanation()
          document.getElementById('myInput').value = ''
          break
        }
      }
    } else {
      console.log('is name')
      for (key in elements) {
        setCurrentById(key)
        if (elements[key]._name.toUpperCase() === value.toUpperCase()) {
          paragraph.innerHTML = elements[key].shortexplanation()
          document.getElementById('myInput').value = ''
          break
        }
      }
    }
  }
}
function elemsInit() {
  var tempe = getElemsByClass('element')
  for (var item = 0; item < tempe.length; item++) {
    elems.push(tempe[item])
  }
}
function getElemsByClass (clas) {
  var returns = []
  var classes = document.getElementsByClassName('element')
  for (var cls = 0; cls < classes.length; cls++) {
    if (classes.item(cls).className.includes(clas)) {
      returns.push(classes[cls])
    }
  }
  return returns
}
function getClassList (element) {
  return element.className.split(' ')
}
function setCurrentById (newElem) {
  var currentCurrent = getElemsByClass('current')
  for (var gg = 0; gg < currentCurrent.length; gg++) {
    var classList = getClassList(currentCurrent[gg])
    currentCurrent[gg].className = classList.slice(0, classList.indexOf('current')).join(' ')
  }
  var newElemPush = getClassList(document.getElementById(newElem))
  newElemPush.push('current')
  document.getElementById(newElem).className = newElemPush.join(' ')
}
function boom () {
  var baboom = document.getElementsByClassName('current')
  for (var ii = 0; ii < baboom.length; ii++) {
    console.log(baboom[ii].className)
  }
}
function generate (index) {
  console.log(`<td onclick='getinput(${index})' class='element' id='${elements[index]._num}'>${elements[index]._num}<br>${elements[index]._name}<br>${elements[index]._mass}</td>`)
}
for (i = 1; i <= 118; i++) {
  generate(i)
}
