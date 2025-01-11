import { Router, Request, Response, response } from "express";

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    return res.json({
        teste: 'OK'
    })
});

export { router };