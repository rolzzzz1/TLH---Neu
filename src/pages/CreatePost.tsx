import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface FormData {
  title: string;
  content: string;
  excerpt: string;
  imageUrl: string;
}

export const CreatePost = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // In a real app, this would send the data to an API
    console.log('Form submitted:', data);
    // Mock successful submission
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Create New Post
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Title is required' })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="excerpt"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Excerpt
          </label>
          <textarea
            id="excerpt"
            rows={3}
            {...register('excerpt', { required: 'Excerpt is required' })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
          {errors.excerpt && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.excerpt.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Featured Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            {...register('imageUrl')}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            rows={10}
            {...register('content', { required: 'Content is required' })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
          {errors.content && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.content.message}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-6 bg-secondary hover:bg-secondary-dark text-white
                   rounded-md shadow-sm text-lg font-medium transition-colors
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
        >
          Create Post
        </motion.button>
      </form>
    </motion.div>
  );
}; 