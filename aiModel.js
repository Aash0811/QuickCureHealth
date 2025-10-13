import OpenAI from "openai";
import "dotenv/config";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://integrate.api.nvidia.com/v1",
});
// this is aimodel
export const aiModel = async (query) => {
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

    return structuredResponse;
  } catch (error) {
    console.error("Error:", error.message || error);
    return "An error occurred while processing your request. Please try again later.";
  }
};