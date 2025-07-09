import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const featuredPosts = [
    {
      id: '1',
      title: 'Getting Started with Audio Production',
      excerpt: 'Learn the basics of audio production and start creating your own music...',
      date: '2024-02-20',
      category: 'Audio Production'
    },
    {
      id: '2',
      title: 'Best Headphones for Music Production',
      excerpt: 'A comprehensive guide to choosing the right headphones for your studio...',
      date: '2024-02-18',
      category: 'Equipment'
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to The Listening Home
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Your source for audio production tips, equipment reviews, and music industry insights.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Posts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredPosts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {post.category} • {post.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}; 