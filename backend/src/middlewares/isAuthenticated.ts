import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: string
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    // Receber o token
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).end;
    }

    const [, authToken] = token.split(" ");

    try {
        const { sub } = verify(authToken, process.env.JWT_SECRET) as PayLoad;

        // Recuperar o id do token e coloccar dentro de uma variável dentro do request
        req.user_id = sub;

        return next();
    } catch(err) {
        return res.status(401).end();
    }
}