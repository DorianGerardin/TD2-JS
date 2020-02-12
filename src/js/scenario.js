// variables correspondant à des balises importantes
let le = document.getElementById('listeEquipes');
let ee = document.getElementById('equipesEngagees');
let lc = document.getElementById('lancer_championnat');
let js = document.getElementById('journee_suivante');
let jj = document.getElementById('jouer_journee');
let fe = document.getElementById('fieldsetE');
let fj = document.getElementById('fieldsetJ');
let fc = document.getElementById('fieldsetC');
let pl = document.getElementById('plus');
let mo = document.getElementById('moins');

// la variable tableau des équipes par défaut
let tabEq = ["PSG","ASM","OM","ASSE","OL","FCN","EAG","RCS"];

// la variable Championnat
let chp;

// les styles d'affichages initiaux

// fieldset J, C et E
fj.style.display = "none";
fc.style.display = "none";
fe.style.display = "inline";

// div equipesEngagees et listeEquipes
ee.style.display = "inline";
le.style.display = "none";

// les images plus et moins
pl.style.display = "inline";
mo.style.display = "none";

// les boutons journée suivante et jouer journée
jj.style.display = "inline";
js.style.display = "none";

// on remplit les div des équipes engagées
for (var i = 0; i < tabEq.length; i++) {
	let equipes = document.getElementById("nomEqu" + (i+1));
	equipes.setAttribute("value", tabEq[i]);
}

ee.innerHTML = "équipes engagées : PSG - ASM - OL - OM - FCN - ASSE - MHSC - EAG";


// programmation des gestions d'événements par des fonctions anonymes

// clic sur l'image plus
pl.onclick = function() {
	pl.style.display = "none";
    mo.style.display = "inline";
    le.style.display = "inline";
    ee.style.display = "none";

}

// clic sur l'image moins
mo.onclick = function() {
	pl.style.display = "inline";
    mo.style.display = "none";
    le.style.display = "none";
    ee.style.display = "inline";
    ee.innerHTML = "équipes engagées : ";
    for (var i = 0; i < tabEq.length; i++) {
		let equipes = document.getElementById("nomEqu" + (i+1));
		ee.innerHTML += equipes.value + " - ";
	}
	ee.innerHTML = ee.innerHTML.substr(0, ee.innerHTML.length-3);
}

// clic sur le bouton lancer championnat
lc.onclick = function() {

	let nom1 = document.getElementById("nomEqu1");
	eq1 = new Equipe(nom1.value);
	let nom2 = document.getElementById("nomEqu2");
	eq2 = new Equipe(nom2.value);
	let nom3 = document.getElementById("nomEqu3");
	eq3 = new Equipe(nom3.value);
	let nom4 = document.getElementById("nomEqu4");
	eq4 = new Equipe(nom4.value);
	let nom5 = document.getElementById("nomEqu5");
	eq5 = new Equipe(nom5.value);
	let nom6 = document.getElementById("nomEqu6");
	eq6 = new Equipe(nom6.value);
	let nom7 = document.getElementById("nomEqu7");
	eq7 = new Equipe(nom7.value);
	let nom8 = document.getElementById("nomEqu8");
	eq8 = new Equipe(nom8.value);

	chp = new Championnat(eq1, eq2, eq3, eq4, eq5, eq6, eq7, eq8);

	chp.classer_equipes();

	chp.afficher_classement();

	let journee = document.getElementById("numJ");
	journee.innerHTML = "journée n°" + chp.numJournee;

	chp.afficher_journee(chp.numJournee);

	jj.style.display = "inline";
	js.style.display = "none";

	fj.style.display = "inline";
	fc.style.display = "inline";

	fe.style.display = "none";
	lc.style.display = "none";
			
}

jj.onclick = function() {
	chp.jouer_journee(chp.numJournee);

	jj.style.display = "none";

	if (chp.numJournee < 14) {
		js.style.display = "inline";
	}

	chp.classer_equipes();

	chp.afficher_classement();
}

js.onclick = function() {
	chp.numJournee++;

	chp.afficher_journee(chp.numJournee);

	let journee = document.getElementById("numJ");
	journee.innerHTML = "journée n°" + chp.numJournee;

	jj.style.display = "inline";
	js.style.display = "none";
}
