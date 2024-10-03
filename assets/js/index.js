let title =  document.querySelector("#description").value
let cost =  document.querySelector("#expense").value
let balance = document.querySelector("#balance")
let list = document.querySelector("#expense-list")

document.querySelector("#expense-form").addEventListener("submit", event => {
    event.preventDefault()



    document.querySelector("#expense-form").reset()
})