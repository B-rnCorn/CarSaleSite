//import {testData} from "./testData";
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express')
const app = express()
const port = 3001

const JWT_Secret = 'your_secret_key';
app.use(cors());
app.use(bodyParser.json());

var testUser = { id: 10,
  first_name: 'Sergey',
  last_name: 'Sulimenko',
  phone: '+79328493742',
  email: 'sergey-sulimenko@mail.ru',
  password: '1234',
  active: true};

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin','*')
  res.json(  [{"id":1,"brand":"Volkswagen","model":"Golf GT","engineCapacity":1.8,"enginePower":265.9,"vin":"JTJBM7FX2D5932555","year":1999,"mileage":97082,"bodyType":"Хэтчбэк","color":"Aquamarine","price":2586048,"manager":"Zelda Pavolillo","customerId":null},{"id":2,"brand":"Skoda","model":"Octavia A7","engineCapacity":2.0,"enginePower":138.5,"vin":"SCBCU8ZA8AC180200","year":1992,"mileage":73946,"bodyType":"Седан","color":"Blue","price":593140,"manager":"Zelda Pavolillo","customerId":9},{"id":3,"brand":"Lexus","model":"LS500","engineCapacity":3.5,"enginePower":235.5,"vin":"SCBGH3ZA7EC800470","year":2002,"mileage":71334,"bodyType":"Внедорожник","color":"Violet","price":2634990,"manager":"Zelda Pavolillo","customerId":null},{"id":4,"brand":"Mitsubishi","model":"Outlander","engineCapacity":2.0,"enginePower":161.5,"vin":"5N1AA0NE7EN961058","year":1994,"mileage":78179,"bodyType":"Кроссовер","color":"Purple","price":3781103,"manager":"Suki Ellcome","customerId":null},{"id":5,"brand":"Lexus","model":"LS500","engineCapacity":3.5,"enginePower":235.5,"vin":"3C3CFFJH0DT529111","year":2008,"mileage":153287,"bodyType":"Внедорожник","color":"Teal","price":1280211,"manager":"Zelda Pavolillo","customerId":null},{"id":6,"brand":"Honda","model":"XJ","engineCapacity":3.0,"enginePower":251.3,"vin":"JTHFF2C24F2238835","year":2004,"mileage":32202,"bodyType":"Кроссовер","color":"Maroon","price":3954843,"manager":"Suki Ellcome","customerId":5},{"id":7,"brand":"Volkswagen","model":"Golf GT","engineCapacity":1.8,"enginePower":265.9,"vin":"WBAEN33444E664623","year":1987,"mileage":115929,"bodyType":"Хэтчбэк","color":"Maroon","price":856377,"manager":"Anthony McGinty","customerId":null},{"id":8,"brand":"Toyota","model":"Camry","engineCapacity":3.5,"enginePower":155.2,"vin":"JTHBK1GGXD2439078","year":2010,"mileage":128524,"bodyType":"Седан","color":"Goldenrod","price":2293068,"manager":"Anthony McGinty","customerId":null},{"id":9,"brand":"Skoda","model":"Octavia A7","engineCapacity":2.0,"enginePower":138.5,"vin":"1G6AB5RX7F0261634","year":2001,"mileage":99100,"bodyType":"Седан","color":"Puce","price":1123042,"manager":"Zelda Pavolillo","customerId":null},{"id":10,"brand":"Toyota","model":"Rav4","engineCapacity":2.5,"enginePower":175.2,"vin":"WBANE53526C961554","year":2006,"mileage":104742,"bodyType":"Внедорожник","color":"Red","price":2898430,"manager":"Zelda Pavolillo","customerId":null}]) // pipe(Map(testData)))
})

app.post('/reg',(req, res) => {
  res.header('Access-Control-Allow-Origin','*')
  console.log(req.body.email);
  console.log(res.body);
  testUser.password=req.body.password;
  testUser.email=req.body.email;
})

app.post('/login', (req, res) => {
  res.header('Access-Control-Allow-Origin','*')
  if (req.body) {
    var user = req.body;
    console.log(user)

    if (testUser.email===req.body.email && testUser.password === req.body.password) {
      var token = jwt.sign(user, JWT_Secret);
      res.status(200).send({
        signed_user: testUser,
        token: token
      });
    } else {
      res.status(403).send({
        errorMessage: 'Authorisation required!'
      });
    }
  } else {
    res.status(403).send({
      errorMessage: 'Please provide email and password'
    });
  }
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

