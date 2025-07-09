# The Listening Home

A modern blog platform for music enthusiasts, built with React, TypeScript, and Firebase.

## Features

- 🎵 Share your musical insights and discoveries
- 🌓 Dark mode support
- 📱 Responsive design
- 🖼️ Featured images for blog posts
- ✍️ Rich text editor for blog posts
- 🔥 Firebase integration for data storage

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Firebase (Firestore & Storage)
- Framer Motion
- React Router

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

3. Create a Firebase project and enable Firestore and Storage.

4. Create a `.env` file in the root directory with your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── firebase.ts    # Firebase configuration
└── App.tsx        # Main application component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 