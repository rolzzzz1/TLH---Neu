import { motion } from 'framer-motion';

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        About The Listening Home
      </h1>
      <div className="prose dark:prose-invert">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Welcome to The Listening Home, a community-driven blog dedicated to the art and
          experience of music appreciation. Our mission is to create a space where music
          enthusiasts can share their insights, discoveries, and the profound impact that
          music has on their lives.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Whether you're a casual listener, an audiophile, or a musician, we believe that
          everyone's perspective on music is valuable and worth sharing. Our platform
          encourages thoughtful discussion, deep analysis, and the celebration of all
          genres and styles of music.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white my-6">
          Our Values
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
          <li>Open-mindedness and respect for all musical preferences</li>
          <li>Thoughtful and constructive discussion</li>
          <li>Supporting and promoting musical diversity</li>
          <li>Sharing knowledge and experiences</li>
        </ul>
      </div>
    </motion.div>
  );
}; 