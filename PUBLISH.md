# Publish the repository

The intended remote is:

```text
https://github.com/zhanziyang/visual-asset-skill
```

## From the prepared Git repository

The full repository archive already contains the initial commit and an `origin` remote. Create the private GitHub repository, then push:

```bash
gh repo create zhanziyang/visual-asset-skill \
  --private \
  --description "Agent Skill that gives coding agents asset awareness for App and SaaS web design."

git push -u origin main
```

## From the source-only ZIP

```bash
git init -b main
git add .
git commit -m "feat: scaffold asset-aware web design skill"

gh repo create zhanziyang/visual-asset-skill \
  --private \
  --description "Agent Skill that gives coding agents asset awareness for App and SaaS web design." \
  --source . \
  --remote origin \
  --push
```

## Make it public later

```bash
gh repo edit zhanziyang/visual-asset-skill --visibility public
```

No open-source license has been selected. Choose a license before making the repository public.
