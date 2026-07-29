export interface Stats {

  title: string;

  subtitle: string;

  items: StatsItem[];

}

export interface StatsItem {

  value: number;

  suffix: string;

  label: string;

}