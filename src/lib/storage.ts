export interface Animal {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: string;
  gender: string;
  description: string;
  personality: string;
  image_url: string;
  available: boolean;
}

const STORAGE_KEY = 'animals_data';

const DEFAULT_ANIMALS: Animal[] = [
  {
    id: '1',
    name: 'Luna',
    type: 'cat',
    breed: 'Domestic Shorthair',
    age: '2 years',
    gender: 'Female',
    description: 'Luna is a gentle soul who loves quiet afternoons and sunny windowsills. She came to us as a stray and has blossomed into a loving companion. Luna enjoys being petted and will purr contentedly in your lap.',
    personality: 'Gentle, Affectionate, Quiet',
    image_url: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg',
    available: true,
  },
  {
    id: '2',
    name: 'Max',
    type: 'dog',
    breed: 'Golden Retriever Mix',
    age: '3 years',
    gender: 'Male',
    description: 'Max is an energetic and loving boy who adores playtime and long walks. He knows basic commands and is great with children. Max would thrive in an active household where he can get plenty of exercise and attention.',
    personality: 'Playful, Loyal, Energetic',
    image_url: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg',
    available: true,
  },
  {
    id: '3',
    name: 'Whiskers',
    type: 'cat',
    breed: 'Tabby',
    age: '5 years',
    gender: 'Male',
    description: 'Whiskers is a distinguished gentleman who has mastered the art of relaxation. He enjoys treats, gentle brushing, and watching birds from the window. He would do best in a calm, quiet home.',
    personality: 'Independent, Calm, Sweet',
    image_url: 'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg',
    available: true,
  },
  {
    id: '4',
    name: 'Bella',
    type: 'dog',
    breed: 'Labrador Mix',
    age: '1 year',
    gender: 'Female',
    description: 'Bella is a young, enthusiastic pup with endless energy and love to give. She is currently learning her manners and would benefit from continued training. Bella loves to play fetch and go on adventures.',
    personality: 'Energetic, Friendly, Curious',
    image_url: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg',
    available: true,
  },
  {
    id: '5',
    name: 'Squeaky',
    type: 'rodent',
    breed: 'Guinea Pig',
    age: '1 year',
    gender: 'Male',
    description: 'Squeaky is a charming little guinea pig who loves fresh vegetables and cozy hideaways. He is social and enjoys gentle handling. Guinea pigs do best with a companion, so consider adopting a pair!',
    personality: 'Social, Gentle, Vocal',
    image_url: 'https://images.pexels.com/photos/3361120/pexels-photo-3361120.jpeg',
    available: true,
  },
  {
    id: '6',
    name: 'Mittens',
    type: 'cat',
    breed: 'Calico',
    age: '4 years',
    gender: 'Female',
    description: 'Mittens is a beautiful calico with a sassy personality. She can be selective about her affection but forms strong bonds with her chosen people. She prefers to be the only pet in the household.',
    personality: 'Independent, Sassy, Loyal',
    image_url: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg',
    available: true,
  },
  {
    id: '7',
    name: 'Rocky',
    type: 'dog',
    breed: 'Terrier Mix',
    age: '6 years',
    gender: 'Male',
    description: 'Rocky is a mature, well-mannered companion who has plenty of love left to give. He enjoys leisurely walks and is content to relax by your side. Rocky would make an excellent companion for seniors or anyone seeking a calm friend.',
    personality: 'Calm, Affectionate, Well-behaved',
    image_url: 'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg',
    available: true,
  },
  {
    id: '8',
    name: 'Nibbles',
    type: 'rodent',
    breed: 'Hamster',
    age: '6 months',
    gender: 'Female',
    description: 'Nibbles is an adorable Syrian hamster who loves running on her wheel and exploring her habitat. She is nocturnal and most active in the evening. Nibbles enjoys sunflower seeds as treats.',
    personality: 'Active, Curious, Independent',
    image_url: 'https://images.pexels.com/photos/3979542/pexels-photo-3979542.jpeg',
    available: true,
  },
];

export function initializeStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_ANIMALS));
  }
}

export function getAnimals(): Animal[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : DEFAULT_ANIMALS;
}

export function getAvailableAnimals(): Animal[] {
  return getAnimals().filter(animal => animal.available);
}

export function getAnimalById(id: string): Animal | undefined {
  return getAnimals().find(animal => animal.id === id);
}
