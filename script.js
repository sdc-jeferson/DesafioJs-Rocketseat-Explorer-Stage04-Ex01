/*Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações! */

let numberOne = Number( prompt("Digite o valor do primeiro número : "))
let numberTwo = Number( prompt("Digite o valor do segundo número : "))


const sum = numberOne + numberTwo;
const subtraction = numberOne - numberTwo;
const multiplication = numberOne * numberTwo;
const division = numberOne / numberTwo;
  
alert(`A soma entre os valores informado é : ${sum}`);
alert(`A subtração entre os valores informado é : ${subtraction}`);
alert(`A multiplicação entre os valores informado é : ${multiplication}`);
alert(`A divisão entre os valores informado é : ${division}`);


//- Verifica se a soma dos dois números é par (ou ímpar)

if((sum)%2 == 0){
    alert("A soma dos dois números é par")
}else{
    alert("A soma dos dois números é ímpar")
}


//- Verifica se os dois números inseridos são iguais (ou diferentes).

if(numberOne == numberTwo){
    alert("Os numeros informados são iguais")
}else{
    alert("Os numeros informados são diferentes")
}
