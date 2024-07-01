// let nomes =
// function boasVindas(nome){
//     document.write(`sejam bem-vindo ${ nome}<br>`)
// }
// boasVindas();
function somar() {
    document.write(`O resultado é: ${Number(n1.value) + Number(n2.value)}
        
    `);
}

function testePrimo(numero) {
    let count = 0;
    for (let i = numero; i > 0; i--) {
        if (numero % i == 0) count++;
    }

    if (count == 2) {
        // console.log("É primo");
        return true;
    } else {
        // console.log("Não é primo")
        return false;
    }
}

// function contarPrimos(numero) {
//     let count = 0;
//     let primos = [];
//     for (let i = numero; i > 0; i--) {
//         if (testePrimo(i)) {
//             primos.push(i);
//             count++;
//         }
//     }
//     console.log(
//         `Existem ${count} números primos de 1 à ${numero}:  [${primos.reverse()}]`
//     );
// }
function somar(){
    document.write( `<h1>O resultado é: ${Number(n1.value) + Number(n2. value)}</h1>`);
}
function subtrair(numero1, numero2){
    return numero1 - numero2;
}
document.write(`<h1>A substituição deu: ${subtrair(3, 4)}</h1>`);