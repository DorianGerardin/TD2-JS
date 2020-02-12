 // let eq1 = new Equipe("PSG");
 // eq1.nbPoints = 24;
 // eq1.matchsW = 6;
 // eq1.matchsL = 2;
 // eq1.matchsN = 3;
 // eq1.butPour = 17;
 // eq1.butContre = 8;


 let eq1 = new Equipe("PSG");
 let eq2 = new Equipe("FCN");
 let eq3 = new Equipe("OM");
 let eq4 = new Equipe("Racing");
 let eq5 = new Equipe("OL");
 let eq6 = new Equipe("FCT");
 let eq7 = new Equipe("MTP");
 let eq8 = new Equipe("TLS");

 let match1 = new Match(eq1, eq2);
 let match2 = new Match(eq3, eq4);
 let match3 = new Match(eq5, eq6);
 let match4 = new Match(eq7, eq8);

 let journee1 = new Journee(match1, match2, match3, match4);

 let chp = new Championnat(eq1, eq2, eq3, eq4, eq5, eq6, eq7, eq8);


 