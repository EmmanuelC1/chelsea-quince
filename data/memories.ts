export interface Memory {
  id: number;
  age: number;
  year: number;
  image: string | null;
  imagePosition?: string;
  placeholderColor: string;
  caption: { es: string; en: string };
}

export const memories: Memory[] = [
  {
    id: 1,
    age: 2,
    year: 2013,
    caption: {
      es: 'Diciembre 2013',
      en: 'December 2013',
      // es: 'El primer día de una historia hermosa.',
      // en: 'The first day of a beautiful story.',
    },
    image: '/images/memories/memory-01.jpg',
    imagePosition: 'center 55%',
    placeholderColor: '#d4e8f7',
  },
  {
    id: 2,
    age: 2,
    year: 2013,
    caption: {
      es: 'Mexico 2013',
      en: 'Mexico 2013',
      // es: 'Dando los primeros pasos.',
      // en: 'Taking the first steps.'
    },
    image: '/images/memories/memory-02.jpg',
    imagePosition: 'center 40%',
    placeholderColor: '#c9e4f0',
  },
  {
    id: 3,
    age: 3,
    year: 2014,
    caption: {
      es: 'Una sonrisa que ilumina el mundo.',
      en: 'A smile that lights up the world.',
    },
    image: '/images/memories/memory-03.jpg',
    placeholderColor: '#bfd7f6',
  },
  {
    id: 4,
    age: 4,
    year: 2015,
    caption: {
      es: 'Llena de curiosidad y aventura.',
      en: 'Full of curiosity and adventure.',
    },
    image: '/images/memories/memory-04.jpg',
    imagePosition: 'center 45%',
    placeholderColor: '#c5daf5',
  },
  {
    id: 5,
    age: 5,
    year: 2016,
    caption: {
      es: 'Los sueños comienzan a florecer.',
      en: 'Dreams begin to blossom.',
    },
    image: '/images/memories/memory-05.jpg',
    imagePosition: 'center 35%',
    placeholderColor: '#b8d0f0',
  },
  {
    id: 6,
    age: 6,
    year: 2017,
    caption: { es: 'La magia de la Navidad.', en: 'The magic of Christmas.' },
    image: '/images/memories/memory-06.jpg',
    imagePosition: 'center 35%',
    placeholderColor: '#c0d8f8',
  },
  {
    id: 7,
    age: 7,
    year: 2018,
    caption: { es: 'Marzo 2018', en: 'March 2018' },
    image: '/images/memories/memory-07.jpg',
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
    image: '/images/memories/memory-08.jpg',
    imagePosition: 'center 35%',
    placeholderColor: '#bbd4f4',
  },
  {
    id: 9,
    age: 11,
    year: 2022,
    caption: { es: 'Creciendo con gracia.', en: 'Growing with grace.' },
    image: '/images/memories/memory-09.jpg',
    imagePosition: 'center 55%',
    placeholderColor: '#c8dff8',
  },
  {
    id: 10,
    age: 12,
    year: 2023,
    caption: { es: 'Fuerte y llena de luz.', en: 'Strong and full of light.' },
    image: '/images/memories/memory-10.jpg',
    imagePosition: 'center 55%',
    placeholderColor: '#b5cef2',
  },
  {
    id: 11,
    age: 13,
    year: 2024,
    caption: { es: 'Una década de amor puro.', en: 'A decade of pure love.' },
    image: '/images/memories/memory-12.jpg',
    placeholderColor: '#c2d9f6',
  },
  {
    id: 12,
    age: 13,
    year: 2024,
    caption: { es: 'Descubriendo quién es.', en: 'Discovering who she is.' },
    image: '/images/memories/memory-11.jpg',
    imagePosition: 'center 55%',
    placeholderColor: '#bcd5f5',
  },
  {
    id: 13,
    age: 14,
    year: 2025,
    caption: { es: 'El mundo es su escenario.', en: 'The world is her stage.' },
    image: '/images/memories/memory-13.jpg',
    imagePosition: 'center 55%',
    placeholderColor: '#c5dcf7',
  },
  {
    id: 14,
    age: 14,
    year: 2025,
    caption: {
      es: 'Brillando con su propia luz.',
      en: 'Shining with her own light.',
    },
    image: '/images/memories/memory-14.jpg',
    imagePosition: 'center 85%',
    placeholderColor: '#b8d2f4',
  },
  {
    id: 15,
    age: 15,
    year: 2026,
    caption: {
      es: 'Lista para sus quince años.',
      en: 'Ready for her quinceañera.',
    },
    image: '/images/memories/memory-15.jpg',
    imagePosition: 'center 35%',
    placeholderColor: '#bfd7f6',
  },
];
