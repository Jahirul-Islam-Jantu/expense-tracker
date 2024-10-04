// Select UI Elements
let description =  document.querySelector("#description").value
let cost =  document.querySelector("#expense").value
let expenseForm = document.querySelector("#expense-form")
let balance = document.querySelector("#balance")
let list = document.querySelector("#expense-list")
let submitBtn = document.querySelector("button")
let cancelEdit = document.querySelector("#cancelEditButton")
let title = document.querySelector("#formTitle")

// Initialize an array to store data in local storage
let transition = JSON.parse(localStorage.getItem('transition')) || []
let editTransitionId = null


// Submit Handler form
function submitHandler (e)  {
    e.preventDefault()

}















// event Listner

expenseForm.addEventListener("submit", submitHandler)
cancelEdit.addEventListener("click", cancelEditFn)

// document.querySelector("#expense-form").addEventListener("submit", event => {
//     event.preventDefault()
//
//
//
//     document.querySelector("#expense-form").reset()
// })