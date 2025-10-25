'use client';

import { useEmotion, PrimaryEmotion } from '../context/EmotionContext';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import LanguageSwitcher from '../components/LanguageSwitcher';

interface SecondaryEmotionOption {
  id: string;
  emoji: string;
  labelKey: keyof typeof import('../i18n/translations').translations.en.step3.secondaryEmotions;
}

const secondaryEmotionsMap: Record<Exclude<PrimaryEmotion, null>, SecondaryEmotionOption[]> = {
  sad: [
    { id: 'lonely', emoji: '🏝️', labelKey: 'lonely' },
    { id: 'letDown', emoji: '😞', labelKey: 'letDown' },
    { id: 'leftOut', emoji: '🚪', labelKey: 'leftOut' },
    { id: 'hurt', emoji: '💔', labelKey: 'hurt' },
    { id: 'missingSomeone', emoji: '😔', labelKey: 'missingSomeone' },
  ],
  mad: [
    { id: 'annoyed', emoji: '😒', labelKey: 'annoyed' },
    { id: 'notFair', emoji: '😤', labelKey: 'notFair' },
    { id: 'jealous', emoji: '😣', labelKey: 'jealous' },
    { id: 'disrespected', emoji: '🙄', labelKey: 'disrespected' },
    { id: 'protective', emoji: '😾', labelKey: 'protective' },
  ],
  worried: [
    { id: 'nervous', emoji: '😬', labelKey: 'nervous' },
    { id: 'tooMuch', emoji: '🤯', labelKey: 'tooMuch' },
    { id: 'embarrassed', emoji: '😳', labelKey: 'embarrassed' },
    { id: 'scared', emoji: '🫣', labelKey: 'scared' },
    { id: 'worriedMessedUp', emoji: '😟', labelKey: 'worriedMessedUp' },
  ],
  happy: [
    { id: 'excited', emoji: '🎉', labelKey: 'excited' },
    { id: 'relieved', emoji: '😌', labelKey: 'relieved' },
    { id: 'loved', emoji: '🥰', labelKey: 'loved' },
    { id: 'proud', emoji: '😎', labelKey: 'proud' },
    { id: 'surprisedGood', emoji: '✨', labelKey: 'surprisedGood' },
  ],
  tired: [
    { id: 'exhausted', emoji: '😩', labelKey: 'exhausted' },
    { id: 'bored', emoji: '😑', labelKey: 'bored' },
    { id: 'burnedOut', emoji: '🫠', labelKey: 'burnedOut' },
    { id: 'doneWithToday', emoji: '😪', labelKey: 'doneWithToday' },
    { id: 'needBreak', emoji: '🥱', labelKey: 'needBreak' },
  ],
  confused: [
    { id: 'dontGetIt', emoji: '🤔', labelKey: 'dontGetIt' },
    { id: 'mixedUp', emoji: '😵‍💫', labelKey: 'mixedUp' },
    { id: 'stuck', emoji: '🤷', labelKey: 'stuck' },
    { id: 'foggy', emoji: '😶‍🌫️', labelKey: 'foggy' },
    { id: 'surprisedConfused', emoji: '👀', labelKey: 'surprisedConfused' },
  ],
  frustrated: [
    { id: 'cantDoIt', emoji: '😖', labelKey: 'cantDoIt' },
    { id: 'keepTrying', emoji: '🔄', labelKey: 'keepTrying' },
    { id: 'runningOutOfTime', emoji: '⏰', labelKey: 'runningOutOfTime' },
    { id: 'blocked', emoji: '🧱', labelKey: 'blocked' },
    { id: 'nobodyUnderstands', emoji: '😣', labelKey: 'nobodyUnderstands' },
  ],
  numb: [
    { id: 'justMeh', emoji: '😐', labelKey: 'justMeh' },
    { id: 'disconnected', emoji: '🫥', labelKey: 'disconnected' },
    { id: 'spacedOut', emoji: '😶‍🌫️', labelKey: 'spacedOut' },
    { id: 'dontWantToTalk', emoji: '🤐', labelKey: 'dontWantToTalk' },
    { id: 'whatever', emoji: '😑', labelKey: 'whatever' },
  ],
};

