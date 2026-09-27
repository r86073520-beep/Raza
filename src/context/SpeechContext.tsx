import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

interface SpeechContextType {
  isPlaying: boolean;
  isPaused: boolean;
  currentText: string | null;
  currentId: string | null;
  speed: number;
  setSpeed: (rate: number) => void;
  speak: (text: string, id: string, title?: string) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  speakSingleWord: (word: string) => void;
  activeTitle: string | null;
}

const SpeechContext = createContext<SpeechContextType | null>(null);

export const SpeechProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentText, setCurrentText] = useState<string | null>(null);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const [speed, setSpeedState] = useState<number>(1.0);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;

      const loadVoices = () => {
        if (synthRef.current) {
          voicesRef.current = synthRef.current.getVoices();
        }
      };

      loadVoices();
      if (synthRef.current.onvoiceschanged !== undefined) {
        synthRef.current.onvoiceschanged = loadVoices;
      }
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const getBestVoice = useCallback(() => {
    const voices = voicesRef.current;
    if (!voices.length && synthRef.current) {
      voicesRef.current = synthRef.current.getVoices();
    }
    // Prefer natural, English voices (UK or US)
    const naturalVoice = voices.find(
      v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel'))
    );
    if (naturalVoice) return naturalVoice;
    return voices.find(v => v.lang.startsWith('en')) || voices[0] || null;
  }, []);

  const speak = useCallback((text: string, id: string, title?: string) => {
    if (!synthRef.current) return;

    // If already speaking this item, toggle pause/play
    if (currentId === id && isPlaying) {
      if (isPaused) {
        synthRef.current.resume();
        setIsPaused(false);
      } else {
        synthRef.current.pause();
        setIsPaused(true);
      }
      return;
    }

    synthRef.current.cancel();

    // Clean text: strip special markdown/brackets for smoother speech
    const cleanText = text
      .replace(/[•→\(\)]/g, ' ')
      .replace(/CO2/g, 'carbon dioxide')
      .replace(/SO2/g, 'sulfur dioxide')
      .replace(/SO3/g, 'sulfur trioxide')
      .replace(/H2O/g, 'water')
      .replace(/O3/g, 'ozone')
      .replace(/N2/g, 'nitrogen')
      .replace(/O2/g, 'oxygen')
      .replace(/NaCl/g, 'sodium chloride')
      .replace(/NaHCO3/g, 'sodium bicarbonate')
      .replace(/Na2CO3/g, 'sodium carbonate')
      .replace(/NH3/g, 'ammonia')
      .replace(/CaCO3/g, 'calcium carbonate')
      .replace(/Ca\(HCO3\)2/g, 'calcium bicarbonate');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = speed;
    utterance.pitch = 1.0;
    
    const voice = getBestVoice();
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = 'en-US';
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setCurrentText(text);
      setCurrentId(id);
      setActiveTitle(title || 'Reading paragraph...');
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentText(null);
      setCurrentId(null);
      setActiveTitle(null);
    };

    utterance.onerror = (e) => {
      // Don't show error if cancelled intentionally
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        console.warn('Speech synthesis error:', e);
      }
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentText(null);
      setCurrentId(null);
      setActiveTitle(null);
    };

    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  }, [currentId, isPlaying, isPaused, speed, getBestVoice]);

  const speakSingleWord = useCallback((word: string) => {
    if (!synthRef.current) return;
    
    // Quick pronunciation utterance
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 0.85; // Slightly slower for clear pronunciation
    utterance.pitch = 1.0;
    const voice = getBestVoice();
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = 'en-US';
    }

    synthRef.current.cancel();
    synthRef.current.speak(utterance);
  }, [getBestVoice]);

  const pause = useCallback(() => {
    if (synthRef.current && isPlaying && !isPaused) {
      synthRef.current.pause();
      setIsPaused(true);
    }
  }, [isPlaying, isPaused]);

  const resume = useCallback(() => {
    if (synthRef.current && isPaused) {
      synthRef.current.resume();
      setIsPaused(false);
    }
  }, [isPaused]);

  const stop = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentText(null);
    setCurrentId(null);
    setActiveTitle(null);
  }, []);

  const setSpeed = useCallback((newSpeed: number) => {
    setSpeedState(newSpeed);
    // If currently speaking, restart current with new speed
    if (synthRef.current && isPlaying && currentText && currentId) {
      speak(currentText, currentId, activeTitle || undefined);
    }
  }, [isPlaying, currentText, currentId, activeTitle, speak]);

  return (
    <SpeechContext.Provider
      value={{
        isPlaying,
        isPaused,
        currentText,
        currentId,
        speed,
        setSpeed,
        speak,
        pause,
        resume,
        stop,
        speakSingleWord,
        activeTitle
      }}
    >
      {children}
    </SpeechContext.Provider>
  );
};

export const useSpeech = () => {
  const context = useContext(SpeechContext);
  if (!context) {
    throw new Error('useSpeech must be used within a SpeechProvider');
  }
  return context;
};
