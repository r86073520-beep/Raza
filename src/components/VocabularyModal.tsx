import React, { useEffect } from 'react';
import { Volume2, X } from 'lucide-react';
import { VocabularyTerm } from '../types/book';
import { useSpeech } from '../context/SpeechContext';
import { VisualAnimation } from './VisualAnimations';

interface VocabularyModalProps {
  term: VocabularyTerm | null;
  onClose: () => void;
}

export const VocabularyModal: React.FC<VocabularyModalProps> = ({ term, onClose }) => {
  const { speakSingleWord } = useSpeech();

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!term) return null;

  const cat = term.category || 'general';
  let headerGradient = 'from-indigo-700 via-purple-700 to-blue-800';
  let categoryLabel = 'General Science';
  let categoryIcon = '📖';

  if (cat === 'physics') {
    headerGradient = 'from-amber-600 via-orange-600 to-red-700';
    categoryLabel = 'Physics 10th (طبیعیات)';
    categoryIcon = '⚡';
  } else if (cat === 'chemistry') {
    headerGradient = 'from-indigo-700 via-purple-700 to-sky-800';
    categoryLabel = 'Chemistry 10th (کیمسٹری)';
    categoryIcon = '🧪';
  } else if (cat === 'mathematics') {
    headerGradient = 'from-teal-700 via-emerald-700 to-cyan-800';
    categoryLabel = 'Mathematics 10th (ریاضی)';
    categoryIcon = '📐';
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="vocab-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 w-full max-w-lg overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar with Rich Gradient */}
        <div className={`bg-gradient-to-r ${headerGradient} text-white px-6 py-5 flex items-center justify-between shadow-md`}>
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1 border border-white/20">
                  <span>{categoryIcon}</span>
                  <span>{categoryLabel}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <h3 id="vocab-modal-title" className="text-2xl font-black tracking-tight text-white drop-shadow-xs">
                  {term.word}
                </h3>
                <button
                  type="button"
                  onClick={() => speakSingleWord(term.word)}
                  title="Listen to pronunciation"
                  aria-label={`Pronounce ${term.word}`}
                  className="p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer shadow-xs"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs font-mono text-white/80 tracking-wider mt-0.5 font-semibold">
                {term.pronunciation}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/15 transition-colors focus:outline-none cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {/* Urdu Meaning Card: Rich Warm Saffron Gold Gradient */}
          <div className="bg-gradient-to-r from-amber-50 via-orange-50/60 to-yellow-50/80 border-2 border-amber-300/80 rounded-2xl p-4 shadow-xs">
            <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block mb-1">
              Urdu Meaning · اردو معنی و تشریح
            </span>
            <p className="text-xl font-urdu text-amber-950 font-bold text-right leading-loose drop-shadow-2xs" dir="rtl">
              {term.urduMeaning}
            </p>
          </div>

          {/* English Meaning Card: Soft Indigo Gradient */}
          <div className="bg-gradient-to-br from-indigo-50/80 to-blue-50/50 border border-indigo-200/90 rounded-2xl p-4 shadow-2xs">
            <span className="text-[11px] font-bold text-indigo-900 uppercase tracking-wider block mb-1">
              English Meaning & Definition
            </span>
            <p className="text-sm text-slate-800 leading-relaxed font-medium">
              {term.englishMeaning}
            </p>
          </div>

          {/* Visual Animation (if scientific / conceptual) */}
          {term.visualType !== 'none' && (
            <div className="mt-1">
              <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                Interactive Visual Concept
              </span>
              <VisualAnimation type={term.visualType} />
            </div>
          )}

          {/* Synonyms & Antonyms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {term.synonyms && term.synonyms.length > 0 && (
              <div className="p-3.5 bg-gradient-to-br from-sky-50 to-blue-50/50 rounded-2xl border border-sky-200/80">
                <span className="text-[11px] font-bold text-sky-900 uppercase tracking-wider block mb-2">
                  Synonyms
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {term.synonyms.map((syn, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white text-sky-800 px-2.5 py-1 rounded-lg border border-sky-200 font-semibold shadow-2xs"
                    >
                      {syn}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {term.antonyms && term.antonyms.length > 0 && (
              <div className="p-3.5 bg-gradient-to-br from-rose-50 to-orange-50/50 rounded-2xl border border-rose-200/80">
                <span className="text-[11px] font-bold text-rose-900 uppercase tracking-wider block mb-2">
                  Antonyms
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {term.antonyms.map((ant, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white text-rose-800 px-2.5 py-1 rounded-lg border border-rose-200 font-semibold shadow-2xs"
                    >
                      {ant}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Example Sentence */}
          {term.example && (
            <div className="p-4 bg-gradient-to-r from-emerald-50 via-teal-50/50 to-cyan-50/50 border border-emerald-200 rounded-2xl shadow-2xs">
              <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block mb-1">
                Context Example Sentence
              </span>
              <p className="text-sm italic text-emerald-950 font-medium leading-relaxed">
                "{term.example}"
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Interactive Educational Dictionary</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium rounded-lg text-xs transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
