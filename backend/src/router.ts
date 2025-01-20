import { Router } from "express";
import multer from "multer";
import { CadastrarUsuarioController } from "./controllers/Usuario/CadastrarUsuarioController";
import { AuthUsuarioController } from "./controllers/Usuario/AuthUsuarioController";
import { PerfilUsuarioController } from "./controllers/Usuario/PerfilUsuarioController";

import { CadastrarCategoriaController } from "./controllers/Categoria/CadastrarCategoriaController";
import { ListarCategoriaController } from "./controllers/Categoria/ListarCategoriaController";
import { CadastrarProdutoController } from "./controllers/Produto/CadastrarProdutoController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// Rotas do Usuário
router.post('/cadastro', new CadastrarUsuarioController().handle);
router.post('/login', new AuthUsuarioController().handle);
router.get('/perfil', isAuthenticated, new PerfilUsuarioController().handle);

// Rotas de Categoria
router.post('/cadastro-categoria', isAuthenticated, new CadastrarCategoriaController().handle)
router.get('/listar-categorias', isAuthenticated, new ListarCategoriaController().handle);

// Rotas de Produto
router.post('/cadastro-produto', isAuthenticated, upload.single('file'), new CadastrarProdutoController().handle);

export { router };