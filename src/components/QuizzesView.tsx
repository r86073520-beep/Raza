import React, { useState, useMemo } from 'react';
import { Shuffle, RotateCcw, CheckCircle2, XCircle, Volume2, Sparkles, Filter } from 'lucide-react';
import { QuizQuestion, VocabularyTerm } from '../types/book';
import { InteractiveText } from './InteractiveText';
import { useSpeech } from '../context/SpeechContext';

interface QuizzesViewProps {
  questions: QuizQuestion[];
  chapterTitle: string;
  onSelectTerm: (term: VocabularyTerm) => void;
}

export const QuizzesView: React.FC<QuizzesViewProps> = ({
  questions,
  chapterTitle,
  onSelectTerm
}) => {
  const { speak, currentId, isPlaying } = useSpeech();
  const [userAnswers, setUserAnswers] = useState<Record<string, 'a' | 'b' | 'c' | 'd'>>({});
  const [shuffledSeed, setShuffledSeed] = useState<number>(0);
  const [filterMode, setFilterMode] = useState<'all' | 'unanswered' | 'incorrect'>('all');

  // Question list with shuffle support
  const displayedQuestions = useMemo(() => {
    let list = [...questions];
    if (shuffledSeed > 0) {
      // Fisher-Yates shuffle with seed
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
    }

    if (filterMode === 'unanswered') {
      list = list.filter(q => !userAnswers[q.id]);
    } else if (filterMode === 'incorrect') {
      list = list.filter(q => userAnswers[q.id] && userAnswers[q.id] !== q.correctAnswer);
    }

    return list;
  }, [questions, shuffledSeed, filterMode, userAnswers]);

  const handleSelectOption = (questionId: string, optionKey: 'a' | 'b' | 'c' | 'd') => {
    // Only set if not already answered
    if (!userAnswers[questionId]) {
      setUserAnswers(prev => ({
        ...prev,
        [questionId]: optionKey
      }));
    }
  };

  const handleShuffle = () => {
    setShuffledSeed(prev => prev + 1);
  };

  const handleReset = () => {
    setUserAnswers({});
    setFilterMode('all');
  };

  // Score statistics
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = questions.filter(q => userAnswers[q.id] === q.correctAnswer).length;
  const incorrectCount = answeredCount - correctCount;
  const percentage = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Top Banner & Control Deck */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-7 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="space-y-1.5 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping" />
            <h2 className="text-2xl font-extrabold tracking-tight text-white drop-shadow-xs">
              Interactive Quizzes
            </h2>
            <span className="text-xs bg-white/20 text-white font-bold px-2.5 py-0.5 rounded-full border border-white/20 backdrop-blur-xs">
              {chapterTitle}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl">
            Test your knowledge! Correct answers turn <span className="font-extrabold text-emerald-300 underline decoration-2">Green</span> and incorrect turn <span className="font-extrabold text-rose-300 underline decoration-2">Red</span> with instant explanation.
          </p>
        </div>

        {/* Action Buttons: Shuffle and Reset */}
        <div className="flex items-center gap-2.5 flex-wrap z-10">
          <button
            type="button"
            onClick={handleShuffle}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold bg-white text-emerald-900 rounded-xl hover:bg-emerald-50 transition-all shadow-md cursor-pointer"
          >
            <Shuffle className="w-4 h-4 text-emerald-700" />
            Shuffle Questions
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-white/20 text-white hover:bg-white/30 rounded-xl border border-white/20 transition-all cursor-pointer backdrop-blur-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>

      {/* Score Summary Metrics: Colorful Card Palette */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50/70 p-4 rounded-2xl border border-indigo-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider">Answered</span>
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
          </div>
          <div className="text-2xl font-extrabold text-indigo-900 font-mono mt-1">
            {answeredCount} <span className="text-xs font-semibold text-indigo-500">/ {totalQuestions}</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50/70 p-4 rounded-2xl border border-emerald-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Correct</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <div className="text-2xl font-extrabold text-emerald-700 font-mono mt-1">
            {correctCount}
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-red-50/70 p-4 rounded-2xl border border-rose-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider">Incorrect</span>
            <span className="w-2 h-2 rounded-full bg-rose-500" />
          </div>
          <div className="text-2xl font-extrabold text-rose-700 font-mono mt-1">
            {incorrectCount}
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50/70 p-4 rounded-2xl border border-amber-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Remaining</span>
            <span className="w-2 h-2 rounded-full bg-amber-500" />
          </div>
          <div className="text-2xl font-extrabold text-amber-700 font-mono mt-1">
            {totalQuestions - answeredCount}
          </div>
        </div>
      </div>

      {/* Visual Progress Tracker with Rich Glowing Gradients */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs space-y-3.5">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <span className="text-slate-900">Quiz Completion</span>
            <span className="text-slate-300">·</span>
            <span className="text-indigo-600 font-mono">
              {answeredCount} of {totalQuestions} completed ({totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0}%)
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-semibold">
            <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              {correctCount} Correct
            </span>
            <span className="flex items-center gap-1.5 text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200/60">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
              {incorrectCount} Incorrect
            </span>
            <span className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
              {totalQuestions - answeredCount} Left
            </span>
          </div>
        </div>

        {/* Multi-segmented Radiant Progress Bar */}
        <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden flex border border-slate-200/80 p-0.5 gap-0.5 shadow-inner">
          {correctCount > 0 && (
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300 h-full shadow-xs"
              style={{ width: `${(correctCount / totalQuestions) * 100}%` }}
              title={`${correctCount} Correct`}
            />
          )}
          {incorrectCount > 0 && (
            <div
              className="bg-gradient-to-r from-rose-500 to-red-400 rounded-full transition-all duration-300 h-full shadow-xs"
              style={{ width: `${(incorrectCount / totalQuestions) * 100}%` }}
              title={`${incorrectCount} Incorrect`}
            />
          )}
          {totalQuestions - answeredCount > 0 && (
            <div
              className="bg-transparent h-full transition-all duration-300"
              style={{ width: `${((totalQuestions - answeredCount) / totalQuestions) * 100}%` }}
            />
          )}
        </div>

        {/* Quick Question Map (Navigation and visual matrix) */}
        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Question Navigator ({displayedQuestions.length} Questions)
            </span>
            <span className="text-[10px] text-slate-400">
              Click a number to scroll to that question
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
            {displayedQuestions.map((q, idx) => {
              const selected = userAnswers[q.id];
              const isCorrect = selected === q.correctAnswer;
              const isAnswered = !!selected;

              let badgeStyle = 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-400';
              if (isAnswered) {
                badgeStyle = isCorrect
                  ? 'bg-emerald-500 text-white border-emerald-600 font-bold'
                  : 'bg-rose-500 text-white border-rose-600 font-bold';
              }

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => {
                    const el = document.getElementById(`quiz-card-${q.id}`);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  title={`Question ${idx + 1}: ${isAnswered ? (isCorrect ? 'Correct' : 'Incorrect') : 'Unanswered'}`}
                  className={`w-7 h-7 text-xs font-mono rounded-lg border flex items-center justify-center transition-all cursor-pointer ${badgeStyle}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg w-fit text-xs font-medium">
        <button
          type="button"
          onClick={() => setFilterMode('all')}
          className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
            filterMode === 'all' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          All ({questions.length})
        </button>
        <button
          type="button"
          onClick={() => setFilterMode('unanswered')}
          className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
            filterMode === 'unanswered' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Unanswered ({totalQuestions - answeredCount})
        </button>
        {incorrectCount > 0 && (
          <button
            type="button"
            onClick={() => setFilterMode('incorrect')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              filterMode === 'incorrect' ? 'bg-white text-rose-700 shadow-2xs font-semibold' : 'text-rose-600 hover:text-rose-900'
            }`}
          >
            Review Missed ({incorrectCount})
          </button>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {displayedQuestions.map((q, idx) => {
          const selectedOption = userAnswers[q.id];
          const isAnswered = !!selectedOption;
          const isCorrect = selectedOption === q.correctAnswer;
          const isListening = currentId === `quiz-${q.id}` && isPlaying;

          const questionSpeechText = `${q.question}. Options: a: ${q.options[0]?.text}. b: ${q.options[1]?.text}. c: ${q.options[2]?.text}. d: ${q.options[3]?.text}.`;

          return (
            <div
              key={q.id}
              id={`quiz-card-${q.id}`}
              className={`bg-white rounded-2xl p-5 border transition-all ${
                isAnswered
                  ? isCorrect
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : 'border-rose-200 bg-rose-50/20'
                  : 'border-slate-200/90 hover:border-slate-300'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="text-sm font-semibold text-slate-900 leading-relaxed">
                    <InteractiveText text={q.question} onSelectTerm={onSelectTerm} />
                  </div>
                </div>

                {/* 🔊 Listen Button */}
                <button
                  type="button"
                  onClick={() => speak(questionSpeechText, `quiz-${q.id}`, `Quiz Question ${idx + 1}`)}
                  title="Listen to question"
                  aria-label={`Listen to question ${idx + 1}`}
                  className={`p-1.5 rounded-lg border transition-colors shrink-0 ${
                    isListening
                      ? 'bg-indigo-600 text-white border-indigo-600 animate-pulse'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Options Grid (2x2 or stacked) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">
                {q.options.map((opt) => {
                  const isThisSelected = selectedOption === opt.key;
                  const isThisCorrect = opt.key === q.correctAnswer;

                  // Styling logic:
                  // If answered:
                  //  - if this option is the correct one -> always GREEN with checkmark
                  //  - if user chose this option and it was wrong -> RED with X mark
                  //  - otherwise disabled muted
                  let optStyle = 'bg-slate-50/60 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300';
                  let iconNode = null;

                  if (isAnswered) {
                    if (isThisCorrect) {
                      optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-medium ring-1 ring-emerald-400';
                      iconNode = <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />;
                    } else if (isThisSelected && !isThisCorrect) {
                      optStyle = 'bg-rose-50 border-rose-500 text-rose-900 font-medium ring-1 ring-rose-400';
                      iconNode = <XCircle className="w-4 h-4 text-rose-600 shrink-0" />;
                    } else {
                      optStyle = 'bg-slate-50/40 border-slate-200/60 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(q.id, opt.key)}
                      className={`text-left p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between gap-3 transition-all cursor-pointer ${optStyle}`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-5 h-5 rounded-full bg-white border border-slate-300 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 uppercase text-slate-600">
                          {opt.key}
                        </span>
                        <span className="truncate">
                          {opt.text}
                        </span>
                      </div>
                      {iconNode}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Explanation Banner */}
              {isAnswered && (
                <div
                  className={`mt-4 p-3 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 animate-in fade-in duration-150 ${
                    isCorrect
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-bold block">
                      {isCorrect ? 'Correct Answer!' : `Incorrect. The correct option is (${q.correctAnswer.toUpperCase()})`}
                    </span>
                    {q.explanation && (
                      <p className="mt-1 text-slate-700">
                        {q.explanation}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {displayedQuestions.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <Sparkles className="w-8 h-8 text-indigo-500 mx-auto mb-2 opacity-80" />
            <h3 className="text-base font-semibold text-slate-800">No questions in this filter</h3>
            <p className="text-xs text-slate-500 mt-1">
              {filterMode === 'incorrect' ? 'Great job! You have no missed questions.' : 'All questions have been answered.'}
            </p>
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className="mt-3 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium hover:bg-indigo-100"
            >
              Show All Questions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
