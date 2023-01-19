class Fahrzeug{
    constructor(marke, geschwindigkeit){
        this.geschwindigkeit = geschwindigkeit
        this.marke = marke
    }
    fahren(){
        if(this.geschwindigkeit === "schnell"){
            console.log("Brumm Brumm Brumm Brumm Brumm Brumm Vrm tututu")
        }
        else if(this.geschwindigkeit === "langsam"){
            console.log("Brum")
        }
    }
}
class Auto extends Fahrzeug{
    constructor(marke, modell, geschwindigkeit){
        super(marke, geschwindigkeit)
        this.modell = modell
    }
}

class Fahrrad extends Fahrzeug{
    constructor(marke, geschwindigkeit){
        super(marke, geschwindigkeit)
    }
}

var auto = new Auto("Mercedes", "rasend", "c180 1999")
var fahrrad = new Fahrrad("lahm", "Avigo") 
console.log(auto)
console.log(fahrrad)
console.log("Es wurde hier mit class gearbeitet")
