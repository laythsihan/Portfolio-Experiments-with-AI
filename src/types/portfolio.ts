export interface CaseStudyFact {
  label: string;
  value: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyChapter {
  heading: string;
  body: string;
}

export interface CaseStudyQuote {
  text: string;
  attribution: string;
}

export interface CaseStudy {
  id: string;
  ordinal: string;
  title: string;
  client: string;
  year: string;
  discipline: string;
  summary: string;
  cover: string;
  coverAlt: string;
  facts: CaseStudyFact[];
  chapters: CaseStudyChapter[];
  metrics: CaseStudyMetric[];
  quote?: CaseStudyQuote;
}

export interface Profile {
  name: string;
  role: string;
  statement: string;
  location: string;
  availability: string;
  portrait: string;
  portraitAlt: string;
  bio: string[];
  capabilities: string[];
  email: string;
  links: {label: string;href: string;}[];
}