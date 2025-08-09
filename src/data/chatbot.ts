export interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export interface ChatbotResponse {
  question: string;
  answer: string;
  keywords: string[];
  variations: string[];
}

// Gemini API configuration
const GEMINI_API_KEY = 'AIzaSyCbIHjecynbZv1Kwhjtxs7G705nNB5NuM0';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Research context for Gemini
const RESEARCH_CONTEXT = `
You are a helpful research assistant for a study about "Gen Z dalam Pusaran Buzzer: Understanding Gen-Z Awareness Against Buzzers in Indonesian Political Social Media".

Key Research Topics:
- Buzzers: People who spread specific information/propaganda on social media to influence public opinion
- Gen Z: Primary focus group, most active social media users, vulnerable to FOMO
- FOMO: Fear of Missing Out - psychological phenomenon making users susceptible to social media influence
- Social Media Algorithms: Personalize content, create echo chambers, influence political content distribution
- Indonesian Politics: Impact of buzzer activities on elections, public opinion, and government credibility
- BuzzerLurker.com: Educational website to raise awareness about buzzer operations
- Research Objectives: Understand Gen Z awareness, analyze algorithm impact, develop educational tools

Keep responses concise (2-3 sentences), accurate, and focused on the research context. If the question is outside this scope, politely redirect to research topics.
`;

export const chatbotResponses: ChatbotResponse[] = [
  {
    question: "What is a buzzer?",
    answer: "A buzzer is a person or group who actively spreads specific information, opinions, or propaganda on social media platforms, often with the intention of influencing public opinion, especially during political events like elections. They work systematically to amplify certain narratives and can significantly impact public discourse.",
    keywords: ["buzzer", "definition", "what is", "social media", "propaganda"],
    variations: ["what are buzzers", "define buzzer", "tell me about buzzers", "explain buzzer", "buzzer meaning", "what do you mean by buzzer"]
  },
  {
    question: "How do buzzers work?",
    answer: "Buzzers work through coordinated social media campaigns where they systematically post, comment, and share content to amplify specific messages. They often use multiple accounts, engage in trending topics, and leverage social media algorithms to maximize reach and influence public opinion.",
    keywords: ["how", "work", "method", "process", "campaign", "coordination", "operate", "function"],
    variations: ["how do buzzers operate", "buzzer working process", "how buzzers function", "buzzer methods", "how do they work", "buzzer operation"]
  },
  {
    question: "What is Gen Z's role in this research?",
    answer: "Gen Z (Generation Z) is the primary focus of this research as they are the most active social media users and are particularly vulnerable to FOMO (Fear of Missing Out). They are more likely to be influenced by social media content and are therefore a key target demographic for buzzer campaigns.",
    keywords: ["gen z", "generation z", "fomo", "vulnerable", "target", "demographic", "role", "focus"],
    variations: ["what about gen z", "gen z importance", "why gen z", "gen z focus", "gen z target", "generation z role"]
  },
  {
    question: "What is FOMO?",
    answer: "FOMO stands for 'Fear of Missing Out' - a psychological phenomenon where people feel anxious about missing out on experiences, information, or social interactions that others are having. In the context of social media, this makes users more susceptible to engaging with trending content and being influenced by buzzer campaigns.",
    keywords: ["fomo", "fear of missing out", "psychological", "anxiety", "social media", "missing out"],
    variations: ["what does fomo mean", "explain fomo", "fomo definition", "fear of missing out meaning", "what is fomo about"]
  },
  {
    question: "How do algorithms affect political content?",
    answer: "Social media algorithms play a crucial role in political content distribution by personalizing what users see based on their preferences and behavior. This creates echo chambers where users are exposed to content that reinforces their existing beliefs, making them more susceptible to targeted political messaging and buzzer campaigns.",
    keywords: ["algorithm", "political", "content", "personalization", "echo chamber", "targeting", "affect", "influence"],
    variations: ["algorithm impact", "how algorithms work", "social media algorithms", "algorithm influence", "political algorithms", "content algorithms"]
  },
  {
    question: "What is BuzzerLurker.com?",
    answer: "BuzzerLurker.com is an educational website developed as part of this research project to raise awareness about buzzer operations. It provides examples of buzzer working patterns on social media and helps users identify potential buzzer activity, especially during election periods.",
    keywords: ["buzzerlurker", "website", "educational", "awareness", "identify", "examples", "tool"],
    variations: ["what is buzzerlurker", "buzzerlurker website", "tell me about buzzerlurker", "buzzerlurker tool", "buzzerlurker purpose"]
  },
  {
    question: "What are the research objectives?",
    answer: "The main research objectives are to understand Gen Z's awareness of buzzer operations in Indonesian political social media, analyze how social media algorithms influence political content consumption, and develop educational tools to help users identify and understand buzzer activities.",
    keywords: ["objectives", "goals", "research", "awareness", "analysis", "education", "purpose", "aim"],
    variations: ["research goals", "what are the goals", "research purpose", "main objectives", "what is the aim", "research targets"]
  },
  {
    question: "How does this affect Indonesian politics?",
    answer: "Buzzer activities can significantly impact Indonesian politics by influencing public opinion, spreading misinformation, and potentially affecting election outcomes. They can damage government credibility and reduce national sentiment, particularly among young voters who are heavily engaged with social media.",
    keywords: ["indonesian", "politics", "election", "public opinion", "misinformation", "government", "impact", "affect"],
    variations: ["indonesia politics", "political impact", "election influence", "government effect", "indonesian elections", "political consequences"]
  },
  {
    question: "What are the research categories?",
    answer: "The research covers multiple categories including social media analysis, political communication, Gen Z behavior studies, algorithm impact assessment, and digital literacy education. It combines elements of social science, digital media studies, and political science.",
    keywords: ["categories", "social media", "political communication", "gen z", "algorithm", "digital literacy", "types"],
    variations: ["research types", "what categories", "different areas", "research fields", "study categories", "research areas"]
  },
  {
    question: "How long did the research take?",
    answer: "The research was conducted over a 6-month period, involving data collection, analysis, and the development of educational tools like BuzzerLurker.com. This timeframe allowed for comprehensive study of social media patterns and user behavior.",
    keywords: ["duration", "time", "6 months", "period", "timeline", "research", "how long", "took"],
    variations: ["research duration", "how long research", "time period", "research timeline", "study duration", "research time"]
  },
  {
    question: "What is the competition category?",
    answer: "This research is categorized under 'Advanced Physics' for the National Science Theory Competition 2025, though it primarily focuses on social science and digital media studies. The categorization reflects the interdisciplinary nature of the research.",
    keywords: ["competition", "category", "advanced physics", "national", "science", "theory"],
    variations: ["competition type", "what category", "science competition", "national competition", "competition classification"]
  },
  {
    question: "Who is the target audience?",
    answer: "The primary target audience is Gen Z users in Indonesia who are active on social media, particularly those interested in understanding political communication and digital literacy. The research aims to reach national level impact.",
    keywords: ["target", "audience", "gen z", "indonesia", "social media", "national"],
    variations: ["who is the audience", "target users", "who is this for", "intended audience", "target demographic", "who are we targeting"]
  }
];

