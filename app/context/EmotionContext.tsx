'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type PrimaryEmotion = 
  | 'happy'
  | 'sad'
  | 'mad'
  | 'worried'
  | 'tired'
  | 'confused'
  | 'frustrated'
  | 'numb'
  | null;

export type Intensity = 1 | 2 | 3 | 4 | 5 | null;

export type SecondaryEmotion = string | null;

export type FeelingContext = 
  | 'friends'
  | 'family'
  | 'school'
  | 'something-said'
  | 'something-happened'
  | 'my-body'
  | 'online'
  | 'just-feeling'
  | null;

interface EmotionData {
  primaryEmotion: PrimaryEmotion;
  intensity: Intensity;
  secondaryEmotion: SecondaryEmotion;
  context: FeelingContext;
  // Add more fields as we progress through steps
}

interface EmotionContextType {
  emotionData: EmotionData;
  setPrimaryEmotion: (emotion: PrimaryEmotion) => void;
  setIntensity: (intensity: Intensity) => void;
  setSecondaryEmotion: (emotion: SecondaryEmotion) => void;
  setContext: (context: FeelingContext) => void;
  resetData: () => void;
}

const EmotionContext = createContext<EmotionContextType | undefined>(undefined);

export function EmotionProvider({ children }: { children: ReactNode }) {
  const [emotionData, setEmotionData] = useState<EmotionData>({
    primaryEmotion: null,
    intensity: null,
    secondaryEmotion: null,
    context: null,
  });

  const setPrimaryEmotion = (emotion: PrimaryEmotion) => {
    setEmotionData((prev) => ({
      ...prev,
      primaryEmotion: emotion,
    }));
  };

  const setIntensity = (intensity: Intensity) => {
    setEmotionData((prev) => ({
      ...prev,
      intensity,
    }));
  };

  const setSecondaryEmotion = (emotion: SecondaryEmotion) => {
    setEmotionData((prev) => ({
      ...prev,
      secondaryEmotion: emotion,
    }));
  };

  const setContext = (context: FeelingContext) => {
    setEmotionData((prev) => ({
      ...prev,
      context,
    }));
  };

  const resetData = () => {
    setEmotionData({
      primaryEmotion: null,
      intensity: null,
      secondaryEmotion: null,
      context: null,
    });
  };

  return (
    <EmotionContext.Provider
      value={{
        emotionData,
        setPrimaryEmotion,
        setIntensity,
        setSecondaryEmotion,
        setContext,
        resetData,
      }}
    >
      {children}
    </EmotionContext.Provider>
  );
}

export function useEmotion() {
  const context = useContext(EmotionContext);
  if (context === undefined) {
    throw new Error('useEmotion must be used within an EmotionProvider');
  }
  return context;
}
