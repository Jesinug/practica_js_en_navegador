//* 1. La aplicación deberá mostrar en todo momento el total de gastos, ingresos y el dinero total que tenemos ahorrado.
//* 2. Podremos añadir un ingreso o un gasto incluyendo un concepto.
//* 3. Podremos borrar cualquier gasto o ingreso que hayamos introducido.

// hago querySelector() a un nodo del document y lo meto en una variable
const addTransactionToHistoric = () => {
  const amountValue = document.getElementById('amount-input').value
  
  // Get parent node by querySelector() and adign it to a variable
  const transactionsList = document.querySelector('.transactions-list')
  
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
}

// Creating function to validate transaction type (ins or outs)
const transactionType = () => {
  
  // Get parent node with querySelector()
  const parentNode = document.getElementById('total-in');
  
  // Create element <span>
  let newValue = document.createElement('span');

  // Editing <span> textContent for checking changes are applying
  newValue.textContent="5";

  // Append newValue to parentNode
  parentNode.appendChild(newValue);
} 

