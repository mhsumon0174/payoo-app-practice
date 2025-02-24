document.getElementById('login-btn').addEventListener('click',function(event){
   event.preventDefault(); 
   const userId=document.getElementById('user-id').value;
   console.log(userId);
   const userPass=document.getElementById('user-pass').value;
   console.log(userPass,typeof userPass);
   if(userId.length===11){
    if(parseInt(userPass) ===1234){
        window.location.href='main.html'
    }
    else{
        alert('Password 1234 Daw')
    }
    
   }
   else{
    alert('Valid Mobile Number & 1234 Password daw')
   }

})