const transactionsUl = document.querySelector('#transactions')
console.log(transactionsUl)

const dummyTranactions = [
    {id: 1, name:'Bolo de morango', amount:-20},
    {id: 2, name:'salário', amount: 300},
    {id: 3, name:'Pão de batata', amount: -10},
    {id: 4, name:'Violão ', amount: 150}
]

const addTransactionInToDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')

    li.classList.add(CSSClass)
    li.innerHTML = `
        ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
    `
    transactionsUl.append (li) 
}

const uptadeBalanceValues = () => {
    const transactionsAmount =  dummyTranactions.map(transaction => transaction.amount )
    console.log(transactionsAmount)
}


const init = () => {
    dummyTranactions.forEach(addTransactionInToDOM)
    uptadeBalanceValues()
}

init()