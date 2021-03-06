import promptSync from 'prompt-sync';

const scanner = promptSync();

var json = {
  soma: (firstValue, secondValue) => {return firstValue + secondValue},
  subtracao: (firstValue, secondValue) => {return firstValue - secondValue},
  multiplicacao: (firstValue, secondValue) => {return firstValue * secondValue},
  divisao: (firstValue, secondValue) => {return firstValue / secondValue},
}

const calc = () => {
 
  do {
    console.log("Operação: \n1- Soma\n2- Subtração\n3- Multiplicação\n4- Divisão\n5- Sair");
    var operation = parseInt(scanner())
    if(operation == 5) {
      console.log("Obrigada por utilizar nossa calculadora!");
      break;
    }
    
    console.log("Primeiro valor:")  
    let first = parseFloat(scanner())

    console.log("Segundo valor:")  
    let second = parseFloat(scanner())

    switch(operation){
      case 1: 
          console.log(json.soma(first, second));
           
          break;
      case 2:                
      		console.log(json.subtracao(first, second));
          
          break;
      case 3:
          console.log(json.multiplicacao(first, second));
           
          break;
      case 4:
          console.log(json.divisao(first, second));
         
          break;
      default: 
      console.log("Opcao invalida")
      break

  }
  
  }while(operation !== 5)

 
  
  
}
calc()