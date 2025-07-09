import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon } from '@heroicons/react/24/outline';

interface Author {
  name: string;
  avatarUrl?: string;
}

interface BlogPostCardProps {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  imageUrl: string;
  category: string;
  readTime: string;
  author?: Author;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  id,
  title,
  imageUrl,
  category,
  createdAt,
  readTime,
  author,
}) => {
  return (
    <Link
      to={`/post/${id}`}
      className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light text-xs font-medium rounded-full">
            {category}
          </span>
          <time className="text-xs text-gray-500 dark:text-gray-400">
            {createdAt.toLocaleDateString()}
          </time>
        </div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
          {title}
        </h2>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          {author?.name && (
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 mr-2 flex items-center justify-center text-gray-600 dark:text-gray-300">
                {author.name[0].toUpperCase()}
              </div>
              <span>{author.name}</span>
            </div>
          )}
          <div className="flex items-center">
            <ClockIcon className="w-4 h-4 mr-1" />
            {readTime}
          </div>
        </div>
      </div>
    </Link>
  );
}; 