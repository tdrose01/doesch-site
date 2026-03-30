#!/bin/bash
# Doésh Fallanti - DevOps Setup Script
# Run this on the host machine to complete the deployment setup

set -e

echo "🚀 Doésh Fallanti DevOps Setup"
echo "================================"

# Check for required tools
echo ""
echo "1. Checking dependencies..."
command -v gh >/dev/null 2>&1 || { echo "❌ GitHub CLI (gh) required. Install: brew install gh"; exit 1; }
command -v wrangler >/dev/null 2>&1 || { echo "❌ Wrangler required. Install: npm install -g wrangler"; exit 1; }

# GitHub auth
echo ""
echo "2. GitHub Authentication..."
gh auth status || gh auth login

# Create GitHub repo
echo ""
echo "3. Creating GitHub repository..."
cd "$(dirname "$0")"
REPO_URL=$(gh repo create doesch-site --public --source=. --remote=origin --push 2>/dev/null || git remote get-url origin 2>/dev/null || echo "")
if [ -z "$REPO_URL" ]; then
    echo "Repository may already exist or needs manual setup"
    git remote -v
else
    echo "✅ Repository created: $REPO_URL"
fi

# Cloudflare Pages setup
echo ""
echo "4. Cloudflare Pages Setup..."
echo "   You'll need:"
echo "   - Cloudflare API Token (from: https://dash.cloudflare.com/profile/api-tokens)"
echo "   - Cloudflare Account ID (from: https://dash.cloudflare.com/)"
echo ""
read -p "Do you have your Cloudflare API Token ready? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Adding secrets to GitHub repo..."
    read -s -p "Enter Cloudflare API Token: " CF_TOKEN
    echo ""
    read -p "Enter Cloudflare Account ID: " CF_ACCOUNT_ID

    gh secret set CLOUDFLARE_API_TOKEN --body "$CF_TOKEN"
    gh secret set CLOUDFLARE_ACCOUNT_ID --body "$CF_ACCOUNT_ID"

    echo "✅ Secrets added to GitHub"

    # Trigger deployment
    echo ""
    echo "5. Triggering initial deployment..."
    git commit --allow-empty -m "Trigger initial deploy"
    git push origin main
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Check GitHub Actions: https://github.com/tdrose01/doesch-site/actions"
echo "2. View deployed site: https://doesch-site.pages.dev"
echo "3. Add custom domain in Cloudflare Pages dashboard (optional)"
