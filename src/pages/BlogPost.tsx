import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LoadingSpinner } from '../components/LoadingSpinner';

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  imageUrl: string;
}

type Posts = {
  [key: string]: Post;
};

const mockPosts: Posts = {
  "1": {
    id: "1",
    title: 'Welcome to The Listening Home',
    content: `
      Music has always been a powerful force in human culture, bringing people together
      and creating shared experiences that transcend language and borders. At The
      Listening Home, we believe in the transformative power of music and its ability
      to connect, heal, and inspire.
      
      Our journey begins here, with a commitment to exploring the vast landscape of
      musical expression and sharing our discoveries with fellow enthusiasts. Whether
      you're here to dive deep into music analysis, share your favorite albums, or
      simply connect with other music lovers, we welcome you to our community.
      
      Join us as we embark on this musical adventure, where every note tells a story
      and every rhythm carries a message. Together, we'll explore the boundless world
      of sound and create a space where music truly feels like home.
    `,
    date: '2023-04-20',
    author: 'The Listening Home Team',
    imageUrl: '/images/featured/welcome.jpg'
  },
  "2": {
    id: "2",
    title: 'The Art of Active Listening',
    content: `
      In today's fast-paced world, we often treat music as background noise, letting it
      wash over us without truly engaging with its complexities and nuances. Active
      listening is an art that can transform your musical experience and deepen your
      appreciation for the craft.
      
      Active listening involves giving your full attention to the music, noticing the
      interplay between instruments, the subtle changes in dynamics, and the way
      different elements come together to create a complete sonic picture. It's about
      being present with the music and allowing yourself to be fully immersed in the
      experience.
      
      Here are some tips to enhance your active listening practice:
      
      1. Find a quiet space where you won't be disturbed
      2. Use quality headphones or speakers
      3. Close your eyes to minimize visual distractions
      4. Focus on one instrument or element at a time
      5. Listen to the same piece multiple times, focusing on different aspects
      
      Through active listening, you'll discover new layers of meaning in familiar songs
      and develop a deeper connection with the music you love.
    `,
    date: '2023-04-21',
    author: 'Sarah Chen',
    imageUrl: '/images/featured/active-listening.jpg'
  },
  "3": {
    id: "3",
    title: 'Understanding Music Production',
    content: `
      Music production is both an art and a science, combining creative vision with
      technical expertise. Whether you're a musician, producer, or simply curious about
      how your favorite songs are made, understanding the basics of music production
      can enhance your appreciation of the craft.
      
      The production process typically involves several key stages:
      
      1. Pre-production: Planning and arranging the song
      2. Recording: Capturing the performances
      3. Editing: Cleaning up and organizing the recordings
      4. Mixing: Balancing and enhancing the different elements
      5. Mastering: Finalizing the sound for distribution
      
      Each stage requires careful attention to detail and a deep understanding of both
      musical principles and technical tools. Modern production techniques have
      revolutionized what's possible in a recording studio, but the fundamental goal
      remains the same: to capture and enhance the emotional impact of the music.
    `,
    date: '2023-04-22',
    author: 'Marcus Rodriguez',
    imageUrl: '/images/featured/music-production.jpg'
  }
};

export const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? mockPosts[id] : null;

  if (!post) {
    return <LoadingSpinner />;
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto"
    >
      {post.imageUrl && (
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}
      <motion.h1
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
      >
        {post.title}
      </motion.h1>
      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-8">
        <span>{new Date(post.date).toLocaleDateString()}</span>
        <span className="mx-2">•</span>
        <span>{post.author}</span>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        {post.content.split('\n').map((paragraph: string, index: number) => (
          <p key={index} className="text-gray-700 dark:text-gray-300 mb-4">
            {paragraph.trim()}
          </p>
        ))}
      </div>
    </motion.article>
  );
}; 