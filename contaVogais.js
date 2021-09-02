
// let frase = ["a"]

// function contaVogais(valorDoText) {
//     for (let index = 0; index < valorDoText.length; index +1) {
//         if (valorDoText[index] === "a") {
//             console.log("a é uma vogal e aparece" + index + "vezes")
//          } //else if (valorDoText == "A" || valorDoText == "E" || valorDoText == "I" || valorDoText == "O" || valorDoText == "U") {
//         //     console.log(valorDoText + "é uma vogal")
//         // }
//     }
// }

// contaVogais(frase)

// const frase = ["jacarezada"]

// function contaVogais(palavra) {
//     let contador = 0

//     let strings = palavra.toString()

//     for (let i = 0; i <= strings.lenght; i++) {
//         if (strings[0] == "a") {
//             console.log("foi")
//         }
//     }

//     return contador
// }

// contaVogais(frase)
let $field = document.querySelector('.field')

const $button = document.querySelector('.button')

let $txt = document.querySelector('.texto')

let valor = 0

function contaVogais(str) {
    // let valor = 0;

    let frase = str.toLowerCase();

    for (var i = 0; i <= frase.length; i++) {
        if (frase[i] === "a" || frase[i] === "e" || frase[i] === "i" || frase[i] === "o" || frase[i] === "u") {
            valor++
        }
    }
    return valor;
}

function resetValue(){
    valor = 0
}

$button.addEventListener("click", function (e) {
    e.preventDefault()

   if ( contaVogais($field.value)){
    $txt.textContent = $field.value + ", tem " + valor + " vogais"
   }else{
    $txt.textContent = "Não há vogais ou está vazio, tente novamente"
   }
   resetValue()
})

