
// DOM взяли все из Html
const total = document.getElementById('total')
const bill = document.getElementById('bill')
const procents = document.getElementById('procent')
const calcprocents = document.getElementById('calcprocent')
const calctotal = document.getElementById('calctotal')


// Функция расчета процента
function procent_value() {

    return Number(bill.value)*Number(procents.value)/100
}
procent_value()

// Функция разчета total
function totalValue (){

    return  (Number(bill.value)*Number(procents.value))/100+Number(bill.value)
}

// let regex = /[0-9]/
// console.log(regex)

// Добавляем Event к кнопке при клике выполняеются функции.
total.addEventListener('click',()=>{

        calcprocents.value = `${procent_value()}`
        calcprocents.style.backgroundColor = 'green'
        calctotal.value = `${totalValue()}`
        calctotal.style.backgroundColor = 'green'




})
