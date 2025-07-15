let tests = [];
async function fetchTests() {
  const res = await fetch('/tests');
  tests = await res.json();
  searchTests();
}

function searchTests() {
  const input = document.getElementById("testSearch").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const filteredTests = tests.filter(test =>
    test.name.toLowerCase().includes(input)
  );

  if (filteredTests.length === 0) {
    resultsDiv.innerHTML = "<p>No matching tests found.</p>";
    return;
  }

  filteredTests.forEach(test => {
    const card = document.createElement("div");
    card.className = "test-card";
    card.innerHTML = `
      <h3>${test.name}</h3>
      <p>Price: ₹${test.price}</p>
      <button onclick='openModal("${test._id}", "${test.name}", ${test.price})'>Book Test</button>
    `;
    resultsDiv.appendChild(card);
  });
}

let selectedTestId = null;
let selectedTestPrice = 0;

function openModal(testId, testName, price) {
  selectedTestId = testId;
  selectedTestPrice = price;
  document.getElementById("testModal").style.display = "block";
  document.getElementById("selectedTestTitle").innerText = testName;
  document.getElementById("price").innerText = `Amount to be paid: ₹${price}`;
}

function closeModal() {
  document.getElementById("testModal").style.display = "none";
}

document.getElementById("appointmentForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const fullName = e.target[0].value;
  const email = e.target[1].value;
  const phone = e.target[2].value;
  const age = e.target[3].value;
  const date = e.target[4].value;
  const time = e.target[5].value;

  if (!fullName || !email || !phone || !age || !date || !time) {
    alert("Please fill in all the details.");
    return;
  }
  if (!selectedTestId) {
    alert("No test selected.");
    return;
  }

  const res = await fetch('/book-test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      testId: selectedTestId,
      fullName,
      email,
      phone,
      age,
      date,
      time
    })
  });
  if (!res.ok) {
    alert('Booking failed. Please try again.');
    return;
  }
  const data = await res.json();
  if (data.redirect) {
    window.location.href = data.redirect;
  } else {
    alert('Booking failed. Please try again.');
  }
});

let back = document.querySelector("#back");
back.addEventListener("click", function () {
  window.location.href = "/";
});
window.onload = fetchTests;
  