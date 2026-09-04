# Publish the repository

The intended remote is:

```text
https://github.com/zhanziyang/visual-asset-skill
```

## From the prepared Git repository

The full repository archive already contains the initial commit and an `origin` remote. Push the prepared repository, then make the existing GitHub repository public:

```bash
git push -u origin main
gh repo edit zhanziyang/visual-asset-skill --visibility public
```

## From the source-only ZIP

```bash
git init -b main
git add .
git commit -m "feat: scaffold asset-aware web design skill"

gh repo create zhanziyang/visual-asset-skill \
  --public \
  --description "Agent Skill that gives coding agents asset awareness for App and SaaS web design." \
  --source . \
  --remote origin \
  --push
```

The repository is released under the MIT License in `LICENSE`.
