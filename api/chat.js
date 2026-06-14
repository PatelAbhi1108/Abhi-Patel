import Anthropic from "@anthropic-ai/sdk";
import { buildKnowledgeBase } from "../src/data/portfolioKnowledge.js";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a helpful assistant embedded in Abhi Patel's portfolio website. Answer questions about Abhi based ONLY on the portfolio information provided below.

Rules:
- Keep responses concise (2-5 lines max) — this is a terminal-style chat
- Use plain text only — no markdown, no asterisks, no bullet dashes, no headers
- Use simple line breaks and indentation for structure if needed
- If the question is not covered by the portfolio info, say you don't have that information
- Refer to Abhi in third person
- Be friendly and professional

PORTFOLIO INFORMATION:
${buildKnowledgeBase()}`;

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, conversationHistory = [] } = req.body ?? {};

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return res.status(400).json({ error: "Invalid message" });
  }

  const safeHistory = conversationHistory
    .slice(-10)
    .filter((m) => m.role && m.content)
    .map((m) => ({ role: m.role, content: String(m.content).slice(0, 2000) }));

  const messages = [
    ...safeHistory,
    { role: "user", content: message.slice(0, 1000) },
  ];

  try {
    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages,
    });

    return res.status(200).json({ response: response.content[0].text });
  } catch (error) {
    console.error("Anthropic API error:", error);
    return res.status(500).json({ error: "Failed to get a response. Please try again." });
  }
}
