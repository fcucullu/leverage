"use client";

import { useState, useCallback } from "react";
import { vocabUpgrades, toneExercises } from "@/lib/content";
import { Dumbbell, ArrowRight, Volume2, RotateCcw, CheckCircle, XCircle } from "lucide-react";

function VocabCard({ upgrade }: { upgrade: typeof vocabUpgrades[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`bg-surface rounded-2xl border transition-all duration-300 cursor-pointer p-5 ${
        flipped ? "border-gold/30" : "border-border hover:border-gold/20"
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] text-muted uppercase tracking-wider">
          {flipped ? "Say this instead" : "Stop saying"}
        </span>
        <ArrowRight className={`w-3.5 h-3.5 text-gold transition-transform ${flipped ? "rotate-90" : ""}`} />
      </div>

      {flipped ? (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {upgrade.advanced.map((word, i) => (
              <span
                key={i}
                className="bg-success/10 text-success font-medium text-sm px-3 py-1.5 rounded-lg"
              >
                {word}
              </span>
            ))}
          </div>
          <div className="flex items-start gap-2">
            <Volume2 className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
            <p className="text-xs text-muted">{upgrade.pronunciation_guide}</p>
          </div>
        </div>
      ) : (
        <p className="text-lg font-medium text-error/80">&ldquo;{upgrade.basic}&rdquo;</p>
      )}
    </div>
  );
}

type ToneAnswer = "Passive" | "Assertive" | "Aggressive";

function ToneExercise() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<ToneAnswer | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const exercise = toneExercises[currentIndex];

  const handleSelect = useCallback(
    (answer: ToneAnswer) => {
      if (selected) return;
      setSelected(answer);
      if (answer === exercise.correct) {
        setScore((s) => ({ correct: s.correct + 1, total: s.total + 1 }));
      } else {
        setScore((s) => ({ ...s, total: s.total + 1 }));
      }
    },
    [selected, exercise.correct]
  );

  const handleNext = () => {
    setSelected(null);
    setCurrentIndex((i) => (i + 1) % toneExercises.length);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelected(null);
    setScore({ correct: 0, total: 0 });
  };

  const tones: ToneAnswer[] = ["Passive", "Assertive", "Aggressive"];
  const toneColors: Record<ToneAnswer, string> = {
    Passive: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    Assertive: "border-success/30 bg-success/10 text-success",
    Aggressive: "border-error/30 bg-error/10 text-error",
  };

  return (
    <div className="bg-surface rounded-2xl border border-border p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Tone Meter</h3>
        <div className="flex items-center gap-2">
          {score.total > 0 && (
            <span className="text-[10px] text-muted">
              {score.correct}/{score.total} correct
            </span>
          )}
          <button onClick={handleReset} className="text-muted hover:text-gold transition-colors">
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="bg-background rounded-xl p-4 border border-border">
        <p className="text-sm text-foreground italic">&ldquo;{exercise.phrase}&rdquo;</p>
      </div>

      <p className="text-xs text-muted text-center">What tone is this?</p>

      <div className="grid grid-cols-3 gap-2">
        {tones.map((tone) => {
          const isCorrect = selected && tone === exercise.correct;
          const isWrong = selected && tone === selected && tone !== exercise.correct;
          return (
            <button
              key={tone}
              onClick={() => handleSelect(tone)}
              className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all ${
                isCorrect
                  ? "border-success bg-success/15 text-success"
                  : isWrong
                  ? "border-error bg-error/15 text-error"
                  : selected
                  ? "border-border bg-surface text-muted"
                  : `border-border bg-surface text-foreground hover:${toneColors[tone]}`
              }`}
              disabled={!!selected}
            >
              <div className="flex flex-col items-center gap-1">
                {isCorrect && <CheckCircle className="w-3.5 h-3.5" />}
                {isWrong && <XCircle className="w-3.5 h-3.5" />}
                {tone}
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="space-y-3">
          <div className="bg-background rounded-xl p-4 border border-border">
            <p className="text-xs text-muted">{exercise.explanation}</p>
          </div>
          <button
            onClick={handleNext}
            className="w-full bg-gold text-background font-medium text-sm py-2.5 rounded-xl hover:bg-gold-light transition-colors"
          >
            Next Exercise
          </button>
        </div>
      )}
    </div>
  );
}

export default function PracticePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
          <Dumbbell className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">Practice</h1>
          <p className="text-xs text-muted">Sharpen your executive vocabulary</p>
        </div>
      </div>

      {/* Tone Exercise */}
      <ToneExercise />

      {/* Vocabulary Upgrades */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">Vocabulary Upgrades</h2>
          <span className="text-[10px] text-muted bg-border/50 px-2 py-0.5 rounded-full">
            Tap to flip
          </span>
        </div>
        <div className="space-y-3">
          {vocabUpgrades.map((upgrade, i) => (
            <VocabCard key={i} upgrade={upgrade} />
          ))}
        </div>
      </div>
    </div>
  );
}
