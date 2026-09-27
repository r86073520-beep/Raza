import React, { useState } from 'react';
import { BookOpen, CheckSquare, Sparkles, Layers, ArrowRight, GraduationCap } from 'lucide-react';
import { BOOKS_DATA } from './data/booksData';
import { Chapter, VocabularyTerm, Book } from './types/book';
import { SpeechProvider } from './context/SpeechContext';
import { BookReaderView } from './components/BookReaderView';
import { QuizzesView } from './components/QuizzesView';
import { VocabularyBankView } from './components/VocabularyBankView';
import { VocabularyModal } from './components/VocabularyModal';
import { AudioPlayerBar } from './components/AudioPlayerBar';

export default function App() {
  const [selectedBookId, setSelectedBookId] = useState<string>('physics-10');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('phy-u10');
  const [activeTab, setActiveTab] = useState<'content' | 'quizzes' | 'vocab'>('content');
  const [activeModalTerm, setActiveModalTerm] = useState<VocabularyTerm | null>(null);

  const currentBook = BOOKS_DATA.find((b) => b.id === selectedBookId) || BOOKS_DATA[0];
  const currentChapter = currentBook.chapters.find((c) => c.id === selectedChapterId) || currentBook.chapters[0];

  // Handler to switch book space
  const handleSelectBook = (bookId: string) => {
    setSelectedBookId(bookId);
    const targetBook = BOOKS_DATA.find((b) => b.id === bookId) || BOOKS_DATA[0];
    if (targetBook.chapters.length > 0) {
      setSelectedChapterId(targetBook.chapters[0].id);
    }
  };

  // Dynamic theme colors for each chapter or math unit
  const getChapterTheme = (id: string) => {
    switch (id) {
      // Physics 10th Units
      case 'phy-u10':
        return {
          bgGradient: 'from-amber-500 via-orange-600 to-red-700',
          badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
          accent: 'text-amber-600',
          lightBg: 'bg-amber-50/50',
          dot: 'bg-amber-500',
          ring: 'focus:ring-amber-400',
          borderActive: 'border-amber-500'
        };
      case 'phy-u11':
        return {
          bgGradient: 'from-teal-500 via-cyan-600 to-blue-700',
          badgeBg: 'bg-teal-100 text-teal-800 border-teal-200',
          accent: 'text-teal-600',
          lightBg: 'bg-teal-50/50',
          dot: 'bg-teal-500',
          ring: 'focus:ring-teal-400',
          borderActive: 'border-teal-500'
        };
      case 'phy-u12':
        return {
          bgGradient: 'from-sky-500 via-indigo-600 to-purple-700',
          badgeBg: 'bg-sky-100 text-sky-800 border-sky-200',
          accent: 'text-sky-600',
          lightBg: 'bg-sky-50/50',
          dot: 'bg-sky-500',
          ring: 'focus:ring-sky-400',
          borderActive: 'border-sky-500'
        };
      case 'phy-u13':
        return {
          bgGradient: 'from-blue-600 via-violet-600 to-indigo-700',
          badgeBg: 'bg-blue-100 text-blue-800 border-blue-200',
          accent: 'text-blue-600',
          lightBg: 'bg-blue-50/50',
          dot: 'bg-blue-500',
          ring: 'focus:ring-blue-400',
          borderActive: 'border-blue-500'
        };
      case 'phy-u14':
        return {
          bgGradient: 'from-yellow-500 via-amber-600 to-orange-700',
          badgeBg: 'bg-yellow-100 text-yellow-800 border-yellow-200',
          accent: 'text-amber-600',
          lightBg: 'bg-yellow-50/50',
          dot: 'bg-yellow-500',
          ring: 'focus:ring-yellow-400',
          borderActive: 'border-yellow-500'
        };
      case 'phy-u15':
        return {
          bgGradient: 'from-emerald-600 via-teal-600 to-slate-700',
          badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
          accent: 'text-emerald-600',
          lightBg: 'bg-emerald-50/50',
          dot: 'bg-emerald-500',
          ring: 'focus:ring-emerald-400',
          borderActive: 'border-emerald-500'
        };
      case 'phy-u16':
        return {
          bgGradient: 'from-purple-600 via-pink-600 to-rose-700',
          badgeBg: 'bg-purple-100 text-purple-800 border-purple-200',
          accent: 'text-purple-600',
          lightBg: 'bg-purple-50/50',
          dot: 'bg-purple-500',
          ring: 'focus:ring-purple-400',
          borderActive: 'border-purple-500'
        };
      case 'phy-u17':
        return {
          bgGradient: 'from-cyan-600 via-blue-600 to-indigo-700',
          badgeBg: 'bg-cyan-100 text-cyan-800 border-cyan-200',
          accent: 'text-cyan-600',
          lightBg: 'bg-cyan-50/50',
          dot: 'bg-cyan-500',
          ring: 'focus:ring-cyan-400',
          borderActive: 'border-cyan-500'
        };
      case 'phy-u18':
        return {
          bgGradient: 'from-rose-600 via-red-600 to-purple-800',
          badgeBg: 'bg-rose-100 text-rose-800 border-rose-200',
          accent: 'text-rose-600',
          lightBg: 'bg-rose-50/50',
          dot: 'bg-rose-500',
          ring: 'focus:ring-rose-400',
          borderActive: 'border-rose-500'
        };
      // Chemistry Chapters
      case 'ch-9':
        return {
          bgGradient: 'from-amber-500 via-orange-600 to-yellow-700',
          badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
          accent: 'text-amber-600',
          lightBg: 'bg-amber-50/50',
          dot: 'bg-amber-500',
          ring: 'focus:ring-amber-400',
          borderActive: 'border-amber-500'
        };
      case 'ch-10':
        return {
          bgGradient: 'from-rose-500 via-pink-600 to-indigo-700',
          badgeBg: 'bg-rose-100 text-rose-800 border-rose-200',
          accent: 'text-rose-600',
          lightBg: 'bg-rose-50/50',
          dot: 'bg-rose-500',
          ring: 'focus:ring-rose-400',
          borderActive: 'border-rose-500'
        };
      case 'ch-14':
        return {
          bgGradient: 'from-sky-500 via-indigo-600 to-blue-700',
          badgeBg: 'bg-sky-100 text-sky-800 border-sky-200',
          accent: 'text-sky-600',
          lightBg: 'bg-sky-50/50',
          dot: 'bg-sky-500',
          ring: 'focus:ring-sky-400',
          borderActive: 'border-sky-500'
        };
      case 'ch-15':
        return {
          bgGradient: 'from-teal-500 via-cyan-600 to-blue-700',
          badgeBg: 'bg-cyan-100 text-cyan-800 border-cyan-200',
          accent: 'text-cyan-600',
          lightBg: 'bg-cyan-50/50',
          dot: 'bg-cyan-500',
          ring: 'focus:ring-cyan-400',
          borderActive: 'border-cyan-500'
        };
      case 'ch-16':
        return {
          bgGradient: 'from-purple-500 via-rose-600 to-amber-700',
          badgeBg: 'bg-purple-100 text-purple-800 border-purple-200',
          accent: 'text-purple-600',
          lightBg: 'bg-purple-50/50',
          dot: 'bg-purple-500',
          ring: 'focus:ring-purple-400',
          borderActive: 'border-purple-500'
        };
      // Maths 10th Units
      case 'math-u1':
        return {
          bgGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
          badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
          accent: 'text-emerald-600',
          lightBg: 'bg-emerald-50/50',
          dot: 'bg-emerald-500',
          ring: 'focus:ring-emerald-400',
          borderActive: 'border-emerald-500'
        };
      case 'math-u2':
        return {
          bgGradient: 'from-indigo-600 via-blue-600 to-purple-700',
          badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
          accent: 'text-indigo-600',
          lightBg: 'bg-indigo-50/50',
          dot: 'bg-indigo-500',
          ring: 'focus:ring-indigo-400',
          borderActive: 'border-indigo-500'
        };
      case 'math-u3':
        return {
          bgGradient: 'from-amber-500 via-orange-600 to-rose-700',
          badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
          accent: 'text-amber-600',
          lightBg: 'bg-amber-50/50',
          dot: 'bg-amber-500',
          ring: 'focus:ring-amber-400',
          borderActive: 'border-amber-500'
        };
      case 'math-u5':
        return {
          bgGradient: 'from-purple-600 via-fuchsia-600 to-indigo-700',
          badgeBg: 'bg-purple-100 text-purple-800 border-purple-200',
          accent: 'text-purple-600',
          lightBg: 'bg-purple-50/50',
          dot: 'bg-purple-500',
          ring: 'focus:ring-purple-400',
          borderActive: 'border-purple-500'
        };
      case 'math-u7':
      default:
        return {
          bgGradient: 'from-rose-500 via-pink-600 to-teal-700',
          badgeBg: 'bg-rose-100 text-rose-800 border-rose-200',
          accent: 'text-rose-600',
          lightBg: 'bg-rose-50/50',
          dot: 'bg-rose-500',
          ring: 'focus:ring-rose-400',
          borderActive: 'border-rose-500'
        };
    }
  };

  const theme = getChapterTheme(currentChapter.id);

  return (
    <SpeechProvider>
      <div className="min-h-screen bg-slate-50/90 text-slate-900 flex flex-col antialiased relative selection:bg-indigo-500 selection:text-white">
        {/* Subtle colorful ambient backdrop lights */}
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="fixed bottom-1/4 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="fixed top-1/2 right-1/3 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* TOP BAR: Single text brand, book space switcher, chapter navigation, and mode toggle */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
            {/* Zone 1: Single text brand + current book indicator */}
            <div className="flex items-center gap-2.5">
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${theme.bgGradient} flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20`}>
                {currentBook.icon}
              </div>
              <div>
                <a href="/" className="text-base sm:text-lg font-bold tracking-tight text-slate-900 hover:text-indigo-600 transition-colors flex items-center gap-2">
                  <span>Smart Interactive Book</span>
                  <span className="hidden sm:inline-block text-[11px] font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-2 py-0.5 rounded-full">
                    {currentBook.badge}
                  </span>
                </a>
              </div>
            </div>

            {/* Zone 2: BOOK SPACE SWITCHER TABS (Physics 10th vs Chemistry 10th vs Maths 10th) */}
            <div className="flex items-center p-1 bg-slate-100 rounded-2xl border border-slate-200/80 shadow-inner overflow-x-auto">
              {BOOKS_DATA.map((book) => {
                const isActive = selectedBookId === book.id;
                let activeGradient = 'bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 text-white shadow-sm shadow-rose-500/30';
                if (book.id === 'chemistry-10') {
                  activeGradient = 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm shadow-indigo-500/30';
                } else if (book.id === 'maths-10') {
                  activeGradient = 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-sm shadow-blue-500/30';
                }

                return (
                  <button
                    key={book.id}
                    type="button"
                    onClick={() => handleSelectBook(book.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? activeGradient
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    <span>{book.icon}</span>
                    <span className="whitespace-nowrap">{book.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Zone 3: Navigation Links for Chapters / Units */}
            <nav className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-slate-600 overflow-x-auto max-w-md">
              {currentBook.chapters.map((ch) => {
                const isSelected = selectedChapterId === ch.id;
                let activeClass = 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200/70';
                if (isSelected) {
                  if (ch.id === 'ch-9' || ch.id === 'math-u3' || ch.id === 'phy-u10' || ch.id === 'phy-u14') activeClass = 'bg-amber-600 text-white font-bold shadow-xs shadow-amber-600/30';
                  else if (ch.id === 'ch-10' || ch.id === 'math-u7' || ch.id === 'phy-u18' || ch.id === 'phy-u16') activeClass = 'bg-rose-600 text-white font-bold shadow-xs shadow-rose-600/30';
                  else if (ch.id === 'ch-14' || ch.id === 'math-u2' || ch.id === 'phy-u12' || ch.id === 'phy-u13') activeClass = 'bg-sky-600 text-white font-bold shadow-xs shadow-sky-600/30';
                  else if (ch.id === 'ch-15' || ch.id === 'math-u1' || ch.id === 'phy-u11' || ch.id === 'phy-u15') activeClass = 'bg-teal-600 text-white font-bold shadow-xs shadow-teal-600/30';
                  else activeClass = 'bg-indigo-600 text-white font-bold shadow-xs shadow-indigo-600/30';
                }

                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => setSelectedChapterId(ch.id)}
                    className={`px-2.5 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeClass}`}
                  >
                    {currentBook.subject === 'Chemistry' ? `Ch ${ch.number}` : `Unit ${ch.number}`}
                  </button>
                );
              })}
            </nav>

            {/* Zone 4: Mode Actions (Quizzes quick toggle) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('quizzes')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'quizzes'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300/80 shadow-2xs'
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Quizzes</span> Mode
              </button>
            </div>
          </div>

          {/* Mobile & Tablet Chapter Selector Bar */}
          <div className="lg:hidden px-4 py-2 border-t border-slate-100 bg-slate-50/90 flex items-center gap-1.5 overflow-x-auto">
            {currentBook.chapters.map((ch) => (
              <button
                key={ch.id}
                type="button"
                onClick={() => setSelectedChapterId(ch.id)}
                className={`px-3 py-1 text-xs whitespace-nowrap rounded-lg font-medium transition-colors cursor-pointer ${
                  selectedChapterId === ch.id
                    ? 'bg-rose-600 text-white font-bold shadow-2xs'
                    : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                {currentBook.subject === 'Chemistry' ? `Ch ${ch.number}: ${ch.title}` : `Unit ${ch.number}: ${ch.title}`}
              </button>
            ))}
          </div>
        </header>

        {/* BOOK SPACE BANNER: Distinct banner indicating active book space */}
        <section className={`border-b text-white transition-colors bg-gradient-to-r ${currentBook.gradient} shadow-xs`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl p-2 bg-white/15 backdrop-blur-xs rounded-2xl shadow-inner">
                {currentBook.icon}
              </span>
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                  <span className="bg-white/20 px-2 py-0.5 rounded-full border border-white/20">
                    {currentBook.grade}
                  </span>
                  <span>·</span>
                  <span className="font-urdu text-sm text-amber-200 font-bold">
                    {currentBook.urduTitle}
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5">
                  {currentBook.title} Space
                </h1>
                <p className="text-xs text-white/80 line-clamp-1">
                  {currentBook.tagline}
                </p>
              </div>
            </div>

            {/* Quick Switcher Button */}
            <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
              {BOOKS_DATA.filter((b) => b.id !== selectedBookId).map((otherBook) => (
                <button
                  key={otherBook.id}
                  type="button"
                  onClick={() => handleSelectBook(otherBook.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-xs font-bold text-white border border-white/25 transition-all cursor-pointer shadow-xs"
                >
                  <span>{otherBook.icon} {otherBook.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* PRIMARY SUB-HEADER: Chapter Title & Main Navigation Tabs */}
        <section className="bg-white border-b border-slate-200/90 shadow-2xs">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-semibold tracking-wide flex items-center gap-2">
                <span className={`${theme.accent} font-bold uppercase tracking-wider`}>
                  {currentBook.subject} · {currentBook.grade}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500 font-medium">Federal & Punjab Board Syllabus</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 mt-0.5 flex items-center gap-2">
                <span>
                  {currentBook.subject === 'Chemistry' ? 'Chapter' : 'Unit'} {currentChapter.number} – {currentChapter.title}
                </span>
              </h2>
            </div>

            {/* Tab navigation: Book Content, Quizzes, Vocabulary Bank */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 text-xs font-medium self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab('content')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'content'
                    ? 'bg-white text-indigo-700 shadow-xs font-bold ring-1 ring-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                Book Content
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('quizzes')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'quizzes'
                    ? 'bg-white text-emerald-800 shadow-xs font-bold ring-1 ring-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
                Quizzes ({currentChapter.quizzes.length})
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('vocab')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'vocab'
                    ? 'bg-white text-purple-800 shadow-xs font-bold ring-1 ring-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Vocabulary Bank
              </button>
            </div>
          </div>
        </section>

        {/* MAIN BODY AREA */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 pb-28">
          {activeTab === 'content' && (
            <BookReaderView
              chapter={currentChapter}
              onSelectTerm={(term) => setActiveModalTerm(term)}
            />
          )}

          {activeTab === 'quizzes' && (
            <QuizzesView
              questions={currentChapter.quizzes}
              chapterTitle={`${currentBook.subject === 'Mathematics' ? 'Unit' : 'Chapter'} ${currentChapter.number}: ${currentChapter.title}`}
              onSelectTerm={(term) => setActiveModalTerm(term)}
            />
          )}

          {activeTab === 'vocab' && (
            <VocabularyBankView
              onSelectTerm={(term) => setActiveModalTerm(term)}
            />
          )}
        </main>

        {/* VOCABULARY POPUP MODAL (When clicking any interactive term or word) */}
        <VocabularyModal
          term={activeModalTerm}
          onClose={() => setActiveModalTerm(null)}
        />

        {/* FLOATING TEXT-TO-SPEECH CONTROL BAR */}
        <AudioPlayerBar />

        {/* FOOTER */}
        <footer className="bg-white border-t border-slate-200 mt-auto py-6 text-center text-xs text-slate-500">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 justify-center">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <p>Smart Interactive Learning Books · Physics 10th, Chemistry 10th &amp; Mathematics 10th</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center font-medium">
              <button
                type="button"
                onClick={() => handleSelectBook('physics-10')}
                className={`hover:underline cursor-pointer ${selectedBookId === 'physics-10' ? 'text-amber-600 font-bold' : ''}`}
              >
                ⚡ Physics 10th (9 Units · 260+ MCQs)
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleSelectBook('chemistry-10')}
                className={`hover:underline cursor-pointer ${selectedBookId === 'chemistry-10' ? 'text-indigo-600 font-bold' : ''}`}
              >
                🧪 Chemistry 10th (5 Chapters)
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleSelectBook('maths-10')}
                className={`hover:underline cursor-pointer ${selectedBookId === 'maths-10' ? 'text-teal-600 font-bold' : ''}`}
              >
                📐 Mathematics 10th (5 Units)
              </button>
            </div>
          </div>
        </footer>
      </div>
    </SpeechProvider>
  );
}
