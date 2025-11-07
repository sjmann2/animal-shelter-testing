import { X, Mail, Phone } from 'lucide-react';
import { Animal } from '../lib/storage';

interface AnimalModalProps {
  animal: Animal | null;
  onClose: () => void;
}

export default function AnimalModal({ animal, onClose }: AnimalModalProps) {
  if (!animal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={animal.image_url}
            alt={animal.name}
            className="w-full h-80 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{animal.name}</h2>
              <p className="text-xl text-gray-600">{animal.breed}</p>
            </div>
            <span className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full font-medium">
              {animal.type.charAt(0).toUpperCase() + animal.type.slice(1)}
            </span>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="bg-pink-50 px-4 py-2 rounded-lg">
              <p className="text-sm text-gray-600">Age</p>
              <p className="font-semibold text-gray-800">{animal.age}</p>
            </div>
            <div className="bg-pink-50 px-4 py-2 rounded-lg">
              <p className="text-sm text-gray-600">Gender</p>
              <p className="font-semibold text-gray-800">{animal.gender}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">About {animal.name}</h3>
            <p className="text-gray-700 leading-relaxed">{animal.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Personality</h3>
            <div className="flex flex-wrap gap-2">
              {animal.personality.split(',').map((trait, index) => (
                <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  {trait.trim()}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-rose-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Interested in adopting {animal.name}?</h3>
            <p className="text-gray-700 mb-4">Contact us to learn more about the adoption process and schedule a meet & greet!</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center justify-center gap-2 bg-rose-400 text-white px-6 py-3 rounded-lg hover:bg-rose-500 transition-colors font-medium">
                <Mail className="w-5 h-5" />
                Email Us
              </button>
              <button className="flex items-center justify-center gap-2 bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors font-medium">
                <Phone className="w-5 h-5" />
                Call Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
