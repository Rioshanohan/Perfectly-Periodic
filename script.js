const names = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium',
  'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium',
  'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Rubidium',
  'Strontium', 'Yttrium', 'Zirconium', 'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium', 'Rhodium', 'Palladium', 'Silver', 'Cadmium', 'Indium', 'Tin',
  'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Cesium', 'Barium', 'Lanthanum', 'Cerium', 'Praseodymium', 'Neodymium', 'Promethium', 'Samarium',
  'Europium', 'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium', 'Erbium', 'Thulium', 'Ytterbium', 'Lutetium', 'Hafnium', 'Tantalum', 'Tungsten',
  'Rhenium', 'Osmium', 'Iridium', 'Platinum', 'Gold', 'Mercury', 'Thallium', 'Lead', 'Bismuth', 'Polonium', 'Astatine', 'Radon', 'Francium', 'Radium',
  'Actinium', 'Thorium', 'Protactinium', 'Uranium', 'Neptunium', 'Plutonium', 'Americium', 'Curium', 'Berkelium', 'Californium', 'Einsteinium',
  'Fermium', 'Mendelevium', 'Nobelium', 'Lawrencium', 'Rutherfordium', 'Dubnium', 'Seaborgium', 'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium',
  'Roentgenium', 'Copernicum', 'Nihonium', 'Flerovium', 'Moscovium', 'Livermorium', 'Tennessine', 'Oganesson']
const abbrs = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr',
  'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In',
  'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W',
  'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es',
  'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og']
const masses = [1.008, 4.003, 6.941, 9.012, 10.811, 12.011, 14.007, 15.999, 18.998, 20.18, 22.99, 24.305, 26.982, 28.086, 30.974, 32.065, 35.453,
  39.948, 39.098, 40.078, 44.956, 47.867, 50.942, 51.996, 54.938, 55.845, 58.933, 58.693, 63.546, 65.39, 69.723, 72.64, 74.922, 78.96, 79.904, 83.8,
  85.468, 87.62, 88.906, 91.224, 92.906, 95.94, 98, 101.07, 102.906, 106.42, 107.868, 112.411, 114.818, 118.71, 121.76, 127.6, 126.905, 131.293,
  132.906, 137.327, 138.906, 140.116, 140.908, 144.24, 145, 150.36, 151.964, 157.25, 158.925, 162.5, 164.93, 167.259, 168.934, 173.04, 174.967, 178.49,
  180.948, 183.84, 186.207, 190.23, 192.217, 195.078, 196.967, 200.59, 204.383, 207.2, 208.98, 209, 210, 222, 223, 226, 227, 232.038, 231.036, 238.029,
  237, 244, 243, 247, 247, 251, 252, 257, 258, 259, 266, 267, 268, 269, 270, 277, 278, 281, 282, 285, 286, 289, 290, 293, 294, 294]
