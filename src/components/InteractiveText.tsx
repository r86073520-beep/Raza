import React, { useMemo } from 'react';
import { VOCABULARY_LIST } from '../data/vocabulary';
import { VocabularyTerm } from '../types/book';

type TextSegment = 
  | { type: 'text'; content: string }
  | { type: 'term'; content: string; term: VocabularyTerm };

interface InteractiveTextProps {
  text: string;
  onSelectTerm: (term: VocabularyTerm) => void;
  className?: string;
}

export const InteractiveText: React.FC<InteractiveTextProps> = ({
  text,
  onSelectTerm,
  className = ''
}) => {
  // Build a sorted list of phrases and words to detect (longer phrases first to avoid greedy prefix overlap)
  const segments = useMemo<TextSegment[]>(() => {
    // Map of matching lower-case patterns to VocabularyTerm
    const patternMap = new Map<string, VocabularyTerm>();

    VOCABULARY_LIST.forEach(term => {
      term.matches.forEach(match => {
        patternMap.set(match.toLowerCase(), term);
      });
      patternMap.set(term.word.toLowerCase(), term);
    });

    // Sort patterns by length descending so "capillary action" matches before "action"
    const sortedPatterns = Array.from(patternMap.keys()).sort((a, b) => b.length - a.length);

    if (sortedPatterns.length === 0) {
      return [{ type: 'text', content: text }];
    }

    // Escape regex special chars
    const escapedPatterns = sortedPatterns.map(p =>
      p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );

    // Use word boundaries \b where applicable
    const regex = new RegExp(`\\b(${escapedPatterns.join('|')})\\b`, 'gi');

    const result: TextSegment[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      const matchIndex = match.index;
      const matchedString = match[0];

      // Add preceding plain text
      if (matchIndex > lastIndex) {
        result.push({
          type: 'text',
          content: text.slice(lastIndex, matchIndex)
        });
      }

      const term = patternMap.get(matchedString.toLowerCase());
      if (term) {
        result.push({
          type: 'term',
          content: matchedString,
          term
        });
      } else {
        result.push({
          type: 'text',
          content: matchedString
        });
      }

      lastIndex = regex.lastIndex;
    }

    // Remaining text
    if (lastIndex < text.length) {
      result.push({
        type: 'text',
        content: text.slice(lastIndex)
      });
    }

    return result;
  }, [text]);

  return (
    <span className={`inline leading-relaxed ${className}`}>
      {segments.map((seg, idx) => {
        if (seg.type === 'term') {
          const term = seg.term;
          const cat = term.category || 'general';

          // Determine prominent theme by subject category
          let termStyle =
            'text-sky-950 font-semibold bg-sky-100/90 hover:bg-sky-200 border border-sky-300/80 shadow-2xs';
          let icon = '📖';

          if (cat === 'physics') {
            termStyle =
              'text-amber-950 font-bold bg-gradient-to-r from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 border border-amber-300 text-shadow-2xs shadow-2xs';
            icon = '⚡';
          } else if (cat === 'chemistry') {
            termStyle =
              'text-indigo-950 font-bold bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 border border-indigo-300 text-shadow-2xs shadow-2xs';
            icon = '🧪';
          } else if (cat === 'mathematics') {
            termStyle =
              'text-teal-950 font-bold bg-gradient-to-r from-teal-100 to-emerald-100 hover:from-teal-200 hover:to-emerald-200 border border-teal-300 text-shadow-2xs shadow-2xs';
            icon = '📐';
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectTerm(term);
              }}
              title={`Click to view meaning, Urdu definition & visuals of "${term.word}"`}
              className={`interactive-term inline-flex items-center gap-1 align-baseline rounded px-1.5 py-0.5 -mx-0.5 my-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 cursor-pointer ${termStyle}`}
            >
              <span className="text-[10px] select-none opacity-80">{icon}</span>
              <span>{seg.content}</span>
            </button>
          );
        }
        return <span key={idx}>{seg.content}</span>;
      })}
    </span>
  );
};