export default function SecondaryEmotionPage() {
  const { emotionData, setSecondaryEmotion } = useEmotion();
  const { t } = useLanguage();
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  // Redirect if no required data
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

  const options = secondaryEmotionsMap[emotionData.primaryEmotion || 'happy'] || [];

  const handleSelect = (emotionId: string) => {
    setSelected(emotionId);
  };

  const handleContinue = () => {
    if (selected) {
      setSecondaryEmotion(selected);
      router.push('/context');
    }
  };

  const handleSkip = () => {
    setSecondaryEmotion(null);
    router.push('/context');
  };

  const handleBack = () => {
    router.push('/intensity');
  };

  return (
    <div className="min-h-screen bg-[#EBEBEB] flex flex-col items-center justify-center p-6 py-20">
      <LanguageSwitcher />

      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {t.step3.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600">{t.step3.subtitle}</p>
        </div>

        {/* Secondary Emotion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {options.map((option, index) => {
            const emotionData = t.step3.secondaryEmotions[option.labelKey];
            return (
              <div key={option.id} className="contents">
                <button
                  onClick={() => handleSelect(option.id)}
                  className={`
                    group relative bg-white rounded-full p-6 shadow-md hover:shadow-xl
                    transform hover:scale-105 transition-all duration-300
                    border-3 text-center
                    ${
                      selected === option.id
                        ? 'border-[#EF7722] ring-4 ring-[#FAA533] scale-105'
                        : 'border-transparent hover:border-[#0BA6DF]'
                    }
                    focus:outline-none focus:ring-4 focus:ring-[#FAA533]
                  `}
                >
                  {/* Emoji */}
                  <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {option.emoji}
                  </div>

                  {/* Label */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    {emotionData.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    &ldquo;{emotionData.description}&rdquo;
                  </p>

                  {/* Selection indicator */}
                  {selected === option.id && (
                    <div className="absolute top-3 right-3 bg-[#EF7722] text-white rounded-full w-8 h-8 flex items-center justify-center">
                      ✓
                    </div>
                  )}
                </button>
                
                {/* Add unsure button after 3rd item (index 2) on large screens */}
                {index === 2 && (
                  <button
                    onClick={handleSkip}
                    className="bg-white text-gray-800 rounded-full p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#FAA533]/50 border-3 border-transparent hover:border-[#0BA6DF] hidden lg:flex flex-col items-center justify-center text-center"
                  >
                    <div className="text-4xl md:text-5xl mb-3">👀</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                      {t.step3.unsure.label}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      &ldquo;{t.step3.unsure.description}&rdquo;
                    </p>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={handleBack}
            className="flex-1 min-w-[120px] bg-[#EBEBEB] text-gray-700 py-4 px-6 rounded-full font-bold text-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-300 flex items-center justify-center"
          >
            <span className="text-4xl font-black">←</span>
          </button>

          <button
            onClick={handleSkip}
            className="flex-1 min-w-[120px] bg-white text-gray-800 py-4 px-6 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-300 border-2 border-gray-300 lg:hidden flex items-center gap-2 justify-center"
          >
            <span className="text-2xl">👀</span>
            {t.step3.unsure.label}
          </button>

          <button
            onClick={handleContinue}
            disabled={!selected}
            className={`
              flex-1 min-w-[120px] py-4 px-6 rounded-full font-bold text-lg transition-all shadow-lg
              focus:outline-none focus:ring-4 focus:ring-[#0BA6DF]/50 flex items-center justify-center
              ${
                selected
                  ? 'bg-[#0BA6DF] text-white hover:bg-[#0BA6DF]/90 hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            <span className="text-4xl font-black">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
