const total = document.getElementById('total')
const bill = document.getElementById('bill')
const procents = document.getElementById('procent')
const calcprocents = document.getElementById('calcprocent')
const calctotal = document.getElementById('calctotal')
function procent_value() {



    return Number(bill.value)/Number(procents.value)/100
}
procent_value()


function totalValue (){

    return  (Number(bill.value)/Number(procents.value))/100+Number(bill.value)
}

let regex = /[0-9]/
console.log(regex)
total.addEventListener('click',()=>{
    if (bill.value !== regex || procents.value !== regex ){
        calcprocents.value = `${procent_value()}`
        calcprocents.style.backgroundColor = 'green'
        calctotal.value = `${totalValue()}`
        calctotal.style.backgroundColor = 'green'
    }
    else if (bill.value ===NaN || procents.value ===NaN ) {
        calcprocents.style.backgroundColor = 'red'

        calctotal.style.backgroundColor = 'red'

    }

})