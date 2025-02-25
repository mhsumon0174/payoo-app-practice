document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = parseInt(document.getElementById("amount").value);
    const availableAmount = parseInt(
      document.getElementById("available-amount").innerText
    );
    const totalAmount = amount + availableAmount;
    console.log(totalAmount);
    document.getElementById("available-amount").innerText = totalAmount;
    document.getElementById("amount").value = "";
    const accountNumber=document.getElementById("user-number").value;
    document.getElementById("user-pass").value = "";
    const p=document.createElement('p');
    p.innerText=`
    $${amount} Added From Account- ${accountNumber}
    
    `
    p.classList.add("bg-green-500")
    p.style.marginBottom='4px'
    p.style.textAlign='center';
    p.style.color='white';
    p.style.fontWeight='bold';
    p.style.border='2px solid black';
    p.style.borderRadius='5px';
    const transactionList=document.getElementById('transaction-list');
    transactionList.appendChild(p);
    document.getElementById("user-number").value='';
  });
