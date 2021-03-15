//import {testData} from "./testData";

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin','*')
  res.json([{ id: 1, name: 'Ferrari F1', typeBody: 'sedan', numDoors: 3, licencePlate: 'A001AA', mileage: 16000, cost: 10000000 }, { id: 2, name: 'Lada 21010', typeBody: 'sedan', numDoors: 5, licencePlate: 'A021AA', mileage: 160100, cost: 100100 }, { id: 3, name: 'Lada 2107', typeBody: 'sedan', numDoors: 5, licencePlate: 'B021AA', mileage: 16000, cost: 70000 }, { id: 4, name: 'UAZ 3010', typeBody: 'off-road', numDoors: 5, licencePlate: 'B021KA', mileage: 160100, cost: 100100 }, { id: 5, name: 'Kamaz', typeBody: 'truck', numDoors: 2, licencePlate: 'K021AM', mileage: 160100, cost: 100100 }]) // pipe(Map(testData)))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
