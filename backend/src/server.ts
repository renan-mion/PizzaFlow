import express, { Request, Response, NextFunction, json } from "express";
import 'express-async-errors';
import cors from 'cors';
import { router } from "./router";
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use('/files', 
    express.static(path.resolve(__dirname, '..', 'tmp')));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        // Se for uma instância do tipo error
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'internal server error.'
    })
})

app.listen(3333, () => {
    console.log("Servidor iniciado");
})