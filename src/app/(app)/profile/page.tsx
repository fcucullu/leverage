"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { User, MessageCircle, LogOut, Flame, BookOpen } from "lucide-react";
import type { User as SupaUser } from "@supabase/supabase-js";

const STREAK_KEY = "leverage_streak";
const LAST_VISIT_KEY = "leverage_last_visit";
const PHRASES_VIEWED_KEY = "leverage_phrases_viewed";

function getStreak(): number {
  if (typeof window === "undefined") return 0;
  const streak = localStorage.getItem(STREAK_KEY);
  const lastVisit = localStorage.getItem(LAST_VISIT_KEY);

  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  if (!lastVisit || !streak) {
    localStorage.setItem(STREAK_KEY, "1");
    localStorage.setItem(LAST_VISIT_KEY, today);
    return 1;
  }

  if (lastVisit === today) {
    return parseInt(streak, 10);
  }

  if (lastVisit === yesterday) {
    const newStreak = parseInt(streak, 10) + 1;
    localStorage.setItem(STREAK_KEY, newStreak.toString());
    localStorage.setItem(LAST_VISIT_KEY, today);
    return newStreak;
  }

  localStorage.setItem(STREAK_KEY, "1");
  localStorage.setItem(LAST_VISIT_KEY, today);
  return 1;
}

function getPhrasesViewed(): number {
  if (typeof window === "undefined") return 0;
  return parseInt(localStorage.getItem(PHRASES_VIEWED_KEY) || "0", 10);
}

export default function ProfilePage() {
  const [user, setUser] = useState<SupaUser | null>(null);
  const [streak, setStreak] = useState(0);
  const [phrasesViewed, setPhrasesViewed] = useState(0);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    setStreak(getStreak());
    setPhrasesViewed(getPhrasesViewed());
  }, []);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
          <User className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">Profile</h1>
          <p className="text-xs text-muted">{user?.email || "Loading..."}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-surface rounded-2xl border border-border p-4 text-center">
          <Flame className="w-6 h-6 text-gold mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">{streak}</p>
          <p className="text-[10px] text-muted uppercase tracking-wider">Day Streak</p>
        </div>
        <div className="bg-surface rounded-2xl border border-border p-4 text-center">
          <BookOpen className="w-6 h-6 text-gold mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">{phrasesViewed}</p>
          <p className="text-[10px] text-muted uppercase tracking-wider">Phrases Viewed</p>
        </div>
      </div>

      {/* User Info */}
      <div className="bg-surface rounded-2xl border border-border p-5 space-y-4">
        <h2 className="text-sm font-semibold text-foreground">Account</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted">Email</span>
            <span className="text-xs text-foreground">{user?.email || "—"}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted">Member since</span>
            <span className="text-xs text-foreground">
              {user?.created_at
                ? new Date(user.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })
                : "—"}
            </span>
          </div>
        </div>
      </div>

      {/* Chat with Fran */}
      <a
        href="https://wa.me/5491123456789?text=Hi%20Fran!%20I'm%20using%20Leverage"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-surface rounded-2xl border border-border p-4 hover:border-success/30 transition-colors"
      >
        <div className="w-10 h-10 rounded-xl bg-success/15 flex items-center justify-center shrink-0">
          <MessageCircle className="w-5 h-5 text-success" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">Chat with Fran</p>
          <p className="text-xs text-muted">Questions, feedback, or feature requests</p>
        </div>
      </a>

      {/* Sign Out */}
      <button
        onClick={handleSignOut}
        className="flex items-center gap-3 w-full bg-surface rounded-2xl border border-border p-4 hover:border-error/30 transition-colors"
      >
        <div className="w-10 h-10 rounded-xl bg-error/15 flex items-center justify-center shrink-0">
          <LogOut className="w-5 h-5 text-error" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-foreground">Sign Out</p>
          <p className="text-xs text-muted">See you next time</p>
        </div>
      </button>
    </div>
  );
}
