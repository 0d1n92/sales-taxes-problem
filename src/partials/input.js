/*dati input1*/

const book = new Good("Book", "book", 12.49, 2, false);

const cd = new Good("CD", "music CD", 14.99, 1, false);


const chocolate = new Good("chocolate bar", "food", 0.85, 1, false);

const card1 = [book, cd, chocolate]


/*dati input2*/

const profume = new Good("bottle of perfume", "perfume", 47.50, 1, true);


const chocolateBox = new Good("box of chocolates", "food", 10, 1, true);

const card2 = [chocolateBox, profume];


/*dati input3*/

const profume2 = new Good("bottle of perfume", "profume", 27.99, 1, true);

const profume3 = new Good("bottle of perfume", "profume", 18.99, 1, false);

const pills = new Good("packet of headache pills", "drug", 9.75, 1, false);

const chocolateBox2 = new Good("box of chocolates", "food", 11.25, 3, true);

const card3 = [profume2, profume3, pills, chocolateBox2];
