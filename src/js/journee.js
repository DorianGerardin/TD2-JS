class Journee {

		constructor(match1,match2,match3,match4) {
			this.match1 = match1;
			this.match2 = match2;
			this.match3 = match3;
			this.match4 = match4;
			this.played = false;
		}

		afficher() {
			let match1 = document.getElementById('match1');
          	match1.innerHTML = this.match1.affichage(); 
          	let match2 = document.getElementById('match2');
          	match2.innerHTML = this.match2.affichage(); 
          	let match3 = document.getElementById('match3');
          	match3.innerHTML = this.match3.affichage();
          	let match4 = document.getElementById('match4');
          	match4.innerHTML = this.match4.affichage();


		}

		jouer() {
			if (!this.played) {
				this.match1.jouer();
				this.match2.jouer();
				this.match3.jouer();
				this.match4.jouer();
				this.afficher();
				this.played = true;
				this.match1.maj_equipes();
				this.match2.maj_equipes();
				this.match3.maj_equipes();
				this.match4.maj_equipes();
			}
		}

}
