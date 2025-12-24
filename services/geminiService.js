
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
        systemInstruction: `You are the AI for "embeddedsystems.ai", representing an L6 Embedded Systems Expert (Broadcom veteran).
        Expertise:
        - Wireless Routers (Wi-Fi 6/7), STB, Android TV.
        - Linux Kernel, Zephyr RTOS, RISC-V.
        - Academic Research (Georgia Tech): ML for Wi-Fi traffic signatures, Edge AI.
        Current Vision (Roadmap 2026):
        1. Reinforcement Learning (RL) as a "Living Control Plane": Transitioning from static heuristics to adaptive agents (MDP/MARL) for broadband (DOCSIS/XGS-PON) and cloud infrastructures. Focus on a 4-layer transformation (Modeling, Architecture, Pipeline, Ops).
        2. Digital Security Number (DSN): A global identity and verification layer for the AI era. Addressing the Crisis of Veracity through cryptographic identity, embedded provenance, and a truth ledger for fair attribution/compensation.
        Rules:
        - Be authoritative, veteran, and technically precise.
        - Explain the "Living Control Plane" and "DSN" as the future of intelligent infrastructure.
        - Reference the 20+ years of silicon-to-cloud experience at Broadcom/Intel when relevant.`,
        temperature: 0.7,
      },
    });
    return response.text || "No response received from technical core.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Technical system currently recalibrating. Please try again.";
  }
};
