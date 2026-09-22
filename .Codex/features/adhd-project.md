# ADHD project on the portfolio site

## Scope

The ADHD case study links to `projects/adhd/`, a public project overview. The project includes a one-question-at-a-time screening prototype, dedicated result view with full indicator tables and a six-domain radar, product plan, community roadmap and three diagrams.

## Public assets

- All project links are relative and work below the GitHub Pages project path.
- Local filesystem links, private vault/session notes and working Word documents are not published.
- Screening responses remain in the browser; explicit Save writes to localStorage on the portfolio origin. No backend or automatic response submission is added.
- Screening scores are custom directional scores, not diagnostic probabilities.
- Existing portfolio pages remain unchanged except the ADHD-only bilingual project CTA.
- The public project overview and screening page load `projects/adhd/assets/design-tokens.css`, copied from the local project's generated palette CSS. The screening page uses light mode; the overview supports system/light/dark. Future color edits must regenerate the local CSS and update this public copy together.

## Verification

- Validate JavaScript syntax and resolve local href/src targets before push.
- Check secrets, local paths, and private-source references before staging.
- Check GitHub Pages build and public HTTP routes after push.
