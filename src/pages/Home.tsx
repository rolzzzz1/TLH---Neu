import React, { useEffect, useState } from 'react';
import { BlogPostCard } from '../components/BlogPostCard';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { fetchPosts } from '../lib/firebase';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClockIcon } from '@heroicons/react/24/outline';

interface Author {
  name: string;
  avatarUrl?: string;
}

interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  imageUrl: string;
  category: string;
  readTime: string;
  author?: Author;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export const Home: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts as BlogPost[]);
      } catch (err) {
        console.error('Error loading posts:', err);
        if (err instanceof Error && err.message.includes('Firebase')) {
          setError('Unable to connect to Firebase. Please check your configuration.');
        } else {
          setError('Failed to fetch blog posts. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 sm:p-6 max-w-md w-full mx-4">
          <h2 className="text-lg sm:text-xl font-semibold text-red-800 dark:text-red-200 mb-2">
            Connection Error
          </h2>
          <p className="text-sm sm:text-base text-red-600 dark:text-red-300 mb-4">{error}</p>
          <p className="text-xs sm:text-sm text-red-500 dark:text-red-400">
            Please make sure your Firebase configuration is correct in the .env file.
          </p>
        </div>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 sm:p-6 max-w-md w-full mx-4">
          <h2 className="text-lg sm:text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            No Posts Found
          </h2>
          <p className="text-sm sm:text-base text-yellow-600 dark:text-yellow-300">
            There are no blog posts to display yet.
          </p>
        </div>
      </div>
    );
  }

  const [featuredPost, ...otherPosts] = posts;

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Featured Post */}
      <Link
        to={`/post/${featuredPost.id}`}
        className="block group relative h-[60vh] sm:h-[calc(100vh-12rem)] max-h-[500px] rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8"
      >
        <div className="absolute inset-0">
          <img
            src={featuredPost.imageUrl}
            alt={featuredPost.title}
            className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
          <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs sm:text-sm font-medium rounded-full mb-3">
            {featuredPost.category}
          </span>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 line-clamp-2">
            {featuredPost.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm opacity-90">
            {featuredPost.author?.name && (
              <div className="flex items-center">
                <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-white/10 mr-2 flex items-center justify-center text-white">
                  {featuredPost.author.name[0].toUpperCase()}
                </div>
                <span className="text-xs sm:text-sm">{featuredPost.author.name}</span>
              </div>
            )}
            <time className="text-xs sm:text-sm">{featuredPost.createdAt.toLocaleDateString()}</time>
            <div className="flex items-center text-xs sm:text-sm">
              <ClockIcon className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
              {featuredPost.readTime}
            </div>
          </div>
        </div>
      </Link>

      {/* Other Posts */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
      >
        {otherPosts.map(post => (
          <motion.div key={post.id} variants={itemVariants}>
            <BlogPostCard {...post} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}; 