const valences = [1, 2, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 2, 2, 1, 1, 1, 1, 1,
  0, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var cnv = {}
var ctx1 = {}
function doOnLoad() {
  getinput(1)
  elemsInit()
  cnv = document.getElementById('myCanvas1')
  ctx1 = cnv.getContext('2d')
  ctx1.fillStyle = '#000000'
  ctx1.save()
}
cnv = document.getElementById('myCanvas1')
ctx1 = cnv.getContext('2d')
ctx1.fillStyle = '#000000'
ctx1.save()
function displayValence(elem, ctx) {
  var w = cnv.width
  cnv.width = 1
  cnv.width = w
  ctx.restore()
  ctx.font = '18px Arial'
  ctx.fillStyle = '#000000'
  switch (elem._valence) {
    case 8:
      circle(98, 66, ctx)
      circle(86, 66, ctx)
      circle(72, 56, ctx)
      circle(72, 44, ctx)
      circle(86, 34, ctx)
      circle(98, 34, ctx)
      circle(111, 44, ctx)
      circle(111, 56, ctx)
      break
    case 7:
      circle(86, 66, ctx)
      circle(72, 56, ctx)
      circle(72, 44, ctx)
      circle(86, 34, ctx)
      circle(98, 34, ctx)
      circle(111, 44, ctx)
      circle(111, 56, ctx)
      break
    case 6:
      circle(72, 56, ctx)
      circle(72, 44, ctx)
      circle(86, 34, ctx)
      circle(98, 34, ctx)
      circle(111, 44, ctx)
      circle(111, 56, ctx)
      break
    case 5:
      circle(72, 44, ctx)
      circle(86, 34, ctx)
      circle(98, 34, ctx)
      circle(111, 44, ctx)
      circle(111, 56, ctx)
      break
    case 4:
      circle(86, 34, ctx)
      circle(98, 34, ctx)
      circle(111, 44, ctx)
      circle(111, 56, ctx)
      break
    case 3:
      circle(98, 34, ctx)
      circle(111, 44, ctx)
      circle(111, 56, ctx)
      break
    case 2:
      circle(111, 44, ctx)
      circle(111, 56, ctx)
      break
    case 1:
      circle(111, 56, ctx)
      break
    default:
      ctx.fillText('Valence Unknown', 10, 55)
      break
  }
  if (elem._abbr.length === 1 && elem._valence !== 0) {
    ctx.fillText(' '+elem._abbr, 80, 55)
  } else if (elem._abbr.length === 2 && elem._valence !== 0) {
    ctx.fillText(elem._abbr, 80, 55)
  }
}

document.onkeypress = function (e) {
  e = e || window.event
  if (e.key === 'Enter') {
    document.getElementById('submit').click()
  }
}
function circle(x, y, context) {
  context.moveTo(x + 5, y)
  context.arc(x, y, 5, 0, 2 * Math.PI)
  context.stroke()
}

const elements = {}
var i = 0
const elems = []
class Element {
  constructor(name, abbr, atNum, atWght, valence) {
    this._abbr = abbr
    this._num = atNum
    this._name = name
    this._mass = atWght
    this._valence = valence
    elements[this._num] = this
  }

  shortexplanation() {
    if (this._valence === 1) {
      return `${this._name.fontcolor('blue')}'s abbreviation is ${this._abbr.fontcolor('blue')}. <br> It has an atomic number of 
      ${this._num.toString().fontcolor('blue')}, which means it has that many protons (and the same number of electrons in a neutral atom).
      <br> It has an average atomic mass of ${this._mass.toString().fontcolor('blue')}, which is the number of protons and neutrons in that atom.
      <br>You can find the number of neutrons by subtracting the atomic number.<br> This atom has ${this._valence.toString().fontcolor('blue')} valence 
      electron.<br>The valence electrons of an atom are how many electrons it has in its outer shell.`
    } if (this._valence === 0) {
      return `${this._name.fontcolor('blue')}'s abbreviation is ${this._abbr.fontcolor('blue')}. <br> It has an atomic number of 
      ${this._num.toString().fontcolor('blue')}, which means it has that many protons (and the same number of electrons in a neutral atom). <br> 
      It has an average atomic mass of ${this._mass.toString().fontcolor('blue')}, which is the number of protons and neutrons in that atom.<br>You can 
      find the number of neutrons by subtracting the atomic number.<br> We don't know how many valence electrons this atom has.<br>The valence electrons 
      of an atom are how many electrons it has in its outer shell.`
    } else {
      return `${this._name.fontcolor('blue')}'s abbreviation is ${this._abbr.fontcolor('blue')}. <br> It has an atomic number of 
      ${this._num.toString().fontcolor('blue')}, which means it has that many protons (and the same number of electrons in a neutral atom). <br> 
      It has an average atomic mass of ${this._mass.toString().fontcolor('blue')}, which is the number of protons and neutrons in that atom.<br>You can 
      find the number of neutrons by subtracting the atomic number.<br> This atom has ${this._valence.toString().fontcolor('blue')} valence electrons.
      <br>The valence electrons of an atom are how many electrons it has in its outer shell.`
    }
  }
}

while (i < names.length) {
  eval('const ' + names[i] + ' = new Element(\'' + names[i] + '\', \'' + abbrs[i] + '\',  ' + (i + 1) + ', ' + masses[i] + ', ' + valences[i] + ')')
  i++
}
function openTab (evt, tabName) {
  var i, tabContent, tabLinks

  tabContent = document.getElementsByClassName('tabcontent')
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none'
  }

  tabLinks = document.getElementsByClassName('tablinks')
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '')
  }

  document.getElementById(tabName).style.display = 'block'
  evt.currentTarget.className += ' active'
}
function getinput(value) {
  var paragraph = document.getElementById('basDesc')
  var check = Number(value)
  if (isNaN(check)) {
    console.log('not a number')
  } else {
    value = Number(value)
  }
  if (typeof value === 'number') {
    console.log('is number')
    ctx1.clearRect(0, 0, cnv.width, cnv.height);
    displayValence(elements[value], ctx1)
    paragraph.innerHTML = elements[value].shortexplanation()
    setCurrentById(value)
    document.getElementById('myInput').value = ''
  } else if (typeof value === 'string') {
    if (value.length <= 2) {
      console.log('is abbr')
      for (var key in elements) {
        if (elements[key]._abbr.toUpperCase() === value.toUpperCase()) {
          ctx1.clearRect(0, 0, cnv.width, cnv.height);
          paragraph.innerHTML = elements[key].shortexplanation()
          document.getElementById('myInput').value = ''
          displayValence(elements[key], ctx1)
          setCurrentById(key)
          break
        }
      }
    } else {
      console.log('is name')
      for (key in elements) {
        if (elements[key]._name.toUpperCase() === value.toUpperCase()) {
          ctx1.clearRect(0, 0, cnv.width, cnv.height);
          paragraph.innerHTML = elements[key].shortexplanation()
          document.getElementById('myInput').value = ''
          setCurrentById(key)
          displayValence(elements[key], ctx1)
          document.getElementById()
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
function getElemsByClass(clas) {
  var returns = []
  var classes = document.getElementsByClassName('element')
  for (var cls = 0; cls < classes.length; cls++) {
    if (classes.item(cls).className.includes(clas)) {
      returns.push(classes[cls])
    }
  }
  return returns
}
function getClassList(element) {
  return element.className.split(' ')
}
function setCurrentById(newElem) {
  var currentCurrent = getElemsByClass('current')
  for (var gg = 0; gg < currentCurrent.length; gg++) {
    var classList = getClassList(currentCurrent[gg])
    currentCurrent[gg].className = classList.slice(0, classList.indexOf('current')).join(' ')
  }
  var newElemPush = getClassList(document.getElementById(newElem))
  newElemPush.push('current')
  document.getElementById(newElem).className = newElemPush.join(' ')
}
function boom(param) {
  switch (param) {
    case 'jeff':
      console.log('jeff')
      break
    case 'bob':
      console.log('bob')
      break
    default:
      console.log('you got noped')
      break
  }
}

function alphaDecay () {
  var inner = document.getElementById('radioP').innerHTML
  var m = Number(inner.slice(inner.indexOf('<sup>') + 5, inner.indexOf('</sup>')))
  var e = Number(inner.slice(inner.indexOf('<sub>') + 5, inner.indexOf('</sub>')))
  if (m <= 4 || e <= 2) {
    return
  }
  var newm = m - 4
  var newe = e - 2
  document.getElementById('radioP').innerHTML = `<sup>${newm}</sup><sub>${newe}</sub>${elements[newe]._abbr}`
  document.getElementById('isotope').value = elements[newe]._name.toLowerCase() + '-' + newm
}

function betaDecay () {
  var inner = document.getElementById('radioP').innerHTML
  var m = Number(inner.slice(inner.indexOf('<sup>') + 5, inner.indexOf('</sup>')))
  var e = Number(inner.slice(inner.indexOf('<sub>') + 5, inner.indexOf('</sub>')))
  var newe = e + 1
  if (newe > m) {
    return
  }
  document.getElementById('radioP').innerHTML = `<sup>${m}</sup><sub>${newe}</sub>${elements[newe]._abbr}`
  document.getElementById('isotope').value = elements[newe]._name.toLowerCase() + '-' + m
}

function halfLife (amount, hmh) {
  for (var i = 0; i < hmh; i++) {
    amount = amount / 2
  }
  document.getElementById('radioP').innerHTML = `${hmh} halflifes have passed. Your element now has ${amount} grams left`
}

function isotope () {
  var iso = document.getElementById('isotope')
  var isoVal = iso.value
  var isoArr = isoVal.split(/[-\s]/)
  var m = isoArr[1]
  var e = 0
  for (var i in elements) {
    if (isoArr[0].toLowerCase() === elements[i]._name.toLowerCase()) {
      e = i
    }
  }
  if (e === 0) {
    return
  }
  document.getElementById('radioP').innerHTML = `<sup>${m}</sup><sub>${e}</sub>${elements[e]._abbr}`
}
