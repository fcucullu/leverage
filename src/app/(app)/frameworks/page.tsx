"use client";

import { useState } from "react";
import { frameworks } from "@/lib/content";
import { Lightbulb, ChevronDown, ChevronUp, Crosshair, Trophy, Clock, BarChart3 } from "lucide-react";

const frameworkIcons: Record<string, typeof Crosshair> = {
  "frame-control": Crosshair,
  "prize-frame": Trophy,
  "time-frame": Clock,
  "analyst-frame": BarChart3,
};

function FrameworkCard({ framework }: { framework: typeof frameworks[0] }) {
  const [open, setOpen] = useState(false);
  const Icon = frameworkIcons[framework.id] || Lightbulb;

  return (
    <div className="bg-surface rounded-2xl border border-gold/15 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 p-5 text-left hover:bg-gold/5 transition-colors"
      >
        <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
          <Icon className="w-5 h-5 text-gold" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gold text-base">{framework.name}</h3>
          <p className="text-xs text-muted mt-1 leading-relaxed">{framework.description}</p>
        </div>
        <div className="shrink-0 mt-1">
          {open ? (
            <ChevronUp className="w-4 h-4 text-gold/50" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gold/50" />
          )}
        </div>
      </button>

      {open && (
        <div className="px-5 pb-5 space-y-4">
          <div className="bg-background rounded-xl p-4 border border-border">
            <p className="text-xs text-muted leading-relaxed">{framework.explanation}</p>
          </div>

          <div>
            <p className="text-[10px] text-gold uppercase tracking-wider font-medium mb-3">
              Key Phrases
            </p>
            <div className="space-y-2">
              {framework.phrases.map((phrase, i) => (
                <div
                  key={i}
                  className="bg-background rounded-xl px-4 py-3 border border-border hover:border-gold/20 transition-colors"
                >
                  <p className="text-sm text-foreground">&ldquo;{phrase}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FrameworksPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">Frameworks</h1>
          <p className="text-xs text-muted">Pitch Anything — master persuasion</p>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-gold/5 rounded-2xl border border-gold/20 p-4">
        <p className="text-xs text-gold leading-relaxed">
          Based on Oren Klaff&apos;s <span className="font-semibold">Pitch Anything</span>. These four frames
          give you the tools to control any high-stakes conversation.
        </p>
      </div>

      {/* Framework Cards */}
      <div className="space-y-4">
        {frameworks.map((framework) => (
          <FrameworkCard key={framework.id} framework={framework} />
        ))}
      </div>
    </div>
  );
}
