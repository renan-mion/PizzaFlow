import { Router } from "express";
import { CadastrarUsuarioController } from "./controllers/Usuario/CadastrarUsuarioController";
import { AuthUsuarioController } from "./controllers/Usuario/AuthUsuarioController";

const router = Router();

router.post('/cadastro', new CadastrarUsuarioController().handle);
router.post('/login', new AuthUsuarioController().handle);

export { router };