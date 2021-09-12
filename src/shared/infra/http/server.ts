import 'reflect-metadata';

require('dotenv').config()

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import AppError from '@shared/errors/AppError';
import routes from './routes';

import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    console.log(err.message)
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});

app.get('/', (request: Request, response: Response) => {
    return response.status(200).json({
        status: 'success',
        message: 'Server online',
    });
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Server started on port ${process.env.APP_PORT}!`);
});
