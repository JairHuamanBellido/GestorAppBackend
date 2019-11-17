export declare class FinanceResults {
    tax: any;
    taxDiscount: any;
    TEP: any;
    discount: any;
    retention: number;
    totalAmmount: any;
    totalAmmountWithDiscount: any;
    TCEA: any;
    daysTaxDiscount: any;
    payday: any;
    discountDate: any;
    releaseDate: any;
    tep: any;
    constructor(totalAmmount: any, tea: any, payday: any, discountDay: any, releaseDate: any, tep: any);
    daysOfTaxDiscount: () => void;
    taxPeriod: () => void;
    taxDiscountPeriod: () => void;
    discountCalculate: () => void;
    totalAmmountCalculate: () => void;
    calculateTCEA: () => void;
}
