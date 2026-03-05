import { Router } from 'express';
import { z } from 'zod';
import {
  addParticipant,
  getParticipantsCount,
  getParticipantsNewestFirst
} from '../domain/participants';
import { PURCHASE_PRICE, WA_COUNTIES } from '../utils/constants';
import { initials, sanitizeName } from '../utils/format';

const participantsRouter = Router();

const participantSchema = z.object({
  name: z.string().optional().default(''),
  county: z.string().optional().default(''),
  email: z.string().optional().default('')
});

participantsRouter.get('/participants', (_req, res) => {
  const list = getParticipantsNewestFirst().map((participant) => ({
    id: participant.id,
    initials: initials(participant.fullName),
    county: participant.county,
    createdAt: participant.createdAt
  }));

  res.json({
    list,
    count: getParticipantsCount()
  });
});

participantsRouter.post('/participants', (req, res) => {
  const parsed = participantSchema.safeParse(req.body ?? {});

  if (!parsed.success) {
    return res.status(400).json({ error: 'Invalid JSON body.' });
  }

  const cleanName = sanitizeName(parsed.data.name);
  const county = String(parsed.data.county || '').trim();
  const email = String(parsed.data.email || '').trim().slice(0, 120);

  if (!cleanName) {
    return res.status(400).json({ error: 'Name is required.' });
  }

  if (!WA_COUNTIES.includes(county as (typeof WA_COUNTIES)[number])) {
    return res.status(400).json({ error: 'Valid Washington county is required.' });
  }

  const created = addParticipant({
    fullName: cleanName,
    county,
    email: email || null
  });

  const participantsCount = getParticipantsCount();

  return res.status(201).json({
    ok: true,
    stats: {
      purchasePrice: PURCHASE_PRICE,
      participantsCount,
      equalShare: participantsCount === 0 ? null : PURCHASE_PRICE / participantsCount
    },
    participant: {
      id: created.id,
      initials: initials(cleanName),
      county
    }
  });
});

export default participantsRouter;
