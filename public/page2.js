const tests = [
    { name: "Complete Blood Count (CBC)", price: 500 },
    { name: "Liver Function Test (LFT)", price: 800 },
    { name: "Kidney Function Test (KFT)", price: 850 },
    { name: "Thyroid Profile", price: 600 },
    { name: "Blood Sugar Test", price: 300 },
    { name: "Lipid Profile", price: 750 },
    { name: "Vitamin D Test", price: 950 },
    { name: "Urine Routine", price: 400 },
    { name: "Hemoglobin Test", price: 200 },
    { name: "COVID-19 RT-PCR", price: 1200 },
    { name: "Dengue NS1 Antigen", price: 950 },
    { name: "Malaria Antigen Test", price: 900 },
    { name: "HIV Test", price: 1100 },
    { name: "HbA1c (Glycated Hemoglobin)", price: 650 },
    { name: "Prostate-Specific Antigen (PSA)", price: 700 },
    { name: "Pap Smear", price: 850 },
    { name: "X-Ray Chest", price: 500 },
    { name: "MRI Brain", price: 5000 },
    { name: "CT Scan Abdomen", price: 4500 },
    { name: "Electrocardiogram (ECG)", price: 400 },
    { name: "Blood Grouping & Rh Typing", price: 150 },
    { name: "Iron Studies", price: 750 },
    { name: "Calcium Test", price: 550 },
    { name: "Pregnancy Test", price: 250 },
    { name: "Hepatitis B Surface Antigen (HBsAg)", price: 1000 },
    { name: "Rheumatoid Factor (RA)", price: 600 },
    { name: "C-Reactive Protein (CRP)", price: 700 },
    { name: "Vitamin B12 Test", price: 900 },
    { name: "ESR (Erythrocyte Sedimentation Rate)", price: 300 },
    { name: "Sputum Test for TB", price: 500 },
    { name: "Stool Routine", price: 350 },
    { name: "Hepatitis C Antibody", price: 950 },
    { name: "Allergy Panel", price: 1500 },
    { name: "Echocardiogram", price: 2000 },
    { name: "Hormone Panel (Female)", price: 1800 },
    { name: "Bone Density Test (DEXA)", price: 2200 }
  ];
  
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
        <button onclick='openModal("${test.name}", ${test.price})'>Book Test</button>
      `;
      resultsDiv.appendChild(card);
    });
  }
  
  function openModal(testName, price) {
    document.getElementById("testModal").style.display = "block";
    document.getElementById("selectedTestTitle").innerText = testName;
    document.getElementById("price").innerText = `Amount to be paid: ₹${price}`;
  }
  
  function closeModal() {
    document.getElementById("testModal").style.display = "none";
  }
  
  document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const age =e.target[3].value;
    const date = e.target[4].value;
    const time = e.target[5].value;
  
    if (!fullName || !email || !phone || !date || !time) {
      alert("Please fill in all the details.");
      return;
    }
  
    alert(`Booking Details:\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nAge: ${age}\nDate: ${date}\nTime: ${time}\nProceeding to payment gateway...`);
  
    window.location.href = "payment.html";
  });
  let back = document.querySelector("#back");
  back.addEventListener("click", function () {
    window.location.href = "/";
  });
  