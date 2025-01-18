import { Router } from "express";
import { CadastrarUsuarioController } from "./controllers/Usuario/CadastrarUsuarioController";
import { AuthUsuarioController } from "./controllers/Usuario/AuthUsuarioController";
import { PerfilUsuarioController } from "./controllers/Usuario/PerfilUsuarioController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CadastrarCategoriaController } from "./controllers/Categoria/CadastrarCategoriaController";
import { ListarCategoriaController } from "./controllers/Categoria/ListarCategoriaController";

const router = Router();

// Rotas do Usuário
router.post('/cadastro', new CadastrarUsuarioController().handle);
router.post('/login', new AuthUsuarioController().handle);
router.get('/perfil', isAuthenticated, new PerfilUsuarioController().handle);

// Rotas de Categoria
router.post('/cadastro-categoria', isAuthenticated, new CadastrarCategoriaController().handle)
router.get('/listar-categorias', isAuthenticated, new ListarCategoriaController().handle);

export { router };