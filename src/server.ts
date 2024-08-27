import express from 'express';
import { Request, Response } from 'express';


const app = express();

app.get('/', (_req: Request, res: Response) =>
    res.json({ message: 'active server' }),
);

export default app;
