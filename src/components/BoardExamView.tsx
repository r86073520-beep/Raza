import React, { useState } from 'react';
import { Award, BookOpen, CheckCircle, HelpCircle, FileText, ChevronRight, Volume2, Sparkles, AlertCircle } from 'lucide-react';
import { Book, VocabularyTerm } from '../types/book';
import { useSpeech } from '../context/SpeechContext';
import { InteractiveText } from './InteractiveText';

interface BoardExamViewProps {
  book: Book;
  onSelectTerm: (term: VocabularyTerm) => void;
  onJumpToChapter: (chapterId: string) => void;
}

export const BoardExamView: React.FC<BoardExamViewProps> = ({
  book,
  onSelectTerm,
  onJumpToChapter
}) => {
  const { speak, currentId, isPlaying } = useSpeech();
  const [activeSection, setActiveSection] = useState<'scheme' | 'short' | 'long' | 'numericals' | 'theorems'>('scheme');
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<string>('all');

  // Collect all short questions across all units
  const allShortQuestions = book.chapters.flatMap(ch => 
    ch.shortQuestions.map(sq => ({ ...sq, chapterTitle: ch.title, chapterNumber: ch.number, chapterId: ch.id }))
  );

  // Collect all extensive questions across all units
  const allExtensiveQuestions = book.chapters.flatMap(ch =>
    ch.extensiveQuestions.map(eq => ({ ...eq, chapterTitle: ch.title, chapterNumber: ch.number, chapterId: ch.id }))
  );

  // Collect all numericals across all units
  const allNumericals = book.chapters.flatMap(ch =>
    (ch.numericals || []).map(num => ({ ...num, chapterTitle: ch.title, chapterNumber: ch.number, chapterId: ch.id }))
  );

  // Filter based on selected unit
  const filteredShorts = selectedUnitFilter === 'all' 
    ? allShortQuestions 
    : allShortQuestions.filter(sq => sq.chapterId === selectedUnitFilter);

  const filteredExtensives = selectedUnitFilter === 'all'
    ? allExtensiveQuestions
    : allExtensiveQuestions.filter(eq => eq.chapterId === selectedUnitFilter);

  const filteredNumericals = selectedUnitFilter === 'all'
    ? allNumericals
    : allNumericals.filter(num => num.chapterId === selectedUnitFilter);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className={`rounded-3xl p-6 sm:p-8 bg-gradient-to-r ${book.gradient} text-white shadow-lg relative overflow-hidden`}>
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 border border-white/25 backdrop-blur-xs">
                🎯 Board Examination 2024-2025
              </span>
              <span>·</span>
              <span className="font-urdu text-base text-amber-200">بورڈ پیئرنگ اسکیم و گیس پیپر</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {book.title} · Board Exam Master Guide
            </h1>
            <p className="text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed">
              Complete official Board Paper Pairing Scheme, chapter-wise high-yield Short Questions, Long Questions with marking breakdown, Solved Numericals, and compulsory Theorems.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-white/15 backdrop-blur-xs px-4 py-3 rounded-2xl border border-white/20 text-center">
              <span className="block text-2xl font-black">{book.chapters.length}</span>
              <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">Total Units</span>
            </div>
            <div className="bg-white/15 backdrop-blur-xs px-4 py-3 rounded-2xl border border-white/20 text-center">
              <span className="block text-2xl font-black">{allShortQuestions.length}</span>
              <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">Short Qs</span>
            </div>
            <div className="bg-white/15 backdrop-blur-xs px-4 py-3 rounded-2xl border border-white/20 text-center">
              <span className="block text-2xl font-black">{allExtensiveQuestions.length}</span>
              <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">Long Qs</span>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/20 overflow-x-auto relative z-10">
          <button
            type="button"
            onClick={() => setActiveSection('scheme')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeSection === 'scheme' ? 'bg-white text-slate-900 shadow-md' : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            📋 Pairing Scheme & Pattern
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('short')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeSection === 'short' ? 'bg-white text-slate-900 shadow-md' : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            ❓ All Short Questions ({allShortQuestions.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveSection('long')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeSection === 'long' ? 'bg-white text-slate-900 shadow-md' : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            📝 All Long Questions ({allExtensiveQuestions.length})
          </button>
          {allNumericals.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveSection('numericals')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeSection === 'numericals' ? 'bg-white text-slate-900 shadow-md' : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              🔢 Solved Numericals ({allNumericals.length})
            </button>
          )}
          {book.subject === 'Mathematics' && (
            <button
              type="button"
              onClick={() => setActiveSection('theorems')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeSection === 'theorems' ? 'bg-white text-slate-900 shadow-md' : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              ⭐ Compulsory Theorems (Ch 9 & 12)
            </button>
          )}
        </div>
      </div>

      {/* Chapter Filter Pill Bar (When viewing questions/numericals) */}
      {activeSection !== 'scheme' && activeSection !== 'theorems' && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <span className="text-xs font-semibold text-slate-500 shrink-0">Filter by Unit:</span>
          <button
            type="button"
            onClick={() => setSelectedUnitFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shrink-0 cursor-pointer ${
              selectedUnitFilter === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            All Units
          </button>
          {book.chapters.map(ch => (
            <button
              key={ch.id}
              type="button"
              onClick={() => setSelectedUnitFilter(ch.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shrink-0 cursor-pointer ${
                selectedUnitFilter === ch.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Unit {ch.number}
            </button>
          ))}
        </div>
      )}

      {/* 1. PAIRING SCHEME SECTION */}
      {activeSection === 'scheme' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Paper Pattern Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Total Marks & Structure</h3>
                <p className="text-xs text-slate-500">Board Exam Paper Blueprint</p>
              </div>
            </div>

            {book.subject === 'Physics' && (
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Question 1: Multiple Choice Questions (MCQs)</span>
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">12 Marks</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Question 2: Short Questions (Attempt 5 out of 8)</span>
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">10 Marks</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Question 3: Short Questions (Attempt 5 out of 8)</span>
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">10 Marks</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Question 4: Short Questions (Attempt 5 out of 8)</span>
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">10 Marks</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Long Questions Q.5, 6, 7 (Attempt 2 out of 3)</span>
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">18 Marks (2 × 9)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-indigo-600 text-white font-bold">
                  <span>Total Theory Marks</span>
                  <span>60 Marks</span>
                </div>
              </div>
            )}

            {book.subject === 'Mathematics' && (
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Question 1: Multiple Choice Questions (MCQs)</span>
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">15 Marks (15 MCQs)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Question 2: Short Questions (Attempt 6 out of 9)</span>
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">12 Marks (Units 1, 2, 3)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Question 3: Short Questions (Attempt 6 out of 9)</span>
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">12 Marks (Units 4, 5, 6)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Question 4: Short Questions (Attempt 6 out of 9)</span>
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">12 Marks (Units 7 - 13)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Long Questions Q.5 to Q.8 (Attempt any 2)</span>
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">16 Marks (2 × 8)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold">
                  <span>Question 9: COMPULSORY THEOREM (Ch 9 or Ch 12)</span>
                  <span className="bg-amber-500 text-white px-2 py-0.5 rounded">8 Marks (Mandatory)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-600 text-white font-bold">
                  <span>Total Theory Marks</span>
                  <span>75 Marks</span>
                </div>
              </div>
            )}

            {book.subject === 'Chemistry' && (
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Question 1: Multiple Choice Questions (MCQs)</span>
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">12 Marks</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Short Questions (Q.2, Q.3, Q.4: 5 out of 8 each)</span>
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">30 Marks (3 × 10)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-semibold text-slate-700">Long Questions Q.5, 6, 7 (Attempt 2 out of 3)</span>
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">18 Marks (2 × 9)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-indigo-600 text-white font-bold">
                  <span>Total Theory Marks</span>
                  <span>60 Marks</span>
                </div>
              </div>
            )}
          </div>

          {/* Unit Pairing Breakdown Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Unit Pairing Scheme</h3>
                <p className="text-xs text-slate-500">How Questions Are Paired in Board Paper</p>
              </div>
            </div>

            {book.subject === 'Physics' && (
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Question 2 Short Questions:</span>
                  <p className="text-slate-600">Unit 10 (3 Qs) + Unit 11 (2 Qs) + Unit 15 (3 Qs) = 8 Qs (Attempt 5)</p>
                </div>
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Question 3 Short Questions:</span>
                  <p className="text-slate-600">Unit 13 (3 Qs) + Unit 14 (3 Qs) + Unit 16 (2 Qs) = 8 Qs (Attempt 5)</p>
                </div>
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Question 4 Short Questions:</span>
                  <p className="text-slate-600">Unit 12 (3 Qs) + Unit 17 (2 Qs) + Unit 18 (3 Qs) = 8 Qs (Attempt 5)</p>
                </div>
                <div className="p-3.5 rounded-2xl border border-amber-200 bg-amber-50/50 space-y-1.5 text-amber-900">
                  <span className="font-bold block">Long Questions Pairing:</span>
                  <p>• Q.5: Unit 10 / 11 / 15 (Part a: Theory 4M, Part b: Numerical 5M)</p>
                  <p>• Q.6: Unit 13 / 14 / 16 (Part a: Theory 4M, Part b: Numerical 5M)</p>
                  <p>• Q.7: Unit 12 / 17 / 18 (Part a: Theory 4M, Part b: Numerical 5M)</p>
                </div>
              </div>
            )}

            {book.subject === 'Mathematics' && (
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Question 2 (Short Qs): Units 1, 2, 3</span>
                  <p className="text-slate-600">Unit 1 (3 Qs) + Unit 2 (3 Qs) + Unit 3 (3 Qs) = 9 Qs (Attempt 6)</p>
                </div>
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Question 3 (Short Qs): Units 4, 5, 6</span>
                  <p className="text-slate-600">Unit 4 (2 Qs) + Unit 5 (4 Qs) + Unit 6 (3 Qs) = 9 Qs (Attempt 6)</p>
                </div>
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Question 4 (Short Qs): Units 7 to 13</span>
                  <p className="text-slate-600">Unit 7 (4 Qs) + Units 8-13 (5 Qs) = 9 Qs (Attempt 6)</p>
                </div>
                <div className="p-3.5 rounded-2xl border border-amber-200 bg-amber-50/60 space-y-1.5 text-amber-900">
                  <span className="font-bold block">Long Questions Pairing (Attempt 2 out of 4):</span>
                  <p>• Q.5: (a) Unit 1 + (b) Unit 2</p>
                  <p>• Q.6: (a) Unit 3 + (b) Unit 4</p>
                  <p>• Q.7: (a) Unit 5 + (b) Unit 6</p>
                  <p>• Q.8: (a) Unit 7 + (b) Unit 13 (Practical Geometry)</p>
                  <p className="font-bold text-rose-700 pt-1">• Q.9 (COMPULSORY): Theorem from Chapter 9 OR Theorem from Chapter 12 (8 Marks)!</p>
                </div>
              </div>
            )}

            {book.subject === 'Chemistry' && (
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Question 2 (Short Qs):</span>
                  <p className="text-slate-600">Chapter 9 (3 Qs) + Chapter 11 (2 Qs) + Chapter 12 (3 Qs)</p>
                </div>
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Question 3 (Short Qs):</span>
                  <p className="text-slate-600">Chapter 10 (3 Qs) + Chapter 13 (2 Qs) + Chapter 15 (3 Qs)</p>
                </div>
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Question 4 (Short Qs):</span>
                  <p className="text-slate-600">Chapter 14 (4 Qs) + Chapter 16 (4 Qs)</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. SHORT QUESTIONS SECTION */}
      {activeSection === 'short' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>High-Yield Short Questions ({filteredShorts.length})</span>
            </h2>
            <span className="text-xs text-slate-500 font-mono">Board Favorites</span>
          </div>

          <div className="space-y-3">
            {filteredShorts.map((item, idx) => {
              const fullSpeechText = `${item.questionNumber}: ${item.question}. Answer: ${item.answer}`;
              const isSpeaking = currentId === item.id && isPlaying;

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl p-5 border transition-all ${
                    isSpeaking ? 'border-indigo-500 ring-2 ring-indigo-200 shadow-md' : 'border-slate-200/90 shadow-2xs hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-mono">
                        {item.questionNumber}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        Unit {item.chapterNumber}: {item.chapterTitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => speak(fullSpeechText, item.id, `${item.questionNumber} - Unit ${item.chapterNumber}`)}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold flex items-center gap-1.5 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>Listen</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => onJumpToChapter(item.chapterId)}
                        className="text-xs px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <span>Open Unit</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm mb-2 leading-snug">
                    <InteractiveText text={item.question} onSelectTerm={onSelectTerm} />
                  </h3>

                  <div className="text-xs text-slate-700 leading-relaxed bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
                    <InteractiveText text={item.answer} onSelectTerm={onSelectTerm} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. LONG QUESTIONS SECTION */}
      {activeSection === 'long' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              <span>Essential Long Questions ({filteredExtensives.length})</span>
            </h2>
            <span className="text-xs text-slate-500 font-mono">Full Step-by-Step Derivations</span>
          </div>

          <div className="space-y-4">
            {filteredExtensives.map((item) => {
              const fullSpeechText = `${item.questionNumber}: ${item.question}. Solution: ${item.answerReference}`;
              const isSpeaking = currentId === item.id && isPlaying;

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl p-6 border transition-all ${
                    isSpeaking ? 'border-purple-500 ring-2 ring-purple-200 shadow-md' : 'border-slate-200/90 shadow-2xs hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 border border-purple-200 font-mono">
                        {item.questionNumber}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        Unit {item.chapterNumber}: {item.chapterTitle}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => speak(fullSpeechText, item.id, item.questionNumber)}
                      className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-purple-600" />
                      <span>Listen</span>
                    </button>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-base mb-3 leading-snug">
                    <InteractiveText text={item.question} onSelectTerm={onSelectTerm} />
                  </h3>

                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2 text-xs text-slate-800 leading-relaxed font-sans whitespace-pre-line">
                    <InteractiveText text={item.answerReference} onSelectTerm={onSelectTerm} />
                  </div>

                  {item.guidance && (
                    <div className="mt-3 flex items-start gap-2 text-xs bg-amber-50 text-amber-900 p-3 rounded-xl border border-amber-200/60">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>Board Examiner Tip:</strong> {item.guidance}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. SOLVED NUMERICALS SECTION */}
      {activeSection === 'numericals' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span>Solved Board Numericals ({filteredNumericals.length})</span>
            </h2>
            <span className="text-xs text-slate-500 font-mono">Given Data · Formula · Result</span>
          </div>

          <div className="space-y-4">
            {filteredNumericals.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xs space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
                    {item.questionNumber}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Unit {item.chapterNumber}: {item.chapterTitle}
                  </span>
                </div>

                <p className="font-bold text-slate-900 text-sm">
                  {item.problem}
                </p>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1.5 text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block">Given Data:</span>
                  <ul className="list-disc pl-5 space-y-0.5">
                    {item.givenData.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1 text-xs text-slate-800 bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step-by-Step Solution:</span>
                  {item.solutionSteps.map((s, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-slate-400 font-mono font-bold">•</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-emerald-50 text-emerald-900 font-bold rounded-xl border border-emerald-200 text-xs flex items-center justify-between">
                  <span>Final Result:</span>
                  <span className="font-mono text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">{item.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. COMPULSORY THEOREMS SECTION (FOR MATH) */}
      {activeSection === 'theorems' && book.subject === 'Mathematics' && (
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900">
              <p className="font-bold text-sm mb-1">Question 9 is COMPULSORY (8 Marks) in Board Exam!</p>
              <p>You MUST attempt ONE theorem from either Chapter 9 (Chords of a Circle) or Chapter 12 (Angle in a Segment of a Circle). Below are the full proofs ready for board presentation.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Theorem 9.2 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  Theorem 9.2 (Ch 9)
                </span>
                <span className="text-xs font-bold text-slate-400">8 Marks</span>
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                A straight line drawn from the center of a circle to bisect a chord is perpendicular to the chord.
              </h3>
              <div className="text-xs text-slate-700 space-y-3 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p><strong>Given:</strong> M is the midpoint of any chord AB of circle with center O, where chord AB is not a diameter.</p>
                <p><strong>To Prove:</strong> OM ⊥ AB (i.e. ∠OMA = ∠OMB = 90°).</p>
                <p><strong>Construction:</strong> Join O to point A and O to point B.</p>
                <p><strong>Proof:</strong> In ΔOAM and ΔOBM:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>m OA = m OB (Radii of the same circle)</li>
                  <li>m AM = m BM (Given, M is midpoint of chord AB)</li>
                  <li>m OM = m OM (Common side)</li>
                </ul>
                <p>∴ ΔOAM ≅ ΔOBM (S.S.S Postulate)</p>
                <p>Hence, ∠OMA ≅ ∠OMB (Corresponding angles). Since they form a linear pair (sum = 180°), each angle is 90°: OM ⊥ AB. <strong>(Proved)</strong></p>
              </div>
            </div>

            {/* Theorem 12.1 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                  Theorem 12.1 (Ch 12)
                </span>
                <span className="text-xs font-bold text-slate-400">8 Marks</span>
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                The measure of a central angle of a minor arc of a circle is double that of the angle subtended by the corresponding major arc.
              </h3>
              <div className="text-xs text-slate-700 space-y-3 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p><strong>Given:</strong> Arc AB is a minor arc with center O. ∠AOB is central angle, and ∠APB is inscribed angle on major arc.</p>
                <p><strong>To Prove:</strong> m∠AOB = 2 m∠APB.</p>
                <p><strong>Construction:</strong> Join P to O and produce to meet circle at point D.</p>
                <p><strong>Proof:</strong> In ΔOAP, OA = OP (radii) ⇒ ∠1 = ∠2. Exterior angle ∠3 = ∠1 + ∠2 = 2∠1.</p>
                <p>Similarly in ΔOBP, OB = OP ⇒ exterior angle ∠6 = 2∠4.</p>
                <p>Adding: m∠3 + m∠6 = 2(∠1 + ∠4) ⇒ m∠AOB = 2 m∠APB. <strong>(Proved)</strong></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
