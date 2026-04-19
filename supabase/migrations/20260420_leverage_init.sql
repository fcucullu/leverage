CREATE TABLE IF NOT EXISTS leverage_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);
ALTER TABLE leverage_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users insert own sessions" ON leverage_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_leverage_sessions_user_date ON leverage_sessions(user_id, created_at);
