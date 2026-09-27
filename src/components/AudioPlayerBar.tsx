import React from 'react';
import { Volume2, Play, Pause, Square, FastForward } from 'lucide-react';
import { useSpeech } from '../context/SpeechContext';

export const AudioPlayerBar: React.FC = () => {
  const { isPlaying, isPaused, activeTitle, currentText, pause, resume, stop, speed, setSpeed } = useSpeech();

  if (!isPlaying && !isPaused) {
    return null;
  }

  const speeds = [0.75, 1.0, 1.25];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-xl bg-slate-900/95 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-200">
      {/* Title & Status */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
          <Volume2 className={`w-4 h-4 text-white ${isPlaying && !isPaused ? 'animate-pulse' : ''}`} />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-indigo-300 truncate">
            {activeTitle || 'Text-to-Speech'}
          </p>
          <p className="text-[11px] text-slate-300 truncate">
            {currentText || 'Speaking paragraph...'}
          </p>
        </div>
      </div>

      {/* Speed Controls */}
      <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-lg border border-slate-700 shrink-0">
        {speeds.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSpeed(s)}
            className={`px-2 py-0.5 text-[11px] font-medium rounded transition-colors ${
              speed === s ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {s}x
          </button>
        ))}
      </div>

      {/* Play / Pause / Stop Controls */}
      <div className="flex items-center gap-2 shrink-0">
        {isPaused ? (
          <button
            type="button"
            onClick={resume}
            title="Resume"
            aria-label="Resume audio"
            className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
          >
            <Play className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={pause}
            title="Pause"
            aria-label="Pause audio"
            className="p-2 rounded-full bg-amber-600 hover:bg-amber-500 text-white transition-colors"
          >
            <Pause className="w-4 h-4" />
          </button>
        )}

        <button
          type="button"
          onClick={stop}
          title="Stop reading"
          aria-label="Stop audio"
          className="p-2 rounded-full bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition-colors"
        >
          <Square className="w-4 h-4 fill-current" />
        </button>
      </div>
    </div>
  );
};
