export interface Phrase {
  text: string;
  pronunciation_note: string;
  context: string;
  formality_level: number; // 1-5
}

export interface PhraseCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  phrases: Phrase[];
}

export interface VocabUpgrade {
  basic: string;
  advanced: string[];
  pronunciation_guide: string;
}

export interface Framework {
  id: string;
  name: string;
  description: string;
  explanation: string;
  phrases: string[];
}

export interface ToneExercise {
  phrase: string;
  correct: "Passive" | "Assertive" | "Aggressive";
  explanation: string;
}

// ─── Phrase Library ───────────────────────────────────────────────

export const phraseCategories: PhraseCategory[] = [
  {
    id: "adding",
    name: "Adding a Point",
    description: "Expand and build on existing ideas",
    icon: "plus-circle",
    phrases: [
      { text: "Building on that...", pronunciation_note: "Stress 'building' — /ˈbɪldɪŋ ɒn ðæt/. Smooth transition, don't pause too long.", context: "When you agree and want to add value to a colleague's point.", formality_level: 3 },
      { text: "To add to this...", pronunciation_note: "Quick delivery — /tuː æd tuː ðɪs/. Keep it brisk.", context: "Casual meetings where you want to contribute without interrupting.", formality_level: 2 },
      { text: "Furthermore...", pronunciation_note: "/ˈfɜːðəmɔːr/ — stress first syllable. Sounds academic if overused.", context: "Written communications or formal board presentations.", formality_level: 5 },
      { text: "What's also worth noting...", pronunciation_note: "Emphasize 'worth' — /wɜːθ/. Slower pace signals importance.", context: "When introducing a fact others may have overlooked.", formality_level: 4 },
      { text: "In addition to that...", pronunciation_note: "/ɪn əˈdɪʃən tuː ðæt/ — stress 'addition'. Common connector.", context: "Any professional setting. Safe and versatile.", formality_level: 3 },
      { text: "To expand on this...", pronunciation_note: "/ɪkˈspænd/ — stress second syllable. Signals depth.", context: "When you have data or examples that strengthen the point.", formality_level: 4 },
      { text: "Another key consideration is...", pronunciation_note: "/kənˌsɪdəˈreɪʃən/ — four syllables, stress on third. Practice this word.", context: "Strategy discussions, risk assessments, executive reviews.", formality_level: 5 },
      { text: "Equally important...", pronunciation_note: "/ˈiːkwəli/ — stress first syllable. Implies balanced thinking.", context: "When ensuring your point gets equal weight in a discussion.", formality_level: 4 },
    ],
  },
  {
    id: "contrasting",
    name: "Contrasting",
    description: "Present alternative perspectives professionally",
    icon: "scale",
    phrases: [
      { text: "On the other hand...", pronunciation_note: "Smooth and calm — don't rush. Signals you're about to present an alternative.", context: "When balancing pros and cons in a decision-making discussion.", formality_level: 3 },
      { text: "That said...", pronunciation_note: "Quick, two syllables. /ðæt sɛd/. Very natural in spoken English.", context: "After acknowledging someone's point before presenting your counter-view.", formality_level: 2 },
      { text: "Having said that...", pronunciation_note: "/ˈhævɪŋ sɛd ðæt/ — slightly more formal than 'that said'.", context: "Meetings where you need to pivot from agreement to disagreement.", formality_level: 3 },
      { text: "Conversely...", pronunciation_note: "/ˈkɒnvɜːsli/ — stress first syllable. Sounds intellectual.", context: "Presentations, written reports, analytical discussions.", formality_level: 5 },
      { text: "While I see your point...", pronunciation_note: "Warm tone. Start slow, then present your view with conviction.", context: "One-on-one discussions where rapport matters.", formality_level: 3 },
      { text: "I'd argue the opposite...", pronunciation_note: "Confident but not aggressive. Emphasis on 'opposite' — /ˈɒpəzɪt/.", context: "Debates or brainstorming sessions where strong opinions are welcome.", formality_level: 3 },
      { text: "That's one perspective, however...", pronunciation_note: "/pəˈspɛktɪv/ — stress second syllable. Pause before 'however'.", context: "When diplomatically challenging a senior's view.", formality_level: 4 },
      { text: "Notwithstanding that...", pronunciation_note: "/ˌnɒtwɪθˈstændɪŋ/ — four syllables, stress on third. Very formal.", context: "Legal, compliance, or board-level discussions.", formality_level: 5 },
    ],
  },
  {
    id: "feedback",
    name: "Giving Feedback",
    description: "Deliver constructive feedback with impact",
    icon: "message-circle",
    phrases: [
      { text: "One area for improvement...", pronunciation_note: "/ɪmˈpruːvmənt/ — stress second syllable. Keep tone supportive.", context: "Performance reviews, project retrospectives.", formality_level: 4 },
      { text: "What I'd suggest is...", pronunciation_note: "/səˈdʒɛst/ — stress second syllable. Sounds collaborative, not bossy.", context: "When offering guidance to peers or direct reports.", formality_level: 3 },
      { text: "Have you considered...", pronunciation_note: "/kənˈsɪdəd/ — rhetorical tone, not accusatory. Raise pitch slightly.", context: "Coaching conversations or mentoring sessions.", formality_level: 3 },
      { text: "A more effective approach might be...", pronunciation_note: "/ɪˈfɛktɪv/ — stress second syllable. Implies expertise.", context: "When recommending a better strategy or process.", formality_level: 4 },
      { text: "I'd encourage you to...", pronunciation_note: "/ɪnˈkʌrɪdʒ/ — warm, supportive tone. Not a command.", context: "Mentoring, coaching, development conversations.", formality_level: 3 },
      { text: "To strengthen this further...", pronunciation_note: "/ˈstrɛŋθən/ — the 'ngth' cluster is tricky. Practice: streng-then.", context: "When reviewing someone's work or proposal.", formality_level: 4 },
      { text: "The gap I'm seeing is...", pronunciation_note: "Direct and clear. Emphasize 'gap'. Don't soften too much.", context: "When identifying a specific deficiency that needs addressing.", formality_level: 3 },
      { text: "Let me be candid...", pronunciation_note: "/ˈkændɪd/ — stress first syllable. Signals honesty is coming.", context: "When you need to deliver difficult feedback directly.", formality_level: 4 },
    ],
  },
  {
    id: "accepting",
    name: "Accepting",
    description: "Express agreement with executive polish",
    icon: "check-circle",
    phrases: [
      { text: "I'm fully on board with...", pronunciation_note: "Enthusiastic but controlled. Stress 'fully' for emphasis.", context: "When committing to a strategy or decision.", formality_level: 3 },
      { text: "That resonates with me", pronunciation_note: "/ˈrɛzəneɪts/ — stress first syllable. Sounds thoughtful and authentic.", context: "When a point connects with your experience or values.", formality_level: 4 },
      { text: "Absolutely, let's move forward", pronunciation_note: "/ˈæbsəluːtli/ — five syllables. Decisive and action-oriented.", context: "Decision moments — signals closure and commitment.", formality_level: 3 },
      { text: "I couldn't agree more", pronunciation_note: "Stress 'more'. Classic executive expression of strong agreement.", context: "Board meetings, stakeholder calls, leadership alignment.", formality_level: 4 },
      { text: "That's a compelling point", pronunciation_note: "/kəmˈpɛlɪŋ/ — stress second syllable. Implies the argument won you over.", context: "When someone presents a well-structured argument.", formality_level: 4 },
      { text: "You've convinced me", pronunciation_note: "/kənˈvɪnst/ — direct and genuine. Shows intellectual flexibility.", context: "After someone provides evidence that changes your view.", formality_level: 3 },
      { text: "I'm aligned with that direction", pronunciation_note: "/əˈlaɪnd/ — corporate vocabulary. Signals strategic agreement.", context: "Strategy discussions, roadmap reviews.", formality_level: 4 },
      { text: "Consider it done", pronunciation_note: "Short, powerful. Drop your voice slightly for authority.", context: "When taking ownership of an action item.", formality_level: 2 },
    ],
  },
  {
    id: "rejecting",
    name: "Rejecting Diplomatically",
    description: "Push back without burning bridges",
    icon: "shield",
    phrases: [
      { text: "I see the merit, however...", pronunciation_note: "/ˈmɛrɪt/ — stress first syllable. Acknowledge before redirecting.", context: "When you need to decline but want to validate the other person.", formality_level: 4 },
      { text: "Let me push back slightly on...", pronunciation_note: "Calm delivery. 'Slightly' softens the pushback significantly.", context: "Team discussions where constructive challenge is expected.", formality_level: 3 },
      { text: "I have reservations about...", pronunciation_note: "/ˌrɛzəˈveɪʃənz/ — stress third syllable. Signals careful thought.", context: "When expressing doubt about a proposal or decision.", formality_level: 4 },
      { text: "That's not quite where I'd land", pronunciation_note: "Casual but clear. 'Land' is a metaphor for your position.", context: "Informal executive discussions, brainstorming.", formality_level: 3 },
      { text: "I'd recommend we reconsider...", pronunciation_note: "/ˌriːkənˈsɪdə/ — stress third syllable. Implies new information needed.", context: "When new data or circumstances warrant a change of direction.", formality_level: 4 },
      { text: "Respectfully, I disagree", pronunciation_note: "/rɪˈspɛktfəli/ — stress second syllable. Firm but professional.", context: "When you need to clearly state opposition.", formality_level: 4 },
      { text: "I see it differently", pronunciation_note: "Simple and powerful. No need for complex vocabulary here.", context: "When perspectives genuinely diverge. Opens dialogue.", formality_level: 3 },
      { text: "That approach may have unintended consequences", pronunciation_note: "/ˌʌnɪnˈtɛndɪd/ — practice this word. Stress on third syllable.", context: "Risk discussions, compliance reviews, strategy debates.", formality_level: 5 },
    ],
  },
  {
    id: "buying-time",
    name: "Buying Time",
    description: "Delay without appearing indecisive",
    icon: "clock",
    phrases: [
      { text: "Let me circle back on that", pronunciation_note: "'Circle back' is corporate jargon — /ˈsɜːkəl bæk/. Very natural.", context: "When you need time to research or think before responding.", formality_level: 3 },
      { text: "That's worth exploring further", pronunciation_note: "/ɪkˈsplɔːrɪŋ/ — stress second syllable. Shows interest, buys time.", context: "When an idea has potential but you're not ready to commit.", formality_level: 3 },
      { text: "I need to give that more thought", pronunciation_note: "Honest and professional. Don't rush this sentence.", context: "When you genuinely need time to process complex information.", formality_level: 3 },
      { text: "Can I revert to you by EOD?", pronunciation_note: "/rɪˈvɜːt/ — means 'get back to you'. EOD = End Of Day.", context: "When you need a few hours to prepare a proper response.", formality_level: 3 },
      { text: "Let me consult with the team first", pronunciation_note: "/kənˈsʌlt/ — stress second syllable. Shows due diligence.", context: "When a decision requires input from others.", formality_level: 4 },
      { text: "I want to be thoughtful about this", pronunciation_note: "/ˈθɔːtfəl/ — the 'th' sound is key. Shows care, not delay.", context: "Important decisions where rushing would be irresponsible.", formality_level: 4 },
    ],
  },
  {
    id: "taking-control",
    name: "Taking Control",
    description: "Steer conversations with authority",
    icon: "compass",
    phrases: [
      { text: "Here's what's interesting about this...", pronunciation_note: "Drop your voice slightly. Creates a hook — people lean in.", context: "When redirecting attention to your key insight.", formality_level: 3 },
      { text: "Let me reframe this...", pronunciation_note: "/riːˈfreɪm/ — stress second syllable. Signals a perspective shift.", context: "When the conversation is stuck and needs a new angle.", formality_level: 4 },
      { text: "The real question here is...", pronunciation_note: "Emphasis on 'real'. Implies others are missing the point.", context: "When cutting through surface-level discussion to the core issue.", formality_level: 3 },
      { text: "What we should be focusing on is...", pronunciation_note: "Assertive tone. 'Should' carries weight — use deliberately.", context: "When the group is losing focus or going off-track.", formality_level: 3 },
      { text: "Allow me to redirect us...", pronunciation_note: "/ˌriːdaɪˈrɛkt/ — formal and polite. 'Allow me' adds courtesy.", context: "Formal meetings where you need to change the topic gracefully.", formality_level: 5 },
      { text: "The critical point is...", pronunciation_note: "/ˈkrɪtɪkəl/ — stress first syllable. Sets up your key argument.", context: "When summarizing or highlighting the most important takeaway.", formality_level: 4 },
    ],
  },
  {
    id: "urgency",
    name: "Creating Urgency",
    description: "Drive action and momentum",
    icon: "zap",
    phrases: [
      { text: "The window for this is narrowing", pronunciation_note: "/ˈnærəʊɪŋ/ — visual metaphor. Slightly urgent tone.", context: "When an opportunity has a genuine time constraint.", formality_level: 4 },
      { text: "We need to act decisively", pronunciation_note: "/dɪˈsaɪsɪvli/ — stress second syllable. Conveys leadership.", context: "When the team is deliberating too long on a time-sensitive matter.", formality_level: 4 },
      { text: "Time is of the essence", pronunciation_note: "/ˈɛsəns/ — classic business phrase. Stress 'essence'.", context: "Formal communications, emails to stakeholders.", formality_level: 5 },
      { text: "We risk losing momentum if...", pronunciation_note: "/məˈmɛntəm/ — stress second syllable. Creates FOMO.", context: "When progress is at risk due to inaction.", formality_level: 4 },
      { text: "This requires immediate attention", pronunciation_note: "/ɪˈmiːdiət/ — stress second syllable. Clear and urgent.", context: "Escalation situations, crisis management.", formality_level: 5 },
      { text: "Every day we delay costs us...", pronunciation_note: "Quantify if possible. Makes urgency concrete and measurable.", context: "When you can tie delay to financial or strategic impact.", formality_level: 4 },
    ],
  },
];

