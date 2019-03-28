/*abstract*/ class Kaczka {
    constructor(type) {
        this.type = type;
    }

    kwacz() {
        console.log('kwa kwa');
    }
    plywaj() {
        console.log('plyne...');
    }
    wyswietl() {
        console.log('Wygląda jak ' + this.type);
    }
    lec() {
        console.log('Lece');
    }
}

const kaczucha = new Kaczka('zwykla kaczka');
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl();
console.log(kaczucha);

class DzikaKaczka extends Kaczka {
    constructor() {
        super('dzika kaczka');
    }
}
const dzikaKaczucha = new DzikaKaczka();
dzikaKaczucha.kwacz();
dzikaKaczucha.plywaj();
dzikaKaczucha.wyswietl();
console.log(dzikaKaczucha);

class KrzyzowkaKaczka extends Kaczka {
    constructor() {
        super('krzyzowka');
    }
}
const krzyzoKaczucha = new KrzyzowkaKaczka();
krzyzoKaczucha.kwacz();
krzyzoKaczucha.plywaj();
krzyzoKaczucha.wyswietl();
console.log(krzyzoKaczucha);

class GumowaKaczka extends Kaczka {
    constructor() {
        super('gumowa');
    }
    lec() {
        console.log('gumowe kaczki nie potrafią latać :(');
    }
}

const gumowaKaczucha = new GumowaKaczka();
gumowaKaczucha.kwacz();
gumowaKaczucha.plywaj();
gumowaKaczucha.wyswietl();
gumowaKaczucha.lec();