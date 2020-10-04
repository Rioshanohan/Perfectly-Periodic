const elements = {}

class Element {
  constructor (name, abbr, atNum, atWght) {
    this._abbr = abbr
    this._num = atNum
    this._name = name
    this._atWght = atWght
    elements[this._abbr] = this
  }

  shortexplanation () {
    console.log(this._name + "'s atomic number is " + this._num)
  }
}

const hydrogen = new Element('Hydrogen', 'H', 1)

console.log(elements[hydrogen._abbr].toString())