// ─── Vocabulary Upgrades ──────────────────────────────────────────

export const vocabUpgrades: VocabUpgrade[] = [
  { basic: "very good", advanced: ["outstanding", "exceptional"], pronunciation_guide: "/aʊtˈstændɪŋ/ — stress second syllable. /ɪkˈsɛpʃənəl/ — stress second syllable." },
  { basic: "I think", advanced: ["I'm confident that", "My assessment is"], pronunciation_guide: "/əˈsɛsmənt/ — stress second syllable. Sounds data-driven." },
  { basic: "problem", advanced: ["challenge", "bottleneck", "pain point"], pronunciation_guide: "/ˈbɒtlnɛk/ — compound word, stress first part. /peɪn pɔɪnt/ — two words." },
  { basic: "important", advanced: ["critical", "paramount", "pivotal"], pronunciation_guide: "/ˈpærəmaʊnt/ — stress first syllable. /ˈpɪvətəl/ — stress first syllable." },
  { basic: "help", advanced: ["support", "facilitate", "enable"], pronunciation_guide: "/fəˈsɪlɪteɪt/ — stress second syllable. Four syllables total." },
  { basic: "big", advanced: ["significant", "substantial", "considerable"], pronunciation_guide: "/sɪɡˈnɪfɪkənt/ — stress second syllable. /səbˈstænʃəl/ — stress second." },
  { basic: "bad", advanced: ["suboptimal", "concerning", "detrimental"], pronunciation_guide: "/sʌbˈɒptɪməl/ — stress second syllable. /ˌdɛtrɪˈmɛntəl/ — stress third." },
  { basic: "get", advanced: ["obtain", "secure", "acquire"], pronunciation_guide: "/əbˈteɪn/ — stress second. /əˈkwaɪər/ — stress second syllable." },
  { basic: "show", advanced: ["demonstrate", "illustrate", "highlight"], pronunciation_guide: "/ˈdɛmənstreɪt/ — stress first syllable. /ˈɪləstreɪt/ — stress first." },
  { basic: "tell", advanced: ["inform", "advise", "communicate"], pronunciation_guide: "/ɪnˈfɔːm/ — stress second. /kəˈmjuːnɪkeɪt/ — stress second syllable." },
  { basic: "want", advanced: ["aim to", "seek to", "aspire to"], pronunciation_guide: "/əˈspaɪər/ — stress second syllable. Sounds ambitious." },
  { basic: "need", advanced: ["require", "necessitate", "call for"], pronunciation_guide: "/nɪˈsɛsɪteɪt/ — stress second syllable. Very formal." },
  { basic: "use", advanced: ["leverage", "utilize", "employ"], pronunciation_guide: "/ˈlɛvərɪdʒ/ — stress first syllable. /ˈjuːtɪlaɪz/ — stress first." },
  { basic: "change", advanced: ["transform", "pivot", "evolve"], pronunciation_guide: "/trænsˈfɔːm/ — stress second. /ˈpɪvət/ — stress first syllable." },
  { basic: "fast", advanced: ["rapid", "swift", "expeditious"], pronunciation_guide: "/ˌɛkspɪˈdɪʃəs/ — stress third syllable. Very formal and impressive." },
  { basic: "hard", advanced: ["challenging", "demanding", "rigorous"], pronunciation_guide: "/ˈrɪɡərəs/ — stress first syllable. Implies high standards." },
  { basic: "easy", advanced: ["straightforward", "seamless", "intuitive"], pronunciation_guide: "/ˈsiːmləs/ — stress first syllable. /ɪnˈtjuːɪtɪv/ — stress second." },
  { basic: "a lot", advanced: ["extensively", "substantially", "considerably"], pronunciation_guide: "/ɪkˈstɛnsɪvli/ — stress second syllable. Adverb form." },
  { basic: "now", advanced: ["at this juncture", "presently", "as we speak"], pronunciation_guide: "/ˈdʒʌŋktʃər/ — stress first syllable. Formal time reference." },
  { basic: "soon", advanced: ["in the near term", "imminently", "shortly"], pronunciation_guide: "/ˈɪmɪnəntli/ — stress first syllable. Implies very close." },
];

