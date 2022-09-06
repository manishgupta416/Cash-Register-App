   
const billAmount = document.querySelector(".bill-amount")
const cashGiven = document.querySelector(".cash-given")
const checkBtn = document.querySelector(".btn-check")
const errMsg = document.querySelector(".error-msg")
const showOutput = document.querySelector(".output")
const noOfNotes = document.querySelectorAll(".no-of-notes")
const showReturnAmount = document.querySelector(".show-return")
const hide = document.querySelectorAll('.hide')
const nxtBtn = document.querySelector(".btn-next")
console.log(hide)
hide[0].style.display = "none"
hide[1].style.display = "none"
hide[2].style.display = "none"


console.log(billAmount)
nxtBtn.addEventListener('click' , function goNext () {
    if((billAmount.value != "") && (billAmount.value) == isNaN()  && (billAmount.value) >=0 ){
        nxtBtn.style.display = "none"
    hide[0].style.display = "block"
    hide[1].style.display = "block"
    hide[2].style.display = "block"
    showMessage("")
     } else{
        showMessage("Please input bill amount and amount must be greater than 0")
     }
}
)
    


const availableNotes = [2000,500,100,20,10,5,1]

checkBtn.addEventListener('click' , validateBillAndCashAmount)

function validateBillAndCashAmount () {
    hidemessage() 
    
    if(billAmount.value > 0 && cashGiven.value != "" && cashGiven.value>0 ){
        if(cashGiven.value >= billAmount.value) {
            console.log(cashGiven)
            const amountToBeReturned = cashGiven.value - billAmount.value
            showReturnAmount.innerText = "Return ₹ " +
            amountToBeReturned
            calculateChange(amountToBeReturned)

        }else{
            showMessage("Do you wanna wash plates?")
        }

    } else{
      
        showMessage("Invalid input value and (value must be greater than 0)")
    }
}

function calculateChange (amountToBeReturned ) {
    for (var i = 0; i < availableNotes.length; i++) {
        var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i])
        amountToBeReturned =(amountToBeReturned % availableNotes[i])
        noOfNotes[i].innerText = numberOfNotes
        
    }
}

function hidemessage () {
    errMsg.style.display = "none"
}

function showMessage(message) {
    errMsg.style.display = "block"
    errMsg.innerText = message
}