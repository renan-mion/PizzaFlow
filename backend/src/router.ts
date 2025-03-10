import { Router } from "express";
import multer from "multer";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import uploadConfig from "./config/multer";

import { CadastrarUsuarioController } from "./controllers/Usuario/CadastrarUsuarioController";
import { AuthUsuarioController } from "./controllers/Usuario/AuthUsuarioController";
import { PerfilUsuarioController } from "./controllers/Usuario/PerfilUsuarioController";

import { CadastrarCategoriaController } from "./controllers/Categoria/CadastrarCategoriaController";
import { ListarCategoriaController } from "./controllers/Categoria/ListarCategoriaController";

import { CadastrarProdutoController } from "./controllers/Produto/CadastrarProdutoController";
import { FiltrarProdutosController } from "./controllers/Produto/FiltrarProdutosController";

import { CriarPedidoController } from "./controllers/Pedido/CriarPedidoController";
import { EnviarPedidoController } from "./controllers/Pedido/EnviarPedidoController";
import { FecharPedidoController } from "./controllers/Pedido/FecharPedidoController";
import { ListarPedidosController } from "./controllers/Pedido/ListarPedidosController";
import { DetalhesPedidosController } from "./controllers/Pedido/DetalhesPedidoController";
import { ConcluirPedidoController } from "./controllers/Pedido/ConcluirPedidoController";

import { AdicionarItemController } from "./controllers/Item/AdicionarItemController";
import { RemoverItemController } from "./controllers/Item/RemoverItemController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// Rotas do Usuário
router.post('/cadastro', new CadastrarUsuarioController().handle);
router.post('/login', new AuthUsuarioController().handle);
router.get('/perfil', isAuthenticated, new PerfilUsuarioController().handle);

// Rotas de Categoria
router.post('/cadastro-categoria', isAuthenticated, new CadastrarCategoriaController().handle);
router.get('/listar-categorias', isAuthenticated, new ListarCategoriaController().handle);

// Rotas de Produto
router.post('/cadastro-produto', isAuthenticated, new CadastrarProdutoController().handle);
router.get('/filtrar-produtos', isAuthenticated, new FiltrarProdutosController().handle)

// Rotas de Pedido
router.post('/criar-pedido', isAuthenticated, new CriarPedidoController().handle);
router.put('/enviar-pedido', isAuthenticated, new EnviarPedidoController().handle);
router.delete('/fechar-pedido', isAuthenticated, new FecharPedidoController().handle);
router.get('/listar-pedidos', isAuthenticated, new ListarPedidosController().handle);
router.get('/detalhes-pedido', isAuthenticated, new DetalhesPedidosController().handle);
router.put('/concluir-pedido', isAuthenticated, new ConcluirPedidoController().handle);

// Rotas de Item
router.post('/adicionar-item', isAuthenticated, new AdicionarItemController().handle);
router.delete('/remover-item', isAuthenticated, new RemoverItemController().handle);

export { router };