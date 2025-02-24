document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount=parseInt(document.getElementById('cash-out-amount').value);
    const availableAmount=parseInt(document.getElementById('available-amount').innerText);
    const totalAmount=availableAmount-amount;
    console.log(totalAmount)
    
        document.getElementById('available-amount').innerText=totalAmount;
        document.getElementById('cash-out-amount').value='';
        document.getElementById("cash-out-number").value = "";
    document.getElementById("cash-out-pass").value = "";     


})