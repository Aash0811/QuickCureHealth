const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const ejs = require("ejs");
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const OpenAI = require("openai");
const session=require("express-session");
const openai = new OpenAI({
  apiKey: "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",
  baseURL: "https://integrate.api.nvidia.com/v1",
});
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user:"root",
  database: "mydatabase",
  password:"12341234"});

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/prediction", (req, res) => {
  res.render("idx1.ejs"); 
});

app.get("/list/:id", (req, res) => {
  let {id}=req.params;
  connection.query(`SELECT * FROM doctors WHERE city="${id}" ORDER BY name ASC`, (err, results) => {
    if (err) {
      console.error("Error fetching data from database:", err);
      res.send("Error fetching data from database.");
      return;
    }
    res.render("fields.ejs", { data: results ,city:id, spec:""}); 
  });});

  app.get("/list/:id1/:id2", (req, res) => {
    let {id1,id2}=req.params;
    connection.query(`SELECT * FROM doctors WHERE specialization="${id2}" AND city="${id1}" ORDER BY name ASC`, (err, results) => {
      if (err) {
        console.error("Error fetching data from database:", err);
        res.send("Error fetching data from database.");
        return;
      }
      res.render("fields.ejs", { data: results,city:id1,spec:id2 }); 
    });
  });

  app.post("/list/:id1/sort", (req, res) => {
    let {id1}=req.params;
    let {doctor,sort}=req.body;
    connection.query(`SELECT * FROM doctors WHERE specialization="${doctor}" AND city="${id1}" ORDER BY ${sort} `, (err, results) => {
if (err) {
        console.error("Error fetching data from database:", err);
        res.send("Error fetching data from database.");
        return;
      }
      res.render("fields.ejs", { data: results,city:id1,spec:doctor });
  });
  });


app.get("/booking", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "page2.html"));
});
app.get("/payment.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "payment.html"));
});
app.post("/sym", async (req, res) => {
  const { age, gender, occupation, symptoms } = req.body;

  if (!age || !gender || !occupation || !symptoms) {
    return res.status(400).send("All fields are required.");
  }

  const query = `I am ${age} ${gender} and working as ${occupation} and I am suffering from ${symptoms}. Provide a detailed analysis including predicted diseases, temporary relief measures, future complications, possible causes, and preventive measures.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "meta/llama-3.3-70b-instruct",
      messages: [{ role: "user", content: query }],
      temperature: 0.2,
      top_p: 0.7,
      max_tokens: 2048,
      stream: false,
    });

  
    const result = completion.choices[0]?.message?.content || "No response from the API.";

   
    const structuredResponse = `
      <h2>Analysis Result</h2>
      ${result
        .split("\n")
        .map((line) => `<p>${line}</p>`)
        .join("")}
    `;

    res.send(structuredResponse);
  } catch (error) {
    console.error("Error:", error.message || error);
    res.status(500).send("An error occurred while processing your request. Please try again later.");
  }
});

app.use(( req, res, next) => {
  res.send( "<h1>404,page not found</h1>");
});