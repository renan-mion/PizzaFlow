import { Request, Response } from "express";
import { CadastrarProdutoService } from "../../services/Produto/CadastrarProdutoService";

class CadastrarProdutoController {
    async handle(req: Request, res: Response) {
        const { nome, preco, descricao, id_categoria } = req.body;

        const cadastrarProdutoService = new CadastrarProdutoService();

        if (!req.file) {
            throw new Error("Erro ao fazer upload de arquivo");
        } else {
            const { originalname, filename: banner } = req.file;

            const produto = await cadastrarProdutoService.execute({ nome, preco, descricao, banner, id_categoria });

            return res.json(produto);
        }
    }
}

export { CadastrarProdutoController }

