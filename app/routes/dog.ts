import express = require('express');
import {
  getDog,
  getDogs,
  createDog,
  deleteDog,
  partiallyUpdateDog,
  updateDog
} from '../controllers/dog';

const router = express.Router();

router.get('/', getDogs);
router.get('/:id', getDog);
router.post('/', createDog);
router.put('/:id', updateDog);
router.patch('/:id', partiallyUpdateDog);
router.delete('/:id', deleteDog);

export default router;
