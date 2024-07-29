import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import logger from './config/logger';
import authRoute from '../src/routes/auth';
import { HttpError } from 'http-errors';
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to auth service');
});

app.use('/auth', authRoute);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    });
});

export default app;
