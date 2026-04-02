import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes/jobRoutes'


dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/jobs', router)

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
