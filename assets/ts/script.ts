
abstract class LavoratoreAutonomo {
    codRedd: number;
    redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;
    constructor(codRedd: number, redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number) {
        this.codRedd = codRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef
    }
    calcInps(): number {
        let inps: number = Math.floor(this.redditoAnnuoLordo * 0.33);
        return inps
    }
    calcIrpef(): number {
        let num: number = Number(`0.${this.tasseIrpef}`);
        let irpef: number = Math.floor(this.redditoAnnuoLordo * num);
        return irpef
    }
    calcTotTasse(): number {
        let totTasse: number = this.calcIrpef() + this.calcInps()
        return totTasse
    }
    redditoNetto(): number {
        let netto: number = this.redditoAnnuoLordo - this.calcTotTasse()
        return netto
    }

}
class Notaio extends LavoratoreAutonomo {

}
let marco = new Notaio(2579, 200000, 33, 43);
console.log(
    marco.calcInps());
console.log(
    marco.calcIrpef());
console.log(
    marco.calcTotTasse());
console.log(
    marco.redditoNetto());
