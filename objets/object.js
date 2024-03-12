class Personne {
    constructor(prenom, nom, feminin) {
        this.prenom = prenom;
        this.nom = nom;
        this.feminin = feminin;
    }
    
    get nomComplet() {
        return `${this.prenom} ${this.nom}`;
    }
    
    set nomComplet(prenomNom) {
        const tokens = this.prenomNom.split(/\b\s+(?!$)/);
        
        this.prenom = tokens[0];
        this.nom = tokens[1];
    }
    
    get civilite() {
        return (this.feminin) ? 'Mme' : 'M.';
    }
    
    describe() {
        return `${this.civilite} ${this.nomComplet}`;
    }
    
    static lister(personnes) {
        console.log(this.name);
        console.log('----------------------');
        
        for (let i = 0; i < personnes.length; i++) {
            console.log(personnes[i].describe());
        }
    }
}



class Employe extends Personne {
    constructor(prenom, nom, feminin, fonction) {
        super(prenom, nom, feminin);
        this.fonction = fonction;
    }
    
    describe() {
        return super.describe() + ` ${this.fonction}`;
    }
}



let tab1 = [
    new Personne("Marcel", "TROUSP", false),
    new Personne("Sophie", "RERHAX", true)
];

let tab2 = [
    new Employe("Marcel 1", "TROUSP 1", false, "Etudiant"),
    new Employe("Sophie 1", "RERHAX 1", true, "Etudiante")
];

let tab3 = [
    new Personne("Marcel 2", "TROUSP 2", false),
    new Employe("Sophie 2", "RERHAX 2", true, "Eleve")
];

Personne.lister(tab1);
Employe.lister(tab2);
Employe.lister(tab3);
