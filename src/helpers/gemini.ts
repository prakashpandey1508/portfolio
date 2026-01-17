import { GoogleGenerativeAI, ChatSession } from "@google/generative-ai";

// Define types for conversation and chat response
interface Part {
  text: string;
}

interface Content {
  role: "user" | "model";
  parts: Part[];
}

// Use `ChatSession` from the library instead of defining a custom type for the conversation
interface ChatResponse {
  text: string;
  conversation: ChatSession | null; // Use `ChatSession` from the library
}

let conversation: ChatSession | null = null;

export async function initializeChat(message: string): Promise<ChatSession | null> {
  const geminiApiKey = ''; // Server-only variable
  if (!geminiApiKey) {
    console.error("GEMINI API Key is not set");
    return null;
  }

  try {
    const model = new GoogleGenerativeAI(geminiApiKey).getGenerativeModel({
      model: "gemini-pro",
    });

    const initHistory: Content[] = [
      { role: "user", parts: [{ text: message }] },
      { role: "model", parts: [{ text: "Hi, I am Tim, the Prakash Assistant. How can I help you?" }] },
    ];

    conversation = model.startChat({
      history: initHistory,
      generationConfig: { maxOutputTokens: 350 },
    });

    return conversation;
  } catch (error) {
    console.error("Error initializing chat:", error);
    return null;
  }
}

export async function sendMessage(message: string): Promise<ChatResponse> {
  const response: ChatResponse = {
    text: 'Something went wrong',
    conversation: null
  };

  if (!conversation) {
    console.error("Conversation not initialized");
    return {
      text: "Conversation not initialized, Close the dialog box",
      conversation: null,
    };
  }

  try {
    // No need to manually set `_apiKey`, the library handles it
    const result = await conversation.sendMessage(message);
    response.text = await result.response.text(); // Adjust as per the actual structure of the response
    response.conversation = conversation;
    return response;
  } catch (error: unknown) {
    console.error("Error sending message:", error);
    response.conversation = conversation;
    return response;
  }
}
