class Match {

	constructor(eq1,eq2) {
		this.eq1 = eq1;
		this.eq2 = eq2;
		this.res1 = 0;
		this.res2 = 0;
		this.played = false;
	}

	jouer() {
		this.res1 = Math.floor(Math.random()*4.5+0.5);
		this.res2 = Math.floor(Math.random()*4.5);
		this.played = true;
	}

	maj_equipes() {
		this.eq1.mise_a_jour(this.res1,this.res2);
		this.eq2.mise_a_jour(this.res2,this.res1);
	}

	affichage() {
		return this.eq1.nom + "  " + this.res1 + " - " + this.res2 + "  " + this.eq2.nom;
	}

}
