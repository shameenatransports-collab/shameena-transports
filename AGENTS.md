# Architecture rules
- Keep education AI prompts and model calls in the education-pathways Cloud function; the browser only submits validated preferences and displays streamed text.
- Do not persist student profiles or AI answers; only service availability state is stored to prevent repeated calls after access or credit failures.
- Education AI is an intentional public guest endpoint; enforce bounded inputs and explicit adult consent without introducing student accounts.