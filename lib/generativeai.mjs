// config.js
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const apiKey = "AIzaSyDzC9av15VgfZAjMDz1qq3YNK6oTb0yzug";

const generativeAI = new GoogleGenerativeAI(apiKey);

export default generativeAI;
