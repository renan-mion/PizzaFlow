"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const multer_2 = __importDefault(require("./config/multer"));
const CadastrarUsuarioController_1 = require("./controllers/Usuario/CadastrarUsuarioController");
const AuthUsuarioController_1 = require("./controllers/Usuario/AuthUsuarioController");
const PerfilUsuarioController_1 = require("./controllers/Usuario/PerfilUsuarioController");
const CadastrarCategoriaController_1 = require("./controllers/Categoria/CadastrarCategoriaController");
const ListarCategoriaController_1 = require("./controllers/Categoria/ListarCategoriaController");
const CadastrarProdutoController_1 = require("./controllers/Produto/CadastrarProdutoController");
const FiltrarProdutosController_1 = require("./controllers/Produto/FiltrarProdutosController");
const CriarPedidoController_1 = require("./controllers/Pedido/CriarPedidoController");
const EnviarPedidoController_1 = require("./controllers/Pedido/EnviarPedidoController");
const FecharPedidoController_1 = require("./controllers/Pedido/FecharPedidoController");
const ListarPedidosController_1 = require("./controllers/Pedido/ListarPedidosController");
const DetalhesPedidoController_1 = require("./controllers/Pedido/DetalhesPedidoController");
const ConcluirPedidoController_1 = require("./controllers/Pedido/ConcluirPedidoController");
const AdicionarItemController_1 = require("./controllers/Item/AdicionarItemController");
const RemoverItemController_1 = require("./controllers/Item/RemoverItemController");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
// Rotas do Usuário
router.post('/cadastro', new CadastrarUsuarioController_1.CadastrarUsuarioController().handle);
router.post('/login', new AuthUsuarioController_1.AuthUsuarioController().handle);
router.get('/perfil', isAuthenticated_1.isAuthenticated, new PerfilUsuarioController_1.PerfilUsuarioController().handle);
// Rotas de Categoria
router.post('/cadastro-categoria', isAuthenticated_1.isAuthenticated, new CadastrarCategoriaController_1.CadastrarCategoriaController().handle);
router.get('/listar-categorias', isAuthenticated_1.isAuthenticated, new ListarCategoriaController_1.ListarCategoriaController().handle);
// Rotas de Produto
router.post('/cadastro-produto', isAuthenticated_1.isAuthenticated, new CadastrarProdutoController_1.CadastrarProdutoController().handle);
router.get('/filtrar-produtos', isAuthenticated_1.isAuthenticated, new FiltrarProdutosController_1.FiltrarProdutosController().handle);
// Rotas de Pedido
router.post('/criar-pedido', isAuthenticated_1.isAuthenticated, new CriarPedidoController_1.CriarPedidoController().handle);
router.put('/enviar-pedido', isAuthenticated_1.isAuthenticated, new EnviarPedidoController_1.EnviarPedidoController().handle);
router.delete('/fechar-pedido', isAuthenticated_1.isAuthenticated, new FecharPedidoController_1.FecharPedidoController().handle);
router.get('/listar-pedidos', isAuthenticated_1.isAuthenticated, new ListarPedidosController_1.ListarPedidosController().handle);
router.get('/detalhes-pedido', isAuthenticated_1.isAuthenticated, new DetalhesPedidoController_1.DetalhesPedidosController().handle);
router.put('/concluir-pedido', isAuthenticated_1.isAuthenticated, new ConcluirPedidoController_1.ConcluirPedidoController().handle);
// Rotas de Item
router.post('/adicionar-item', isAuthenticated_1.isAuthenticated, new AdicionarItemController_1.AdicionarItemController().handle);
router.delete('/remover-item', isAuthenticated_1.isAuthenticated, new RemoverItemController_1.RemoverItemController().handle);
