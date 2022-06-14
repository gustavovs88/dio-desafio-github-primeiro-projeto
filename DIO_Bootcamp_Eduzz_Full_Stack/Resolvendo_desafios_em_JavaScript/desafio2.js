
var l = 5
var c = 91

if (l % 2 === 0)
  if (c % 2 === 0) console.log(1);
  else console.log(0);
else if (  c % 2 !==  0  ) console.log(  1  );
 else console.log(   0  );      //complete o código nos espaços em branco



// refatorando


var l = 8
var c = 8

lineColumnMultiplication = l * c

islineColumnMultiplicationEven = lineColumnMultiplication %2 === 0 ? true : false

if (islineColumnMultiplicationEven)
  console.log(0);
else console.log(1);
