// types.ts
export interface IStats {
  Strength: number;
  Intelligence: number;
  Speed: number;
  Endurance: number;
  Power: number;
  Courage: number;
}

export interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
  stats: IStats;
}
