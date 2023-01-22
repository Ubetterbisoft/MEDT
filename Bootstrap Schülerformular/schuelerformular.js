function check(){
  let name = document.getElementById("name").value
  let alter = document.getElementById("alter").value
  let eigenberechtigt = document.getElementById("eigenberechtigt").checked
  let email = document.getElementById("email").value
  let error = document.getElementById("errors");
  error.innerHTML = ""


  if(name == ""){
    error.innerHTML += "<p>Der Name darf nicht leer sein </p>"
    
  }
  if(alter < 0 || alter > 100){
    error.innerHTML +="<p>Das Alter muss zwischen 0 und 100 liegen!</p>"
  }

  if(eigenberechtigt == true && alter < 18){
    error.innerHTML += "<p>Eigenberechtigt darf nicht angehakt sein, wenn das alter unter 18 liegt!</p>"
  }

  if(!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)){
    error.innerHTML += "<p>Falsche E-Mail-Adresse!</p>"
  }
}
