import { Request, Response } from "express";
import { ListarCategoriaService } from "../../services/Categoria/ListarCategoriaService";

class ListarCategoriaController {
    async handle(req: Request, res: Response) {
        const listarCategoriaService = new ListarCategoriaService();

        const categorias = await listarCategoriaService.execute();

        console.log("erro");

        return res.json(categorias);
    }
}

export { ListarCategoriaController }