
# embeddedsystems.ai

Professional Portfolio of a Senior Embedded Systems Expert.

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

### Fixing the "Service account does not exist" Error
If you see a `400 Error` regarding a service account during `firebase init`:
1. **Wait 60 seconds** for Google IAM to propagate.
2. Run `firebase init hosting` again.
3. If it still fails, select **"No"** for "Set up automatic builds and deploys with GitHub" to finish the setup. You can add the GitHub Action later.

### Deployment Steps
1. **Deploy to Production**:
   ```bash
   firebase deploy
   ```
2. **Domain Mapping**: 
   * Go to the [Firebase Console](https://console.firebase.google.com/).
   * Select your project -> **Hosting** -> **Add Custom Domain**.
   * Enter `embeddedsystems.ai`.
   * Copy the **A Records** (IP addresses).
   * Log into **GoDaddy**, go to **DNS Management**, and replace the existing '@' A records with the ones from Firebase.

## 🛠 Tech Stack
- **Framework**: Vue 3 (Reactive Composition API)
- **Engine**: Google Gemini AI (@google/genai)
- **Styles**: Tailwind CSS
- **Hosting**: GCP / Firebase Hosting
