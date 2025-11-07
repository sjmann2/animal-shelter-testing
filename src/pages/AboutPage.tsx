import { Heart, Users, Home, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-pink-50 to-purple-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About Pawsitive Shelter</h1>
          <p className="text-xl text-gray-600">Dedicated to finding forever homes since 2015</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Pawsitive Shelter, we believe every animal deserves a chance at a happy, healthy life filled with love.
            As a non-profit organization, we are committed to rescuing, rehabilitating, and rehoming animals in need
            while promoting responsible pet ownership and community education.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our dedicated team of volunteers and staff work tirelessly to ensure each animal receives proper medical
            care, nutrition, and socialization while they await their perfect match. We don't just find homes for pets;
            we create lifelong bonds between animals and their human companions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-rose-100 p-3 rounded-full">
                <Heart className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">•</span>
                <span>Compassion and respect for all animals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">•</span>
                <span>Commitment to animal welfare and wellbeing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">•</span>
                <span>Transparency and integrity in all operations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">•</span>
                <span>Community education and engagement</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Impact</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-bold text-blue-500">2,500+</p>
                <p className="text-gray-600">Animals adopted since 2015</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-500">98%</p>
                <p className="text-gray-600">Adoption success rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-500">150+</p>
                <p className="text-gray-600">Active volunteers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Get Involved</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Join our community of animal lovers! We're always looking for passionate volunteers, foster families,
              and supporters who want to make a difference in the lives of animals.
            </p>
            <button className="w-full bg-purple-400 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition-colors font-medium">
              Volunteer With Us
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Home className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Visit Us</h3>
            </div>
            <div className="text-gray-700 space-y-2 mb-4">
              <p><strong>Address:</strong><br />123 Compassion Street<br />Petville, PV 12345</p>
              <p><strong>Hours:</strong><br />Tuesday - Sunday: 10am - 6pm<br />Monday: Closed</p>
              <p><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Email:</strong> info@pawsitiveshelter.org</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-lg mb-6">
            As a non-profit, we rely on the generosity of our community to continue our work.
            Your donation helps provide food, medical care, and shelter for animals in need.
          </p>
          <button className="bg-white text-rose-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
            Make a Donation
          </button>
        </div>
      </div>
    </div>
  );
}
