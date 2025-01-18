import { Request, Response } from "express";
import { CadastrarCategoriaService } from "../../services/Categoria/CadastrarCategoriaService";
import { CadastrarProdutoService } from "../../services/Produto/CadastraProdutoService";

class CadastrarProdutoController {
    async handle(req: Request, res: Response) {
        const { nome, preco, descricao, banner, id_categoria } = req.body;

        const cadastrarProdutoService = new CadastrarProdutoService();

        const produto = await cadastrarProdutoService.execute({ nome, preco, descricao, banner, id_categoria });

        return res.json(produto);
    }
}

export { CadastrarProdutoController }

