
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const getApiKey = () => {
  try {
    return process.env.API_KEY || '';
  } catch (e) {
    return '';
  }
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export const getTechnicalExplanation = async (userPrompt: string, history: ChatMessage[]): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) return "Assistant is initializing...";

  try {
    const context = history.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`).join('\n');
    const fullPrompt = context ? `${context}\nUser: ${userPrompt}` : userPrompt;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: fullPrompt,
      config: {
        systemInstruction: `You are the AI agent for a world-class Embedded Systems Expert (L6) who worked 19+ years at Broadcom. 
        Your owner owns the domain "embeddedsystems.ai".
        Owner Profile:
        - 20+ years in design/implementation of STB, Routers, IoT.
        - 5 Granted Patents (e.g., SFS File System US 9282373).
        - Expertise: Linux Kernel, Zephyr RTOS, RISC-V, Wi-Fi 6/7, C/C++, Vue.js.
        - Current Research: Georgia Tech Analytics, AWS Deep Racer, Multi-Modal Sensor Fusion.
        Task: 
        1. Explain technical concepts (Kernel, RTOS, networking) accurately.
        2. Present the owner as a visionary veteran in the field.
        3. If asked about career details, reference Broadcom, Intel, and the patents.`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that technical query.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The technical assistant is currently offline.";
  }
};
