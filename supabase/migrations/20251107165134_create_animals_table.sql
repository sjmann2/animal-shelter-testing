/*
  # Create Animals Table for Shelter App

  1. New Tables
    - `animals`
      - `id` (uuid, primary key) - Unique identifier for each animal
      - `name` (text) - Animal's name
      - `type` (text) - Type of animal (cat, dog, rodent)
      - `breed` (text) - Breed information
      - `age` (text) - Age of the animal
      - `gender` (text) - Gender of the animal
      - `description` (text) - Full description about the animal
      - `personality` (text) - Personality traits
      - `image_url` (text) - URL to animal's photo
      - `available` (boolean) - Whether animal is available for adoption
      - `created_at` (timestamptz) - When the record was created

  2. Security
    - Enable RLS on `animals` table
    - Add policy for anyone to read animals (public access for adoption viewing)
*/

CREATE TABLE IF NOT EXISTS animals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  breed text NOT NULL,
  age text NOT NULL,
  gender text NOT NULL,
  description text NOT NULL,
  personality text NOT NULL,
  image_url text NOT NULL,
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE animals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view available animals"
  ON animals
  FOR SELECT
  USING (available = true);