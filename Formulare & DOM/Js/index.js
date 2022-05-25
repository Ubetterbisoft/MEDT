//Globale Variablen
let breite = 500;
		
//Die Farbe soll deshalb global gespeicher werden, da die Function change_nf() diese setzt und die Function createPrintscreen dann auf diese globale Variable zugreifen können soll.
let farbe = "";


function spiceBar(wert){

	//der balken wird nicht zu groß wenn man einen großen wert eingibt
	wert = Number(wert);
	let reale_breite = 0;
	if(wert >= 4){
		reale_breite = (breite/5)*4;
	}else if(wert < 4 && wert> 0){
		reale_breite = (breite/5)*wert;
	}
	

    document.getElementById("Beschreibung").style.width = reale_breite + "px";

    document.getElementById("nf").value = wert;

    document.getElementById("x").value = wert;
		
    		if (wert>0&&wert <= 1)
			{ 	//blau
				document.getElementById("Beschreibung").style.backgroundColor="#0000FF";
				//setzen der globalen Variable für weitere Funktionen
				farbe = "#0000FF";

				
				
			}
			if (wert>1&&wert<=2)
			{	//grün
				document.getElementById("Beschreibung").style.backgroundColor="#00ff00";
				farbe = "##00ff00";
				
			}	
			if (wert>=3&&wert<4)
			{	//gelb
				document.getElementById("Beschreibung").style.backgroundColor="#ffff00";
				farbe = "#ffff00";
			}
			if(wert == 4){
				document.getElementById("Beschreibung").style.backgroundColor="#ff0000";
				farbe = "#ff0000";
			}	
			

}

function createPrintscreen(){
	let nname = window.document.bform.nname.value;
	let vname = window.document.bform.vname.value;
	let adresse = window.document.bform.adresse.value;
	let postleitzahl = window.document.bform.pzl.value;
	let geburtsdatum = window.document.bform.gebdat.value;
	let Geschlecht = window.document.bform.radio.value;
	let pizzen = window.document.bform.pizzen.value;

	let textarea = window.bform.text.value;
	let extras ="";
	document.bform.box.forEach(element =>{
		if(element.checked){
			extras += element.value + ", ";
		}
	});
	


	let schärfeslider = window.document.bform.Schärfeslider.value;
	
	let zusatzwünsche = window.document.bform.text.value;
	let string;
	if(Geschlecht === "m"){
		string = "Sehr geehrter Herr " +nname +" " +vname + " " +"Geboren am "+ +geburtsdatum +", "+adresse + postleitzahl+" " +"<br> Sie haben folgende Pizza bestellt:<br> "
		 + pizzen + " " +extras + " " + textarea + "<br> Vielen Dank für ihre Bestellung";
	}

	//Es fehlt das gleiche nur für weiblich und ohne angabe und das datum wird nicht ausgegeben


	
	document.getElementById("printscreen").innerHTML = string;
}