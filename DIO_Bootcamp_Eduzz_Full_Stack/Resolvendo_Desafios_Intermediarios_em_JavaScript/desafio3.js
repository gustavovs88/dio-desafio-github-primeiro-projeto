let line = ["6", "6", "6", "6"];
let reguas = line.map((item) => parseInt(item));
let numeroAparelhos = reguas.reduce(
  (totalTomadas, tomadasRegua) => (totalTomadas += tomadasRegua),
  -3
);
console.log(numeroAparelhos);
//21
