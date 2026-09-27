import React, { useState } from 'react';
import {
  X,
  Minimize2,
  Maximize2,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  Delete
} from 'lucide-react';

interface ScientificCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  initialExpression?: string;
}

export const ScientificCalculator: React.FC<ScientificCalculatorProps> = ({
  isOpen,
  onClose,
  initialExpression = ''
}) => {
  const [expression, setExpression] = useState<string>(initialExpression || '');
  const [displayResult, setDisplayResult] = useState<string>('0');
  const [lastAnswer, setLastAnswer] = useState<string>('0');
  const [angleMode, setAngleMode] = useState<'DEG' | 'RAD'>('DEG');
  const [isSecondFunction, setIsSecondFunction] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [history, setHistory] = useState<{ expr: string; res: string }[]>([]);

  if (!isOpen) return null;

  // Insert token into expression
  const handleInput = (val: string) => {
    setExpression((prev) => prev + val);
  };

  // Clear all
  const handleClear = () => {
    setExpression('');
    setDisplayResult('0');
  };

  // Backspace / Delete
  const handleDelete = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  // Safe Factorial calculation
  const factorial = (n: number): number => {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= Math.min(n, 170); i++) res *= i;
    return res;
  };

  // Evaluate the math expression safely
  const handleCalculate = () => {
    if (!expression.trim()) return;

    try {
      let expr = expression;

      // Replace constants
      expr = expr.replace(/π/g, `${Math.PI}`);
      expr = expr.replace(/\be\b/g, `${Math.E}`);
      expr = expr.replace(/Ans/g, `(${lastAnswer})`);

      // Replace operations
      expr = expr.replace(/×/g, '*');
      expr = expr.replace(/÷/g, '/');
      expr = expr.replace(/\^/g, '**');

      // Trigonometric replacements with Angle Mode conversion
      const toRad = angleMode === 'DEG' ? `* (${Math.PI} / 180)` : '';
      const fromRad = angleMode === 'DEG' ? `* (180 / ${Math.PI})` : '';

      // Inverse trig
      expr = expr.replace(/asin\(([^)]+)\)/g, `(Math.asin($1) ${fromRad})`);
      expr = expr.replace(/acos\(([^)]+)\)/g, `(Math.acos($1) ${fromRad})`);
      expr = expr.replace(/atan\(([^)]+)\)/g, `(Math.atan($1) ${fromRad})`);

      // Direct trig
      expr = expr.replace(/sin\(([^)]+)\)/g, `Math.sin(($1) ${toRad})`);
      expr = expr.replace(/cos\(([^)]+)\)/g, `Math.cos(($1) ${toRad})`);
      expr = expr.replace(/tan\(([^)]+)\)/g, `Math.tan(($1) ${toRad})`);

      // Roots and logs
      expr = expr.replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)');
      expr = expr.replace(/√([0-9.]+)/g, 'Math.sqrt($1)');
      expr = expr.replace(/log\(([^)]+)\)/g, 'Math.log10($1)');
      expr = expr.replace(/ln\(([^)]+)\)/g, 'Math.log($1)');

      // Handle simple factorials like 5!
      expr = expr.replace(/(\d+)!/g, (_, n) => `${factorial(parseInt(n, 10))}`);

      // Evaluate using Function constructor in isolated strict scope
      // eslint-disable-next-line no-new-func
      const resultValue = Function(`"use strict"; return (${expr});`)();

      if (typeof resultValue === 'number' && !isNaN(resultValue)) {
        // Format nicely: round float precision issues
        const formatted = Number.isInteger(resultValue)
          ? resultValue.toString()
          : parseFloat(resultValue.toFixed(8)).toString();

        setDisplayResult(formatted);
        setLastAnswer(formatted);
        setHistory((prev) => [{ expr: expression, res: formatted }, ...prev.slice(0, 4)]);
      } else {
        setDisplayResult('Error');
      }
    } catch {
      setDisplayResult('Syntax Error');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(displayResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Physics & Maths quick constants
  const insertConstant = (label: string, value: string) => {
    setExpression((prev) => prev + value);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="calc-dialog-title"
      className="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6 select-none max-w-full"
    >
      <div
        className={`bg-slate-900 text-white rounded-3xl shadow-2xl border-2 border-slate-700/80 overflow-hidden transition-all duration-200 ${
          isMinimized ? 'w-80' : 'w-[340px] sm:w-[380px]'
        }`}
      >
        {/* Top Header Bar */}
        <div className="bg-gradient-to-r from-teal-800 via-slate-800 to-indigo-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-700/80">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-400/30">
              🧮
            </span>
            <div>
              <h3 id="calc-dialog-title" className="text-xs font-bold uppercase tracking-wider text-teal-100 flex items-center gap-1.5 font-mono">
                <span>SCIENTIFIC CALCULATOR</span>
              </h3>
              <p className="text-[10px] text-teal-300 font-urdu leading-none">
                سائنسی کیلکولیٹر · میٹرک فزکس و میتھ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {/* Angle mode DEG / RAD */}
            <button
              type="button"
              onClick={() => setAngleMode((prev) => (prev === 'DEG' ? 'RAD' : 'DEG'))}
              title={`Switch angle mode (Current: ${angleMode})`}
              className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono transition-colors cursor-pointer border ${
                angleMode === 'DEG'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-400/40'
                  : 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40'
              }`}
            >
              {angleMode}
            </button>

            {/* Minimize */}
            <button
              type="button"
              onClick={() => setIsMinimized((prev) => !prev)}
              aria-label={isMinimized ? "Maximize calculator" : "Minimize calculator"}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close calculator"
              className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Display Screen */}
        <div className="p-3.5 bg-slate-950/90 border-b border-slate-800">
          {/* Expression line */}
          <div className="text-right text-xs font-mono text-slate-400 h-5 overflow-x-auto whitespace-nowrap tracking-wide">
            {expression || ' '}
          </div>
          {/* Result line */}
          <div className="flex items-baseline justify-between gap-2 mt-1">
            <button
              type="button"
              onClick={handleCopy}
              title="Copy result to clipboard"
              className="text-[11px] text-teal-400 hover:text-teal-300 flex items-center gap-1 px-1.5 py-0.5 rounded bg-teal-950/60 border border-teal-800/50 cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
            <div className="text-right text-2xl font-mono font-black text-emerald-400 tracking-tight overflow-x-auto">
              {displayResult}
            </div>
          </div>
        </div>

        {!isMinimized && (
          <div className="p-3 space-y-2.5">
            {/* Quick Physics & Maths Constants Strip */}
            <div className="flex items-center gap-1 overflow-x-auto py-0.5 text-[10px] font-mono scrollbar-none text-slate-300">
              <span className="text-slate-500 text-[9px] uppercase font-bold shrink-0">Constants:</span>
              <button
                type="button"
                onClick={() => insertConstant('g', '9.8')}
                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 shrink-0 cursor-pointer"
                title="g = 9.8 m/s² (Earth gravity)"
              >
                g=9.8
              </button>
              <button
                type="button"
                onClick={() => insertConstant('k', '9e9')}
                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 shrink-0 cursor-pointer"
                title="k = 9×10⁹ N·m²/C² (Coulomb constant)"
              >
                k=9×10⁹
              </button>
              <button
                type="button"
                onClick={() => insertConstant('c', '3e8')}
                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 shrink-0 cursor-pointer"
                title="c = 3×10⁸ m/s (Speed of light)"
              >
                c=3×10⁸
              </button>
              <button
                type="button"
                onClick={() => insertConstant('v', '340')}
                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 shrink-0 cursor-pointer"
                title="Speed of sound ≈ 340 m/s"
              >
                v=340
              </button>
              <button
                type="button"
                onClick={() => insertConstant('π', 'π')}
                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 shrink-0 cursor-pointer"
                title="π ≈ 3.14159"
              >
                π
              </button>
            </div>

            {/* Scientific Function Grid */}
            <div className="grid grid-cols-5 gap-1.5 text-xs font-mono">
              {/* Row 1: Trig & 2nd */}
              <button
                type="button"
                onClick={() => setIsSecondFunction((prev) => !prev)}
                className={`py-1.5 rounded-lg font-bold border transition-colors cursor-pointer ${
                  isSecondFunction
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                2nd
              </button>
              <button
                type="button"
                onClick={() => handleInput(isSecondFunction ? 'asin(' : 'sin(')}
                className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 cursor-pointer"
              >
                {isSecondFunction ? 'sin⁻¹' : 'sin'}
              </button>
              <button
                type="button"
                onClick={() => handleInput(isSecondFunction ? 'acos(' : 'cos(')}
                className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 cursor-pointer"
              >
                {isSecondFunction ? 'cos⁻¹' : 'cos'}
              </button>
              <button
                type="button"
                onClick={() => handleInput(isSecondFunction ? 'atan(' : 'tan(')}
                className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 cursor-pointer"
              >
                {isSecondFunction ? 'tan⁻¹' : 'tan'}
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="py-1.5 rounded-lg bg-rose-900/60 hover:bg-rose-800 text-rose-200 border border-rose-700 flex items-center justify-center cursor-pointer"
                title="Backspace / Delete"
              >
                <Delete className="w-3.5 h-3.5" />
              </button>

              {/* Row 2: Powers, Roots & Logs */}
              <button
                type="button"
                onClick={() => handleInput('^2')}
                className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 cursor-pointer"
              >
                x²
              </button>
              <button
                type="button"
                onClick={() => handleInput('^')}
                className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 cursor-pointer"
              >
                xʸ
              </button>
              <button
                type="button"
                onClick={() => handleInput('√(')}
                className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 cursor-pointer"
              >
                √x
              </button>
              <button
                type="button"
                onClick={() => handleInput('log(')}
                className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 cursor-pointer"
              >
                log
              </button>
              <button
                type="button"
                onClick={() => handleInput('ln(')}
                className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 cursor-pointer"
              >
                ln
              </button>

              {/* Row 3: Brackets & Clear */}
              <button
                type="button"
                onClick={() => handleInput('(')}
                className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-200 border border-slate-700 cursor-pointer"
              >
                (
              </button>
              <button
                type="button"
                onClick={() => handleInput(')')}
                className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-200 border border-slate-700 cursor-pointer"
              >
                )
              </button>
              <button
                type="button"
                onClick={() => handleInput('%')}
                className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-200 border border-slate-700 cursor-pointer"
              >
                %
              </button>
              <button
                type="button"
                onClick={() => handleInput('!')}
                className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-200 border border-slate-700 cursor-pointer"
              >
                n!
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-black border border-rose-500 cursor-pointer"
              >
                AC
              </button>

              {/* Row 4: 7, 8, 9, Div, Mul */}
              <button
                type="button"
                onClick={() => handleInput('7')}
                className="py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 cursor-pointer"
              >
                7
              </button>
              <button
                type="button"
                onClick={() => handleInput('8')}
                className="py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 cursor-pointer"
              >
                8
              </button>
              <button
                type="button"
                onClick={() => handleInput('9')}
                className="py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 cursor-pointer"
              >
                9
              </button>
              <button
                type="button"
                onClick={() => handleInput('÷')}
                className="py-2 rounded-lg bg-teal-800 hover:bg-teal-700 text-white font-black text-sm border border-teal-600 cursor-pointer"
              >
                ÷
              </button>
              <button
                type="button"
                onClick={() => handleInput('×')}
                className="py-2 rounded-lg bg-teal-800 hover:bg-teal-700 text-white font-black text-sm border border-teal-600 cursor-pointer"
              >
                ×
              </button>

              {/* Row 5: 4, 5, 6, Sub, Add */}
              <button
                type="button"
                onClick={() => handleInput('4')}
                className="py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 cursor-pointer"
              >
                4
              </button>
              <button
                type="button"
                onClick={() => handleInput('5')}
                className="py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 cursor-pointer"
              >
                5
              </button>
              <button
                type="button"
                onClick={() => handleInput('6')}
                className="py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 cursor-pointer"
              >
                6
              </button>
              <button
                type="button"
                onClick={() => handleInput('-')}
                className="py-2 rounded-lg bg-teal-800 hover:bg-teal-700 text-white font-black text-sm border border-teal-600 cursor-pointer"
              >
                -
              </button>
              <button
                type="button"
                onClick={() => handleInput('+')}
                className="py-2 rounded-lg bg-teal-800 hover:bg-teal-700 text-white font-black text-sm border border-teal-600 cursor-pointer"
              >
                +
              </button>

              {/* Row 6: 1, 2, 3, Ans, Equals */}
              <button
                type="button"
                onClick={() => handleInput('1')}
                className="py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 cursor-pointer"
              >
                1
              </button>
              <button
                type="button"
                onClick={() => handleInput('2')}
                className="py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 cursor-pointer"
              >
                2
              </button>
              <button
                type="button"
                onClick={() => handleInput('3')}
                className="py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 cursor-pointer"
              >
                3
              </button>
              <button
                type="button"
                onClick={() => handleInput('Ans')}
                className="py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold text-xs border border-slate-700 cursor-pointer"
                title="Recall last calculated answer"
              >
                Ans
              </button>
              <button
                type="button"
                onClick={handleCalculate}
                className="row-span-2 py-2 rounded-lg bg-gradient-to-b from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-lg border border-emerald-400 shadow-md cursor-pointer flex items-center justify-center"
              >
                =
              </button>

              {/* Row 7: 0, ., e, π */}
              <button
                type="button"
                onClick={() => handleInput('0')}
                className="py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 cursor-pointer"
              >
                0
              </button>
              <button
                type="button"
                onClick={() => handleInput('.')}
                className="py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 cursor-pointer"
              >
                .
              </button>
              <button
                type="button"
                onClick={() => handleInput('e')}
                className="py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold text-xs border border-slate-700 cursor-pointer"
              >
                e
              </button>
              <button
                type="button"
                onClick={() => handleInput('π')}
                className="py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold text-xs border border-slate-700 cursor-pointer"
              >
                π
              </button>
            </div>

            {/* Calculation History drawer if items exist */}
            {history.length > 0 && (
              <div className="pt-1 border-t border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Recent:</span>
                <div className="space-y-1 max-h-16 overflow-y-auto pr-1">
                  {history.map((h, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setExpression(h.expr);
                        setDisplayResult(h.res);
                      }}
                      className="w-full text-left flex items-center justify-between text-[11px] font-mono p-1 rounded bg-slate-950/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 cursor-pointer"
                    >
                      <span className="truncate max-w-[180px]">{h.expr}</span>
                      <span className="text-emerald-400 font-bold shrink-0">= {h.res}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
