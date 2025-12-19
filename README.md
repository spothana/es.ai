
# embeddedsystems.ai

Professional Portfolio of a Senior Embedded Systems Expert.

## 🚀 GitHub Check-in
1. **Initialize Git**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Production-ready portfolio for embeddedsystems.ai"
   ```
2. **Create Repo on GitHub**: Go to [github.com/new](https://github.com/new) and create a repository.
3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/embeddedsystems.ai.git
   git branch -M main
   git push -u origin main
   ```

## 🌐 GCP Deployment (via Firebase Hosting)
*Firebase Hosting is the recommended GCP sub-service for static web apps with custom domains.*

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```
2. **Login and Init**:
   ```bash
   firebase login
   firebase init
   ```
   *   Select **Hosting**.
   *   Choose/Create a GCP Project.
   *   Set public directory to `dist` (if building) or current directory if using direct ESM.
3. **Deploy**:
   ```bash
   firebase deploy
   ```
4. **Custom Domain**:
   *   Go to Firebase Console -> Hosting -> **Add Custom Domain**.
   *   Enter `embeddedsystems.ai`.
   *   Update GoDaddy DNS settings with the provided TXT/A records.

## 🛠 Tech Stack
- **Frontend**: Vue.js 3 (ESM Browser Build)
- **Styling**: Tailwind CSS
- **AI Integration**: Google Gemini API (@google/genai)
- **Icons**: Heroicons (SVG)
- **Deployment**: GCP / Firebase
