
const items = []
let bal = 0
let budget = 0
let rand = 0
let expense = 0
let sinit = 0
let Gndex;


const bidy = () => {
    const Budgety = document.getElementById('sewa').value
    if (Budgety != '') {
        budget = Number(Budgety)
        bal = Number(Budgety)
        error1.style.display = 'none'
        document.getElementById('sew').value = ""
    } else {
        error1.style.display = 'block'
    }
    console.log(budget);
    showCase.innerHTML = '$' + ` ${budget}` + '<br>' + '<p style="font-size:15px; font-weight: bold;font-family:sans-serif;">Budget</p>';

    sune.innerHTML = '$' + ` ${bal}` + '<br>' + '<p style="font-size:15px; font-weight: bold;font-family:sans-serif;">Balance</p>';
    sewa.value = ''
}







const ipeedad = () => {
    if (arr.value == '' || sew.value == '' || raa.value == '') {
        error2.style.display = 'block'
    } else {
        error2.style.display = 'none'
        let bud = {
            name: arr.value,
            amount: sew.value,
            quantity: raa.value
        }
        if (budget > 0 && bal > 0) {
            if ((bud.amount * bud.quantity) <= bal) {
                items.push(bud)

                let spend = Number(document.getElementById('sew').value)
                expense += spend * bud.quantity
                bal = bal - (document.getElementById('sew').value * bud.quantity)
                rand = bud.amount * bud.quantity
                caseDew.innerHTML = '$' + expense + '<br>' + '<p style="font-size:15px; font-weight: bold;font-family:sans-serif;">Expense</p>';
                sune.innerHTML = '$' + ` ${bal}` + '<br>' + '<p style="font-size:15px; font-weight: bold;font-family:sans-serif;">Balance</p>';
                showa()

                arr.value = ''
                sew.value = ''
                raa.value = ''
            } else {
                alert("Insufficient funds")
            }

        } else {
            alert("put a budget first")
        }
    }

}

const nay = (i) => {


    let confirmation = confirm("Are you sure you want to proceed, unimaginable bad things will happen o.")
    if (confirmation == true) {
        items.splice(i, 1)

        bal = bal + rand
        sune.innerHTML = '$' + `${bal}` + '<br>' + '<p style="font-size:15px; font-weight: bold;font-family:sans-serif;">Balance</p>';

        expense = expense - rand

        caseDew.innerHTML = '$' + expense + '<br>' + '<p style="font-size:15px; font-weight: bold;font-family:sans-serif;">Expense</p>';
        showa()


    }
}
const ditItem = (i) => {
    Gndex = i
}

const dit = () => {
    let bud = {
        name: narr.value,
        amount: nsew.value,
        quantity: nraa.value
    }
    items.splice(Gndex, 1, bud)
    showa()
    sinit = bud.amount * bud.quantity
    bal = 0
    bal = budget - sinit
    expense = sinit - expense
    sune.innerHTML = '$' + `${bal}` + '<br>' + '<p style="font-size:15px; font-weight: bold;font-family:sans-serif;">Balance</p>';
    caseDew.innerHTML = '$' + expense + '<br>' + '<p style="font-size:15px; font-weight: bold;font-family:sans-serif;">Expense</p>';

}
const showa = () => {
    discreet.innerHTML = ''
    items.map((item, index) => {
        discreet.innerHTML += `
            <div className="row">
                <div class='col mx-2'>
                    <div class="card p-3 mx-auto my-2">
                    <div class='card-title fs-2 fw-bold'>${index + 1}. ${item.name}</div>
                    <div class='card-body fs-1 fw-bolder'>
                        <span class="me-5">$ ${item.amount}</span>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning" onclick="ditItem(${index})">Edit</button>
                        <button class="btn btn-danger" onclick="nay(${index})">Delete</button>
                    </div>
                    <div class='card-footer'>Quantity: ${item.quantity}</div>
                    <div class='card-footer'>Total:$ ${Number(item.quantity) * Number(item.amount)}</div>
                    </div>
                </div>
            </div>
        `
    })
}

















// const reef =()=>{
//     showCase.innerHTML = ''
//     // console.log(items);
//     for (i = 0; i < items.length; i++) {
//         showCase.innerHTML = ` <p style=" font-size:15px; font-weight:bold;font-family:sans-serif;"> $ ${items[i]}
//         <p style="margin:0px 0px 0px 0px;font-weight:light;font-family:sans-serif;"> Budget </p>
//          </p>
//         `

//     }
// }
