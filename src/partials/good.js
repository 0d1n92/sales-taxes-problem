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

    let total = this._price * this._qty;

    if (category != "food" && category != "book" && category != "drug") {


      total += this.purchaseTax(this._price);


      if (this._importated) {


          total += this.calcImportedTax(this._price);

      }

    } else if (this._importated) {

      total += this.calcImportedTax(this._price);

  

    }
    

    return total.toFixed(2);

  }



  precise(x) {
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


/*dati output1*/

const book = new Good("Book", "book", 12.49, 2, false);

const cd = new Good("CD", "music CD", 14.99, 1, false);


const chocolate = new Good("chocolate bar", "food", 0.85, 1, false);

const input1 = [book, cd, chocolate]


/*dati output2*/

const profume = new Good("profume bottle", "profume", 47.50, 1, true);


const chocolateBox = new Good("chocolate box", "food", 10, 1, true);

const input2 = [chocolateBox, profume];


/*dati output3*/

const profume2 = new Good("profume bottle", "profume", 27.99, 1, true);

const profume3 = new Good("profume bottle", "profume", 18.99, 1, false);

const pills = new Good("packet of headache pills", "drug", 9.75, 1, false);

const chocolateBox2 = new Good("chocolate box", "food", 11.25, 3, true);

const input3 = [profume2, profume3, pills, chocolateBox2];
