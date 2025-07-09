import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        About The Listening Home
      </h1>
      
      <div className="prose dark:prose-invert">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Welcome to The Listening Home, your premier destination for all things audio. We're passionate about helping both beginners and professionals navigate the exciting world of audio production, music creation, and sound engineering.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Our mission is to provide high-quality, accessible information about audio production, equipment reviews, and industry insights. We believe that everyone should have access to the knowledge and tools they need to create amazing audio content.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          What We Cover
        </h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
          <li>Audio Production Techniques</li>
          <li>Equipment Reviews and Recommendations</li>
          <li>Music Industry News and Insights</li>
          <li>Recording and Mixing Tips</li>
          <li>Sound Design and Engineering</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Have questions or suggestions? We'd love to hear from you! Reach out to us at contact@thelisteninghome.com
        </p>
      </div>
    </div>
  );
}; 