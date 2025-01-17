import { Request, Response } from "express";
import { PerfilUsuarioService } from "../../services/Usuario/PerfilUsuarioService";

class PerfilUsuarioController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const perfilUsuarioService = new PerfilUsuarioService();

        const usuario = await perfilUsuarioService.execute(user_id);

        return res.json(usuario);
    }
}

export { PerfilUsuarioController }