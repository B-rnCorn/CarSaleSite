import {ID} from '@datorama/akita';

export type CarModel = {
  id: ID;
  brand: string;
  model: string;
  engineCapacity: number;
  enginePower: number;
  vin: string;
  year: number;
  bodyType: string;
  color: string;
  price: number;
  manager: string;
  customerId: number;
  // image: object;
};

export function createCarModel({id, brand, model, engineCapacity, enginePower, vin, year, bodyType, color, price, customerId
}: Partial<CarModel>): CarModel {
  return {
    id,
    brand,
    model,
    engineCapacity,
    enginePower,
    vin,
    year,
    bodyType,
    color,
    price,
    customerId
  } as CarModel;
}

