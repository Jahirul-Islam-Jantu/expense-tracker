// Select UI Elements
let description =  document.querySelector("#description").value
let cost =  document.querySelector("#expense").value
let formInput = document.querySelector("#expense-form")
let balance = document.querySelector("#balance")
let list = document.querySelector("#expense-list")
let submitBtn = document.querySelector("button")
let cancelEdit = document.querySelector("#cancelEditButton")
let title = document.querySelector("#formTitle")

// Initialize an array to store data in local storage
let transition = JSON.parse(localStorage.getItem('transition')) || []
let editTransitionId = null

function handleTransction















// event Listner
formInput.addEventListener("submit", handleTransction)
cancelEdit.addEventListener("click", cancelEditFn)

// document.querySelector("#expense-form").addEventListener("submit", event => {
//     event.preventDefault()
//
//
//
//     document.querySelector("#expense-form").reset()
// })