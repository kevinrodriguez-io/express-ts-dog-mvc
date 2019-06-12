import express = require('express');
import swaggerUi = require('swagger-ui-express');
import bodyParser = require('body-parser');
import swaggerDocument = require('./swagger.json');
import DogRouter from './routes/dog';

const app: express.Application = express();
const appPort = 3000;

app.use(bodyParser.json());
app.use('/dogs', DogRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(
  appPort,
  (): void => {
    console.log(`Listening at: ${appPort}`);
  }
);
