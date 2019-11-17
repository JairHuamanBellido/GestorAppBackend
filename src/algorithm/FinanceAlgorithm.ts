import { dayNumber } from './DateAlgorithm';

let TEP_DICCIONARY = {
    "Diario":1,
    "Quincenal":15,
    "Mensual":30,
    "Bimestral":60,
    "Trimestral":90,
    "Cuatrimestral":120,
    "Semestral":180,
    "Anual":360


}

export class FinanceResults {
    tax = null;
    taxDiscount = null;
    TEP = null;
    discount = null;
    retention = 0;
    totalAmmount = null;
    totalAmmountWithDiscount = null;
    TCEA = null;
    daysTaxDiscount = null;
    payday = null;
    discountDate = null;
    releaseDate = null;
    tep = null;
    constructor(totalAmmount, tea, payday, discountDay, releaseDate,tep) {
        this.tax = tea;
        this.releaseDate = releaseDate;
        this.totalAmmount = totalAmmount;
        if (this.totalAmmount >= 1500) {
            this.retention = parseFloat((this.totalAmmount * 0.08).toFixed(2));
        }
        this.payday = payday;
        this.tep = tep;
        this.discountDate = discountDay;
        this.daysOfTaxDiscount();
        this.taxPeriod();
        this.taxDiscountPeriod();
        this.discountCalculate();
        this.totalAmmountCalculate();
        this.calculateTCEA();
    }
    daysOfTaxDiscount = () => {
        const leftDays = dayNumber(this.payday) - dayNumber(this.discountDate);

        this.daysTaxDiscount = leftDays;
        console.log('dias descontados: ' + this.daysTaxDiscount);
    };

    taxPeriod = () => {
        console.log(this.tax);
        this.tax = this.tax / 100;
        const TEP = Math.pow(1 + this.tax, this.daysTaxDiscount / TEP_DICCIONARY[this.tep]) - 1;
        this.TEP = TEP;

        console.log('tasa del periodo: ' + this.TEP);
    };

    taxDiscountPeriod = () => {
        this.taxDiscount = this.TEP / (1 + this.TEP);
        console.log('tasa de descuento: ' + this.taxDiscount);
    };

    discountCalculate = () => {
        this.discount = parseFloat(
            (this.totalAmmount * this.taxDiscount).toFixed(2),
        );
    };

    totalAmmountCalculate = () => {
        let valorNeto = this.totalAmmount - this.discount;

        this.totalAmmountWithDiscount = valorNeto - this.retention;
    };

    calculateTCEA = () => {
        let valorRecibido = this.totalAmmount - this.retention;
        let valorEntregadio = this.totalAmmountWithDiscount;

        let tcea =
            Math.pow(
                valorRecibido / valorEntregadio,
                TEP_DICCIONARY[this.tep] / this.daysTaxDiscount,
            ) - 1;

        this.TCEA = tcea;
    };
}
