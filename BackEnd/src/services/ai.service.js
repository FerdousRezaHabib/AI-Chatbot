require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

/**
 * Generate AI content for a given prompt.
 * @param {string} prompt
 * @returns {Promise<string>}
 */
async function generateResponse(prompt) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: prompt,
  });
  return response.text;
}

module.exports = { generateResponse };

