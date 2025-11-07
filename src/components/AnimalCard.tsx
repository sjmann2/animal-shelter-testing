import { Heart, Info } from 'lucide-react';
import { Animal } from '../lib/storage';

interface AnimalCardProps {
  animal: Animal;
  onLearnMore: (animal: Animal) => void;
}

export default function AnimalCard({ animal, onLearnMore }: AnimalCardProps) {
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'dog':
        return 'bg-blue-100 text-blue-700';
      case 'cat':
        return 'bg-purple-100 text-purple-700';
      case 'rodent':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={animal.image_url}
          alt={animal.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(animal.type)}`}>
            {animal.type.charAt(0).toUpperCase() + animal.type.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{animal.name}</h3>
            <p className="text-gray-600">{animal.breed}</p>
          </div>
          <Heart className="w-6 h-6 text-rose-300 hover:text-rose-400 hover:fill-current cursor-pointer transition-colors" />
        </div>
        <div className="flex gap-4 mb-4 text-sm text-gray-600">
          <span className="bg-pink-50 px-3 py-1 rounded-full">{animal.age}</span>
          <span className="bg-pink-50 px-3 py-1 rounded-full">{animal.gender}</span>
        </div>
        <p className="text-gray-700 mb-4 line-clamp-2">{animal.personality}</p>
        <div className="flex gap-3">
          <button
            onClick={() => onLearnMore(animal)}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors font-medium"
          >
            <Info className="w-4 h-4" />
            Learn More
          </button>
          <button className="flex-1 bg-rose-400 text-white px-4 py-2 rounded-lg hover:bg-rose-500 transition-colors font-medium">
            Contact to Adopt
          </button>
        </div>
      </div>
    </div>
  );
}
