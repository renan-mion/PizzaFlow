import { Request, Response } from "express";
import { FiltrarProdutosService } from "../../services/Produto/FiltrarProdutosService";

class FiltrarProdutosController {
    async handle(req: Request, res: Response) {
        const id_categoria = req.query.id_categoria as string;

        const filtrarProdutosService = new FiltrarProdutosService();

        const produtos = await filtrarProdutosService.execute({ id_categoria });

        return res.json(produtos);
    }
}

export { FiltrarProdutosController }