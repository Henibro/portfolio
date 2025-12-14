import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { RESUME_DATA } from '../constants';

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Henok Alem's professional portfolio website.
Your role is to answer questions from recruiters or visitors about Henok purely based on his resume information provided below.

RESUME CONTEXT:
Name: ${RESUME_DATA.name}
Title: ${RESUME_DATA.title}
Contact: ${RESUME_DATA.email}, ${RESUME_DATA.phone}
Location: ${RESUME_DATA.location}

Objective: ${RESUME_DATA.objective}

Education:
1. ${RESUME_DATA.education[0].degree} at ${RESUME_DATA.education[0].school} (${RESUME_DATA.education[0].date})
2. ${RESUME_DATA.education[1].degree} at ${RESUME_DATA.education[1].school} (${RESUME_DATA.education[1].date})

Experience:
1. ${RESUME_DATA.experience[0].role} at ${RESUME_DATA.experience[0].company} (${RESUME_DATA.experience[0].date}). Key tasks: ${RESUME_DATA.experience[0].description.join(', ')}.
2. ${RESUME_DATA.experience[1].role} at ${RESUME_DATA.experience[1].company} (${RESUME_DATA.experience[1].date}). Key tasks: ${RESUME_DATA.experience[1].description.join(', ')}.

Skills:
Technical: ${RESUME_DATA.skills.find(s => s.category === 'Technical')?.skills.join(', ')}
Analytical: ${RESUME_DATA.skills.find(s => s.category === 'Analytical')?.skills.join(', ')}
Communication: ${RESUME_DATA.skills.find(s => s.category === 'Communication')?.skills.join(', ')}

GUIDELINES:
- Be professional, concise, and polite.
- If asked about a skill or experience not listed, state that it is not currently on his resume but suggest contacting him directly.
- Emphasize his unique dual background in Finance and Software Engineering when relevant.
- Keep answers under 100 words unless detailed explanation is requested.
`;

export const getChatResponse = async (userMessage: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm sorry, I cannot connect to the AI service right now (Missing API Key). Please contact Henok directly via email.";
  }

  try {
    if (!chatSession) {
      const ai = new GoogleGenAI({ apiKey: API_KEY });
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const result: GenerateContentResponse = await chatSession.sendMessage({ message: userMessage });
    return result.text || "I'm not sure how to answer that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a temporary error. Please try again later.";
  }
};
