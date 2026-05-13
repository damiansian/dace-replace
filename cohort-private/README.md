# Cohort-only files (not in git)

Use this folder for **local** spreadsheets or notes that must never be committed:

- Per-learner access tokens and personal progress URLs
- Any export that includes the **teacher portal URL** or `ADMIN_SECRET`

## Teacher URL and secrets

- Set `ADMIN_SECRET` in Vercel project environment variables (and optionally in local `.env.local` for development). Do not paste production teacher links or secrets into issues, README files, or commits.

## Per-student progress URLs

Each learner gets one private URL of the form:

```
https://YOUR-HOST/progress?t=<long-random-token>
```

Anyone with the link sees that learner's quiz scores and submitted assignments. Treat each URL like a password and share it directly with that one learner.

### Same-browser session (for instructors)

After a learner opens **any** course URL that includes `?t=<their-token>`, the site may set a short-lived **HttpOnly cookie** so they stay identified while navigating (site header, home, lessons, quizzes) without `t` on every link. They still need their tokenized URL again on a **new device** or if they clear cookies. This does **not** replace the private progress URL for support or bookmarks.

### Generating tokens

From `dace-site/`:

```bash
# Provide names inline
POSTGRES_URL="..." PROGRESS_BASE_URL="https://your-host" \
  npm run students:generate -- --names "Alice Example,Bob Example"

# Or read names from a file (one per line)
POSTGRES_URL="..." PROGRESS_BASE_URL="https://your-host" \
  npm run students:generate -- --file ./roster.txt > ../cohort-private/student-access-tokens.csv
```

The script prints CSV rows (`display_name,access_token,progress_url`). Save them to `cohort-private/student-access-tokens.csv` (gitignored).

If you re-run the script with a name that already exists, it reprints the existing token rather than creating a duplicate row.

### Distributing URLs

Share each `progress_url` with that learner only (DM, email, your LMS). Do not paste the full sheet anywhere classmates can see other rows.

### Token sheet template

1. Copy `student-access-tokens.example.csv` to `student-access-tokens.csv` in this same folder.
2. Replace the example row with the script output.

If you need to share the sheet with co-instructors, use a channel your security policy allows (for example password manager or encrypted drive), not the repository.

### Optional: backfill historical rows

Quiz attempts and assignment submissions made before student tokens existed have `student_id = NULL` and will not appear on a learner's progress page. If a roster's display names match the historical free-text names exactly (case-insensitive), you can attach those rows by running:

```bash
# Dry run: prints unmatched rows and the counts that would be updated
POSTGRES_URL="..." npm run students:backfill

# Apply
POSTGRES_URL="..." npm run students:backfill -- --commit
```

Names with zero or multiple matches are skipped and printed for manual review.

