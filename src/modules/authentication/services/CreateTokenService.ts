import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';

import authConfig from '@config/auth';

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    token: string;
}

@injectable()
class CreateTokenService {
    constructor() {}

    public async execute(): Promise<IResponse> {

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            expiresIn,
        });

        return {
            token,
        };
    }
}

export default CreateTokenService;
