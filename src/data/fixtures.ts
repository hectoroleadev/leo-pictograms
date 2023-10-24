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
      name: 'Activity 1',
      image: getPictogramResource('craft-time'),
      backgroundColor: '#4e93af',
    },
    pictograms: [
      {
        id: '1',
        name: 'Activity 1',
        image: getPictogramResource('clean-up-time'),
        backgroundColor: '#4e93af',
      },
      {
        id: '2',
        name: 'Activity 3',
        image: getPictogramResource('craft-time'),
        backgroundColor: '#4e93af',
      },
      {
        id: '3',
        name: 'Activity 3',
        image: getPictogramResource('drawing'),
        backgroundColor: '#4e93af',
      },
      {
        id: '4',
        name: 'Activity 3',
        image: getPictogramResource('free-choice'),
        backgroundColor: '#4e93af',
      },
      {
        id: '5',
        name: 'Activity 3',
        image: getPictogramResource('game-time'),
        backgroundColor: '#4e93af',
      },
      {
        id: '6',
        name: 'Activity 3',
        image: getPictogramResource('relax'),
        backgroundColor: '#4e93af',
      },
      {
        id: '7',
        name: 'Activity 3',
        image: getPictogramResource('science'),
        backgroundColor: '#4e93af',
      },
      {
        id: '8',
        name: 'Activity 3',
        image: getPictogramResource('special-jobs'),
        backgroundColor: '#4e93af',
      },
      {
        id: '9',
        name: 'Activity 3',
        image: getPictogramResource('toilet-brake'),
        backgroundColor: '#4e93af',
      },
    ],
  },
  {
    section: {
      id: '2',
      name: 'Activity 2',
      image: getPictogramResource('t-shirt'),
      backgroundColor: '#c9e265',
    },
    pictograms: [
      {
        id: '10',
        name: 'Activity 1',
        image: getPictogramResource('t-shirt'),
        backgroundColor: '#c9e265',
      },
      {
        id: '11',
        name: 'Activity 3',
        image: getPictogramResource('jeans'),
        backgroundColor: '#c9e265',
      },
      {
        id: '12',
        name: 'Activity 3',
        image: getPictogramResource('scarf'),
        backgroundColor: '#c9e265',
      },
      {
        id: '13',
        name: 'Activity 3',
        image: getPictogramResource('shorts'),
        backgroundColor: '#c9e265',
      },
      {
        id: '14',
        name: 'Activity 3',
        image: getPictogramResource('socks'),
        backgroundColor: '#c9e265',
      },
      {
        id: '15',
        name: 'Activity 3',
        image: getPictogramResource('sunnies'),
        backgroundColor: '#c9e265',
      },
      {
        id: '16',
        name: 'Activity 3',
        image: getPictogramResource('sweater'),
        backgroundColor: '#c9e265',
      },
      {
        id: '17',
        name: 'Activity 3',
        image: getPictogramResource('trousers'),
        backgroundColor: '#c9e265',
      },
      {
        id: '18',
        name: 'Activity 3',
        image: getPictogramResource('tie'),
        backgroundColor: '#c9e265',
      },
    ],
  },
];

export const pictogramSections: Pictogram[] = pictogramsList.map(
  (pictogram) => pictogram.section
);
