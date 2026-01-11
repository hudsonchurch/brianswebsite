-- Create contact form submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions_2025_11_25_18_15 (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    project_type VARCHAR(100),
    project_location VARCHAR(255),
    budget_range VARCHAR(100),
    timeline VARCHAR(255),
    project_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
ON public.contact_submissions_2025_11_25_18_15(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions_2025_11_25_18_15 ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for form submissions)
CREATE POLICY "Allow public form submissions" 
ON public.contact_submissions_2025_11_25_18_15 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow authenticated users to view submissions
CREATE POLICY "Allow authenticated users to view submissions" 
ON public.contact_submissions_2025_11_25_18_15 
FOR SELECT 
USING (auth.role() = 'authenticated');