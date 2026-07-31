import type { VercelRequest, VercelResponse } from '@vercel/node';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    });
  }
  // console.log('API KEY EXISTS:', Boolean(process.env.GROQ_API_KEY));

  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        error: 'Message is required',
      });
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
      model: 'llama-3.1-8b-instant',
      temperature: 1,
      max_completion_tokens: 2048,
      top_p: 1,
    });

    const aiMessage = chatCompletion.choices[0]?.message?.content || '';

    return res.status(200).json({
      message: aiMessage,
    });
  } catch (error) {
    console.error('Groq API error:', error);

    return res.status(500).json({
      error: 'Failed to generate AI response',
    });
  }
}