// Common greetings and responses
export const commonResponses = {
  greeting: "Hello! I'm your research assistant. I can help you understand our research about Gen Z, buzzers, and social media in Indonesian politics. What would you like to know?",
  noMatch: "I'm sorry, I don't have a specific answer for that question. Try asking about buzzers, Gen Z, social media algorithms, FOMO, or our research objectives. You can also ask me to explain any of these topics in more detail!",
  thanks: "You're welcome! Feel free to ask more questions about our research.",
  help: "I can help you with questions about: buzzers, Gen Z, social media algorithms, FOMO, research objectives, Indonesian politics, and more. Just ask naturally!"
};

// Gemini API call function
async function callGeminiAPI(userInput: string): Promise<string | null> {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${RESEARCH_CONTEXT}\n\nUser Question: ${userInput}\n\nPlease provide a helpful response based on the research context above.`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 150,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.status}`);
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (generatedText) {
      return generatedText.trim();
    } else {
      throw new Error('No response generated');
    }
  } catch (error) {
    console.error('Gemini API error:', error);
    return null;
  }
}

// Function to find the best response based on user input
export async function findBestResponse(userInput: string): Promise<string> {
  const input = userInput.toLowerCase().trim();
  
  // Check for greetings
  if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('good morning') || input.includes('good afternoon')) {
    return commonResponses.greeting;
  }
  
  // Check for thanks
  if (input.includes('thank') || input.includes('thanks') || input.includes('appreciate')) {
    return commonResponses.thanks;
  }
  
  // Check for help requests
  if (input.includes('help') || input.includes('what can you do') || input.includes('how can you help')) {
    return commonResponses.help;
  }
  
  // Find the best matching response from predefined answers
  let bestMatch = null;
  let highestScore = 0;
  
  for (const response of chatbotResponses) {
    let score = 0;
    
    // Check exact question match (highest priority)
    if (input.includes(response.question.toLowerCase())) {
      score += 20;
    }
    
    // Check variations (high priority)
    for (const variation of response.variations) {
      if (input.includes(variation.toLowerCase())) {
        score += 15;
      }
    }
    
    // Check keyword matches
    for (const keyword of response.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        score += 3;
      }
    }
    
    // Check for partial matches in keywords
    for (const keyword of response.keywords) {
      const keywordWords = keyword.split(' ');
      for (const word of keywordWords) {
        if (word.length > 2 && input.includes(word.toLowerCase())) {
          score += 1;
        }
      }
    }
    
    // Bonus for multiple keyword matches
    const matchedKeywords = response.keywords.filter(keyword => 
      input.includes(keyword.toLowerCase())
    ).length;
    if (matchedKeywords > 1) {
      score += matchedKeywords * 2;
    }
    
    if (score > highestScore) {
      highestScore = score;
      bestMatch = response.answer;
    }
  }
  
  // If we have a good predefined match, use it
  if (bestMatch && highestScore >= 3) {
    return bestMatch;
  }
  
  // Otherwise, try Gemini API for more dynamic responses
  try {
    const geminiResponse = await callGeminiAPI(userInput);
    if (geminiResponse) {
      return geminiResponse;
    }
  } catch (error) {
    console.error('Gemini API failed, falling back to predefined response');
  }
  
  // Fallback to predefined response or no match
  return bestMatch && highestScore >= 1 ? bestMatch : commonResponses.noMatch;
} 