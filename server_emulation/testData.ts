import {CarModel} from './car.model';

export const testData: CarModel[] = [
  {
    id: 1,
    name: 'Ferrari F1',
    typeBody: 'sedan',
    numDoors: 3,
    licencePlate: 'A001AA',
    mileage: 16000,
    cost: 10000000
  },
  {
    id: 2,
    name: 'Lada 21010',
    typeBody: 'sedan',
    numDoors: 5,
    licencePlate: 'A021AA',
    mileage: 160100,
    cost: 100100
  },
  {
    id: 3,
    name: 'Lada 2107',
    typeBody: 'sedan',
    numDoors: 5,
    licencePlate: 'B021AA',
    mileage: 16000,
    cost: 70000
  },
  {
    id: 4,
    name: 'UAZ 3010',
    typeBody: 'off-road',
    numDoors: 5,
    licencePlate: 'B021KA',
    mileage: 160100,
    cost: 100100
  },
  {
    id: 5,
    name: 'Kamaz',
    typeBody: 'truck',
    numDoors: 2,
    licencePlate: 'K021AM',
    mileage: 160100,
    cost: 100100
  },
];
