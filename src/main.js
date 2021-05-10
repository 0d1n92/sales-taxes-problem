
let counterOutput = 0;

print(input1)
print(input2)
print(input3)


function print(array) {

  let text = "";

  let totalTax = 0;

  let CardTotal = 0;

  counterOutput++;

  const containerUl = document.getElementById("output");

  containerUl.innerHTML += `<li><strong>OUTPUT ${counterOutput}<strong></li>`

  
  array.forEach(element => {

    totalTax += element.taxes;


    CardTotal += parseFloat(element.totalPriceWithTaxWithTax);


  if (element._importated) {
    
   
    text = `<li> ${element._qty} importated ${element._name} at ${element.totalPriceWithTaxWithTax}</li>`;
    

  } else {

    text = `<li>${element._qty} ${element._name} at ${element.totalPriceWithTaxWithTax}</li>`;
  }
  
    

    containerUl.innerHTML+= text;

  });

  

  containerUl.innerHTML += `<li>Sales Taxes ${totalTax.toFixed(2)}</li>`;

  containerUl.innerHTML += `<li>Total ${CardTotal.toFixed(2)}</li>`


}



