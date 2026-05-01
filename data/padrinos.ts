export interface Padrino {
  firstName: string;
  lastName?: string;
}

export interface PadrinoCategory {
  id: string;
  category: {
    es: string;
    en: string;
  };
  padrinos: Padrino[];
  icon: string;
}

export const padrinosData: PadrinoCategory[] = [
  {
    id: 'honor',
    icon: '✦',
    category: { es: 'Padrinos de Honor', en: 'Sponsors of Honor' },
    padrinos: [
      { firstName: 'Arnoldo', lastName: 'Alvarado' },
      { firstName: 'Angelica', lastName: 'Castillo' },
    ],
  },
  {
    id: 'vestido',
    icon: '✦',
    category: { es: 'Padrinos de Vestido', en: 'Dress Sponsors' },
    padrinos: [
      { firstName: 'Rigoberto', lastName: 'Castillo' },
      { firstName: 'Isabel', lastName: 'Castillo' },
    ],
  },
  {
    id: 'esclava',
    icon: '✦',
    category: { es: 'Madrina de Esclava', en: 'Bracelet Sponsor' },
    padrinos: [{ firstName: 'Julia', lastName: 'Castillo' }],
  },
  {
    id: 'medalla',
    icon: '✦',
    category: { es: 'Padrinos de Medalla', en: 'Pendant Necklace Sponsors' },
    padrinos: [
      { firstName: 'Eustolia', lastName: 'Castillo' },
      { firstName: 'Eduardo', lastName: 'Galicia' },
    ],
  },
  {
    id: 'anillo',
    icon: '✦',
    category: { es: 'Padrinos de Anillo', en: 'Ring Sponsors' },
    padrinos: [
      { firstName: 'Roque', lastName: 'Rodriguez' },
      { firstName: 'Socorro', lastName: 'Rodriguez' },
    ],
  },
  {
    id: 'libro-rosario',
    icon: '✦',
    category: {
      es: 'Padrinos de Libro y Rosario',
      en: 'Bible & Rosary Sponsors',
    },
    padrinos: [
      { firstName: 'Gabriel', lastName: 'Pantoja' },
      { firstName: 'Dora', lastName: 'Pantoja' },
    ],
  },
  {
    id: 'ramo',
    icon: '✦',
    category: { es: 'Padrinos de Ramo', en: 'Bouquet Sponsors' },
    padrinos: [
      { firstName: 'Alfonso', lastName: 'Castillo' },
      { firstName: 'Angela', lastName: 'Castillo' },
    ],
  },
  {
    id: 'cojin',
    icon: '✦',
    category: { es: 'Madrina de Cojín', en: 'Pillow Sponsor' },
    padrinos: [{ firstName: 'Victoria', lastName: 'Castillo' }],
  },
  {
    id: 'foto-video',
    icon: '✦',
    category: { es: 'Padrinos de Foto y Video', en: 'Photo & Video Sponsors' },
    padrinos: [
      { firstName: 'Omar', lastName: 'Pantoja' },
      { firstName: 'Hilda', lastName: 'Pantoja' },
      { firstName: 'Gabriel', lastName: 'Pantoja' },
      { firstName: 'Ana', lastName: 'Pantoja' },
      { firstName: 'Fabian', lastName: 'Pantoja' },
      { firstName: 'Joana', lastName: 'Pantoja' },
      { firstName: 'Jorge', lastName: 'Juarez' },
      { firstName: 'Blanca', lastName: 'Juarez' },
    ],
  },
  {
    id: 'pastel',
    icon: '✦',
    category: { es: 'Padrinos de Pastel', en: 'Cake Sponsors' },
    padrinos: [
      { firstName: 'Jesus', lastName: 'Ceballos' },
      { firstName: 'Eroila', lastName: 'Ceballos' },
      { firstName: 'Hector', lastName: 'Serrano' },
      { firstName: 'Bertha', lastName: 'Serrano' },
    ],
  },
  {
    id: 'brindis',
    icon: '✦',
    category: { es: 'Padrinos de Brindis', en: 'Toast Sponsors' },
    padrinos: [
      { firstName: 'Arnoldo', lastName: 'Servin' },
      { firstName: 'Itzel', lastName: 'Servin' },
    ],
  },
  {
    id: 'cider',
    icon: '✦',
    category: { es: 'Padrinos de Cidra', en: 'Cider Sponsors' },
    padrinos: [
      { firstName: 'Francisco', lastName: 'Blanquet' },
      { firstName: 'Petra', lastName: 'Blanquet' },
    ],
  },
  {
    id: 'corona',
    icon: '✦',
    category: { es: 'Padrinos de Corona', en: 'Crown Sponsors' },
    padrinos: [
      { firstName: 'Gabriel', lastName: 'Jaramillo' },
      { firstName: 'Romelia', lastName: 'Jaramillo' },
    ],
  },
  {
    id: 'zapatilla',
    icon: '✦',
    category: { es: 'Madrina de Zapatilla', en: 'High Heel Sponsor' },
    padrinos: [{ firstName: 'Arianna', lastName: 'Alvarado' }],
  },
  {
    id: 'oso',
    icon: '✦',
    category: { es: 'Madrina de Oso', en: 'Last Doll Sponsor' },
    padrinos: [{ firstName: 'Andrea', lastName: 'Alvarado' }],
  },
  {
    id: 'regalo-sorpresa',
    icon: '✦',
    category: {
      es: 'Padrinos de Regalo Sorpresa',
      en: 'Surprise Gift Sponsors',
    },
    padrinos: [
      { firstName: 'Urbano', lastName: 'Ruiz' },
      { firstName: 'Clara', lastName: 'Ruiz' },
    ],
  },
  {
    id: 'caja-firmas',
    icon: '✦',
    category: {
      es: 'Madrina de Caja y Libro de Firmas',
      en: 'Gift Box & Guestbook Sponsor',
    },
    padrinos: [{ firstName: 'Maria', lastName: 'Melena' }],
  },
  {
    id: 'maquillaje',
    icon: '✦',
    category: {
      es: 'Madrina de Maquillaje',
      en: 'Makeup Sponsor',
    },
    padrinos: [{ firstName: 'Hoddaly', lastName: 'Blanquet' }],
  },
  {
    id: 'cerveza',
    icon: '✦',
    category: {
      es: 'Padrino de Cerveza',
      en: 'Beer Sponsor',
    },
    padrinos: [{ firstName: 'Damian', lastName: 'Castillo' }],
  },
  {
    id: 'mesas-sillas',
    icon: '✦',
    category: {
      es: 'Padrino de Mesas y Sillas',
      en: 'Tables, Chairs & Decorations Sponsor',
    },
    padrinos: [{ firstName: 'Emmanuel', lastName: 'Castillo' }],
  },
  {
    id: 'musica',
    icon: '✦',
    category: {
      es: 'Padrinos de Musica',
      en: 'Music Sponsors',
    },
    padrinos: [
      { firstName: 'Gabriel', lastName: 'Jaramillo' },
      { firstName: 'Romelia', lastName: 'Jaramillo' },
      { firstName: 'Eugenio', lastName: 'Lopez' },
      { firstName: 'Roberto', lastName: 'Blanquet' },
      { firstName: 'Ivan', lastName: 'Blanquet' },
      { firstName: 'Antonio', lastName: 'Blanquet' },
      { firstName: 'Martin', lastName: 'Hernandez' },
      { firstName: 'Leticia', lastName: 'Hernandez' },
    ],
  },
  {
    id: 'centro-mesa',
    icon: '✦',
    category: {
      es: 'Padrinos de Centro de Mesa',
      en: 'Centerpiece Sponsors',
    },
    padrinos: [
      { firstName: 'Artemio', lastName: 'Veliz' },
      { firstName: 'Rosie', lastName: 'Veliz' },
    ],
  },
  // {
  //   id: 'limusina',
  //   icon: '✦',
  //   category: { es: 'Padrinos de Limusina', en: 'Limousine Sponsors' },
  //   padrinos: [
  //     { firstName: 'Leticia' },
  //     { firstName: 'Adrian', lastName: 'Andrade' },
  //     { firstName: 'Alfredo', lastName: 'Calderon' },
  //     { firstName: 'Chalo' },
  //     { firstName: 'Maciel' },
  //     { firstName: 'Eugenio' },
  //   ],
  // },
];
