import express = require('express');
import bodyParser = require('body-parser');
import DogController from './dog/controller';

const app: express.Application = express();
const appPort = 3000;

app.use(bodyParser.json());
app.use('/dogs', DogController);

app.listen(
  appPort,
  (): void => {
    console.log(`Listening at: ${appPort}`);
  }
);
