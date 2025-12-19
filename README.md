
# embeddedsystems.ai

Professional Portfolio of a Embedded Systems Expert.

## 🚀 GitHub Check-in
1. **Initialize & Commit**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial production-ready portfolio"
   ```
2. **Push to Remote**:
   * Create a repo at `github.com/new`.
   * Follow the "push an existing repository" commands provided by GitHub.

## 🌐 GCP / Firebase Deployment
1. **Finish the CLI**: 
   * **Project ID**: `embeddedsystems-ai-prod`
   * **Public Directory**: `.`
   * **Single Page App**: `Yes`
   * **GitHub Action**: `Yes` (This will automate your deployments every time you push to GitHub).
2. **Deploy**:
   ```bash
   firebase deploy
   ```
3. **Domain Mapping**: 
   * In Firebase Console, go to **Hosting > Add Custom Domain**.
   * Enter `embeddedsystems.ai` and copy the A Records.
   * Log into **GoDaddy**, go to DNS Management for your domain, and update the A records.

## 🛠 Tech Stack
- **Framework**: Vue 3 (Reactive Composition API)
- **Engine**: Google Gemini AI (@google/genai)
- **Styles**: Tailwind CSS
- **Hosting**: GCP / Firebase Hosting
