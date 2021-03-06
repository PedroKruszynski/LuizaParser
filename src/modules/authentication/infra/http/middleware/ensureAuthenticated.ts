
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '@shared/errors/AppError';
import authConfig from '@config/auth';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('JWT token is missing', 401);
    }

    try {
        const decode = verify(authHeader, authConfig.jwt.secret);

        const { sub } = decode as TokenPayload;

        request.token = {
            value: sub,
        };

        return next();
    } catch {
        throw new AppError('Invalid JWT token', 401);
    }
}
