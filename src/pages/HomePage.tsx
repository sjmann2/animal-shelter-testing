import { useState, useEffect } from 'react';
import { getAvailableAnimals, Animal, initializeStorage } from '../lib/storage';
import AnimalCard from '../components/AnimalCard';
import AnimalModal from '../components/AnimalModal';
import { Filter } from 'lucide-react';

export default function HomePage() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>([]);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    initializeStorage();
    const availableAnimals = getAvailableAnimals();
    setAnimals(availableAnimals);
    setFilteredAnimals(availableAnimals);
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredAnimals(animals);
    } else {
      setFilteredAnimals(animals.filter(animal => animal.type === filter));
    }
  }, [filter, animals]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Find Your New Best Friend</h1>
          <p className="text-xl text-gray-600">Every pet deserves a loving home. Start your adoption journey today.</p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-10">
          <Filter className="w-5 h-5 text-gray-600" />
          <div className="flex gap-2 flex-wrap justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-rose-400 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Pets
            </button>
            <button
              onClick={() => setFilter('dog')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'dog'
                  ? 'bg-blue-400 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Dogs
            </button>
            <button
              onClick={() => setFilter('cat')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'cat'
                  ? 'bg-purple-400 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Cats
            </button>
            <button
              onClick={() => setFilter('rodent')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'rodent'
                  ? 'bg-green-400 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Rodents
            </button>
          </div>
        </div>

        {filteredAnimals.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No pets found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnimals.map((animal) => (
              <AnimalCard
                key={animal.id}
                animal={animal}
                onLearnMore={setSelectedAnimal}
              />
            ))}
          </div>
        )}
      </div>

      <AnimalModal animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
    </div>
  );
}
