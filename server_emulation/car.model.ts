
export type CarModel = {
  id: number;
  name: string;
  typeBody: string;
  numDoors: number;
  licencePlate: string;
  mileage: number;
  cost: number;
  // image: object;
};

export function createCarModel({id, name, typeBody, numDoors, licencePlate, mileage, cost}: Partial<CarModel>): CarModel{
  return{
    id,
    name,
    typeBody,
    numDoors,
    licencePlate,
    mileage,
    cost
  }as CarModel;
}

