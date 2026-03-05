import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import statsRouter from './routes/stats';
import participantsRouter from './routes/participants';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 5001);
const isProduction = process.env.NODE_ENV === 'production';

app.use(cors());
app.use(express.json());

app.use((err: unknown, _req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof SyntaxError) {
    return res.status(400).json({ error: 'Invalid JSON body.' });
  }
  return next(err);
});

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.use('/api', statsRouter);
app.use('/api', participantsRouter);
app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'Not found.' });
});

if (isProduction) {
  const clientDist = path.resolve(__dirname, '../../client/dist');
  app.use(express.static(clientDist));
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api/')) {
      return res.status(404).json({ error: 'Not found.' });
    }
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
