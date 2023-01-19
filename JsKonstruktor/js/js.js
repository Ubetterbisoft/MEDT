function Fahrzeug(geschwindigkeit, marke){
    this.geschwindigkeit = geschwindigkeit
    this.marke = marke
    this.fahren = function() {
        if(this.geschwindigkeit === "schnell"){
            console.log("Brumm Brumm Brumm Brumm Brumm Brumm Vrm tututu")
        }
        else if(this.geschwindigkeit === "langsam"){
            console.log("Brumm")
        }
    } 
}

 
function Auto (modell){
    this.modell = modell
}

function Fahrrad () {
    this.fahren = function(){
        if(this.geschwindigkeit === "langsam"){
            console.log("Honk Honk")
        }
    }
}

Auto.prototype = new Fahrzeug("rasend", "Mercedes c180 1999")
Fahrrad.prototype = new Fahrzeug("lahm", "Avigo")

var auto = new Auto("C")
var fahrrad = new Fahrrad()

console.log(auto)
console.log(fahrrad)
console.log("hier wurde ohne class gearbeitet")