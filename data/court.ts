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
  lastName: '',
  role: 'honor',
  image: null,
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
      lastName: '',
      role: 'chambelan',
      coupleId: 'couple-1',
      image: null,
      placeholderColor: '#C5D8F0',
      dedication: {
        es: 'Gracias por ser parte de esta noche especial.',
        en: 'Thank you for being part of this special night.',
      },
    },
    dama: {
      id: 'erandi',
      firstName: 'Erandi',
      lastName: '',
      role: 'dama',
      coupleId: 'couple-1',
      image: null,
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
      lastName: '',
      role: 'chambelan',
      coupleId: 'couple-2',
      image: null,
      placeholderColor: '#C0D5EE',
      dedication: {
        es: 'Gracias por ser parte de esta noche especial.',
        en: 'Thank you for being part of this special night.',
      },
    },
    dama: {
      id: 'daniela',
      firstName: 'Daniela',
      lastName: '',
      role: 'dama',
      coupleId: 'couple-2',
      image: null,
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
      lastName: '',
      role: 'chambelan',
      coupleId: 'couple-3',
      image: null,
      placeholderColor: '#B8D0EC',
      dedication: {
        es: 'Gracias por ser parte de esta noche especial.',
        en: 'Thank you for being part of this special night.',
      },
    },
    dama: {
      id: 'marjorie',
      firstName: 'Marjorie',
      lastName: '',
      role: 'dama',
      coupleId: 'couple-3',
      image: null,
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
      lastName: '',
      role: 'chambelan',
      coupleId: 'couple-4',
      image: null,
      placeholderColor: '#BBCFE9',
      dedication: {
        es: 'Gracias por ser parte de esta noche especial.',
        en: 'Thank you for being part of this special night.',
      },
    },
    dama: {
      id: 'cely',
      firstName: 'Cely',
      lastName: '',
      role: 'dama',
      coupleId: 'couple-4',
      image: null,
      placeholderColor: '#C4DAF3',
      dedication: {
        es: 'Gracias por ser parte de esta noche especial.',
        en: 'Thank you for being part of this special night.',
      },
    },
  },
];
