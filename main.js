
class Good {

  
  
  constructor (name, category, price, qty, importated) {

    this._name = name.toString();

    this._category= category

    this._importated = importated;

    this._qty = this.isNumber(qty);

    this._price = this.isNumber(price);

    this.totalPrice = this.calcTax(this._category);

  }

 
  
  isNumber(x) {
    while(isNaN(x)) {

     price = prompt("price not a number add value number" );

    } 

    return x
  }

  calcTax(category) {

    let total = this._price * this._qty;

    if (category != "food" && category != "book" && category != "drug" ) {

   
      total += this.purchaseTax(this._price);

      if (this._importated) {
        
        if (this._qty > 1) {

          let tax = this.calcImportedTax(this._price) * this._qty;

          total += tax;

        } else {

        total += this.calcImportedTax(this._price);

        }

      }

    } else if (this._importated) {

      if (this._qty > 1) {

        let tax = this.calcImportedTax(this._price) * this._qty;

        total += tax;

      } else {

        total += this.calcImportedTax(this._price);

      }

    }
     

    return total.toFixed(2);

  }



precise(x) {
 let a= (Math.ceil(x * 20 ) / 20);

 return (a);

}



calcImportedTax (price) {

  let tax = price * 5 / 100;

  
 
  return (this.precise(tax));

}

purchaseTax(x) {
   let tax = x * 10 / 100;
 

    return (this.precise(tax));


}


  
 
}


/*dati output1*/

const book = new Good("Book","book", 12.49, 2, false);

const cd = new Good("CD", "music CD", 14.99, 1, false);


const chocolate = new Good("chocolate bar", "food", 0.85, 1, false);

const input1 = [book,cd, chocolate]

/*stampa output 1*/

print(input1)



/*dati output2*/



const profume = new Good("profume bottle", "profume", 47.50, 1, true);


const chocolateBox = new Good("chocolate box", "food", 10, 1, true);

const input2 = [profume,chocolateBox];

print(input2)

/*dati output3*/

const profume2 = new Good("profume bottle", "profume", 27.99, 1, true);

const profume3 = new Good("profume bottle", "profume", 18.99, 1, false);

const pills = new Good("packet of headache pills", "drug", 9.75, 1, false);

const chocolateBox2 = new Good("chocolate box", "food", 11.25, 3, true);

const input3 = [profume2, profume3, pills, chocolateBox2];

print(input3)



function print(array) {

  array.forEach(element => {


  if (element._importated) {
    
    console.log(`${element._qty} importated ${element._name} at ${element.totalPrice}`);

  } else {
    console.log(`${element._qty} ${element._name} at ${element.totalPrice}`);
  }

  });

}



