CREATE TABLE public.education_ai_availability (
 feature text PRIMARY KEY,
 status_code integer NOT NULL,
 safe_message text NOT NULL,
 paused_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.education_ai_availability TO service_role;
REVOKE ALL ON public.education_ai_availability FROM anon, authenticated;
ALTER TABLE public.education_ai_availability ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.education_ai_availability IS 'Server-only persistent pause after terminal AI access or credit errors; contains no student information. Owner clears after restoring access.';