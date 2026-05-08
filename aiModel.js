require("dotenv").config();
const OpenAI = require("openai");


const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const NVIDIA_BASE_URL = process.env.OPENAI_BASE_URL || "https://integrate.api.nvidia.com/v1";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  baseURL: NVIDIA_BASE_URL,
});

async function callNvidia(query) {
  const completion = await openai.chat.completions.create({
    model: "meta/llama-3.3-70b-instruct",
    messages: [{ role: "user", content: query }],
    temperature: 0.2,
    top_p: 0.7,
    max_tokens: 2048,
    stream: false,
  });

  return completion.choices[0]?.message?.content || "No response from the API.";
}

async function aiModel(query) {
  try {
    const result = await callNvidia(query);

    const structuredResponse = `
      <h2>Analysis Result</h2>
      ${result
        .split("\n")
        .map((line) => `<p>${line}</p>`)
        .join("")}
    `;

    return structuredResponse ;
  } catch (error) {
    console.error("AI provider error:", error);
    if (error.response) {
      console.error("AI provider response status:", error.response.status);
      console.error("AI provider response body:", error.response.data || error.response.body || "<no body>");
    }
    return "An error occurred while processing your request. Please try again later.";
  }
}

module.exports = { aiModel };
