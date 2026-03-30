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
    id: 'esclava',
    icon: '✦',
    category: { es: 'Madrina de Esclava', en: 'Bracelet Sponsor' },
    padrinos: [{ firstName: 'Julia', lastName: 'Castillo' }],
  },
  {
    id: 'medalla',
    icon: '✦',
    category: { es: 'Madrina de Medalla', en: 'Pendant Necklace Sponsor' },
    padrinos: [{ firstName: 'Eustolia', lastName: 'Castillo' }],
  },
  {
    id: 'libro-rosario',
    icon: '✦',
    category: {
      es: 'Madrina de Libro y Rosario',
      en: 'Bible & Rosary Sponsor',
    },
    padrinos: [{ firstName: 'Dora', lastName: 'Castillo' }],
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
    id: 'ramo',
    icon: '✦',
    category: { es: 'Padrinos de Ramo', en: 'Bouquet Sponsors' },
    padrinos: [{ firstName: 'Angela' }, { firstName: 'Alfonso' }],
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
    id: 'foto-video',
    icon: '✦',
    category: { es: 'Padrinos de Foto y Video', en: 'Photo & Video Sponsors' },
    padrinos: [
      { firstName: 'Omar', lastName: 'Pantoja' },
      { firstName: 'Ilda', lastName: 'Pantoja' },
      { firstName: 'Gabriel', lastName: 'Pantoja' },
      { firstName: 'Ana', lastName: 'Pantoja' },
      { firstName: 'Fabian', lastName: 'Pantoja' },
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
      { firstName: 'Leticia' },
      { firstName: 'Bertha Ector', lastName: 'Serrano' },
    ],
  },
  {
    id: 'brindis',
    icon: '✦',
    category: { es: 'Padrinos de Brindis', en: 'Toast Sponsors' },
    padrinos: [{ firstName: 'Arnoldo' }, { firstName: 'Itzel' }],
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
    id: 'cojin',
    icon: '✦',
    category: { es: 'Madrina de Cojín', en: 'Pillow Sponsor' },
    padrinos: [{ firstName: 'Victoria', lastName: 'Castillo' }],
  },
  {
    id: 'caja-firmas',
    icon: '✦',
    category: {
      es: 'Madrina de Caja y Libro de Firmas',
      en: 'Gift Box & Guestbook Sponsor',
    },
    padrinos: [{ firstName: 'Mari' }],
  },
  {
    id: 'limusina',
    icon: '✦',
    category: { es: 'Padrinos de Limusina', en: 'Limousine Sponsors' },
    padrinos: [
      { firstName: 'Leticia' },
      { firstName: 'Adrian', lastName: 'Andrade' },
      { firstName: 'Alfredo', lastName: 'Calderon' },
      { firstName: 'Chalo' },
      { firstName: 'Maciel' },
      { firstName: 'Eugenio' },
    ],
  },
];
