class Good {

  constructor(name, category, price, qty, importated) {

    this.taxes = 0;

    this._name = name.toString();

    this._category = category

    this._importated = importated;

    this._qty = this.isNumber(qty);

    this._price = this.isNumber(price);

    this.totalPriceWithTaxWithTax = this.calcTax(this._category);

  }


  isNumber(x) {
    while (isNaN(x)) {

      price = prompt("price not a number add value number");

    }

    return x
  }


  calcTax(category) {
    
    //moltiplico il prezzo senza tasse per la quantità
    let total = this._price * this._qty;

    //filtro per cateforia (cibo, medicinali e libri non hanno aliquota al 10%)

    if (category != "food" && category != "book" && category != "drug") {

      //al tatale aggiungo l'aliquota al 10%
      total += this.purchaseTax(this._price);

      if (this._importated) {
          //se è importata aggiungo ache la tasse di importazione al 5%
          total += this.calcImportedTax(this._price);

      }

    } else if (this._importated) {
        //se è importata aggiungo ache la tasse di importazione al 5% anche se si tratta di categorie assenti da aliquota di vendita
      total += this.calcImportedTax(this._price);

    }
    
    //trasformo in stringa togliento i millesimi
    return total.toFixed(2);

  }



  precise(x) {
    //arrotondo allo 0.05 più vicino

    //c'è un'intervallo di 20 numeri tra 0 1 (0,05(1) - 0,10(2) - 0,15 -0,20...) ognuno di questi corrisponde ad un'intero con math ceil arrotondo al più vicino dividendo per venti operazione inversa ritorna il numero originalòe 
    let a = (Math.ceil(x * 20) / 20);

    return (a);

  }



  calcImportedTax(price) {

    let tax = price * 5 / 100;    
    
    tax = this.precise(tax);

    if (this._qty > 1) {

      tax *= this._qty;

    } 
 
    this.taxes = (this.taxes + tax);

    return tax;
  }



  purchaseTax(x) {
    
    let tax = x * 10 / 100;

    tax = this.precise(tax);

    if (this._qty > 1) {

      tax *= this._qty;

    }
    
    this.taxes = this.taxes + tax ;

    return tax;
  }

}


