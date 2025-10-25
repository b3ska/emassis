'use client';

import { useEmotion, type FeelingContext } from '../context/EmotionContext';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface ContextOption {
  id: FeelingContext;
  icon: string;
  translationKey: 'friends' | 'family' | 'school' | 'somethingSaid' | 'somethingHappened' | 'myBody' | 'online' | 'justFeeling';
}

const contextOptions: ContextOption[] = [
  { id: 'friends', icon: '👥', translationKey: 'friends' },
  { id: 'family', icon: '👨‍👩‍👧', translationKey: 'family' },
  { id: 'school', icon: '📚', translationKey: 'school' },
  { id: 'something-said', icon: '💬', translationKey: 'somethingSaid' },
  { id: 'something-happened', icon: '⚡', translationKey: 'somethingHappened' },
  { id: 'my-body', icon: '🏃', translationKey: 'myBody' },
  { id: 'online', icon: '📱', translationKey: 'online' },
  { id: 'just-feeling', icon: '🤷', translationKey: 'justFeeling' },
];


export default function ContextPage() {
  const { emotionData, setContext } = useEmotion();
  const { t } = useLanguage();
  const router = useRouter();
  const [selectedContext, setSelectedContext] = useState<FeelingContext | null>(emotionData.context);

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
  }, [emotionData.primaryEmotion, emotionData.intensity, router]);

  const handleContextSelect = (contextId: FeelingContext) => {
    setSelectedContext(contextId);
  };

  const handleContinue = () => {
    if (selectedContext) {
      setContext(selectedContext);
      router.push('/chat');
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-[#EBEBEB] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-3 text-gray-800">
          {t.step4.title}
        </h1>
        <p className="text-xl text-center mb-8 text-gray-600">
          {t.step4.subtitle}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {contextOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleContextSelect(option.id)}
              className={`p-6 rounded-3xl transition-all duration-200 transform hover:scale-105 ${
                selectedContext === option.id
                  ? 'bg-[#EF7722] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-800 hover:shadow-md'
              }`}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <span className="text-5xl">{option.icon}</span>
                <div>
                  <div className="font-bold text-lg mb-1">
                    {t.step4.contexts[option.translationKey].label}
                  </div>
                  <div className={`text-sm ${
                    selectedContext === option.id ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {t.step4.contexts[option.translationKey].description}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleBack}
            className="flex-1 bg-[#EBEBEB] hover:bg-gray-300 text-gray-700 font-bold py-4 px-8 rounded-full text-xl transition-colors duration-200 flex items-center justify-center"
          >
            <span className="text-4xl font-black">←</span>
          </button>
          <button
            onClick={handleContinue}
            disabled={!selectedContext}
            className={`flex-1 font-bold py-4 px-8 rounded-full text-xl transition-all duration-200 flex items-center justify-center ${
              selectedContext
                ? 'bg-[#0BA6DF] hover:bg-[#0BA6DF]/90 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span className="text-4xl font-black">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
