export interface ProjectItem {
  id: string
  title: string
  category: string
  summary: string
  status: string
  deliverables?: string[]
  tags?: string[]
}

export interface JournalArticle {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  content?: string[]
}

export interface ExperienceRecord {
  company: string
  role: string
  period: string
  location: string
  description: string
  responsibilities: string[]
  skillsApplied: string[]
}

export interface EducationRecord {
  degree: string
  status: string
  field: string
  description: string
  courses: string[]
}

