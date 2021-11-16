export interface movieItem {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
}

export const moviesData: movieItem[] = [
  {
    id: "1",
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    title: "Inferno",
    summary: "Lorem ipsum......",
    rating: 7.3,
  },
  {
    id: "2",
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "Lorem ipsum…",
    rating: 8.2,
  },
  {
    id: "3",
    imageURL: "https://fwcdn.pl/fpo/54/09/695409/7641076.3.jpg",
    title: "Gone Girl",
    summary: "Lorem ipsum…",
    rating: 7.6,
  },
  {
    id: "4",
    imageURL: "https://fwcdn.pl/fpo/09/98/998/7314731.3.jpg",
    title: "Forrest Gump",
    summary: "Lorem ipsum…",
    rating: 9.1,
  },
  {
    id: "5",
    imageURL:
      "https://a.allegroimg.com/original/115ff0/f21862b74a818d099ddb61dce75f/INTERSTELLAR-DVD",
    title: "Interstellar",
    summary: "Lorem ipsum…",
    rating: 8.4,
  },
];
