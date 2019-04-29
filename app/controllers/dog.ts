import Dog, { Dogs } from './../models/dog';
import { Request, Response } from 'express';

export const getDogs = (req: Request, res: Response): void => {
  res.send(Dogs);
};

export const getDog = (req: Request, res: Response): void => {
  const dogName = req.params.id as string;
  const dogIndex = Dogs.map((dog): string => dog.name).indexOf(dogName);
  if (dogIndex !== -1) {
    res.send(Dogs[dogIndex]);
  } else {
    res.status(404).send();
  }
};

export const createDog = (req: Request, res: Response): void => {
  const dog = req.body as Dog;
  Dogs.push(dog);
  res.send(dog);
};

export const updateDog = (req: Request, res: Response): void => {
  const dog = { ...req.body, ...req.params };
  const dogIndex = Dogs.map((dog): string => dog.name).indexOf(dog.id);
  if (dogIndex > -1) {
    const matchingDog = Dogs[dogIndex];
    matchingDog.name = dog.name;
    matchingDog.age = dog.age;
    res.send(matchingDog);
  } else {
    res.status(404).send();
  }
};

export const partiallyUpdateDog = (req: Request, res: Response): void => {
  const dog = { ...req.body, ...req.params };
  const dogIndex = Dogs.map((dog): string => dog.name).indexOf(dog.id);
  if (dogIndex > -1) {
    const matchingDog = Dogs[dogIndex];
    if (dog.name !== undefined) matchingDog.name = dog.name;
    if (dog.age !== undefined) matchingDog.age = dog.age;
    res.send();
  } else {
    res.status(404).send();
  }
};

export const deleteDog = (req: Request, res: Response): void => {
  const dogName = req.params.id as string;
  const dogIndex = Dogs.map((dog): string => dog.name).indexOf(dogName);
  if (dogIndex > -1) {
    Dogs.splice(dogIndex, 1);
    res.status(200).send();
  } else {
    res.status(404).send();
  }
};
