# Javascript Modul 2 Funktionen und Arrays

(a) Was liefert der folgende Sourcecode?
	A: Es wird ein alert "Hallo Welt" ausgegeben

(b) Was liefert folgender Sourcecode?
	A: Es wird ein alert "Hallo TGM" ausgegeben und die lokale Variable me wird auf "---" gesetzt.

(c) Was liefert folgender Sourcecode?
	A: Es werden die Quadratzahlen von 1 bis 100 in die Konsole geschrieben

(d) Formuliere die Summenfunktion (Berechnung der Summer aller Zahlen von 1 bis n vom letzten Übungsblatt als Funktion in JavaScript.
    Als Parameter bekommt diese Funktion den Wert n übergeben und liefert die entsprechende Summe als Resultat zurück.  
    Teste deine Funktion mit einer Benutzereingabe und gib das Ergebnis mittels alert() aus.

```javascript
A:	let eingabe = prompt("Geben Sie eine Zahl ein")
	
	function summenFunktion(let n){
		let resultat
		for(int i = 0; i < n;i++){
			resultat = resultat + i
		}
		return resultat
	}
	alert(summenFunktion(eingabe))

	
```

(e) Definiere einen Button und drei Eventhandler für das onclick, onmouse sowie onmousedown - Event, die mittels console.log verschiedene Ausgaben tätigen. Wann wird welcher Handler ausgeführt, bzw. in welcher Reihenfolge werden sie ausgeführt?

​    A: 

JavaScript:

```javascript
function click1(){
        console.log("onclick")
    }

    function up(){
        console.log("onmouseup")
    }

    function down(){
        console.log("onmousedown")
    }
```

 HTML:

```html
<html>
    <head>
        <title>Modul 2 Rajic Dejan</title>
        <script src="Modul 2.js"></script>
    </head>
    <body>
        <button onclick="click1()" onmouseup="up()" onmousedown="down()">Der Magische Button mit 3 funktionen</button>
    </body>
    
</html>
```

(f)

Lass dir wie im oberen Listing das Event-Objekt ausgeben.
Betrachte dessen Inhalt und beantworte die folgenden Fragen:
Wie lässt/lassen sich in einem Event handler...
• ...die aktuellen Bildschirmkoordinaten ermitteln?
• ...feststellen ob die alt-Taste gedrückt ist?
• ...das das Event auslösende Element ermitteln (Hint: engl.
source element?

​	A: Mit den Koordinaten clientX und clientY

​	A: AltKey: false

​	A: target: button und dann darüber hovern



(g) Erstelle eine Eventhandler für das onkeypress-Event
des <body>-Tags, der das aktuelle Event-Objekt mittels
console.log() ausgibt. Betrachte die Ausgabe und beantworte
die folgenden Fragen:
• Wie lässt sich die gedrückte Taste ermitteln? (Zwei verschie-
dene Arten)
• Welches Element ist zum Zeitpunkt des Drucks im Fokus?

​	(1) A: Indem man in den Console.log schaut oder in die erweiterten optionen schauen  z.B "code: Key"

​	(2) A: Der Button "expliciOriginalTarget: button"

(*h) Recherchiere zum Thema event bubbling zum Beispiel unter https://www.sitepoint.com/event-bubbling-javascript/ und fasse den Mechanismus mit eigenen Worten zusammen und beantworte folgende Fragen:

​       A: Beim event bubbling  wird versucht eine Funktion zu finden. Die suche nach der Funktion beginnt zuerst beim innersten Zielelement und erstreckt sich 		    immer weiter nach außen.

* In welcher Reihenfolge werden die gefundenen Eventhandler ausgeführt?
  * A: Zuerst kommt die capture phase, danach die target phase und als letztes die bubble phase
* Wie lässt sich die Ausführung von weiteren Eventhandlern unterbinden bzw weiter steuern?
  * A:	X
* Wie lässt sich bei einem Click auf ein <a href="..."> - Element damit verhindern, dass die Seite verlassen wird?
  * A: Indem der Link auf die derzeit aufgerufene Seite verweist

(i) Erstelle eine Funktion, die ein Array übergeben bekommt und ein neues Array zurückliefert, das die Elemente des alten Arrays in umgekehrter Reihenfolge 	   enthält. Verwende hierfür keine vorgefertigten Funktionen wie arr.reverse()
	

```javascript
let array = [1,2,3,4,5,6,7,8,9,10]

    function reverseArr(array){
        let temp =[array.length]
        let arrayLength = array.length
        for(let i = 0; i < array.length +1; i++, arrayLength--){
            temp[i] = array[arrayLength] 
        }
        return temp
    }
    alert(reverseArr(array))
```



