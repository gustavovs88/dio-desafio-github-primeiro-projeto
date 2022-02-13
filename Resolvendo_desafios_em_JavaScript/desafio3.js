const tagsU = document.getElementsByTagName('u')

let wordsUnderlined = '';

for(let item of tagsU) {
    wordsUnderlined += item.textContent
}

console.log(wordsUnderlined)

const wordsUnderlinedPhrase = 'LIFE IS NOT A PROBLEM TO BE SOLVED';

let firstNcharacteres = (n) => {
    let firstNcharacteres = wordsUnderlinedPhrase.slice(0,n)
    console.log(firstNcharacteres)
}

firstNcharacteres(7)