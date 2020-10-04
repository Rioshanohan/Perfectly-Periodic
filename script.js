class element {
    constructor(abbr, atNum){
        this._abbr = abbr;
        this._num = atNum;
    }
    get shortexplanation(){
        return "the atomic number of ";
    }
}

hydrogen = new element("H", 1);

console.log(hydrogen._abbr);
