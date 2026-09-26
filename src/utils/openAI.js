import openAI from "openai";

const client = new openAI({
    apiKey:process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

export default client;