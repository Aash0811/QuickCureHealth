const mongoose = require('mongoose');
const Test = require('../models/Test');

const tests = [
  { name: "Complete Blood Count (CBC)", price: 500, description: "Measures different components of blood." },
  { name: "Liver Function Test (LFT)", price: 800, description: "Assesses liver health." },
  { name: "Kidney Function Test (KFT)", price: 850, description: "Checks kidney function." },
  { name: "Thyroid Profile", price: 600, description: "Evaluates thyroid gland function." },
  { name: "Blood Sugar Test", price: 300, description: "Measures blood glucose levels." },
  { name: "Lipid Profile", price: 750, description: "Measures cholesterol and triglycerides." },
  { name: "Vitamin D Test", price: 950, description: "Checks vitamin D levels." },
  { name: "Urine Routine", price: 400, description: "Analyzes urine for various disorders." },
  { name: "Hemoglobin Test", price: 200, description: "Measures hemoglobin in blood." },
  { name: "COVID-19 RT-PCR", price: 1200, description: "Detects COVID-19 infection." },
  { name: "Dengue NS1 Antigen", price: 950, description: "Detects dengue virus." },
  { name: "Malaria Antigen Test", price: 900, description: "Detects malaria infection." },
  { name: "HIV Test", price: 1100, description: "Detects HIV infection." },
  { name: "HbA1c (Glycated Hemoglobin)", price: 650, description: "Monitors diabetes control." },
  { name: "Prostate-Specific Antigen (PSA)", price: 700, description: "Screens for prostate issues." },
  { name: "Pap Smear", price: 850, description: "Screens for cervical cancer." },
  { name: "X-Ray Chest", price: 500, description: "Imaging test for chest." },
  { name: "MRI Brain", price: 5000, description: "Detailed brain imaging." },
  { name: "CT Scan Abdomen", price: 4500, description: "Detailed abdominal imaging." },
  { name: "Electrocardiogram (ECG)", price: 400, description: "Records heart's electrical activity." },
  { name: "Blood Grouping & Rh Typing", price: 150, description: "Determines blood group." },
  { name: "Iron Studies", price: 750, description: "Checks iron levels." },
  { name: "Calcium Test", price: 550, description: "Measures calcium in blood." },
  { name: "Pregnancy Test", price: 250, description: "Detects pregnancy." },
  { name: "Hepatitis B Surface Antigen (HBsAg)", price: 1000, description: "Detects Hepatitis B." },
  { name: "Rheumatoid Factor (RA)", price: 600, description: "Detects rheumatoid arthritis." },
  { name: "C-Reactive Protein (CRP)", price: 700, description: "Detects inflammation." },
  { name: "Vitamin B12 Test", price: 900, description: "Checks vitamin B12 levels." },
  { name: "ESR (Erythrocyte Sedimentation Rate)", price: 300, description: "Detects inflammation." },
  { name: "Sputum Test for TB", price: 500, description: "Detects tuberculosis." },
  { name: "Stool Routine", price: 350, description: "Analyzes stool for disorders." },
  { name: "Hepatitis C Antibody", price: 950, description: "Detects Hepatitis C." },
  { name: "Allergy Panel", price: 1500, description: "Detects allergies." },
  { name: "Echocardiogram", price: 2000, description: "Ultrasound of the heart." },
  { name: "Hormone Panel (Female)", price: 1800, description: "Checks female hormones." },
  { name: "Bone Density Test (DEXA)", price: 2200, description: "Measures bone density." }
];

async function seed() {
  await mongoose.connect('mongodb+srv://quickcurehealth:quickcurehealth@cluster0.iqv2slt.mongodb.net/?appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await Test.deleteMany({});
  await Test.insertMany(tests);
  console.log('Test data seeded!');
  mongoose.disconnect();
}

seed(); 