// ─── Pitch Anything Frameworks ────────────────────────────────────

export const frameworks: Framework[] = [
  {
    id: "frame-control",
    name: "Frame Control",
    description: "Whoever controls the frame controls the conversation",
    explanation: "In any meeting, there's a dominant frame — a lens through which everyone interprets what's happening. Frame control means setting and maintaining that lens. When you lose the frame, you lose the audience. The key: never react to their frame, always redirect to yours.",
    phrases: [
      "Let me put this in perspective...",
      "The way I see this is...",
      "Here's the lens I'd apply to this...",
      "If we step back for a moment...",
      "Let me reframe this conversation...",
      "The real issue at hand is...",
      "What's actually at stake here is...",
      "I'd challenge that assumption...",
    ],
  },
  {
    id: "prize-frame",
    name: "Prize Frame",
    description: "Position yourself as the value, not the seller",
    explanation: "Most people pitch by chasing approval. The Prize Frame flips this: you are the prize, not the buyer. You communicate that your time, expertise, and proposal are valuable. The audience should feel lucky to have the opportunity, not the other way around.",
    phrases: [
      "We're selective about the partnerships we take on...",
      "This is a rare opportunity for the right organization...",
      "Our track record speaks for itself...",
      "We typically don't offer this level of access...",
      "The question isn't whether this works — it's whether this is the right fit",
      "I have limited bandwidth, so I'm being strategic about where I invest it",
      "Organizations at your level appreciate this because...",
      "This isn't for everyone, and that's by design",
    ],
  },
  {
    id: "time-frame",
    name: "Time Frame",
    description: "Use time pressure to accelerate decisions",
    explanation: "The Time Frame compresses the decision timeline. It's not manipulation — it's honest about constraints. When there's genuine urgency, communicating it is a service. The key is pairing urgency with clear next steps.",
    phrases: [
      "I have a hard stop in 15 minutes, so let's get to the core...",
      "The window for this closes at end of quarter...",
      "I can hold this offer until Friday...",
      "We're evaluating two other options simultaneously...",
      "My calendar is opening up next month, but this month is tight...",
      "The market conditions that make this viable won't last...",
      "I need a decision by Thursday to allocate resources...",
      "Let's not let perfect be the enemy of good here",
    ],
  },
  {
    id: "analyst-frame",
    name: "Analyst Frame",
    description: "Use data and logic to persuade with authority",
    explanation: "The Analyst Frame breaks someone's emotional resistance with cold, hard data. When someone is challenging you based on feelings or politics, pivot to numbers. Data neutralizes opinions. The key: be specific, cite sources, and let the numbers tell the story.",
    phrases: [
      "The data tells us something interesting here...",
      "If we look at the numbers objectively...",
      "Based on our analysis of 500+ cases...",
      "The ROI on this is demonstrably clear...",
      "Let me walk you through the unit economics...",
      "Industry benchmarks suggest...",
      "Our conversion data shows a 3x improvement when...",
      "The evidence overwhelmingly supports...",
    ],
  },
];

