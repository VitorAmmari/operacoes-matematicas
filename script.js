function calcular() {
  let textFirstNumber = document.querySelector("input#primeiro")
  let textSecondNumber = document.querySelector("input#segundo")

  let firstNumber = Number (textFirstNumber.value)
  let secondNumber = Number (textSecondNumber.value)
  

  let sum = firstNumber + secondNumber
  let subtraction = firstNumber - secondNumber
  let multiplication = firstNumber * secondNumber
  let division = firstNumber / secondNumber
  let rest = firstNumber % secondNumber

  let resultado = document.querySelector ("div.resultado")

  resultado.innerHTML = `A soma dos dois numéros é: <span>${sum}</span></br>
  A subtração dos dois numéros é: <span>${subtraction}</span></br>
  A multiplicação dos dois numéros é: <span>${multiplication}</span></br>
  A divisão dos dois numéros é: <span>${division.toFixed(2)}</span></br>
  O resto da divisão dos dois numéros é: <span>${rest}</span></br>`
  
  if (sum % 2 == 0) {
    resultado.innerHTML += `A soma dos dois números é <span>par</span></br>`
  }
                        
  else {
    resultado.innerHTML += `A soma dos dois números é <span>impar</span></br>`
  }
                        
  if (firstNumber == secondNumber) {
    resultado.innerHTML += "Os números inseridos são <span>iguais</span></br>"
  }
                        
  else {
    resultado.innerHTML += "Os números inseridos são <span>diferentes</span></br>"
  }
}