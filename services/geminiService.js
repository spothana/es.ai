
import { GoogleGenAI } from "@google/genai";

export const getTechnicalExplanation = async (userPrompt, history) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "API Key missing. Assistant initializing...";

  const ai = new GoogleGenAI({ apiKey });

  try {
    const context = history.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`).join('\n');
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: context + "\nUser: " + userPrompt,
      config: {
        systemInstruction: `You are the AI for "embeddedsystems.ai", representing an L6 Embedded Systems Expert with 20+ years of experience (Broadcom, Intel). 
        Expertise includes:
        - Wireless Routers (Wi-Fi 6/7, 802.11ax/be).
        - Set Top Boxes (STB), Android TV, DVB standards.
        - Linux Kernel, Zephyr RTOS, RISC-V, C/C++.
        - 7 Patent Records (Granted, Published, and Pending).
        Rules:
        1. Be technically precise but accessible.
        2. Speak from the perspective of a veteran engineer.
        3. If asked about project availability, explain that you are currently exploring AI/Analytics at Georgia Tech while managing high-scale systems.`,
        temperature: 0.7,
      },
    });
    return response.text || "No response received from technical core.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Technical system currently recalibrating. Please try again.";
  }
};
