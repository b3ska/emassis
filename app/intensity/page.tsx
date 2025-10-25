'use client';

import { useEmotion, Intensity } from '../context/EmotionContext';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import LanguageSwitcher from '../components/LanguageSwitcher';

const emotionEmojis = {
  happy: '😊',
  sad: '😢',
  mad: '😠',
  worried: '😰',
  tired: '😫',
  confused: '😕',
  frustrated: '😤',
  numb: '😶',
};

export default function IntensityPage() {
  const { emotionData, setIntensity } = useEmotion();
  const { t } = useLanguage();
  const router = useRouter();
  const [selectedIntensity, setSelectedIntensity] = useState<Intensity>(3);

  // Redirect if no primary emotion selected
  useEffect(() => {
    if (!emotionData.primaryEmotion) {
      router.push('/');
    }
  }, [emotionData.primaryEmotion, router]);

  const currentEmoji = emotionEmojis[emotionData.primaryEmotion || 'happy'];

  const handleContinue = () => {
    setIntensity(selectedIntensity);
    router.push('/secondary-emotion');
  };

  const handleBack = () => {
    router.push('/');
  };

  const getIntensityLabel = (intensity: number) => {
    if (intensity <= 2) return t.step2.intensityLabels.small;
    if (intensity <= 3) return t.step2.intensityLabels.medium;
    return t.step2.intensityLabels.huge;
  };

  const getEmojiSize = (intensity: number) => {
    const sizes = ['text-4xl', 'text-6xl', 'text-8xl', 'text-9xl', '[font-size:12rem] leading-none'];
    return sizes[intensity - 1] || 'text-7xl';
  };

  return (
    <div className="min-h-screen bg-[#EBEBEB] flex flex-col items-center justify-center p-6">
      <LanguageSwitcher />

      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t.step2.title}
          </h1>
          <p className="text-xl text-gray-600">{t.step2.subtitle}</p>
        </div>

        {/* Emoji Display with Growing Size */}
        <div className="flex justify-center items-center mb-12 h-56 md:h-64">
          <div
            className={`${getEmojiSize(selectedIntensity || 3)} transition-all duration-500 ease-out transform`}
            style={{
              transform: `scale(${0.7 + (selectedIntensity || 3) * 0.15})`,
            }}
          >
            {currentEmoji}
          </div>
        </div>

        {/* Intensity Label */}
        <div className="text-center mb-8">
          <div className="inline-block bg-[#0BA6DF] px-6 py-3 rounded-full">
            <span className="text-2xl md:text-3xl font-bold text-white">
              {getIntensityLabel(selectedIntensity || 3)}
            </span>
          </div>
        </div>

        {/* Slider */}
        <div className="bg-white rounded-full p-8 md:p-10 shadow-xl mb-8">
          <div className="relative">
            {/* Slider Track Labels */}
            <div className="flex justify-between mb-4 px-2">
              <span className="text-sm md:text-base font-medium text-gray-500">
                {t.step2.intensityLabels.small}
              </span>
              <span className="text-sm md:text-base font-medium text-gray-500">
                {t.step2.intensityLabels.medium}
              </span>
              <span className="text-sm md:text-base font-medium text-gray-500">
                {t.step2.intensityLabels.huge}
              </span>
            </div>

            {/* Slider Input */}
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={selectedIntensity || 3}
              onChange={(e) => setSelectedIntensity(Number(e.target.value) as Intensity)}
              className="w-full h-4 bg-[#0BA6DF] rounded-full appearance-none cursor-pointer slider-thumb"
              style={{
                background: `linear-gradient(to right, #EF7722 0%, #EF7722 ${((selectedIntensity || 3) - 1) * 25}%, #0BA6DF ${((selectedIntensity || 3) - 1) * 25}%, #0BA6DF 100%)`,
              }}
            />

            {/* Number Markers */}
            <div className="flex justify-between mt-2 px-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedIntensity(num as Intensity)}
                  className={`w-8 h-8 rounded-full font-bold transition-all ${
                    selectedIntensity === num
                      ? 'bg-[#EF7722] text-white scale-110'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleBack}
            className="flex-1 bg-[#EBEBEB] text-gray-700 py-4 px-6 rounded-full font-bold text-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-300 flex items-center justify-center"
          >
            <span className="text-4xl font-black">←</span>
          </button>
          <button
            onClick={handleContinue}
            className="flex-1 bg-[#0BA6DF] text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-[#0BA6DF]/90 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#0BA6DF]/50 flex items-center justify-center"
          >
            <span className="text-4xl font-black">→</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #EF7722;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        .slider-thumb::-moz-range-thumb {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #EF7722;
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }
        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
