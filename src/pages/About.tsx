import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="container mx-auto py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-secondary dark:text-white">
          About The Listening Home
        </h1>
        <div className="prose prose-lg dark:prose-invert">
          <p>
            Welcome to The Listening Home, a digital sanctuary for music enthusiasts, audiophiles, and
            anyone who believes in the transformative power of sound. Our platform is dedicated to
            exploring the rich tapestry of musical expression and fostering meaningful conversations
            about the art of listening.
          </p>

          <h2>Our Mission</h2>
          <p>
            At The Listening Home, we believe that music is more than just entertainment—it's a
            universal language that connects people across cultures, generations, and experiences. Our
            mission is to create a space where passionate listeners can share their insights,
            discoveries, and the stories behind their favorite sounds.
          </p>

          <h2>What We Offer</h2>
          <ul>
            <li>
              <strong>In-depth Analysis:</strong> Explore detailed breakdowns of albums, songs, and
              musical techniques.
            </li>
            <li>
              <strong>Community Insights:</strong> Share your perspectives and learn from fellow music
              enthusiasts.
            </li>
            <li>
              <strong>Listening Guides:</strong> Discover new ways to appreciate and understand music
              through active listening.
            </li>
            <li>
              <strong>Artist Spotlights:</strong> Learn about the creators behind the music you love.
            </li>
          </ul>

          <h2>Join Our Community</h2>
          <p>
            Whether you're a seasoned audiophile or just beginning your musical journey, The Listening
            Home is your space to explore, learn, and connect. We invite you to contribute your voice
            to our growing community of passionate music lovers.
          </p>

          <h2>Contact Us</h2>
          <p>
            Have questions, suggestions, or just want to say hello? We'd love to hear from you! Reach
            out to us at{' '}
            <a href="mailto:hello@thelisteninghome.com" className="text-primary dark:text-primary-light">
              hello@thelisteninghome.com
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
} 