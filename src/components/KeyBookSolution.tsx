import React from 'react';
import { CheckCircle2, Bookmark, ArrowRight, Calculator } from 'lucide-react';
import { MathSolutionData, VocabularyTerm } from '../types/book';
import { InteractiveText } from './InteractiveText';

interface KeyBookSolutionProps {
  mathSolution?: MathSolutionData;
  rawText?: string;
  onSelectTerm?: (term: VocabularyTerm) => void;
}

/**
 * Attempts to parse an unstructured math answer string into structured Key Book steps
 * if an explicit mathSolution object is not provided.
 */
function parseRawMathAnswer(text: string): MathSolutionData | null {
  if (!text) return null;

  // Check if text has signs of a step-wise math problem
  const hasStepIndicators =
    text.includes('Step 1:') ||
    text.includes('Given equation:') ||
    text.includes('Solution Set =') ||
    text.includes('Comparing with') ||
    text.includes('Applying quadratic formula') ||
    text.includes('⇒') ||
    text.includes('Splitting');

  if (!hasStepIndicators) return null;

  let given: string | undefined;
  let formula: string | undefined;
  let solutionSet: string | undefined;
  const steps: string[] = [];

  // Extract Solution Set if present
  const ssMatch = text.match(/(?:Solution Set|S\.S\.|Hence, Solution Set)\s*=\s*({[^}]+}|\S+)/i);
  if (ssMatch) {
    solutionSet = ssMatch[1];
  }

  // Extract Given if present
  const givenMatch = text.match(/(?:Given equation|Given that|Given):\s*([^.]+?\.)/i);
  if (givenMatch) {
    given = givenMatch[1].trim();
  }

  // Extract Formula if present
  const formulaMatch = text.match(/(?:Applying quadratic formula|Formula used|formula):\s*([^.]+?\.)/i);
  if (formulaMatch) {
    formula = formulaMatch[1].trim();
  }

  // Split into logical steps by sentences or arrows
  const rawSentences = text
    .split(/(?:Step \d+:|\.\s+)/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  rawSentences.forEach((sentence) => {
    // Skip if it is purely the solution set line
    if (sentence.startsWith('Solution Set =') || sentence.startsWith('Hence, Solution Set =')) {
      return;
    }
    steps.push(sentence);
  });

  return {
    given,
    formula,
    steps: steps.length > 0 ? steps : [text],
    solutionSet
  };
}

export const KeyBookSolution: React.FC<KeyBookSolutionProps> = ({
  mathSolution,
  rawText,
  onSelectTerm
}) => {
  const data = mathSolution || (rawText ? parseRawMathAnswer(rawText) : null);

  if (!data) {
    return null;
  }

  return (
    <div className="mt-4 rounded-2xl border-2 border-teal-200/80 bg-gradient-to-br from-teal-50/40 via-white to-sky-50/40 shadow-xs overflow-hidden transition-all">
      {/* Key Book Header Bar */}
      <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-900 text-white px-4 py-2.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-teal-500/30 flex items-center justify-center border border-teal-300/40">
            <Calculator className="w-3.5 h-3.5 text-teal-200" />
          </div>
          <span className="font-bold text-xs uppercase tracking-wider text-teal-100 flex items-center gap-1.5 font-mono">
            <span>KEY BOOK SOLUTION</span>
            <span className="text-teal-300 font-sans">·</span>
            <span className="font-urdu text-sm font-semibold text-amber-300">مرحلہ وار حل</span>
          </span>
        </div>
        <span className="text-[11px] font-semibold bg-white/15 px-2.5 py-0.5 rounded-full border border-white/20 text-teal-100">
          Step-by-Step
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* Given & Required / Formula Bar */}
        {(data.given || data.toFind || data.formula) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {/* Given / معلوم */}
            {data.given && (
              <div className="bg-white p-3 rounded-xl border border-teal-100 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] font-bold text-teal-800 uppercase tracking-wider mb-1">
                  <span className="flex items-center gap-1.5">
                    <Bookmark className="w-3 h-3 text-teal-600" />
                    Given / معلوم:
                  </span>
                </div>
                <div className="font-mono text-slate-800 font-semibold text-xs sm:text-sm pl-4 leading-relaxed">
                  {onSelectTerm ? <InteractiveText text={data.given} onSelectTerm={onSelectTerm} /> : data.given}
                </div>
              </div>
            )}

            {/* Formula / فارمولا */}
            {data.formula && (
              <div className="bg-white p-3 rounded-xl border border-sky-100 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] font-bold text-sky-800 uppercase tracking-wider mb-1">
                  <span>Formula Used / فارمولا:</span>
                </div>
                <div className="font-mono text-indigo-900 font-bold text-xs sm:text-sm pl-4 leading-relaxed bg-sky-50/50 p-1.5 rounded border border-sky-100/60">
                  {data.formula}
                </div>
              </div>
            )}

            {/* To Find / مطلوب */}
            {data.toFind && (
              <div className="bg-white p-3 rounded-xl border border-purple-100 shadow-2xs md:col-span-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-purple-800 uppercase tracking-wider mb-1">
                  <span>To Find / مطلوب:</span>
                </div>
                <div className="font-mono text-slate-800 font-semibold text-xs sm:text-sm pl-4">
                  {data.toFind}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step-by-Step Working Section */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
              <span>Detailed Steps / مراحلِ حل:</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Standard Board Layout</span>
          </div>

          <div className="space-y-2.5 pl-0 sm:pl-1">
            {data.steps.map((step, idx) => {
              // Highlight implications like ⇒
              const formattedStep = step.replace(/⇒/g, ' ⟹ ');

              return (
                <div
                  key={idx}
                  className="bg-white/90 rounded-xl p-3 sm:p-3.5 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-start gap-2.5 hover:border-teal-300 transition-colors"
                >
                  {/* Step Number Badge */}
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="px-2 py-0.5 rounded-md bg-teal-100/80 text-teal-900 font-mono font-black text-xs border border-teal-300/60 shadow-2xs">
                      Step {idx + 1}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 font-mono text-xs sm:text-sm text-slate-800 leading-relaxed overflow-x-auto">
                    {onSelectTerm ? (
                      <InteractiveText text={formattedStep} onSelectTerm={onSelectTerm} />
                    ) : (
                      formattedStep
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Solution Set / Final Answer Box */}
        {data.solutionSet && (
          <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-2 border-emerald-400/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="text-xs font-black text-emerald-950 uppercase tracking-wider block font-sans">
                  Solution Set (S.S.) / نتیجہ
                </span>
                <span className="text-[11px] text-emerald-700 font-urdu block">
                  حل سیٹ (مطلوبہ جواب)
                </span>
              </div>
            </div>

            <div className="bg-white px-4 py-2 rounded-xl border border-emerald-300/80 shadow-xs font-mono font-black text-sm sm:text-base text-emerald-900 flex items-center gap-2 self-start sm:self-auto">
              <span className="text-emerald-600 font-bold text-xs uppercase">Ans:</span>
              <span>{data.solutionSet}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
