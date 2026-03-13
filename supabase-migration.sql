-- Supabase Migration: oberstufe.site
-- Ausfuhren im Supabase SQL Editor

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  subject text,
  author_name text,
  author_class text,
  thumbnail_url text,
  project_url text not null,
  is_featured boolean default false,
  visible boolean default true,
  created_at timestamptz default now()
);

-- Storage bucket fur Thumbnails (im Supabase Dashboard erstellen)
-- Bucket Name: project-thumbnails
-- Public: true

-- RLS Policies (optional, fur spaetere Auth-Integration)
-- alter table projects enable row level security;

-- Tabelle fuer editierbare Seiteninhalte
create table if not exists page_content (
  id text primary key,  -- z.B. 'about', 'techstack', 'participate', 'faq', 'contact'
  content jsonb not null default '{}',
  updated_at timestamptz default now()
);

-- Standardwerte einfuegen (einmalig ausfuehren)
insert into page_content (id, content) values
('about', '{"intro1": "oberstufe.site ist im Rahmen unserer schulischen Arbeit entstanden. Was als einfaches Experiment begann, hat sich zu einer wachsenden Sammlung von Projekten entwickelt.", "intro2": "Jedes Projekt spiegelt ein Thema wider, das uns beschaftigt hat: Philosophie, Geschichte, Kunst, Technologie.", "intro3": "Die Website wachst mit jedem neuen Projekt. Inhalte und Gestaltung entwickeln sich dabei stetig weiter.", "improvements": ["Uberarbeitetes Design der Homepage", "Erweiterung der Projektsammlung", "Bessere Vernetzung der Projekte", "Optimierung fur mobile Endgerate"]}'),
('contact', '{"intro": "Fragen, Ideen, Feedback oder ein Projekt, das du einreichen mochtest - wir freuen uns uber jede Nachricht.", "email": "oberstufesite@gmail.com", "form_desc": "Fur detailliertere Anfragen steht unser Feedback-Formular zur Verfugung.", "note": "oberstufe.site ist ein eigenstandiges Schulerprojekt."}')
on conflict (id) do nothing;
