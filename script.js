import { names, abbrs, masses } from './vals.mjs'
function doOnLoad () {
  getinput(1)
  elemsInit()
  var cnv = document.getElementById('myCanvas')
  var ctx = cnv.getContext('2d')
  ctx.fillStyle = '#FF0000'
  ctx.arc(95, 50, 40, 0, 2 * Math.PI)
  ctx.stroke()
}

function circle (x, y, context) {
  context.moveTo(x + 5, y)
  context.arc(x, y, 5, 0, 2 * Math.PI)
}

const elements = {}
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
function boom (param) {
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
function generate (index) {
  console.log(`<td onclick='getinput(${index})' class='element' id='${elements[index]._num}'>${elements[index]._num}<br>${elements[index]._name}<br>${elements[index]._mass}</td>`)
}
for (i = 1; i <= 118; i++) {
  generate(i)
}
