export interface Memory {
  id: number;
  age: number;
  year: number;
  caption: {
    es: string;
    en: string;
  };
  // Replace placeholder with real image path later: '/images/memory-01.jpg'
  image: string | null;
  // Placeholder background color for dev
  placeholderColor: string;
}

export const memories: Memory[] = [
  {
    id: 1,
    age: 0,
    year: 2011,
    caption: {
      es: 'El primer día de una historia hermosa.',
      en: 'The first day of a beautiful story.',
    },
    image: null,
    placeholderColor: '#d4e8f7',
  },
  {
    id: 2,
    age: 1,
    year: 2012,
    caption: { es: 'Dando los primeros pasos.', en: 'Taking the first steps.' },
    image: null,
    placeholderColor: '#c9e4f0',
  },
  {
    id: 3,
    age: 2,
    year: 2013,
    caption: {
      es: 'Una sonrisa que ilumina el mundo.',
      en: 'A smile that lights up the world.',
    },
    image: null,
    placeholderColor: '#bfd7f6',
  },
  {
    id: 4,
    age: 3,
    year: 2014,
    caption: {
      es: 'Llena de curiosidad y aventura.',
      en: 'Full of curiosity and adventure.',
    },
    image: null,
    placeholderColor: '#c5daf5',
  },
  {
    id: 5,
    age: 4,
    year: 2015,
    caption: {
      es: 'Los sueños comienzan a florecer.',
      en: 'Dreams begin to blossom.',
    },
    image: null,
    placeholderColor: '#b8d0f0',
  },
  {
    id: 6,
    age: 5,
    year: 2016,
    caption: { es: 'La magia de la infancia.', en: 'The magic of childhood.' },
    image: null,
    placeholderColor: '#c0d8f8',
  },
  {
    id: 7,
    age: 6,
    year: 2017,
    caption: { es: 'Riendo sin parar.', en: 'Laughing without end.' },
    image: null,
    placeholderColor: '#d0e5f7',
  },
  {
    id: 8,
    age: 7,
    year: 2018,
    caption: {
      es: 'Cada día una nueva aventura.',
      en: 'Every day a new adventure.',
    },
    image: null,
    placeholderColor: '#bbd4f4',
  },
  {
    id: 9,
    age: 8,
    year: 2019,
    caption: { es: 'Creciendo con gracia.', en: 'Growing with grace.' },
    image: null,
    placeholderColor: '#c8dff8',
  },
  {
    id: 10,
    age: 9,
    year: 2020,
    caption: { es: 'Fuerte y llena de luz.', en: 'Strong and full of light.' },
    image: null,
    placeholderColor: '#b5cef2',
  },
  {
    id: 11,
    age: 10,
    year: 2021,
    caption: { es: 'Una década de amor puro.', en: 'A decade of pure love.' },
    image: null,
    placeholderColor: '#c2d9f6',
  },
  {
    id: 12,
    age: 11,
    year: 2022,
    caption: { es: 'Descubriendo quién es.', en: 'Discovering who she is.' },
    image: null,
    placeholderColor: '#bcd5f5',
  },
  {
    id: 13,
    age: 12,
    year: 2023,
    caption: { es: 'El mundo es su escenario.', en: 'The world is her stage.' },
    image: null,
    placeholderColor: '#c5dcf7',
  },
  {
    id: 14,
    age: 13,
    year: 2024,
    caption: {
      es: 'Brillando con su propia luz.',
      en: 'Shining with her own light.',
    },
    image: null,
    placeholderColor: '#b8d2f4',
  },
  {
    id: 15,
    age: 14,
    year: 2025,
    caption: {
      es: 'Lista para sus quince años.',
      en: 'Ready for her quinceañera.',
    },
    image: null,
    placeholderColor: '#bfd7f6',
  },
];
