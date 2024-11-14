export interface News {
  id: number;
  image?: string;
  source: {
    icon: string;
    text?: string;
  };
  title: string;
  date: string;
  secondary?: Array<News>;
}
