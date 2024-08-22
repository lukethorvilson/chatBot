import OpenAI from "openai";

export const openai = new OpenAI({
  organization: import.meta.env.VITE_ORG_ID,
  project: import.meta.env.VITE_PROJECT_ID,
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true,
});
