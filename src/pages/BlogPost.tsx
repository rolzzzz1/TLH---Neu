import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { fetchPost } from '../lib/firebase';
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

export const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!id) {
        navigate('/404');
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const fetchedPost = await fetchPost(id);
        if (!fetchedPost) {
          navigate('/404');
          return;
        }
        setPost(fetchedPost as BlogPost);
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Failed to load the blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 sm:p-6 max-w-md w-full mx-4">
          <h2 className="text-lg sm:text-xl font-semibold text-red-800 dark:text-red-200 mb-2">
            Error Loading Post
          </h2>
          <p className="text-sm sm:text-base text-red-600 dark:text-red-300">
            {error || 'Post not found.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light text-sm font-medium rounded-full">
            {post.category}
          </span>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <ClockIcon className="w-4 h-4 mr-1" />
            {post.readTime}
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <div className="flex items-center justify-between">
          {post.author?.name && (
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3 flex items-center justify-center text-gray-600 dark:text-gray-300 text-lg font-medium">
                {post.author.name[0].toUpperCase()}
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {post.author.name}
                </div>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {post.createdAt.toLocaleDateString()}
                </time>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="aspect-w-16 aspect-h-9 mb-8 rounded-xl overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose dark:prose-invert max-w-none">
        {post.content}
      </div>
    </article>
  );
}; 