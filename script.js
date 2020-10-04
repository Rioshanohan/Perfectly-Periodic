class Element {
  constructor (abbr, atNum) {
    this._abbr = abbr
    this._num = atNum
  }
``
  get shortexplanation () {
    return 'the atomic number of '
  }
}

const hydrogen = new Element('H', 1)

console.log(hydrogen._abbr)
