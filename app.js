const depositBtn = document.getElementById('deposit')
const withdrawBtn = document.getElementById('withdraw')
const amount = document.getElementById('amount')
const balanceDiv = document.getElementById('balance')
const error = document.getElementById('error')

class Bank {
    constructor (balance) {
        this.balance = Number(balance);
    }

    withdraw (amount) {
        if (this.balance - amount < 0) {
            error.innerText = 'You can\'t withdraw more than your balance.';
            return;
        }
            this.balance -= Number(amount);
    }

    deposit (amount) {
        this.balance += Number(amount);
    }
}



const abhee = new Bank (amount.value)

depositBtn.onclick = () => {
    const amountNum = Number(amount.value)
    abhee.deposit(amountNum)
    balanceDiv.innerText = `Balance: ${Number(abhee.balance)}`
}

withdrawBtn.onclick = () => {
    const amountNum = Number(amount.value)
    abhee.withdraw(amountNum)
    balanceDiv.innerHTML = `Balance: ${abhee.balance}`
}