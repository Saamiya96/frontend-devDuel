export interface IStats {
  age: number;
  avg_salary: number;
  downloads: number;
  popularity: number;
  job_availability: number;
}

export interface ILanguage {
  id: number;
  name: string;
  imageUrl: string;
  stats: IStats;
}
