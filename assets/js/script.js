"use strict";
class LavoratoreAutonomo {
    constructor(codRedd, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        this.codRedd = codRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    calcInps() {
        let inps = Math.floor(this.redditoAnnuoLordo * 0.33);
        return inps;
    }
    calcIrpef() {
        let num = Number(`0.${this.tasseIrpef}`);
        let irpef = Math.floor(this.redditoAnnuoLordo * num);
        return irpef;
    }
    calcTotTasse() {
        let totTasse = this.calcIrpef() + this.calcInps();
        return totTasse;
    }
    redditoNetto() {
        let netto = this.redditoAnnuoLordo - this.calcTotTasse();
        return netto;
    }
}
class Notaio extends LavoratoreAutonomo {
}
let marco = new Notaio(2579, 200000, 33, 43);
console.log(marco.calcInps());
console.log(marco.calcIrpef());
console.log(marco.calcTotTasse());
console.log(marco.redditoNetto());
