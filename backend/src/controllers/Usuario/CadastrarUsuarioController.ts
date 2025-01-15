import { Request, Response } from "express";
import { CadastrarUsuarioService } from "../../services/Usuario/CadastrarUsuarioService";

class CadastrarUsuarioController {
    async handle(req:Request, res:Response) {
        const { nome, email, senha } = req.body;

        const cadastrarUsuarioService = new CadastrarUsuarioService();

        const usuario = await cadastrarUsuarioService.execute({nome, email, senha});

        return res.json(usuario);
    }
}

export { CadastrarUsuarioController }