// ─── Tone Exercises ───────────────────────────────────────────────

export const toneExercises: ToneExercise[] = [
  { phrase: "Could you maybe look into this when you get a chance?", correct: "Passive", explanation: "Too many hedges ('could', 'maybe', 'when you get a chance') dilute your authority. Better: 'Please review this by Thursday.'" },
  { phrase: "I need this done by end of day. No exceptions.", correct: "Aggressive", explanation: "The 'no exceptions' adds unnecessary harshness. Better: 'I need this by EOD — let me know if you foresee any blockers.'" },
  { phrase: "I'd like us to have this wrapped up by Friday. Can we align on that?", correct: "Assertive", explanation: "Clear timeline + collaborative check-in. This is the executive sweet spot." },
  { phrase: "Sorry to bother you, but I was wondering if maybe we could possibly discuss the budget?", correct: "Passive", explanation: "Over-apologizing and excessive hedging undermines credibility. Better: 'I'd like to discuss the budget — do you have 15 minutes this week?'" },
  { phrase: "This is unacceptable and I won't tolerate it.", correct: "Aggressive", explanation: "Emotionally charged language escalates conflict. Better: 'This falls below our standards. Let's discuss how to course-correct.'" },
  { phrase: "I've reviewed the proposal and have three specific concerns I'd like to address.", correct: "Assertive", explanation: "Direct, prepared, and professional. Signals competence without aggression." },
  { phrase: "Whatever you think is best, I'll go along with it.", correct: "Passive", explanation: "Abdicating your perspective entirely. Even if you agree, say: 'I agree with your recommendation because...' to add value." },
  { phrase: "Let me be direct: the current approach isn't delivering results. Here's what I propose instead.", correct: "Assertive", explanation: "Frames directness explicitly, states the issue, offers a solution. Textbook assertive leadership." },
  { phrase: "You clearly didn't think this through.", correct: "Aggressive", explanation: "Personal attack on competence. Better: 'I think we may have missed some key considerations. Let's revisit the analysis.'" },
  { phrase: "I appreciate the effort here. I see two areas where we can strengthen this further.", correct: "Assertive", explanation: "Acknowledges work, then provides constructive direction. Motivating and clear." },
];

// ─── Daily Dose ───────────────────────────────────────────────────

export function getDailyDose() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  // Rotate through content
  const allPhrases = phraseCategories.flatMap((c) => c.phrases);
  const phraseIndex = dayOfYear % allPhrases.length;
  const vocabIndex = dayOfYear % vocabUpgrades.length;
  const frameworkIndex = dayOfYear % frameworks.length;

  return {
    phrase: allPhrases[phraseIndex],
    phraseCategory: phraseCategories.find((c) => c.phrases.includes(allPhrases[phraseIndex]))!.name,
    vocab: vocabUpgrades[vocabIndex],
    framework: frameworks[frameworkIndex],
    dayOfYear,
  };
}
