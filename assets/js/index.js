document.querySelector("#expense-form").addEventListener("submit", event => {
    event.preventDefault()
    let title =  document.querySelector("#description").value
    let cost =  document.querySelector("#expense").value
    let total = document.querySelector("#totalExp")
    let list = document.querySelector("#expense-list")

    let value = {
        title: title,
        cost: cost
    }
    total.innerText= cost
    list.forEach((item)=>{
        item = `<li>${title} : ${cost} </li>`
        return item
    })


    document.querySelector("#expense-form").reset()
})