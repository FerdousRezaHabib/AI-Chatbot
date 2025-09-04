const { generateResponse } = require('../services/ai.service');

module.exports.getResponse = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const text = await generateResponse(prompt);
    res.json({ text });
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).json({ error: 'AI generation failed' });
  }
};
