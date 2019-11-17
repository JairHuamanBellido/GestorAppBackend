"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DateAlgorithm_1 = require("./DateAlgorithm");
let TEP_DICCIONARY = {
    "Diario": 1,
    "Quincenal": 15,
    "Mensual": 30,
    "Bimestral": 60,
    "Trimestral": 90,
    "Cuatrimestral": 120,
    "Semestral": 180,
    "Anual": 360
};
class FinanceResults {
    constructor(totalAmmount, tea, payday, discountDay, releaseDate, tep) {
        this.tax = null;
        this.taxDiscount = null;
        this.TEP = null;
        this.discount = null;
        this.retention = 0;
        this.totalAmmount = null;
        this.totalAmmountWithDiscount = null;
        this.TCEA = null;
        this.daysTaxDiscount = null;
        this.payday = null;
        this.discountDate = null;
        this.releaseDate = null;
        this.tep = null;
        this.daysOfTaxDiscount = () => {
            const leftDays = DateAlgorithm_1.dayNumber(this.payday) - DateAlgorithm_1.dayNumber(this.discountDate);
            this.daysTaxDiscount = leftDays;
            console.log('dias descontados: ' + this.daysTaxDiscount);
        };
        this.taxPeriod = () => {
            console.log(this.tax);
            this.tax = this.tax / 100;
            const TEP = Math.pow(1 + this.tax, this.daysTaxDiscount / TEP_DICCIONARY[this.tep]) - 1;
            this.TEP = TEP;
            console.log('tasa del periodo: ' + this.TEP);
        };
        this.taxDiscountPeriod = () => {
            this.taxDiscount = this.TEP / (1 + this.TEP);
            console.log('tasa de descuento: ' + this.taxDiscount);
        };
        this.discountCalculate = () => {
            this.discount = parseFloat((this.totalAmmount * this.taxDiscount).toFixed(2));
        };
        this.totalAmmountCalculate = () => {
            let valorNeto = this.totalAmmount - this.discount;
            this.totalAmmountWithDiscount = valorNeto - this.retention;
        };
        this.calculateTCEA = () => {
            let valorRecibido = this.totalAmmount - this.retention;
            let valorEntregadio = this.totalAmmountWithDiscount;
            let tcea = Math.pow(valorRecibido / valorEntregadio, TEP_DICCIONARY[this.tep] / this.daysTaxDiscount) - 1;
            this.TCEA = tcea;
        };
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
}
exports.FinanceResults = FinanceResults;
//# sourceMappingURL=FinanceAlgorithm.js.map