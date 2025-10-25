# Emotion Recognition Helper for Kids 🎭

A warm, interactive web application designed to help children aged 8-12 identify, understand, and manage their emotions through a guided, multi-step process powered by AI.

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8)
![DeepSeek](https://img.shields.io/badge/AI-DeepSeek%20V3-orange)

## 🌟 Features

### Multi-Step Emotion Journey
1. **Primary Emotion Selection** - Choose from 8 core emotions with emoji representations
2. **Intensity Slider** - Rate feelings on a 1-5 scale with dynamic visual feedback
3. **Secondary Emotion Refinement** - Dive deeper with 40+ specific emotional states
4. **Context Identification** - Pinpoint where the feeling started (8 categories)
5. **AI-Powered Chat** - Get personalized, age-appropriate coping strategies

### Key Capabilities
- 🌍 **Multi-language Support** - English, Bulgarian, and Russian
- 🤖 **AI Conversation** - DeepSeek V3 integration for empathetic, helpful responses
- 🎨 **Kid-Friendly Design** - Colorful, large, rounded interface elements
- 🔒 **Safety First** - Crisis detection with appropriate resources
- 📋 **Parent Sharing** - Export conversation summaries
- 🧭 **Smart Navigation** - Automatic flow protection and redirects

## 🎯 Design Philosophy

### Child-Centered Approach
- **Age-appropriate language** (8-12 years old)
- **Validation-first** - All feelings are okay
- **Concrete suggestions** - Actionable, specific coping strategies
- **No therapy jargon** - Simple, clear communication
- **Safety guardrails** - Crisis content detection and resources

### Visual Design
- **Color Palette**: 
  - Orange (#EF7722) - Active states, warmth
  - Yellow (#FAA533) - Highlights, positivity
  - Blue (#0BA6DF) - Progress, calm
  - Gray (#EBEBEB) - Background, neutrality
- **Rounded everything** - Soft, friendly interface
- **Big, clickable elements** - Easy for children to use
- **Gradients and shadows** - Modern, engaging visuals

## 🚀 Installation Guide

### Prerequisites
- **Node.js** 18.17 or later
- **npm** or **yarn** package manager
- **DeepSeek API Key** ([Get one here](https://platform.deepseek.com/))

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/emassis.git
cd emassis
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3: Set Up Environment Variables
Create a `.env.local` file in the root directory:

```bash
DEEPSEEK_API_KEY=your_deepseek_api_key_here
```

Replace `your_deepseek_api_key_here` with your actual DeepSeek API key.

### Step 4: Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 5: Build for Production
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
emassis/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # DeepSeek API integration
│   ├── components/
│   │   └── LanguageSwitcher.tsx  # Language selection UI
│   ├── context/
│   │   ├── EmotionContext.tsx    # Emotion data state management
│   │   └── LanguageContext.tsx   # i18n state management
│   ├── i18n/
│   │   └── translations.ts       # EN/BG/RU translations
│   ├── page.tsx                  # Step 1: Emotion picker
│   ├── intensity/
│   │   └── page.tsx              # Step 2: Intensity slider
│   ├── secondary-emotion/
│   │   └── page.tsx              # Step 3: Secondary emotions
│   ├── context/
│   │   └── page.tsx              # Step 4: Context selection
│   ├── chat/
│   │   └── page.tsx              # Step 5: AI chat
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── .env.local                    # Environment variables (not tracked)
├── .gitignore
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎮 How It Works

### User Flow
```
Step 1: Select Primary Emotion
    ↓
Step 2: Rate Intensity (1-5)
    ↓
Step 3: Choose Secondary Emotion (or "Not sure")
    ↓
Step 4: Identify Context (where it started)
    ↓
Step 5: Chat with AI Helper
    ↓
Share Summary with Parent (optional)
```

### AI System Prompt
The AI is configured to:
- Validate feelings first
- Provide 2-3 concrete coping strategies
- Ask ONE question at a time
- Use age-appropriate language
- Detect crisis content and provide resources
- Respond in the child's selected language

### Data Flow
1. **Emotion Context** stores: primary emotion, intensity, secondary emotion, context
2. **Language Context** stores: current language (persisted to localStorage)
3. Data flows through each step sequentially
4. Final conversation includes all collected context
5. No personal data is stored permanently

## 🛠️ Technologies Used

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI**: [DeepSeek V3](https://www.deepseek.com/) Chat API
- **State Management**: React Context API
- **Routing**: Next.js App Router with client-side navigation

## 🌍 Internationalization (i18n)

Supports three languages with complete translations:
- 🇬🇧 **English** - Default
- 🇧🇬 **Bulgarian**
- 🇷🇺 **Russian**

Language selection is persistent across sessions via localStorage.

## 🔐 Privacy & Safety

### Safety Features
- **Crisis Detection**: Scans for keywords related to self-harm, abuse, violence
- **Crisis Resources**: Provides appropriate hotline numbers by region
  - US: 988
  - Bulgaria: 116 123
  - Russia: 8-800-2000-122
- **No Data Storage**: Conversations are not saved or logged
- **Parent Sharing**: Optional export of conversation summary

### Data Handling
- Emotion data stored only in React Context (session-only)
- Language preference in localStorage (no personal data)
- API calls include only emotion context, no identifying information

## 🎨 Customization

### Changing Colors
Edit the color constants in your pages or update Tailwind config:
```typescript
// Primary colors
const colors = {
  orange: '#EF7722',  // Active states
  yellow: '#FAA533',  // Highlights
  blue: '#0BA6DF',    // Progress
  gray: '#EBEBEB',    // Background
}
```

### Adding Languages
1. Add language to `translations.ts`
2. Update `Language` type
3. Add flag to `LanguageSwitcher.tsx`

### Modifying AI Behavior
Edit the system prompt in `app/chat/page.tsx` → `buildSystemPrompt()` function.

## 📝 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Environment Variables
Required in `.env.local`:
```
DEEPSEEK_API_KEY=sk-xxxxx...
```

## 🤝 Contributing

This is a hackathon project! Contributions, issues, and feature requests are welcome.

### Areas for Improvement
- [ ] Add more languages
- [ ] Implement chat history persistence
- [ ] Add parent dashboard
- [ ] Create emotion tracking over time
- [ ] Add more coping strategy resources
- [ ] Implement accessibility improvements (ARIA labels, keyboard navigation)

## 📄 License

This project is created for Hack The Vibe Hackathon.

## 🙏 Acknowledgments

- **DeepSeek** for the AI API
- Inspired by emotion regulation tools used in child psychology
- Designed with feedback from educators and parents

## 📞 Support

For questions or issues:
- Create an issue in this repository
- Contact: [your-email@example.com]

---

**Made with ❤️ for kids learning to understand their emotions**
