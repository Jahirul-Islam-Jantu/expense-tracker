// Select UI Elements
let descriptionInp =  document.querySelector("#description")
let costInp =  document.querySelector("#expense")
let expenseForm = document.querySelector("#expense-form")
let balance = document.querySelector("#balance")
let list = document.querySelector("#expense-list")
let submitBtn = document.querySelector("button")
let cancelEdit = document.querySelector("#cancelEditButton")
let title = document.querySelector("#formTitle")

// Initialize an array to store data in local storage
let transactions = JSON.parse(localStorage.getItem('transactions')) || []
let editTransitionId = null


// event Listner

expenseForm.addEventListener("submit", submitHandler)
cancelEdit.addEventListener("click", cancelEditFn)

// set items on local storage
function saveTransactionsToLocalStorage(){
    localStorage.setItem("transactions", JSON.stringify(transactions))
}
// Render transaction
function renderTransactions(){
    list.innerHTML = "";
    transactions.forEach(transaction => {
        const li = document.createElement("li");
        li.classList.add(transaction.cost > 0 ? "income" : "expense")
        li.innerHTML = `
                ${transaction.description} <span>${transaction.cost > 0 ? "+" : "-"} $ ${Math.abs(transaction.cost)}</span>
            <div>
            <button class="btn btn-outline-warning " onclick="editTransaction(${transaction.id})"> Edit </button>
            <button class="btn btn-outline-danger " onclick="deleteTransaction(${transaction.id}) "> x </button>
            </div>
        `
        list.appendChild(li)
    })
}

// edit and delete fn

function deleteTransaction(id){
    const confirmation = confirm("Are you sure you want to delete this transaction?")

    if (confirmation) {
        transactions =  transactions.filter((transaction) => transaction.id !== id)
        saveTransactionsToLocalStorage()
        renderTransactions()
        updateExpense()
    }

}

function editTransaction(id){
    const transaction = transactions.find((t) => t.id === id)
    descriptionInp.value = transaction.description
    costInp.value = transaction.cost

    // change the button text and form title to indicate edit mode
    submitBtn.textContent = "Update Transaction"
    title.textContent = "Edit Transaction"
    editTransitionId = id // reset edit mode
    cancelEdit.style.display = "inline"

}

function cancelEditFn(){
    descriptionInp.value = "";
    costInp.value = "";

    submitBtn.textContent = "Add Transaction";
    title.textContent = "Add New Transaction"
    editTransitionId = null
    cancelEdit.style.display = "none"
}

// Update Balance
function updateExpense(){
    const amount =  transactions.map(transaction => transaction.cost)
    const totalAmount = amount.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    balance.innerText = totalAmount
}


// Submit Handler form
function submitHandler (e)  {
    e.preventDefault()
    const descriptionT = descriptionInp.value
    const costE =  +costInp.value

    if (descriptionT.trim()==="" || costE === 0) {
        alert("Please enter a valid description and value")
        return;
    }

    if ( editTransitionId !== null){
        // edit transaction if transaction value is not null
        const transaction = transactions.find((t)=>t.id ===editTransitionId)
        transaction.description = descriptionT
        transaction.cost = costE
        submitBtn.textContent = "Add Transaction"
        title.textContent = "Add New Transaction"
        editTransitionId = null // reset edit mode
        cancelEdit.style.display = "none"
    }else{
        //add new transaction
        const transaction = {
            id: Date.now(),
            description: descriptionT,
            cost: costE
        }
            transactions.push(transaction)
    }

    saveTransactionsToLocalStorage()
    renderTransactions()
    updateExpense()

// Clear input form

descriptionInp.value = ""
costInp.value = ""

}













