-- Create the contacts table
create table if not exists contacts (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table contacts enable row level security;

-- Policy to allow anonymous/public users to insert contact messages
create policy "Allow public inserts" on contacts
  for insert
  with check (true);
