import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white text-secondary dark:bg-dark-lightest dark:text-white transition-colors duration-200">
        <header className="container mx-auto py-6">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary dark:text-primary-light transition-colors">
              The Listening Home
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-secondary/70 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-secondary/70 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                About
              </Link>
              <Link to="/create" className="text-secondary/70 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                Create Post
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-primary/10 dark:bg-white/10 text-primary dark:text-primary-light transition-colors"
              >
                {isDarkMode ? '🌞' : '🌙'}
              </button>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="container mx-auto py-8 mt-auto">
          <div className="text-center text-secondary/60 dark:text-gray-400">
            © {new Date().getFullYear()} The Listening Home. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
} 