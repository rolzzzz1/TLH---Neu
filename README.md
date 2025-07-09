# The Listening Home

A modern blog platform for audio enthusiasts, built with React, TypeScript, Firebase, and TailwindCSS.

## Features

- Modern, responsive design with dark mode support
- Blog post creation and management
- Featured posts section
- Category-based organization
- Rich text content with Markdown support
- Image handling and optimization
- Author profiles
- Firebase integration for real-time updates

## Tech Stack

- React 18
- TypeScript
- Vite
- Firebase
- TailwindCSS
- React Router
- Framer Motion
- React Hook Form

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/the-listening-home.git
   cd the-listening-home
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a Firebase project and get your configuration:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database
   - Go to Project Settings > General
   - Scroll down to "Your apps" and click the web icon (</>)
   - Register your app and copy the configuration

4. Create a `.env` file in the root directory with your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
