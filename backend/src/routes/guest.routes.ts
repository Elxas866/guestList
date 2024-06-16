import express from 'express';
import { GuestController } from '../controllers/guest.controller';

const router = express.Router();

router.get('/', GuestController.getAll);
router.post('/', GuestController.create);
router.delete('/:id', GuestController.delete);
router.put('/:id', GuestController.update);

export default router;