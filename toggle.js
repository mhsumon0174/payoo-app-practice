document.getElementById('add-money-box').addEventListener('click',function(){
    document.getElementById('transaction-section').style.display='none';
    document.getElementById('add-money-section').style.display='block';
    document.getElementById('cash-out-section').style.display='none';
})


document.getElementById('cash-out-box').addEventListener('click',function(){
    document.getElementById('transaction-section').style.display='none';
    document.getElementById('cash-out-section').style.display='block';
    document.getElementById('add-money-section').style.display='none';
})

document.getElementById('transaction-box').addEventListener('click',function(){
    document.getElementById('transaction-section').style.display='block';
    document.getElementById('cash-out-section').style.display='none';
    document.getElementById('add-money-section').style.display='none';
})