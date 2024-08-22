import OpenAI from "openai";

export const openai = new OpenAI({
  organization: import.meta.env.ORG_ID,
  project: import.meta.env.PROJECT_ID,
});
