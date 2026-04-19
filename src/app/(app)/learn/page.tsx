"use client";

import { useState } from "react";
import { getDailyDose, phraseCategories, type PhraseCategory, type Phrase } from "@/lib/content";
import { InstallPrompt } from "@/components/install-prompt";
import { TrendingUp, ChevronDown, ChevronUp, Volume2, Sparkles } from "lucide-react";

function FormalityDots({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i <= level ? "bg-gold" : "bg-border"
          }`}
        />
      ))}
    </div>
  );
}

function PhraseCard({ phrase }: { phrase: Phrase }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-background rounded-xl border border-border p-3 cursor-pointer hover:border-gold/30 transition-colors"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium text-foreground flex-1">&ldquo;{phrase.text}&rdquo;</p>
        <FormalityDots level={phrase.formality_level} />
      </div>
      {expanded && (
        <div className="mt-3 space-y-2 border-t border-border pt-3">
          <div className="flex items-start gap-2">
            <Volume2 className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
            <p className="text-xs text-muted">{phrase.pronunciation_note}</p>
          </div>
          <p className="text-xs text-muted/80 italic">{phrase.context}</p>
        </div>
      )}
    </div>
  );
}

function CategorySection({ category }: { category: PhraseCategory }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-surface rounded-2xl border border-border overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-border/20 transition-colors"
      >
        <div>
          <h3 className="font-semibold text-foreground text-sm">{category.name}</h3>
          <p className="text-xs text-muted mt-0.5">{category.description}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] text-muted bg-border/50 px-2 py-0.5 rounded-full">
            {category.phrases.length}
          </span>
          {open ? (
            <ChevronUp className="w-4 h-4 text-muted" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted" />
          )}
        </div>
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-2">
          {category.phrases.map((phrase, i) => (
            <PhraseCard key={i} phrase={phrase} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function LearnPage() {
  const daily = getDailyDose();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">Leverage</h1>
          <p className="text-xs text-muted">Speak with authority</p>
        </div>
      </div>

      {/* Install Prompt */}
      <InstallPrompt />

      {/* Daily Dose */}
      <div className="bg-surface rounded-2xl border border-gold/20 p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-gold" />
          <h2 className="text-sm font-semibold text-gold uppercase tracking-wider">Daily Dose</h2>
        </div>

        {/* Today's Phrase */}
        <div className="space-y-1">
          <p className="text-[10px] text-muted uppercase tracking-wider">Phrase of the Day</p>
          <p className="text-base font-medium text-foreground">&ldquo;{daily.phrase.text}&rdquo;</p>
          <p className="text-xs text-muted">{daily.phraseCategory}</p>
          <div className="flex items-start gap-2 mt-2">
            <Volume2 className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
            <p className="text-xs text-muted">{daily.phrase.pronunciation_note}</p>
          </div>
        </div>

        <div className="border-t border-border" />

        {/* Today's Vocab */}
        <div className="space-y-1">
          <p className="text-[10px] text-muted uppercase tracking-wider">Vocabulary Upgrade</p>
          <p className="text-sm">
            <span className="text-error line-through mr-2">{daily.vocab.basic}</span>
            <span className="text-success font-medium">{daily.vocab.advanced[0]}</span>
          </p>
          <p className="text-xs text-muted">{daily.vocab.pronunciation_guide}</p>
        </div>

        <div className="border-t border-border" />

        {/* Today's Framework */}
        <div className="space-y-1">
          <p className="text-[10px] text-muted uppercase tracking-wider">Framework Tip</p>
          <p className="text-sm font-medium text-gold-light">{daily.framework.name}</p>
          <p className="text-xs text-muted">{daily.framework.phrases[daily.dayOfYear % daily.framework.phrases.length]}</p>
        </div>
      </div>

      {/* Phrase Library */}
      <div>
        <h2 className="text-lg font-bold text-foreground mb-4">Phrase Library</h2>
        <div className="space-y-3">
          {phraseCategories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
