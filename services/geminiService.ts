import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION, MENU_ITEMS, RESTAURANT_INFO } from '../constants';

// Initialize Gemini only if key exists to prevent crash on startup
const apiKey = process.env.API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  try {
    ai = new GoogleGenAI({ apiKey });
  } catch (e) {
    console.error("Failed to initialize Gemini client", e);
  }
}

/**
 * Generates a response from Gemini or falls back to a simulated response
 * if the API key is missing or the request fails.
 */
export const generateResponse = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
  if (!ai || !apiKey) {
    // Fallback simulation for demo purposes if no key is provided
    return simulateResponse(newMessage);
  }

  try {
    // Convert history format to Gemini format
    // Note: This lightweight demo implementation just sends the new message with context
    // In a full implementation, we would maintain the chat session object
    const model = 'gemini-3-flash-preview'; 
    
    // We construct a single prompt with history context for stateless simplicity in this demo function
    // or use the Chat API if we persisted the session object.
    // Here we will use the Chat API.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    // Replay history (excluding the very last message which is the new one)
    // Note: In a real app, you'd persist the `chat` instance. 
    // For this stateless function, we'll just send the new message with the system instruction.
    // If we wanted full history in a stateless call, we'd loop through history.
    // For this demo, let's just send the message to get a fresh response based on system prompt.
    
    const response = await chat.sendMessage({
      message: newMessage
    });

    return response.text || "I apologize, I couldn't process that request right now.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return simulateResponse(newMessage);
  }
};

/**
 * Simple keyword-based simulation for when API key is missing
 */
const simulateResponse = (message: string): string => {
  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes('menu') || lowerMsg.includes('food') || lowerMsg.includes('eat')) {
    return "Our menu features exquisite dishes like the Wagyu Beef Carpaccio and Herb-Crusted Lamb Rack. You can view the full menu in the 'Menu' section above.";
  }
  if (lowerMsg.includes('reservation') || lowerMsg.includes('book') || lowerMsg.includes('table')) {
    return "We would love to host you. Please use the 'Reservation' form on our page or call us at " + RESTAURANT_INFO.phone + " to secure your table.";
  }
  if (lowerMsg.includes('special') || lowerMsg.includes('recommend')) {
    const specials = MENU_ITEMS.filter(m => m.isSpecial).map(m => m.name).join(', ');
    return `Tonight, our chef highly recommends the ${specials}. They are truly spectacular choices.`;
  }
  if (lowerMsg.includes('time') || lowerMsg.includes('hour') || lowerMsg.includes('open')) {
    return `We are open ${RESTAURANT_INFO.hours}. We look forward to welcoming you.`;
  }
  if (lowerMsg.includes('location') || lowerMsg.includes('where') || lowerMsg.includes('address')) {
    return `We are located at ${RESTAURANT_INFO.address}. Valet parking is available.`;
  }
  
  return "Welcome to Urban Spoon Bistro! I can help you with menu recommendations, opening hours, or reservations. How may I assist you this evening?";
};
