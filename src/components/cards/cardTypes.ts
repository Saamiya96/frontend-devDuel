// The IStats interface defines the structure of the stats object
export interface IStats {
  age: number;
  avg_salary: number;
  downloads: number;
  popularity: number;
  job_availability: number;
}

// The ILanguage interface defines the structure of the language object
export interface ILanguage {
  id: number;
  name: string;
  imageUrl: string;
  stats: IStats;
}