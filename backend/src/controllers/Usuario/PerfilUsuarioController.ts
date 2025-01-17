import { Request, Response } from "express";
import { PerfilUsuarioService } from "../../services/Usuario/PerfilUsuarioService";

class PerfilUsuarioController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        console.log("Id do usuário: ", user_id);

        const perfilUsuarioService = new PerfilUsuarioService();

        const usuario = await perfilUsuarioService.execute();

        return res.json(usuario);
    }
}

export { PerfilUsuarioController }