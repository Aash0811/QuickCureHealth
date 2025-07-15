let out = document.getElementById("out");
let button = document.getElementById("checkSymptomsBtn");

button.addEventListener("click", async function (event) {
  event.preventDefault(); 

  let age = document.querySelector("input[name='age']").value;
  let occupation = document.querySelector("input[name='Occupation']").value;
  let gender = document.querySelector("select[name='gender']").value;
  let symptoms = document.querySelector("textarea[name='symptoms']").value;

  if (!age || !occupation || !gender || !symptoms) {
    out.innerHTML = "Please fill in all the fields.";
    out.style.color = "red";
    return;
  }

  try {
    out.innerHTML = "Processing..."; 
    out.style.color = "black";

    let response = await fetch("/sym", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ age, occupation, gender, symptoms }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from the server.");
    }

    let result = await response.text(); 
    out.innerHTML = result; 
    out.style.color = "black";
  } catch (error) {
    console.error("Error:", error);
    out.innerHTML = "An error occurred while processing your request.";
    out.style.color = "red";
  }
});
let back=document.querySelector("#back");
back.addEventListener("click",function(){
  window.history.back();
});