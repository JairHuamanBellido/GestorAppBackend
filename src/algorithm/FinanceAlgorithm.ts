import { dayNumber } from './DateAlgorithm';

export class FinanceResults {
    tax = null;
    taxDiscount = null;
    TEP = null;
    discount = null;
    retention = null;
    totalAmmount = null;
    totalAmmountWithDiscount = null;
    TCEA = null;
    daysTaxDiscount = null;
    payday = null;
    discountDate =  null;
    releaseDate =  null;

    constructor(totalAmmount,tea,payday,discountDay,releaseDate){
        this.tax  =  tea;
        this.releaseDate =  releaseDate;
        this.totalAmmount = totalAmmount;
        this.retention =  parseFloat((this.totalAmmount * 0.08).toFixed(2));
        this.payday = payday;
        this.discountDate =  discountDay;
        this.daysOfTaxDiscount();
        this.taxPeriod();
        this.taxDiscountPeriod();
        this.discountCalculate();
        this.totalAmmountCalculate();
        this.calculateTCEA();
    }
    daysOfTaxDiscount = () => {
        const leftDays = dayNumber(this.payday) - dayNumber(this.discountDate);

        this.daysTaxDiscount = leftDays ;
        console.log("dias descontados: "+ this.daysTaxDiscount);
    };

    taxPeriod = () => {
        this.tax= this.tax / 100;
        const TEP = Math.pow(1 + this.tax, this.daysTaxDiscount / 360) - 1;
        this.TEP = TEP;

        console.log("tasa del periodo: "+ this.TEP);
    };

    taxDiscountPeriod = () => {
        this.taxDiscount = this.TEP / (1 + this.TEP);
        console.log("tasa de descuento: "+  this.taxDiscount);
    };

    discountCalculate = () => {
        this.discount = parseFloat((this.totalAmmount * this.taxDiscount).toFixed(2));
        
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
                360 / this.daysTaxDiscount,
            ) - 1;

        this.TCEA = tcea;
    };
}
