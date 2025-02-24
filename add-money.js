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
    document.getElementById("user-number").value = "";
    document.getElementById("user-pass").value = "";
  });
