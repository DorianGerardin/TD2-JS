class Championnat {

	constructor(eq1,eq2,eq3,eq4,eq5,eq6,eq7,eq8) {
		this.tabEquipes = new Array();
		this.tabEquipes.push(eq1,eq2,eq3,eq4,eq5,eq6,eq7,eq8);
		this.numJournee = 1;
		this.journees = new Array();
		this.journees.push(new Journee(new Match(eq1,eq2),new Match(eq3,eq4),new Match(eq5,eq6),new Match(eq7,eq8))); // journée 01
		this.journees.push(new Journee(new Match(eq1,eq3),new Match(eq2,eq4),new Match(eq5,eq7),new Match(eq6,eq8))); // journée 02
		this.journees.push(new Journee(new Match(eq4,eq1),new Match(eq3,eq2),new Match(eq8,eq5),new Match(eq7,eq6))); // journée 03
		this.journees.push(new Journee(new Match(eq1,eq5),new Match(eq2,eq6),new Match(eq3,eq7),new Match(eq4,eq8))); // journée 04
		this.journees.push(new Journee(new Match(eq8,eq1),new Match(eq2,eq7),new Match(eq6,eq3),new Match(eq4,eq5))); // journée 05
		this.journees.push(new Journee(new Match(eq6,eq1),new Match(eq5,eq2),new Match(eq8,eq3),new Match(eq7,eq4))); // journée 06
		this.journees.push(new Journee(new Match(eq1,eq7),new Match(eq2,eq8),new Match(eq3,eq5),new Match(eq4,eq6))); // journée 07
		this.journees.push(new Journee(new Match(eq3,eq1),new Match(eq4,eq2),new Match(eq7,eq5),new Match(eq8,eq6))); // journée 08
		this.journees.push(new Journee(new Match(eq1,eq4),new Match(eq2,eq3),new Match(eq5,eq8),new Match(eq6,eq7))); // journée 09
		this.journees.push(new Journee(new Match(eq5,eq1),new Match(eq6,eq2),new Match(eq7,eq3),new Match(eq8,eq4))); // journée 10
		this.journees.push(new Journee(new Match(eq2,eq1),new Match(eq4,eq3),new Match(eq6,eq5),new Match(eq8,eq7))); // journée 11
		this.journees.push(new Journee(new Match(eq1,eq8),new Match(eq7,eq2),new Match(eq3,eq6),new Match(eq5,eq4))); // journée 12
		this.journees.push(new Journee(new Match(eq1,eq6),new Match(eq2,eq5),new Match(eq3,eq8),new Match(eq4,eq7))); // journée 13
		this.journees.push(new Journee(new Match(eq7,eq1),new Match(eq8,eq2),new Match(eq5,eq3),new Match(eq6,eq4))); // journée 14
	}

	jouer_journee(i) {
		this.journees[i-1].jouer();
	}

	afficher_journee(i) {
		this.journees[i-1].afficher();
	}

	afficher_classement() {
		let titre = document.getElementById('titres');
        titre.innerHTML = "<table><tr><td>Rang</td><td>Nom</td><td>Points</td><td>G</td><td>N</td><td>P</td><td>but Pour</td><td>but Contre</td><td>Diff</td></tr></table>";

        for (let i = 0; i < this.tabEquipes.length; i++) {
        	let titre = document.getElementById(i+1);
        	titre.innerHTML = "<table><tr><td>" + this.tabEquipes[i].classement + "</td><td>" + this.tabEquipes[i].nom + "</td><td>" + this.tabEquipes[i].nbPoints + "</td><td>" + this.tabEquipes[i].matchsW + "</td><td>" + this.tabEquipes[i].matchsN + "</td><td>" + this.tabEquipes[i].matchsL + "</td><td>" + this.tabEquipes[i].butPour + "</td><td>" + this.tabEquipes[i].butContre + "</td><td>" + (this.tabEquipes[i].butPour - this.tabEquipes[i].butContre) + "</td></tr></table>";
        }
	}

	classer_equipes() {
		this.tabEquipes.sort(function(a,b) {return b.evaluation - a.evaluation;});
		for (var i = 0; i < this.tabEquipes.length; i++) {
			this.tabEquipes[i].classement = i+1;
		}

	}

}
