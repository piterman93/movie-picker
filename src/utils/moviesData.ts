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
    summary:
      "Robert Langdon budzi się we florenckim szpitalu i za sprawą tajemniczego przedmiotu zostaje celem obławy. Ucieka z pomocą doktor Sienny, podążając śladem wskazówek zawartych w poemacie Dantego.",
    rating: 7.3,
  },
  {
    id: "2",
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
    title: "Star Wars: Episode VII - The Force Awakens",
    summary:
      "Rey odnajduje Luke'a Skywalkera, by namówić go na powrót i walkę z Najwyższym Porządkiem. Tymczasem Rebelianci próbują uciec przed flotą wroga.",
    rating: 8.2,
  },
  {
    id: "3",
    imageURL: "https://fwcdn.pl/fpo/54/09/695409/7641076.3.jpg",
    title: "Gone Girl",
    summary:
      "Po przeprowadzce Amy i Nick przeżywają kryzys. Gdy w dniu rocznicy ślubu kobieta znika bez śladu, jej mąż staje się głównym podejrzanym.",
    rating: 7.6,
  },
  {
    id: "4",
    imageURL: "https://fwcdn.pl/fpo/09/98/998/7314731.3.jpg",
    title: "Forrest Gump",
    summary:
      "Historia życia Forresta, chłopca o niskim ilorazie inteligencji z niedowładem kończyn, który staje się miliarderem i bohaterem wojny w Wietnamie.",
    rating: 9.1,
  },
  {
    id: "5",
    imageURL:
      "https://a.allegroimg.com/original/115ff0/f21862b74a818d099ddb61dce75f/INTERSTELLAR-DVD",
    title: "Interstellar",
    summary:
      "Byt ludzkości na Ziemi dobiega końca wskutek zmian klimatycznych. Grupa naukowców odkrywa tunel czasoprzestrzenny, który umożliwia poszukiwanie nowego domu.",
    rating: 8.4,
  },
];
