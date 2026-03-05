import { Router } from 'express';
import { getParticipantsCount } from '../domain/participants';
import { PURCHASE_PRICE } from '../utils/constants';

const statsRouter = Router();

statsRouter.get('/stats', (_req, res) => {
  const participantsCount = getParticipantsCount();
  res.json({
    purchasePrice: PURCHASE_PRICE,
    participantsCount,
    equalShare: participantsCount === 0 ? null : PURCHASE_PRICE / participantsCount
  });
});

export default statsRouter;
