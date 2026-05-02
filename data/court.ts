export type CourtRole = 'honor' | 'chambelan' | 'dama';

export interface CourtMember {
  id: string;
  firstName: string;
  lastName: string;
  role: CourtRole;
  coupleId?: string;
  dedication?: {
    es: string;
    en: string;
  };
  image: string | null;
  placeholderColor: string;
}

export interface CourtCouple {
  id: string;
  chambelan: CourtMember;
  dama: CourtMember;
}

export const honorChambelan: CourtMember = {
  id: 'mateo',
  firstName: 'Mateo',
  lastName: 'Villalobos',
  role: 'honor',
  image: '/images/court/mateo.jpg',
  placeholderColor: '#BFD7F6',
  dedication: {
    es: 'El honor de acompañar a Chelsea en este momento especial.',
    en: 'The honor of accompanying Chelsea on this special occasion.',
  },
};

export const courtCouples: CourtCouple[] = [
  {
    id: 'couple-1',
    chambelan: {
      id: 'erick',
      firstName: 'Erick',
      lastName: 'Jimenez',
      role: 'chambelan',
      coupleId: 'couple-1',
      image: '/images/court/erick.jpg',
      placeholderColor: '#C5D8F0',
      dedication: {
        es: 'Gracias por ser parte de esta noche especial.',
        en: 'Thank you for being part of this special night.',
      },
    },
    dama: {
      id: 'erandi',
      firstName: 'Erandi',
      lastName: 'Tapia',
      role: 'dama',
      coupleId: 'couple-1',
      image: '/images/court/erandi.jpg',
      placeholderColor: '#D4E8F7',
      dedication: {
        es: 'Gracias por ser parte de esta noche especial.',
        en: 'Thank you for being part of this special night.',
      },
    },
  },
  {
    id: 'couple-2',
    chambelan: {
      id: 'gabriel',
      firstName: 'Gabriel',
      lastName: 'Nuñez',
      role: 'chambelan',
      coupleId: 'couple-2',
      image: '/images/court/gabriel.jpg',
      placeholderColor: '#C0D5EE',
      dedication: {
        es: 'Gracias por ser parte de esta noche especial.',
        en: 'Thank you for being part of this special night.',
      },
    },
    dama: {
      id: 'daniela',
      firstName: 'Daniela',
      lastName: 'Bonilla',
      role: 'dama',
      coupleId: 'couple-2',
      image: '/images/court/daniela.jpg',
      placeholderColor: '#CCE0F5',
      dedication: {
        es: 'Gracias por ser parte de esta noche especial.',
        en: 'Thank you for being part of this special night.',
      },
    },
  },
  {
    id: 'couple-3',
    chambelan: {
      id: 'dylan',
      firstName: 'Dylan',
      lastName: 'Cruz',
      role: 'chambelan',
      coupleId: 'couple-3',
      image: '/images/court/dylan.jpg',
      placeholderColor: '#B8D0EC',
      dedication: {
        es: 'Gracias por ser parte de esta noche especial.',
        en: 'Thank you for being part of this special night.',
      },
    },
    dama: {
      id: 'marjorie',
      firstName: 'Marjorie',
      lastName: 'Muñoz',
      role: 'dama',
      coupleId: 'couple-3',
      image: '/images/court/marjorie.jpg',
      placeholderColor: '#C8DCF4',
      dedication: {
        es: 'Gracias por ser parte de esta noche especial.',
        en: 'Thank you for being part of this special night.',
      },
    },
  },
  {
    id: 'couple-4',
    chambelan: {
      id: 'david',
      firstName: 'David',
      lastName: 'Zamora',
      role: 'chambelan',
      coupleId: 'couple-4',
      image: '/images/court/david.jpg',
      placeholderColor: '#BBCFE9',
      dedication: {
        es: 'Gracias por ser parte de esta noche especial.',
        en: 'Thank you for being part of this special night.',
      },
    },
    dama: {
      id: 'cely',
      firstName: 'Cely',
      lastName: 'Villaseñor',
      role: 'dama',
      coupleId: 'couple-4',
      image: '/images/court/cely.jpg',
      placeholderColor: '#C4DAF3',
      dedication: {
        es: 'Gracias por ser parte de esta noche especial.',
        en: 'Thank you for being part of this special night.',
      },
    },
  },
];
