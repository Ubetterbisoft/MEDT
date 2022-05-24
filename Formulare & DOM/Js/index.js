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