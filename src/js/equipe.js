class Equipe {

	constructor(nom) {
		this.nom = nom;
		this.classement = 1;
		this.nbPoints = 0;
		this.matchsW = 0;
		this.matchsN = 0;
		this.matchsL = 0;
		this.butPour = 0;
		this.butContre = 0;
		this.evaluation = Math.random();
	}

	evaluer() {
		this.evaluation = this.nbPoints * 10000 + (this.butPour - this.butContre) * 100 + this.butPour + Math.random;
		return this.evaluation;
	}

	affichage() {
		console.log("" + this.classement + " " + this.nom + " " + this.nbPoints + " " + this.matchsW + " " + this.matchsN + " " + this.matchsL + " " + this.butPour + " " + this.butContre + " " + (this.butPour-this.butContre));
	}


	mise_a_jour(bp,bc) {
		if (bp > bc) {
			this.matchsW++;
			this.nbPoints = this.matchsW * 3 + this.matchsN;
		}
		else if (bp < bc) {
			this.matchsL++;
			this.nbPoints = this.matchsW * 3 + this.matchsN;
		}
		else {
			this.matchsN++;
			this.nbPoints = this.matchsW * 3 + this.matchsN;
		}
		this.butPour += bp;
		this.butContre += bc;
		this.evaluer();
	}

}
