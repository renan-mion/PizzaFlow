import { Router } from "express";
import { CadastrarUsuarioController } from "./controllers/Usuario/CadastrarUsuarioController";

const router = Router();

router.post('/cadastro', new CadastrarUsuarioController().handle)

export { router };