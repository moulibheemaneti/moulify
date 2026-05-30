# Branching Strategy

This project follows a **simplified Gitflow** strategy.

## Branch Structure

```
main          → production-ready code only. Never commit directly.
develop       → integration branch. All features merge here first.
feature/*     → new features.        e.g. feature/user-authentication
fix/*         → bug fixes.           e.g. fix/login-redirect
chore/*       → tooling/config.      e.g. chore/update-dependencies
docs/*        → documentation only.  e.g. docs/update-readme
refactor/*    → code restructuring.  e.g. refactor/auth-composable
```

## Flow

```
feature/my-feature
       │
       └──► develop ──► main
```

1. Branch off `develop` — never off `main`
2. Work on your branch
3. Open a PR → `develop`
4. Once `develop` is stable and tested → merge to `main` for release

## Rules

- `main` and `develop` are protected — no direct pushes
- Branch names must follow the `type/short-description` pattern
- Delete branches after merging
- Keep branches short-lived — the longer a branch lives, the harder the merge
