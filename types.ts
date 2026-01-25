
export interface FlowformModel {
  id: string;
  name: string;
  lpm: number;
  lph: number;
  material: string;
  dimensions: string;
  primaryApplication: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  maxPondSize?: number; // m3
  footprint?: number; // m2
  pumpHP: string;
  minLPM: number;
  milestones?: {
    time: string;
    result: string;
    secondary: string;
  };
  maintenance: string;
  durability: string;
  industries: string[];
}

export interface CaseStudy {
  subject: string;
  volume: string;
  setup: string;
  time: string;
  result: string;
  link?: string;
}

export interface ScalabilityData {
  model: string;
  waterType: string;
  maxPond: number;
  daysTo3ppm: number;
  daysTo6ppm: number;
  area: number;
}
