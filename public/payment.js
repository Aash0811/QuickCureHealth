document.getElementById("paymentForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;
  
    if (!cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all the payment details.");
      return;
    }
  
    alert(`Payment Successful!\nAmount Paid: ₹500\nCard Number: ${cardNumber}\nExpiry Date: ${expiryDate}`);
  
  
    window.location.href = "confirmation.html";  
  });
  