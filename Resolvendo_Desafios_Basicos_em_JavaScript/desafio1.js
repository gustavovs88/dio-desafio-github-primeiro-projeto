let lines = gets().split("\n");

let line = lines.shift().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);

if (     (B !== 0  &  B % A === 0)   | (A!==0 & A % B ===0)       ) 
    print(  'Sao Multiplos'  );                   //complete com a sua lógica
else 
    print(    'Nao sao Multiplos'     );

    console.log(0%3)