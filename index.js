let resultado;

let operador;
let numero1;
let numero2;




function calculadora(){

  operador = prompt('Escolha um dos operadores( dentre +,-,*,/,% e **):');
 numero1 = parseFloat(prompt('Insira o primeiro numero'));
 numero2 = parseFloat(prompt('Insira o segundo numero'));
}
while(!numero1 || !numero2){
    calculadora()
}

switch(operador) {
    case '+':
        resultado = numero1 + numero2;
        console.log(`{${numero1} + ${numero2} = ${resultado}`);
        break;

    case '-':
        resultado = numero1 - numero2;
        console.log(`{${numero1} - ${numero2} = ${resultado}`);
        break;

    case '*':
        resultado = numero1 * numero2;
        console.log(`{${numero1} * ${numero2} = ${resultado}`);
        break;

    case '/':
        resultado = numero1 / numero2;
        console.log(`{${numero1} / ${numero2} = ${resultado}`);
        break;

            case '%':
        resultado = numero1 % numero2;
        console.log(`{${numero1} % ${numero2} = ${resultado}`);
        break;

    case '**':
        resultado = numero1 ** numero2;
        console.log(`{${numero1} ** ${numero2} = ${resultado}`);
        break;

        default:
            console.log('Operador invalido,tente novamente');
            break;
}
