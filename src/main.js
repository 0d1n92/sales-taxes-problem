
let counterOutput = 0;

let counterInput = 0;


printInput(card1);
printOutput(card1);

printInput(card2);
printOutput(card2);

printInput(card3);
printOutput(card3);



function printInput (array) {
  let text="";

  counterInput++;

  const containerUl = document.getElementById("input");

  containerUl.innerHTML += `<li><h2 class="output_title">INPUT ${counterInput}<h2></li>`

  array.forEach(element => {

    if (element._importated) {


      text = `<li> ${element._qty} importated of ${element._name} at ${element._price}</li>`;


    } else {

      text = `<li>${element._qty} ${element._name} at ${element._price}</li>`;
    }

    containerUl.innerHTML += text;

  });
    
}


function printOutput(array) {

  let text = "";

  let totalTax = 0;

  let CardTotal = 0;

  counterOutput++;

  const containerUl = document.getElementById("output");

  containerUl.innerHTML += `<li><h2 class="output_title">OUTPUT ${counterOutput}<h2></li>`

  
  array.forEach(element => {

    totalTax += element.taxes;

    //somma i totali di tutte le istanze trasormando la stringa in un numero a virgola mobile
    CardTotal += parseFloat(element.totalPriceWithTaxWithTax);


  if (element._importated) {
    
   
    text = `<li> ${element._qty} importated ${element._name} : ${element.totalPriceWithTaxWithTax}</li>`;
    

  } else {

    text = `<li>${element._qty} ${element._name} : ${element.totalPriceWithTaxWithTax}</li>`;
  }
  
    containerUl.innerHTML+= text;

  });

  containerUl.innerHTML += `<li>Sales Taxes :${totalTax.toFixed(2)}</li>`;

  containerUl.innerHTML += `<li>Total :${CardTotal.toFixed(2)}</li>`


}



