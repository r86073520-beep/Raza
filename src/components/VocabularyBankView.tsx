import React, { useState, useMemo } from 'react';
import { Search, Volume2, Sparkles, Eye } from 'lucide-react';
import { VOCABULARY_LIST } from '../data/vocabulary';
import { VocabularyTerm } from '../types/book';
import { useSpeech } from '../context/SpeechContext';

interface VocabularyBankViewProps {
  onSelectTerm: (term: VocabularyTerm) => void;
}

export const VocabularyBankView: React.FC<VocabularyBankViewProps> = ({ onSelectTerm }) => {
  const { speakSingleWord } = useSpeech();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredTerms = useMemo(() => {
    return VOCABULARY_LIST.filter(term => {
      const matchesSearch =
        term.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.englishMeaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.urduMeaning.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCat = categoryFilter === 'all' || term.category === categoryFilter;
      return matchesSearch && matchesCat;
    });
  }, [searchTerm, categoryFilter]);

  const categories = [
    { id: 'all', label: 'All Terms' },
    { id: 'chemistry', label: 'Chemistry' },
    { id: 'mathematics', label: 'Mathematics' },
    { id: 'environmental', label: 'Environmental' },
    { id: 'physics', label: 'Physics' },
    { id: 'biology', label: 'Biology' },
    { id: 'general', label: 'General' }
  ];

  return (
    <div className="space-y-6">
      {/* Search & Filter Header with Vibrant Gradient Banner */}
      <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-300 animate-ping" />
            <h2 className="text-2xl font-extrabold tracking-tight text-white drop-shadow-xs">
              Interactive Vocabulary Bank
            </h2>
            <span className="text-xs bg-white/20 text-white font-bold px-2.5 py-0.5 rounded-full border border-white/20">
              Glossary & Visuals
            </span>
          </div>
          <p className="text-xs sm:text-sm text-purple-100/90 mt-1 max-w-2xl">
            Explore key educational concepts, listen to native English pronunciations, review authentic Urdu meanings, and inspect visual animation models.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search words (e.g. Atom, Capillary, Ozone, پانی, وغیرہ)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white text-slate-900 border-none rounded-xl text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300 shadow-md transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl text-xs shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-bold transition-all cursor-pointer ${
                  categoryFilter === cat.id
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'text-white/80 hover:text-white hover:bg-white/15'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTerms.map((term) => {
          const isEnvironmental = term.category === 'environmental';
          const isPhysics = term.category === 'physics';
          const isBiology = term.category === 'biology';

          let borderAccent = 'hover:border-indigo-400';
          let tagBadge = 'bg-indigo-50 text-indigo-700 border-indigo-200';
          if (isEnvironmental) {
            borderAccent = 'hover:border-emerald-400';
            tagBadge = 'bg-emerald-50 text-emerald-700 border-emerald-200';
          } else if (isPhysics) {
            borderAccent = 'hover:border-cyan-400';
            tagBadge = 'bg-cyan-50 text-cyan-700 border-cyan-200';
          } else if (isBiology) {
            borderAccent = 'hover:border-rose-400';
            tagBadge = 'bg-rose-50 text-rose-700 border-rose-200';
          }

          return (
            <div
              key={term.id}
              onClick={() => onSelectTerm(term)}
              className={`bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group ${borderAccent}`}
            >
              <div>
                {/* Word & Audio */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {term.word}
                    </h3>
                    <span className="text-[11px] font-mono text-indigo-600 font-medium">
                      {term.pronunciation}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speakSingleWord(term.word);
                      }}
                      title="Pronounce word"
                      aria-label={`Pronounce ${term.word}`}
                      className="p-2 rounded-full bg-slate-100 hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-purple-600 hover:text-white text-slate-600 transition-all shadow-2xs"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Urdu Meaning with warm saffron background */}
                <div className="mt-3.5 bg-gradient-to-r from-amber-50 to-orange-50/60 p-3 rounded-xl border border-amber-200 text-right">
                  <span className="text-[10px] text-amber-900 font-bold block text-left mb-0.5 uppercase tracking-wider">
                    اردو معنی
                  </span>
                  <p className="font-urdu text-base text-amber-950 font-bold leading-relaxed" dir="rtl">
                    {term.urduMeaning}
                  </p>
                </div>

                {/* English Definition */}
                <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed font-normal">
                  {term.englishMeaning}
                </p>
              </div>

              {/* Bottom metadata tags */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className={`capitalize font-bold px-2 py-0.5 rounded-md border text-[10px] ${tagBadge}`}>
                  {term.category || 'General'}
                </span>

                {term.visualType !== 'none' ? (
                  <span className="flex items-center gap-1.5 text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200 font-bold">
                    <Sparkles className="w-3 h-3 text-amber-500 fill-amber-400" />
                    Interactive Model
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-slate-400 group-hover:text-indigo-600 font-medium">
                    <Eye className="w-3.5 h-3.5" />
                    View Card
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {filteredTerms.length === 0 && (
          <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-sm font-semibold text-slate-700">No vocabulary words match your search.</p>
            <p className="text-xs text-slate-400 mt-1">Try searching for other terms or reset the category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};
