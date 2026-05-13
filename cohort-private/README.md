# Cohort-only files (not in git)

Use this folder for **local** spreadsheets or notes that must never be committed:

- Learner capability URLs or access tokens (if you add that feature later)
- Any export that includes the **teacher portal URL** or `ADMIN_SECRET`

## Teacher URL and secrets

- Set `ADMIN_SECRET` in Vercel project environment variables (and optionally in local `.env.local` for development). Do not paste production teacher links or secrets into issues, README files, or commits.

## Token sheet

1. Copy `student-access-tokens.example.csv` to `student-access-tokens.csv` in this same folder.
2. Fill in real values locally. `student-access-tokens.csv` is ignored by git.

If you need to share the sheet with co-instructors, use a channel your security policy allows (for example password manager or encrypted drive), not the repository.
