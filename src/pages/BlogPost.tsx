import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const BlogPost = () => {
  const { id } = useParams();
  
  // Mock post data - in a real app, this would come from an API
  const post = {
    id: 1,
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
    `,
    date: '2023-04-20',
    author: 'The Listening Home Team',
  };

  if (!post) {
    return <LoadingSpinner />;
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto"
    >
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
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="text-gray-700 dark:text-gray-300 mb-4">
            {paragraph.trim()}
          </p>
        ))}
      </div>
    </motion.article>
  );
}; 