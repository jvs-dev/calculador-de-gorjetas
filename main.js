let bill = document.getElementById('bill')
let rate = document.getElementById('rate')
let persons = document.getElementById('persons')
let tip  = document.getElementById('tip')
let calculate = document.getElementById('calculate')

calculate.onclick = function () {
   porcentagem = rate.value/100
   porcentagem = bill.value*porcentagem
   porcentagem = porcentagem/persons.value
   tip.value = porcentagem
}
