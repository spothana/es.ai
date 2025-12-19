
import { GoogleGenAI } from "@google/genai";

export const getTechnicalExplanation = async (userPrompt, history) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "API Key missing.";

  const ai = new GoogleGenAI({ apiKey });

  try {
    const context = history.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`).join('\n');
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: context + "\nUser: " + userPrompt,
      config: {
        systemInstruction: "You are an AI for an Embedded Systems Expert (19+ years at Broadcom). Explain concepts accurately.",
        temperature: 0.7,
      },
    });
    return response.text || "No response.";
  } catch (error) {
    return "Offline.";
  }
};
