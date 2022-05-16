//Globale Variablen
let breite = 500;
		
//Die Farbe soll deshalb global gespeicher werden, da die Function change_nf() diese setzt und die Function createPrintscreen dann auf diese globale Variable zugreifen können soll.
let farbe = "";


function spiceBar(wert){


	wert = Number(wert);
	let reale_breite = (breite/100)*wert;

    document.getElementById("Beschreibung").style.width = reale_breite + "px";

    document.getElementById("nf").value = wert;

    document.getElementById("x").value = wert;

    if (wert>70)
			{ 	//grün
				document.getElementById("Beschreibung").style.backgroundColor="#00ff00";
				//setzen der globalen Variable für weitere Funktionen
				farbe = "#00ff00";
			}
			if (wert>50&&wert<71)
			{	//gelb
				document.getElementById("Beschreibung").style.backgroundColor="#ffff00";
				farbe = "#ffff00";
			}	
			if (wert>30&&wert<51)
			{	//orange
				document.getElementById("Beschreibung").style.backgroundColor="#ff8000";
				farbe = "#ff8000";
			}	
			if (wert<31)
			{	//rot
				document.getElementById("Beschreibung").style.backgroundColor="#ff0000";
				farbe = "#ff0000";
			}	

}