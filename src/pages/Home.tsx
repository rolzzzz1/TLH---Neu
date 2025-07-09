import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogPostCard from '../components/BlogPostCard';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query, FirestoreError } from 'firebase/firestore';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  createdAt: string;
}

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        const postsRef = collection(db, 'posts');
        const q = query(postsRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const fetchedPosts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as BlogPost[];
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        if (error instanceof FirestoreError) {
          switch (error.code) {
            case 'permission-denied':
              setError('Access to posts is currently restricted. Please try again later.');
              break;
            case 'unavailable':
              setError('The service is currently unavailable. Please check your internet connection and try again.');
              break;
            default:
              setError('An error occurred while fetching posts. Please try again later.');
          }
        } else {
          setError('An unexpected error occurred. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-56 bg-gray-200 dark:bg-gray-800 rounded-2xl mb-4" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-12">
        <div className="text-center">
          <div className="mb-4 text-red-600 dark:text-red-400">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-xl font-semibold mb-2">Error Loading Posts</h2>
            <p className="text-gray-600 dark:text-gray-400">{error}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary dark:text-white">
          Welcome to The Listening Home
        </h1>
        <p className="text-secondary/70 dark:text-gray-400 max-w-2xl mx-auto">
          Discover the latest insights, stories, and discussions about music, sound, and the art of listening.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
} 