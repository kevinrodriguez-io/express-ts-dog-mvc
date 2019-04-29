import express = require('express');
import Dog from '../model';

const router = express.Router();

const dogs: Dog[] = [
  { name: 'Puppy', age: 7 },
  { name: 'Sussy', age: 2 },
  { name: 'Kratos', age: 0.5 }
];

const getDogIndexByName = (dogName: string): number =>
  dogs.map((d): string => d.name).indexOf(dogName);

const dogExists = (dogName: string): boolean => getDogIndexByName(dogName) > -1;

router.get(
  '/',
  (req, res): void => {
    res.send(dogs);
  }
);

router.get(
  '/:dogName',
  (req, res): void => {
    const dogName = req.params.dogName as string;
    if (dogExists(dogName)) {
      res.send(dogs[getDogIndexByName(dogName)]);
    } else {
      res.status(404).send();
    }
  }
);

export default router;
