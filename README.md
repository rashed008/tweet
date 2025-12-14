


https://github.com/user-attachments/assets/5ca17303-64f1-44a7-a9bb-1952e6410179





Tweet 🐦


Branch Strategy
This repository follows a clean and professional Git workflow:
develop branch
* All active development happens here
* Contains the latest and most up-to-date code
* New features, fixes, and improvements are pushed to this branch
* Pull Requests are created from develop → main as per requirement
main branch
* Always kept stable and production-ready
* Code is merged into main only via Pull Requests
* Each release is reviewed before merging
✅ For the latest features and fixes, always check out the develop branch. 📌 A Pull Request from develop to main is currently maintained for release purposes.

🚀 Tech Stack
Frontend
* Expo (React Native)
* TypeScript
* Expo Router
* React Query
* React Native Safe Area Context
Backend & Services
* Clerk – User authentication & session management
* Cloudinary – Image upload and media storage
* Arcjet – Security, rate-limiting & bot protection
* Vercel (Free Tier) – Backend deployment

📦 Installation
Prerequisites
* Node.js
* npm
* Expo CLI (optional but recommended)
* Expo Go app (for testing on a real device)
  
1️⃣ Clone the repository

git clone https://github.com/rashed008/tweet

cd tweet/mobile/tweet

2️⃣ Switch to the latest development branch

git checkout develop

3️⃣ Install dependencies

npm install

4️⃣ Configure environment variables

Create a .env file in the project root:

EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key

EXPO_PUBLIC_API_BASE_URL=your_backend_url

EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name

5️⃣ Run the app

npx expo start
Then:
* Press i → iOS Simulator
* Press a → Android Emulator
* Or scan the QR code using Expo Go

⚠️ Performance Note
The application may feel slightly slow at times.
Reason: The backend is deployed on Vercel Free Tier, which introduces:
* Cold starts
* Limited server resources
* Higher response latency

✅ Production Recommendation
Deploying the backend on AWS (EC2 / ECS / Lambda) or a similar cloud provider would:
* Eliminate cold starts
* Improve API response times
* Provide better scalability and reliability

🔐 Authentication & Media
* Clerk handles secure authentication, sessions, and user management
* Cloudinary manages image uploads, compression, and delivery
* Arcjet protects APIs with rate-limiting and security rules

⚡ Possible Improvements
* Implement API response caching
* Enable React Query cache persistence
* Introduce image preloading & caching
* Move backend to AWS or a paid Vercel plan



