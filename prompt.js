// prompt.js
const readline = require('readline');
const fetch = require('node-fetch').default;    // <-- note the .default

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your AI prompt: ', async (prompt) => {
  try {
    const res = await fetch('http://localhost:3000/api/ai/get-response', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    if (!res.ok) throw new Error(`Server error: ${res.status}`);
    const { text } = await res.json();
    console.log('\n🤖 AI Response:\n');
    console.log(text);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    rl.close();
  }
});
