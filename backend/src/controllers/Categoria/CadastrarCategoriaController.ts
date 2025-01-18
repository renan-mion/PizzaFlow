import { Request, Response } from "express";
import { CadastrarCategoriaService } from "../../services/Categoria/CadastrarCategoriaService";

class CadastrarCategoriaController {
    async handle(req: Request, res: Response) {

        const { nome } = req.body;

        const cadastrarCategoriaService = new CadastrarCategoriaService();

        const categoria = await cadastrarCategoriaService.execute({ nome });

        return res.json(categoria);
    }
}

export { CadastrarCategoriaController }