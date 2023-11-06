let clicPourAfficher = Quer



var clicAfficher = document.getElementById("id de la balise avec ta fleche"),

afficherTexte = document.getElementById("id de la balise cacher");

clicAfficher.addEventListener ("click", function (){

afficherTexte.style.display = "block";

clicAfficher.style.display = "none";

});