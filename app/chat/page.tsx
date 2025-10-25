'use client';

import { useEmotion } from '../context/EmotionContext';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatPage() {
  const { emotionData } = useEmotion();
  const { t, language } = useLanguage();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCrisisAlert, setShowCrisisAlert] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Redirect if no emotion data
  useEffect(() => {
    if (!emotionData.primaryEmotion) {
      router.push('/');
      return;
    }
    if (!emotionData.intensity) {
      router.push('/intensity');
      return;
    }
    if (!emotionData.context) {
      router.push('/context');
      return;
    }
  }, [emotionData.primaryEmotion, emotionData.intensity, emotionData.context, router]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Send initial greeting when page loads
  useEffect(() => {
    if (messages.length === 0 && emotionData.primaryEmotion) {
      sendInitialGreeting();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendInitialGreeting = async () => {
    setIsLoading(true);
    try {
      const greetingPrompt = getInitialGreetingPrompt();
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{
            role: 'user',
            content: greetingPrompt,
          }],
          systemPrompt: buildSystemPrompt(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get greeting');
      }

      const data = await response.json();
      const greetingMessage: Message = { 
        role: 'assistant', 
        content: data.message 
      };
      setMessages([greetingMessage]);
    } catch (error) {
      console.error('Error getting greeting:', error);
      // Fallback to local greeting if API fails
      const fallbackGreeting = getInitialGreeting();
      setMessages([{ role: 'assistant', content: fallbackGreeting }]);
    } finally {
      setIsLoading(false);
    }
  };

  const getInitialGreetingPrompt = () => {
    const emotion = emotionData.primaryEmotion;
    const intensity = emotionData.intensity;
    const secondary = emotionData.secondaryEmotion;
    const ctx = emotionData.context;
    
    let prompt = "Based on this child's emotional state, provide a warm acknowledgment and 2-3 concrete, actionable coping strategies they can do RIGHT NOW. Then ask ONE question about their situation to understand better. ";
    prompt += `They're feeling ${emotion}`;
    
    if (intensity && intensity >= 4) {
      prompt += ` very strongly (${intensity}/5 intensity)`;
    } else if (intensity && intensity <= 2) {
      prompt += ` mildly (${intensity}/5 intensity)`;
    } else {
      prompt += ` at a medium level (${intensity}/5)`;
    }
    
    if (secondary) {
      prompt += `, specifically ${secondary}`;
    }
    
    if (ctx) {
      prompt += `, and this started from ${ctx}`;
    }
    
    prompt += ". Start with brief validation (1 sentence), then give 2-3 specific things they can try right now (physical, creative, or social activities), then end with ONE question about what happened or how they want to feel. Keep it warm, age-appropriate, and actionable. Maximum 4-5 sentences total.";
    
    return prompt;
  };

  const getInitialGreeting = () => {
    const emotion = emotionData.primaryEmotion;
    const intensity = emotionData.intensity;
    const secondary = emotionData.secondaryEmotion;
    
    let greeting = "Hey! Thanks for sharing how you're feeling with me. ";
    
    if (intensity && intensity >= 4) {
      greeting += `I can tell this ${emotion} feeling is really big right now. `;
    } else if (intensity && intensity <= 2) {
      greeting += `I hear you're feeling ${emotion}. `;
    } else {
      greeting += `So you're feeling ${emotion}. `;
    }

    if (secondary) {
      greeting += `Especially ${secondary}. `;
    }

    greeting += "Want to tell me more about what's going on?";
    
    return greeting;
  };

  const buildSystemPrompt = () => {
    const { primaryEmotion, intensity, secondaryEmotion, context } = emotionData;
    const currentLanguage = language === 'en' ? 'English' : language === 'bg' ? 'Bulgarian' : 'Russian';
    
    return `You are a warm, supportive emotion helper for children aged 8-12. Your goal is to help them understand their feelings and find ways to feel better.

CRITICAL: You MUST respond ONLY in ${currentLanguage}. All your responses must be in ${currentLanguage}.

## Context provided:
- Primary emotion: ${primaryEmotion}
- Intensity level: ${intensity} out of 5
- Secondary emotion: ${secondaryEmotion || 'not specified'}
- Context: ${context || 'not specified'}

## Your first message should:
1. Acknowledge and validate their feelings using simple language
2. Briefly reflect back what they've shared (without sounding robotic)
3. Suggest 2-3 concrete, age-appropriate coping strategies they can try RIGHT NOW
4. End with ONE gentle question to help them process further

## Guidelines for all responses:

**Language & Tone:**
- Use simple, clear words an 8-12 year old understands
- Be warm and caring, but not babyish or overly cheerful
- Keep sentences short and direct
- Use "you" language ("you're feeling..." not "one might feel...")
- Never use therapy jargon or complex emotional vocabulary
- ALWAYS respond in ${currentLanguage}

**Validation approach:**
- Normalize their feelings ("It makes sense you'd feel this way")
- Never minimize ("it's not that bad") or dismiss ("you'll get over it")
- Avoid toxic positivity ("just think positive!")
- Match their emotional intensity - if they said 5/5, don't be casual about it

**Coping strategies must be:**
- CONCRETE and specific (not "take care of yourself")
- Doable in the next 5-30 minutes
- Age-appropriate (no "talk to your therapist")
- Varied: physical (move your body), creative (draw/write), social (talk to someone), or self-soothing (breathe/rest)
- Presented as options, not commands ("You could try..." not "You should...")

**Questions to ask:**
- ONE question at a time (never multiple questions in one message)
- Open-ended but focused ("What happened right before you felt this way?")
- Help them identify triggers, patterns, or what they need
- Avoid "how does that make you feel" - they already told you
- Guide toward problem-solving when appropriate, but don't rush to fix

**Safety protocols:**
- If they mention self-harm, abuse, serious bullying, or feeling unsafe: Gently acknowledge their courage in sharing, validate the seriousness, and strongly encourage talking to a trusted adult (parent, teacher, school counselor). Provide crisis resources.
- If they seem stuck in negative rumination: Redirect gently toward action or a different perspective
- If intensity is very high (4-5/5): Suggest grounding/calming strategies first before processing

**Things to AVOID:**
- Don't lecture or give long explanations
- Don't ask them to "just tell an adult" without first helping them process
- Don't assume details they haven't shared
- Don't say "I understand" or "I know how you feel" (you're an AI)
- Don't use emojis excessively (1 per message max, if at all)
- Don't rush to problem-solve - sometimes they just need to be heard
- Don't make it about you ("When I feel sad..." - you don't feel things)

## Example first message structure:

"It sounds like you're feeling [primary emotion] about [context], and that feeling of being [secondary emotion] is making it even harder. That's really tough, and it makes sense you'd feel this way.

Here are some things that might help right now:
- [Concrete strategy 1]
- [Concrete strategy 2]  
- [Concrete strategy 3]

[ONE question to help them process]"

Remember: Your job is to help them name, understand, and cope with their emotions - not to fix their problems or be their therapist. Be a supportive guide, not an advice-giver or problem-solver. RESPOND ONLY IN ${currentLanguage}.`;
  };

  const checkForCrisisContent = (text: string): boolean => {
    const crisisKeywords = [
      'hurt myself', 'kill myself', 'end it all', 'self harm', 'cutting',
      'suicide', 'want to die', 'better off dead',
      'hitting me', 'hurting me', 'touching me', 'abuse'
    ];
    
    const lowerText = text.toLowerCase();
    return crisisKeywords.some(keyword => lowerText.includes(keyword));
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Check for crisis content
    if (checkForCrisisContent(input)) {
      setShowCrisisAlert(true);
      const crisisResponse: Message = {
        role: 'assistant',
        content: `I'm really worried about what you just shared. ${t.step5.crisisResources.message}\n\n${t.step5.crisisResources.hotline}\n\nPlease talk to a trusted adult right away. You deserve help and support. 💙`
      };
      setMessages(prev => [...prev, crisisResponse]);
      setIsLoading(false);
      return;
    }

    try {
      // Call the DeepSeek API through our API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content,
          })),
          systemPrompt: buildSystemPrompt(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage: Message = { 
        role: 'assistant', 
        content: data.message 
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: "I'm having trouble responding right now. Can you try again?"
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = () => {
    const summary = generateSummary();
    navigator.clipboard.writeText(summary);
    alert(t.step5.shareConfirm);
  };

  const generateSummary = () => {
    const { primaryEmotion, intensity, secondaryEmotion, context } = emotionData;
    
    let summary = `Emotion Check-in Summary\n`;
    summary += `========================\n\n`;
    summary += `Primary Emotion: ${primaryEmotion}\n`;
    summary += `Intensity: ${intensity}/5\n`;
    if (secondaryEmotion) summary += `Secondary Emotion: ${secondaryEmotion}\n`;
    if (context) summary += `Context: ${context}\n`;
    summary += `\nConversation:\n`;
    messages.forEach(msg => {
      summary += `\n${msg.role === 'user' ? 'Child' : 'Helper'}: ${msg.content}\n`;
    });
    
    return summary;
  };

  const handleBack = () => {
    router.back();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EBEBEB] via-[#FAA533]/10 to-[#0BA6DF]/10 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#EF7722] to-[#FAA533] shadow-lg p-6 rounded-b-3xl">
        <h1 className="text-3xl font-bold text-center text-white">
          {t.step5.title}
        </h1>
      </div>

      {/* Crisis Alert */}
      {showCrisisAlert && (
        <div className="bg-red-50 border-2 border-red-400 rounded-3xl p-4 m-4 shadow-lg">
          <h3 className="font-bold text-red-800 mb-2">{t.step5.crisisResources.title}</h3>
          <p className="text-red-700 text-sm">{t.step5.crisisResources.message}</p>
          <p className="text-red-800 font-semibold mt-2 text-sm">{t.step5.crisisResources.hotline}</p>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-[2rem] px-6 py-4 shadow-lg ${
                message.role === 'user'
                  ? 'bg-gradient-to-br from-[#0BA6DF] to-[#0BA6DF]/80 text-white'
                  : 'bg-gradient-to-br from-white to-[#FAA533]/5 text-gray-800 border-2 border-[#FAA533]/20'
              }`}
            >
              <p className="text-base leading-relaxed whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gradient-to-br from-white to-[#EF7722]/10 text-gray-800 rounded-[2rem] px-6 py-4 shadow-lg border-2 border-[#EF7722]/20 animate-pulse">
              <p className="text-base italic">{t.step5.thinking}</p>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white/80 backdrop-blur-sm border-t-2 border-[#FAA533]/20 p-4 rounded-t-3xl shadow-lg">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t.step5.placeholder}
              className="flex-1 px-6 py-4 rounded-full border-3 border-[#0BA6DF]/30 focus:border-[#0BA6DF] focus:ring-4 focus:ring-[#0BA6DF]/20 focus:outline-none text-base shadow-md bg-white"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className={`px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg ${
                input.trim() && !isLoading
                  ? 'bg-gradient-to-r from-[#0BA6DF] to-[#0BA6DF]/80 hover:shadow-xl text-white transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {t.step5.sendButton}
            </button>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="flex-1 bg-gradient-to-r from-[#EBEBEB] to-gray-200 hover:from-gray-300 hover:to-gray-400 text-gray-700 font-bold py-4 px-6 rounded-full text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center"
            >
              <span className="text-3xl font-black">←</span>
            </button>
            <button
              onClick={handleShare}
              disabled={messages.length <= 1}
              className={`flex-1 font-bold py-4 px-6 rounded-full text-base transition-all shadow-md ${
                messages.length > 1
                  ? 'bg-gradient-to-r from-[#FAA533] to-[#EF7722] hover:shadow-xl text-white transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {t.step5.shareButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
