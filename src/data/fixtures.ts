import { imagesResurces } from '../helpers';
import { Pictogram } from '../pictogram/interfaces';

const getPictogramResource = (pictogramFile: string) => {
  return `${imagesResurces}/pictograms/${pictogramFile}.jpg`;
};

export const COLOR_LIST = [
  {
    id: 1,
    pictogramFolder: 'photos/objeto',
    backgroundColor: '#8ae800',
    size: 8,
  },
  {
    id: 2,
    pictogramFolder: 'photos/verbo',
    backgroundColor: '#faf100',
    size: 7,
  },
  {
    id: 3,
    pictogramFolder: 'photos/persona',
    backgroundColor: '#00a7ea',
    size: 5,
  },
  {
    id: 4,
    pictogramFolder: 'photos/comida',
    backgroundColor: '#ff0061',
    size: 5,
  },
  {
    id: 5,
    pictogramFolder: 'photos/actividad',
    backgroundColor: '#ffaa00',
    size: 7,
  },
  {
    id: 6,
    pictogramFolder: 'photos/social',
    backgroundColor: '#7734ea',
    size: 5,
  },
];

export const CARTOON_LIST = [
  {
    id: 1,
    pictogramFolder: 'cartoons/bob',
    size: 5,
  },
  {
    id: 2,
    pictogramFolder: 'cartoons/leo-camion',
    size: 6,
  },
  {
    id: 3,
    pictogramFolder: 'cartoons/zenon',
    size: 6,
  },
  {
    id: 4,
    pictogramFolder: 'cartoons/paw-patrol',
    size: 6,
  },
];

export interface PictogramSection {
  section: Pictogram;
  pictograms: Pictogram[];
}

export const pictogramsList: PictogramSection[] = [
  {
    section: {
      id: '1',
      name: 'Game Time',
      image: getPictogramResource('game-time'),
      backgroundColor: '#4e93af',
    },
    pictograms: [
      {
        id: '1',
        name: 'clean up time',
        image: getPictogramResource('clean-up-time'),
        backgroundColor: '#4e93af',
      },
      {
        id: '2',
        name: 'craft time',
        image: getPictogramResource('craft-time'),
        backgroundColor: '#4e93af',
      },
      {
        id: '3',
        name: 'drawing',
        image: getPictogramResource('drawing'),
        backgroundColor: '#4e93af',
      },
      {
        id: '4',
        name: 'free-choice',
        image: getPictogramResource('free-choice'),
        backgroundColor: '#4e93af',
      },
      {
        id: '5',
        name: 'game time',
        image: getPictogramResource('game-time'),
        backgroundColor: '#4e93af',
      },
      {
        id: '6',
        name: 'relax',
        image: getPictogramResource('relax'),
        backgroundColor: '#4e93af',
      },
      {
        id: '7',
        name: 'science',
        image: getPictogramResource('science'),
        backgroundColor: '#4e93af',
      },
      {
        id: '8',
        name: 'special jobs',
        image: getPictogramResource('special-jobs'),
        backgroundColor: '#4e93af',
      },
      {
        id: '9',
        name: 'toilet brake',
        image: getPictogramResource('toilet-brake'),
        backgroundColor: '#4e93af',
      },
    ],
  },
  {
    section: {
      id: '2',
      name: 'clothes',
      image: getPictogramResource('t-shirt'),
      backgroundColor: '#c9e265',
    },
    pictograms: [
      {
        id: '10',
        name: 't-shirt',
        image: getPictogramResource('t-shirt'),
        backgroundColor: '#c9e265',
      },
      {
        id: '11',
        name: 'jeans',
        image: getPictogramResource('jeans'),
        backgroundColor: '#c9e265',
      },
      {
        id: '12',
        name: 'scarf',
        image: getPictogramResource('scarf'),
        backgroundColor: '#c9e265',
      },
      {
        id: '13',
        name: 'shorts',
        image: getPictogramResource('shorts'),
        backgroundColor: '#c9e265',
      },
      {
        id: '14',
        name: 'socks',
        image: getPictogramResource('socks'),
        backgroundColor: '#c9e265',
      },
      {
        id: '15',
        name: 'sunnies',
        image: getPictogramResource('sunnies'),
        backgroundColor: '#c9e265',
      },
      {
        id: '16',
        name: 'sweater',
        image: getPictogramResource('sweater'),
        backgroundColor: '#c9e265',
      },
      {
        id: '17',
        name: 'trousers',
        image: getPictogramResource('trousers'),
        backgroundColor: '#c9e265',
      },
      {
        id: '18',
        name: 'tie',
        image: getPictogramResource('tie'),
        backgroundColor: '#c9e265',
      },
    ],
  },
];

export const pictogramSections: Pictogram[] = pictogramsList.map(
  (pictogram) => pictogram.section
);
