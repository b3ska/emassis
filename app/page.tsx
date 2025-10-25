'use client';

import { useEmotion, PrimaryEmotion } from './context/EmotionContext';
import { useLanguage } from './context/LanguageContext';
import { useRouter } from 'next/navigation';
import LanguageSwitcher from './components/LanguageSwitcher';

interface EmotionOption {
  id: PrimaryEmotion;
  emoji: string;
}

const emotions: EmotionOption[] = [
  { id: 'happy', emoji: '😊' },
  { id: 'sad', emoji: '😢' },
  { id: 'mad', emoji: '😠' },
  { id: 'worried', emoji: '😰' },
  { id: 'tired', emoji: '😫' },
  { id: 'confused', emoji: '😕' },
  { id: 'frustrated', emoji: '😤' },
  { id: 'numb', emoji: '😶' },
];

export default function Home() {
  const { setPrimaryEmotion } = useEmotion();
  const { t } = useLanguage();
  const router = useRouter();

  const handleEmotionSelect = (emotion: PrimaryEmotion) => {
    setPrimaryEmotion(emotion);
    router.push('/intensity');
  };

  return (
    <div className="min-h-screen bg-[#EBEBEB] flex flex-col items-center justify-center p-6">
      <LanguageSwitcher />
      
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t.step1.title}
          </h1>
          <p className="text-xl text-gray-600">
            {t.step1.subtitle}
          </p>
        </div>

        {/* Emoji Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {emotions.map((emotion) => (
            <button
              key={emotion.id}
              onClick={() => handleEmotionSelect(emotion.id)}
              className="group relative bg-white rounded-full p-6 md:p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-transparent hover:border-[#EF7722] focus:outline-none focus:ring-4 focus:ring-[#FAA533]"
              aria-label={emotion.id ? t.step1.emotions[emotion.id] : ''}
            >
              {/* Emoji */}
              <div className="text-6xl md:text-7xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {emotion.emoji}
              </div>
              
              {/* Label */}
              <div className="text-base md:text-lg font-semibold text-gray-700 group-hover:text-[#EF7722] transition-colors">
                {emotion.id && t.step1.emotions[emotion.id]}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-full bg-[#FAA533] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        {/* Footer hint */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-500">
            {t.step1.footerHint}
          </p>
        </div>
      </div>
    </div>
  );
}
