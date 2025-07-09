import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        About The Listening Home
      </h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Welcome to The Listening Home, a space dedicated to exploring the world of music, sound, and audio technology.
          Our mission is to create a community where enthusiasts, professionals, and curious minds can come together
          to share knowledge, experiences, and discoveries in the realm of audio.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We believe that great sound has the power to transform experiences and bring people together.
          Whether you're a music producer, an audiophile, or someone who simply appreciates good sound,
          The Listening Home is your destination for in-depth articles, reviews, and discussions about
          all things audio.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">
          What We Cover
        </h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
          <li>Audio Equipment Reviews</li>
          <li>Music Production Tips</li>
          <li>Sound Engineering Insights</li>
          <li>Industry News and Trends</li>
          <li>Artist Interviews and Features</li>
          <li>Home Audio Setup Guides</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">
          Join Our Community
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The Listening Home is more than just a blog—it's a community. We encourage our readers to
          engage with our content, share their experiences, and connect with fellow audio enthusiasts.
          Follow us on social media and subscribe to our newsletter to stay updated with the latest
          posts and discussions.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Contact Us
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Have questions, suggestions, or want to contribute? We'd love to hear from you!
            Reach out to us at <a href="mailto:contact@thelisteninghome.com" className="text-primary hover:text-primary-dark dark:hover:text-primary-light">
              contact@thelisteninghome.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}; 