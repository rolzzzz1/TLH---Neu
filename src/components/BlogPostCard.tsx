import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  createdAt: string;
}

export default function BlogPostCard({ id, title, excerpt, imageUrl, createdAt }: BlogPostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
    >
      <Link to={`/post/${id}`} className="block">
        <div className="relative h-56 mb-4 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent z-10" />
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 z-20 text-white">
            <time className="text-sm opacity-80">{new Date(createdAt).toLocaleDateString()}</time>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2 text-secondary dark:text-white transition-colors group-hover:text-primary dark:group-hover:text-primary-light">
          {title}
        </h2>
        <p className="text-secondary/70 dark:text-gray-400 line-clamp-2">
          {excerpt}
        </p>
        <div className="mt-4 inline-flex items-center text-primary dark:text-primary-light group/link">
          <span className="mr-2">Read more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </motion.article>
  );
} 