import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Welcome to The Listening Home',
    excerpt: 'A place where music lovers come together to share their experiences and discoveries.',
    date: '2023-04-20',
  },
  {
    id: 2,
    title: 'The Art of Active Listening',
    excerpt: 'Learn how to truly immerse yourself in music and discover new layers of sound.',
    date: '2023-04-21',
  },
];

export const Home = () => {
  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 dark:text-white"
      >
        Latest Posts
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                <Link to={`/post/${post.id}`} className="hover:text-secondary">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString()}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}; 