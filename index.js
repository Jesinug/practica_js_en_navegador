//* 1. La aplicación deberá mostrar en todo momento el total de gastos, ingresos y el dinero total que tenemos ahorrado.
//* 2. Podremos añadir un ingreso o un gasto incluyendo un concepto.
//* 3. Podremos borrar cualquier gasto o ingreso que hayamos introducido.


//* Creating function to add new transactions to Historic container

  const addTransactionToHistoric = () => {

    // Get parent node with querySelector() and asign it to a variable
    const transactionsList = document.querySelector('.transactions-list')
    
    // Get value with getElementById().value
    const amountValue = document.getElementById('amount-input').value
    
    // Create a "li" node
    const listItem = document.createElement('li');
    
    // Create a text node
    const listText = document.createTextNode(amountValue);

  // Append the text node to the "li" node
  listItem.appendChild(listText)

  // Append the "li" node to the list
  transactionsList.appendChild(listItem)

  // Call function for validating transaction type (ins or outs)
  transactionType()
  totalSavings()
}


//* Creating function to validate transaction type (ins or outs)

const transactionType = () => {

  // Get each value of the li elements, evaluate if they are In or Out
  let nodeList = document.getElementById("historic-container").getElementsByTagName("li");
  let totalIn = 0;
  let totalOut = 0;
  for (let i = 0; i < nodeList.length; i++) {
    let amount = parseInt(nodeList[i].textContent)
    if(amount < 0) {
      totalOut += amount  
    } else {
      totalIn += amount
    }
  }

  // Get parent node with getElementById()
  let newInValue = document.getElementById('total-in-value')
  let newOutValue = document.getElementById('total-out-value')

  // Edit <span> textContent for checking that changes are applying
  newInValue.textContent = totalIn;
  newOutValue.textContent = totalOut;
} 

//* Creating function to populate Total Savings container 

const totalSavings = () => {
  let totalSaveValue = document.getElementById('total-savings-value');
  let totalInVal = parseInt(document.getElementById('total-in-value').textContent);
  let totalOutVal = parseInt(document.getElementById('total-out-value').textContent);
  totalSaveValue.textContent = totalInVal + totalOutVal
}







