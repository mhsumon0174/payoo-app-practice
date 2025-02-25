document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount=parseInt(document.getElementById('cash-out-amount').value);
    const availableAmount=parseInt(document.getElementById('available-amount').innerText);
    const totalAmount=availableAmount-amount;
    console.log(totalAmount)
    
        document.getElementById('available-amount').innerText=totalAmount;
        document.getElementById('cash-out-amount').value='';
        const accountNumber=document.getElementById("cash-out-number").value;
         
    const p=document.createElement('p');
    p.innerText=`
    $${amount} Withdrawal From Account- ${accountNumber}
    
    `
    p.style.background='red';
    p.style.marginBottom='4px'
    p.style.textAlign='center';
    p.style.color='white';
    p.style.fontWeight='bold';
    p.style.border='2px solid black';
    p.style.borderRadius='5px';
    const transactionList=document.getElementById('transaction-list');
    transactionList.appendChild(p);
    document.getElementById('cash-out-number').value = '';
    document.getElementById('cash-out-pass').value = '';
})