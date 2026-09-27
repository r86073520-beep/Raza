import React, { useState } from 'react';
import { Volume2, BookOpen, HelpCircle, Layers, FileText, CheckCircle, Calculator, CheckCircle2 } from 'lucide-react';
import { Chapter, VocabularyTerm } from '../types/book';
import { InteractiveText } from './InteractiveText';
import { useSpeech } from '../context/SpeechContext';
import { VisualAnimation } from './VisualAnimations';
import { KeyBookSolution } from './KeyBookSolution';

interface BookReaderViewProps {
  chapter: Chapter;
  onSelectTerm: (term: VocabularyTerm) => void;
}

export const BookReaderView: React.FC<BookReaderViewProps> = ({
  chapter,
  onSelectTerm
}) => {
  const { speak, currentId, isPlaying, isPaused } = useSpeech();
  const [sectionFilter, setSectionFilter] = useState<'all' | 'short' | 'extensive' | 'numericals'>('all');
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  const textClass = fontSize === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base';

  // Dynamic chapter banner gradient
  const getBannerTheme = (id: string) => {
    switch (id) {
      case 'ch-9':
        return {
          gradient: 'from-amber-600 via-orange-600 to-yellow-700',
          badge: 'bg-white/20 text-amber-100 border-white/20',
          accent: 'text-amber-300',
          btnBg: 'bg-white text-amber-950 hover:bg-amber-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'ch-10':
        return {
          gradient: 'from-rose-600 via-pink-700 to-indigo-800',
          badge: 'bg-white/20 text-rose-100 border-white/20',
          accent: 'text-rose-300',
          btnBg: 'bg-white text-rose-950 hover:bg-rose-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'ch-14':
        return {
          gradient: 'from-sky-600 via-indigo-600 to-blue-800',
          badge: 'bg-white/20 text-sky-100 border-white/20',
          accent: 'text-sky-300',
          btnBg: 'bg-white text-indigo-900 hover:bg-sky-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'ch-15':
        return {
          gradient: 'from-teal-600 via-cyan-700 to-blue-800',
          badge: 'bg-white/20 text-cyan-100 border-white/20',
          accent: 'text-cyan-300',
          btnBg: 'bg-white text-teal-900 hover:bg-cyan-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'ch-16':
        return {
          gradient: 'from-amber-600 via-rose-700 to-purple-800',
          badge: 'bg-white/20 text-amber-100 border-white/20',
          accent: 'text-amber-300',
          btnBg: 'bg-white text-amber-900 hover:bg-amber-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'math-u1':
        return {
          gradient: 'from-emerald-600 via-teal-700 to-cyan-800',
          badge: 'bg-white/20 text-emerald-100 border-white/20',
          accent: 'text-emerald-300',
          btnBg: 'bg-white text-emerald-950 hover:bg-emerald-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'math-u2':
        return {
          gradient: 'from-indigo-600 via-blue-700 to-purple-800',
          badge: 'bg-white/20 text-indigo-100 border-white/20',
          accent: 'text-indigo-300',
          btnBg: 'bg-white text-indigo-950 hover:bg-indigo-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'math-u3':
        return {
          gradient: 'from-amber-600 via-orange-700 to-rose-800',
          badge: 'bg-white/20 text-amber-100 border-white/20',
          accent: 'text-amber-300',
          btnBg: 'bg-white text-amber-950 hover:bg-amber-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'math-u5':
        return {
          gradient: 'from-purple-600 via-fuchsia-700 to-indigo-800',
          badge: 'bg-white/20 text-purple-100 border-white/20',
          accent: 'text-purple-300',
          btnBg: 'bg-white text-purple-950 hover:bg-purple-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'math-u7':
        return {
          gradient: 'from-rose-600 via-pink-700 to-teal-800',
          badge: 'bg-white/20 text-rose-100 border-white/20',
          accent: 'text-rose-300',
          btnBg: 'bg-white text-rose-950 hover:bg-rose-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'phy-u10':
        return {
          gradient: 'from-amber-600 via-orange-600 to-red-700',
          badge: 'bg-white/20 text-amber-100 border-white/20',
          accent: 'text-amber-300',
          btnBg: 'bg-white text-amber-950 hover:bg-amber-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'phy-u11':
        return {
          gradient: 'from-teal-600 via-cyan-700 to-blue-800',
          badge: 'bg-white/20 text-teal-100 border-white/20',
          accent: 'text-teal-300',
          btnBg: 'bg-white text-teal-950 hover:bg-teal-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'phy-u12':
        return {
          gradient: 'from-sky-600 via-indigo-700 to-purple-800',
          badge: 'bg-white/20 text-sky-100 border-white/20',
          accent: 'text-sky-300',
          btnBg: 'bg-white text-sky-950 hover:bg-sky-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'phy-u13':
        return {
          gradient: 'from-blue-600 via-violet-700 to-indigo-800',
          badge: 'bg-white/20 text-blue-100 border-white/20',
          accent: 'text-blue-300',
          btnBg: 'bg-white text-blue-950 hover:bg-blue-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'phy-u14':
        return {
          gradient: 'from-yellow-600 via-amber-700 to-orange-800',
          badge: 'bg-white/20 text-yellow-100 border-white/20',
          accent: 'text-yellow-300',
          btnBg: 'bg-white text-yellow-950 hover:bg-yellow-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'phy-u15':
        return {
          gradient: 'from-emerald-600 via-teal-700 to-slate-800',
          badge: 'bg-white/20 text-emerald-100 border-white/20',
          accent: 'text-emerald-300',
          btnBg: 'bg-white text-emerald-950 hover:bg-emerald-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'phy-u16':
        return {
          gradient: 'from-purple-600 via-pink-700 to-rose-800',
          badge: 'bg-white/20 text-purple-100 border-white/20',
          accent: 'text-purple-300',
          btnBg: 'bg-white text-purple-950 hover:bg-purple-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'phy-u17':
        return {
          gradient: 'from-cyan-600 via-blue-700 to-indigo-800',
          badge: 'bg-white/20 text-cyan-100 border-white/20',
          accent: 'text-cyan-300',
          btnBg: 'bg-white text-cyan-950 hover:bg-cyan-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      case 'phy-u18':
        return {
          gradient: 'from-rose-600 via-red-700 to-purple-900',
          badge: 'bg-white/20 text-rose-100 border-white/20',
          accent: 'text-rose-300',
          btnBg: 'bg-white text-rose-950 hover:bg-rose-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
      default:
        return {
          gradient: 'from-blue-600 via-indigo-700 to-purple-800',
          badge: 'bg-white/20 text-blue-100 border-white/20',
          accent: 'text-blue-300',
          btnBg: 'bg-white text-slate-900 hover:bg-slate-50 shadow-md',
          secondaryBtn: 'bg-white/15 text-white hover:bg-white/25 border-white/20'
        };
    }
  };

  const bannerTheme = getBannerTheme(chapter.id);

  const hasNumericals = chapter.numericals && chapter.numericals.length > 0;
  const totalNotesCount = chapter.shortQuestions.length + chapter.extensiveQuestions.length + (chapter.numericals?.length || 0);

  return (
    <div className="space-y-6">
      {/* Chapter Overview Header with Rich Color Gradient */}
      <div className={`rounded-3xl p-6 sm:p-8 bg-gradient-to-r ${bannerTheme.gradient} text-white shadow-lg relative overflow-hidden`}>
        {/* Abstract background decorative circles */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
              <span className={`px-2.5 py-0.5 rounded-full border backdrop-blur-xs ${bannerTheme.badge}`}>
                Chapter {chapter.number}
              </span>
              <span>·</span>
              <span className="font-urdu text-base text-amber-200">{chapter.urduTitle}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-xs">
              {chapter.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-100/90 leading-relaxed pt-1">
              <InteractiveText text={chapter.summary} onSelectTerm={onSelectTerm} className="text-white selection:bg-amber-300 selection:text-slate-900" />
            </p>
          </div>

          {/* Quick Controls: Read Summary, Font Size, Section Switch */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => speak(chapter.summary, `ch-summary-${chapter.id}`, `${chapter.title} Summary`)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${bannerTheme.btnBg}`}
            >
              <Volume2 className="w-4 h-4" />
              Listen to Summary
            </button>

            <div className={`flex items-center gap-1 p-1 rounded-xl border backdrop-blur-xs text-xs ${bannerTheme.secondaryBtn}`}>
              <button
                type="button"
                onClick={() => setFontSize('normal')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  fontSize === 'normal' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-white/80 hover:text-white'
                }`}
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontSize('large')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                  fontSize === 'large' ? 'bg-white text-slate-900 font-extrabold shadow-xs' : 'text-white/80 hover:text-white'
                }`}
              >
                A+
              </button>
            </div>
          </div>
        </div>

        {/* Section View Filter Tabs */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/20 relative z-10 flex-wrap">
          <span className="text-xs font-semibold text-white/80">View:</span>
          <button
            type="button"
            onClick={() => setSectionFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              sectionFilter === 'all'
                ? 'bg-white text-slate-900 shadow-md'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            All Notes ({totalNotesCount})
          </button>
          <button
            type="button"
            onClick={() => setSectionFilter('short')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              sectionFilter === 'short'
                ? 'bg-white text-slate-900 shadow-md'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            Short Questions ({chapter.shortQuestions.length})
          </button>
          <button
            type="button"
            onClick={() => setSectionFilter('extensive')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              sectionFilter === 'extensive'
                ? 'bg-white text-slate-900 shadow-md'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            Extensive Questions ({chapter.extensiveQuestions.length})
          </button>
          {hasNumericals && (
            <button
              type="button"
              onClick={() => setSectionFilter('numericals')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                sectionFilter === 'numericals'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              Numericals ({chapter.numericals?.length})
            </button>
          )}
        </div>
      </div>

      {/* SHORT QUESTIONS SECTION */}
      {(sectionFilter === 'all' || sectionFilter === 'short') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-1">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-xs" />
              <span>Short Questions / Answers</span>
            </h2>
            <span className="text-xs bg-blue-50 text-blue-700 font-bold px-2.5 py-1 rounded-full border border-blue-200/60 font-mono">
              {chapter.shortQuestions.length} Questions
            </span>
          </div>

          <div className="space-y-4">
            {chapter.shortQuestions.map((item) => {
              const fullSpeechText = `${item.questionNumber}: ${item.question}. Answer: ${item.answer} ${
                item.exampleList ? item.exampleList.join('. ') : ''
              } ${item.notes || ''}`;
              const isSpeaking = currentId === item.id && isPlaying;

              return (
                <article
                  key={item.id}
                  id={item.id}
                  className={`bg-white rounded-2xl p-5 sm:p-6 border transition-all ${
                    isSpeaking
                      ? 'border-indigo-500 ring-2 ring-indigo-200/80 shadow-md'
                      : 'border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-slate-300'
                  }`}
                >
                  {/* Question Line */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-extrabold font-mono px-2.5 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shrink-0 shadow-xs">
                        {item.questionNumber}
                      </span>
                      <h3 className={`font-bold text-slate-900 leading-snug ${textClass}`}>
                        <InteractiveText text={item.question} onSelectTerm={onSelectTerm} />
                      </h3>
                    </div>

                    {/* 🔊 Listen Button */}
                    <button
                      type="button"
                      onClick={() => speak(fullSpeechText, item.id, `${item.questionNumber} - ${chapter.title}`)}
                      title={isSpeaking ? (isPaused ? 'Resume speaking' : 'Pause speaking') : 'Listen to question and answer'}
                      aria-label={`Listen to ${item.questionNumber}`}
                      className={`p-2.5 rounded-xl border transition-all shrink-0 cursor-pointer ${
                        isSpeaking
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-md'
                          : 'bg-indigo-50/70 hover:bg-indigo-100 text-indigo-700 border-indigo-200/60'
                      }`}
                    >
                      <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-pulse' : ''}`} />
                    </button>
                  </div>

                  {/* Answer Text */}
                  <div className="pl-0 sm:pl-10 space-y-3.5">
                    <div className="inline-block text-[11px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Answer
                    </div>
                    <div className={`text-slate-800 leading-relaxed ${textClass}`}>
                      <InteractiveText text={item.answer} onSelectTerm={onSelectTerm} />
                    </div>

                    {/* Key Book Style Solution for Mathematics */}
                    {(item.mathSolution ||
                      (chapter.id.startsWith('math-') &&
                        (item.answer.includes('⇒') ||
                          item.answer.includes('Step 1') ||
                          item.answer.includes('Solution Set') ||
                          item.answer.includes('Splitting') ||
                          item.answer.includes('Comparing with')))) && (
                      <KeyBookSolution
                        mathSolution={item.mathSolution}
                        rawText={item.answer}
                        onSelectTerm={onSelectTerm}
                      />
                    )}

                    {/* Example bullet list if present */}
                    {item.exampleList && item.exampleList.length > 0 && (
                      <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 rounded-xl p-4 border border-indigo-100/80 space-y-2">
                        <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider block">
                          Key Examples / Points:
                        </span>
                        <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-slate-700 marker:text-indigo-500">
                          {item.exampleList.map((ex, exIdx) => (
                            <li key={exIdx} className="leading-relaxed">
                              <InteractiveText text={ex} onSelectTerm={onSelectTerm} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Chemical Reactions block with sleek neon-glow feel */}
                    {item.chemicalReactions && item.chemicalReactions.length > 0 && (
                      <div className="bg-gradient-to-br from-slate-950 to-indigo-950 text-indigo-100 rounded-2xl p-4 font-mono text-xs sm:text-sm space-y-2 border border-indigo-800 shadow-lg">
                        <div className="flex items-center justify-between text-[11px] text-cyan-400 font-sans font-bold uppercase tracking-wider">
                          <span>Chemical Reaction Equations</span>
                          <span className="text-[10px] bg-indigo-900/80 text-indigo-300 px-2 py-0.5 rounded">Reactions</span>
                        </div>
                        {item.chemicalReactions.map((eq, eqIdx) => (
                          <div key={eqIdx} className="tracking-wide text-cyan-200 py-1 font-semibold flex items-center gap-2">
                            <span className="text-amber-400 font-bold">⚗</span>
                            <span>{eq}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Comparison Table with colorful contrasting headers */}
                    {item.tableData && (
                      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs bg-white">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead>
                            <tr className="bg-gradient-to-r from-teal-600 to-indigo-600 text-white font-bold">
                              <th className="py-3 px-4 border-r border-white/20 w-1/2">
                                {item.tableData.headers[0]}
                              </th>
                              <th className="py-3 px-4 w-1/2">
                                {item.tableData.headers[1]}
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {item.tableData.rows.map((row, rIdx) => (
                              <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                                <td className="py-3 px-4 border-r border-slate-200 text-slate-700 align-top">
                                  <InteractiveText text={row[0]} onSelectTerm={onSelectTerm} />
                                </td>
                                <td className="py-3 px-4 text-slate-700 align-top">
                                  <InteractiveText text={row[1]} onSelectTerm={onSelectTerm} />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Visual animation diagram if specified */}
                    {item.diagramInfo && item.diagramInfo.visualType && (
                      <div className="pt-2">
                        <div className="text-xs font-bold text-indigo-700 mb-2 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-indigo-500" />
                          Interactive Model: {item.diagramInfo.title}
                        </div>
                        <VisualAnimation type={item.diagramInfo.visualType} />
                      </div>
                    )}

                    {/* Extra Notes */}
                    {item.notes && (
                      <div className="text-xs text-amber-900 bg-amber-50 p-3 rounded-xl border border-amber-200">
                        <span className="font-bold block uppercase text-[10px] text-amber-800 mb-0.5">Teacher's Note</span>
                        <InteractiveText text={item.notes} onSelectTerm={onSelectTerm} />
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* EXTENSIVE QUESTIONS SECTION */}
      {(sectionFilter === 'all' || sectionFilter === 'extensive') && (
        <section className="space-y-4 pt-4">
          <div className="flex items-center justify-between pb-1">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 shadow-xs" />
              <span>Extensive Questions & Answers</span>
            </h2>
            <span className="text-xs bg-purple-50 text-purple-700 font-bold px-2.5 py-1 rounded-full border border-purple-200/60 font-mono">
              {chapter.extensiveQuestions.length} Questions
            </span>
          </div>

          <div className="space-y-3.5">
            {chapter.extensiveQuestions.map((item) => {
              const fullSpeechText = `${item.questionNumber}: ${item.question}. Answer reference: ${item.answerReference}`;
              const isSpeaking = currentId === `ext-${item.id}` && isPlaying;

              return (
                <article
                  key={item.id}
                  className={`bg-white rounded-2xl p-5 sm:p-6 border transition-all ${
                    isSpeaking
                      ? 'border-purple-500 ring-2 ring-purple-200/80 shadow-md'
                      : 'border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-extrabold font-mono px-2.5 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shrink-0 shadow-xs">
                        {item.questionNumber}
                      </span>
                      <div>
                        <h3 className={`font-bold text-slate-900 leading-snug ${textClass}`}>
                          <InteractiveText text={item.question} onSelectTerm={onSelectTerm} />
                        </h3>
                        <div className="mt-3 leading-relaxed bg-gradient-to-br from-slate-50 to-purple-50/40 p-4 rounded-xl border border-purple-100">
                          <span className="font-bold text-purple-900 block text-xs uppercase mb-1">
                            Explanation Guide & Key Points:
                          </span>
                          <p className={`text-slate-700 ${textClass}`}>
                            <InteractiveText text={item.answerReference} onSelectTerm={onSelectTerm} />
                          </p>
                        </div>

                        {/* Key Book Style Solution for Mathematics Derivations */}
                        {(item.mathSolution ||
                          (chapter.id.startsWith('math-') &&
                            (item.answerReference.includes('1.') ||
                              item.answerReference.includes('Step 1') ||
                              item.answerReference.includes('⇒')))) && (
                          <KeyBookSolution
                            mathSolution={item.mathSolution}
                            rawText={item.answerReference}
                            onSelectTerm={onSelectTerm}
                          />
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => speak(fullSpeechText, `ext-${item.id}`, `${item.questionNumber} - Extensive`)}
                      title="Listen to question"
                      aria-label={`Listen to ${item.questionNumber}`}
                      className={`p-2.5 rounded-xl border transition-all shrink-0 cursor-pointer ${
                        isSpeaking
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent shadow-md'
                          : 'bg-purple-50/70 hover:bg-purple-100 text-purple-700 border-purple-200/60'
                      }`}
                    >
                      <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-pulse' : ''}`} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* NUMERICALS & SOLVED PROBLEMS SECTION */}
      {hasNumericals && (sectionFilter === 'all' || sectionFilter === 'numericals') && (
        <section className="space-y-4 pt-4">
          <div className="flex items-center justify-between pb-1">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 shadow-xs" />
              <span>Solved Numericals &amp; Formula Problems</span>
            </h2>
            <span className="text-xs bg-amber-50 text-amber-800 font-bold px-2.5 py-1 rounded-full border border-amber-200/60 font-mono">
              {chapter.numericals?.length} Problems
            </span>
          </div>

          <div className="space-y-4">
            {chapter.numericals?.map((num) => {
              const fullSpeechText = `${num.questionNumber}: ${num.problem}. Result: ${num.result}`;
              const isSpeaking = currentId === `num-${num.id}` && isPlaying;

              return (
                <article
                  key={num.id}
                  id={num.id}
                  className={`bg-white rounded-2xl p-5 sm:p-6 border transition-all ${
                    isSpeaking
                      ? 'border-amber-500 ring-2 ring-amber-200/80 shadow-md'
                      : 'border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-slate-300'
                  }`}
                >
                  {/* Problem Statement Header */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-extrabold font-mono px-2.5 py-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg shrink-0 shadow-xs">
                        {num.questionNumber}
                      </span>
                      <h3 className={`font-bold text-slate-900 leading-snug ${textClass}`}>
                        <InteractiveText text={num.problem} onSelectTerm={onSelectTerm} />
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => speak(fullSpeechText, `num-${num.id}`, `${num.questionNumber} - Numericals`)}
                      title="Listen to problem"
                      aria-label={`Listen to ${num.questionNumber}`}
                      className={`p-2.5 rounded-xl border transition-all shrink-0 cursor-pointer ${
                        isSpeaking
                          ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white border-transparent shadow-md'
                          : 'bg-amber-50/70 hover:bg-amber-100 text-amber-800 border-amber-200/60'
                      }`}
                    >
                      <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-pulse' : ''}`} />
                    </button>
                  </div>

                  {/* Solved Steps Card */}
                  <div className="pl-0 sm:pl-10 space-y-3.5">
                    {/* Balanced Chemical Equation if present */}
                    {num.balancedEquation && (
                      <div className="bg-slate-900 text-amber-300 rounded-xl px-4 py-2.5 font-mono text-xs sm:text-sm border border-slate-700 font-semibold flex items-center gap-2">
                        <span className="text-slate-400 text-xs font-sans font-normal uppercase">Equation:</span>
                        <span>{num.balancedEquation}</span>
                      </div>
                    )}

                    {/* Key Book Header for Mathematics */}
                    {chapter.id.startsWith('math-') && (
                      <div className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white px-4 py-2 rounded-xl flex items-center justify-between text-xs font-bold font-mono">
                        <span className="flex items-center gap-2">
                          <Calculator className="w-3.5 h-3.5 text-teal-300" />
                          <span>KEY BOOK SOLUTION</span>
                          <span className="text-teal-400">·</span>
                          <span className="font-urdu text-sm font-semibold text-amber-300">مرحلہ وار حل</span>
                        </span>
                        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full border border-white/25">
                          Board Solved
                        </span>
                      </div>
                    )}

                    {/* Given Data & Required */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50/80 p-3.5 rounded-xl border border-slate-200">
                      <div>
                        <span className="font-bold text-slate-700 block uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <span>Given Data / معلوم:</span>
                        </span>
                        <ul className="space-y-1 list-disc pl-4 text-slate-700 font-mono">
                          {num.givenData.map((d, dIdx) => (
                            <li key={dIdx}>{d}</li>
                          ))}
                        </ul>
                      </div>
                      {num.requiredData && (
                        <div>
                          <span className="font-bold text-slate-700 block uppercase tracking-wider mb-1">
                            Required Data / مطلوب:
                          </span>
                          <span className="font-mono text-indigo-700 font-semibold bg-indigo-50 px-2 py-1 rounded inline-block border border-indigo-100">
                            {num.requiredData}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Step-by-Step Solution */}
                    <div className="bg-gradient-to-br from-indigo-50/40 to-slate-50 rounded-xl p-4 border border-indigo-100 space-y-2 font-mono text-xs sm:text-sm text-slate-800">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-indigo-900 block font-sans text-xs uppercase tracking-wider">
                          Step-by-Step Working / مراحلِ حل:
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">Algebraic Working</span>
                      </div>
                      {num.solutionSteps.map((step, sIdx) => {
                        const formattedStep = step.replace(/⇒/g, ' ⟹ ');
                        return (
                          <div
                            key={sIdx}
                            className="leading-relaxed py-1.5 px-2.5 bg-white/80 rounded-lg border border-slate-200/70 flex items-start gap-2.5"
                          >
                            <span className="px-1.5 py-0.5 rounded bg-teal-100 text-teal-800 text-[10px] font-bold font-mono shrink-0">
                              Step {sIdx + 1}
                            </span>
                            <span className="overflow-x-auto">{formattedStep}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Final Result Card / Solution Set */}
                    <div className="p-3.5 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-2 border-emerald-400 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <div>
                          <span className="text-xs font-black text-emerald-950 uppercase tracking-wider block font-sans">
                            {chapter.id.startsWith('math-') ? 'Solution Set (S.S.) / نتیجہ' : 'Calculated Result:'}
                          </span>
                          {chapter.id.startsWith('math-') && (
                            <span className="text-[11px] text-emerald-700 font-urdu block">
                              حل سیٹ (مطلوبہ جواب)
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="font-mono font-black text-sm sm:text-base text-emerald-900 bg-white px-3.5 py-1.5 rounded-lg border border-emerald-300 shadow-2xs self-start sm:self-auto">
                        {num.result}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
