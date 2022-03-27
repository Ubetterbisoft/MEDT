	let n = prompt("Geben Sie eine Zahl ein")
	
	function summenFunktion(n){
		let resultat = 0;
		for(let i = 0; i < n ; i++){
			resultat = resultat + i
		}
		return resultat
	}
	alert(summenFunktion(n))

    function click1(e){
        console.log("onclick")
        console.log(e);
    }

    function up(e){
        console.log("onmouseup")
        console.log(e)
    }

    function down(e){
        console.log("onmousedown")
        console.log(e)
    }

    function press(e){
        console.log(e)
    }



	