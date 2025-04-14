🎻 Your Lie in April – Tribute Website
A SkillsVarz 1.0 2025 Submission

Deploy with Vercel
Demo Preview Live Demo: your-lie-in-april.vercel.app

✨ About the Project
An immersive, interactive tribute to the anime "Your Lie in April", blending elegant frontend design with emotional storytelling. Every component—from animations to color palettes—echoes the show’s themes of music, memory, and fleeting beauty.

Hackathon Focus:

🎨 Visual Storytelling: Scroll-triggered animations mirror key anime moments

🎶 Musical UI: Piano-key navigation, animated sheet music

💌 Emotional Impact: Letter-inspired contact form (with optional EmailJS integration)

🛠️ Tech Stack
Core Styling Animations Utilities
Next.js 14 Tailwind CSS Framer Motion EmailJS
TypeScript CSS Modules GSAP Vercel Analytics
🚀 Quick Setup

1. Clone & Install
   bash
   Copy
   git clone https://github.com/your-username/your-lie-in-april.git  
   cd your-lie-in-april && npm install
2. Configure (Optional)
   Create .env.local for EmailJS:

env
Copy
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id  
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key  
3. Run Dev Server
bash
Copy
npm run dev  
Open http://localhost:3000

📂 Project Structure
Copy
src/  
├── app/ # Next.js 14 app router  
│ ├── (sections)/ # Anime-themed page sections  
│ ├── api/ # Form submission endpoint  
├── components/ # Reusable UI (Piano, LetterForm, etc.)  
├── public/ # Optimized assets (music snippets, sprites)  
└── lib/ # Utilities & animations  
🌈 Contribution Guidelines
Fork the repository

Create a branch: git checkout -b feature/your-idea

Submit a PR with:

Screenshots of UI changes

Description of anime-inspired elements added

Inspired by Kōsei’s journey. Made with ❤️ for Hackwave 2025.
