import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export const BlogPost: React.FC = () => {
  // Removed unused id parameter
  useParams();
  
  // This would normally come from your Firebase database
  const post = {
    title: 'Getting Started with Audio Production',
    content: `
# Getting Started with Audio Production

Audio production is an exciting field that combines creativity with technical expertise. Whether you're interested in music production, podcasting, or sound design, understanding the basics is crucial.

## Essential Equipment

1. **Digital Audio Workstation (DAW)**
   - Industry standard software for recording and editing
   - Popular options include Pro Tools, Logic Pro, and Ableton Live

2. **Audio Interface**
   - Converts analog signals to digital
   - Provides high-quality inputs for microphones and instruments

3. **Microphones**
   - Different types for different purposes
   - Consider condenser mics for studio work
   - Dynamic mics for live performance

## Basic Concepts

Understanding these fundamental concepts will help you get started:

- **Sample Rate**: How many times per second audio is captured
- **Bit Depth**: The resolution of each sample
- **Latency**: The delay between input and output
- **Gain Staging**: Proper management of signal levels

## Next Steps

Once you have your basic setup, start with simple recording projects to learn your tools. Practice is key to improving your skills.
    `,
    author: 'John Doe',
    date: '2024-02-20',
    category: 'Audio Production'
  };

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <div className="text-gray-600 dark:text-gray-400">
          By {post.author} • {post.date} • {post.category}
        </div>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}; 