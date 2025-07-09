import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BlogPostCard } from '../components/BlogPostCard';

const posts = [
  {
    id: "1",
    title: 'Welcome to The Listening Home',
    excerpt: 'A place where music lovers come together to share their experiences and discoveries.',
    date: '2023-04-20',
    imageUrl: '/images/featured/welcome.jpg'
  },
  {
    id: "2",
    title: 'The Art of Active Listening',
    excerpt: 'Learn how to truly immerse yourself in music and discover new layers of sound.',
    date: '2023-04-21',
    imageUrl: '/images/featured/active-listening.jpg'
  },
  {
    id: "3",
    title: 'Understanding Music Production',
    excerpt: 'A deep dive into the world of music production and recording techniques.',
    date: '2023-04-22',
    imageUrl: '/images/featured/music-production.jpg'
  }
];

export const Home = () => {
  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
      >
        Latest Posts
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}; 