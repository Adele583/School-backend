import generativeAI from './generativeai.mjs';
import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function generateQuiz(model, topic) {
  try {
    const result = await model.generateContent([
      `Generate a quiz with 5 multiple-choice questions on the topic "${topic}". Each question should have 4 options. Provide answers in a separate section labeled 'Answer Key'.`
    ]);
    console.log(result.response.text());
  } catch (error) {
    console.error('Error generating quiz:', error);
  }
}

function createCustomQuiz(model) {
  rl.question('Enter the topic for the quiz: ', async (topic) => {
    try {
      await generateQuiz(model, topic);
    } catch (error) {
      console.error('Error creating custom quiz:', error);
    } finally {
      rl.close();
    }
  });
}

async function analyzeImage(model) {
  try {
    const imageBuffer = fs.readFileSync('./hacking.jpeg');
    const result = await model.generateContent([
      "What is in this photo?",
      {
        inlineData: {
          data: Buffer.from(imageBuffer).toString('base64'),
          mimeType: 'image/jpeg'
        }
      }
    ]);
    console.log(result.response.text());
  } catch (error) {
    console.error('Error analyzing image:', error);
  } finally {
    rl.close();
  }
}

async function run() {
  rl.question('Do you want to create a custom quiz? (y/n) ', async (answer) => {
    const model = generativeAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    if (answer.toLowerCase() === 'y') {
      createCustomQuiz(model);
    } else {
      analyzeImage(model);
    }
  });
}

run();
