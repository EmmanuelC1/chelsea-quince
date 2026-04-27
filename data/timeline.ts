export interface ProgramEvent {
  id: string;
  time: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  icon: string;
  highlight?: boolean;
}

export const programEvents: ProgramEvent[] = [
  {
    id: 'entrada',
    time: '6:00 PM',
    title: {
      es: 'Gran Entrada',
      en: 'Grand Entrance',
    },
    description: {
      es: 'La quinceañera hace su entrada triunfal, rodeada de su corte de honor.',
      en: 'The quinceañera makes her triumphant entrance, surrounded by her court of honor.',
    },
    icon: '✦',
    highlight: true,
  },
  {
    id: 'cena',
    time: '6:30 PM',
    title: {
      es: 'Cena',
      en: 'Dinner',
    },
    description: {
      es: 'Compartimos una cena especial en honor a Chelsea y su familia.',
      en: 'We share a special dinner in honor of Chelsea and her family.',
    },
    icon: '◇',
  },
  {
    id: 'vals',
    time: '7:30 PM',
    title: {
      es: 'Vals de Honor',
      en: 'Waltz of Honor',
    },
    description: {
      es: 'Chelsea baila el vals con su chambelán de honor y su corte.',
      en: 'Chelsea dances the waltz with her chambelán de honor and her court.',
    },
    icon: '✦',
    highlight: true,
  },
  {
    id: 'sorpresa',
    time: '8:00 PM',
    title: {
      es: 'Baile Sorpresa',
      en: 'Surprise Dance',
    },
    description: {
      es: 'Una coreografía preparada con dedicación y mucho amor.',
      en: 'A choreography prepared with dedication and a whole lot of love.',
    },
    icon: '◇',
  },
  {
    id: 'pastel',
    time: '8:30 PM',
    title: {
      es: 'Brindis y Pastel',
      en: 'Toast & Cake',
    },
    description: {
      es: 'Alzamos las copas por Chelsea — quince años de luz, amor y alegría.',
      en: 'We raise our glasses to Chelsea — fifteen years of light, love, and joy.',
    },
    icon: '✦',
    highlight: true,
  },
  {
    id: 'baile',
    time: '9:00 PM',
    title: {
      es: 'Baile Libre',
      en: 'Open Dance Floor',
    },
    description: {
      es: 'La noche es joven. ¡A bailar con todo!',
      en: 'The night is young. Time to dance!',
    },
    icon: '◇',
  },
];
