/*
  # Create quote requests table

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `company` (text, optional)
      - `service` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy for public insert access (for form submissions)
    - Add policy for authenticated users to read all data
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert quote requests (for public form submissions)
CREATE POLICY "Anyone can submit quote requests"
  ON quote_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all quote requests
CREATE POLICY "Authenticated users can read quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);