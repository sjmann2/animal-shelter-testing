import { Heart } from 'lucide-react';

interface NavigationProps {
  currentPage: 'home' | 'about';
  onNavigate: (page: 'home' | 'about') => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-rose-400" fill="currentColor" />
            <span className="text-2xl font-semibold text-gray-800">Pawsitive Shelter</span>
          </div>
          <div className="flex space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-lg font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-rose-400 border-b-2 border-rose-400'
                  : 'text-gray-600 hover:text-rose-400'
              }`}
            >
              Available Pets
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`text-lg font-medium transition-colors ${
                currentPage === 'about'
                  ? 'text-rose-400 border-b-2 border-rose-400'
                  : 'text-gray-600 hover:text-rose-400'
              }`}
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
