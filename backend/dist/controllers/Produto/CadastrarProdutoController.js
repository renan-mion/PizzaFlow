"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastrarProdutoController = void 0;
const CadastrarProdutoService_1 = require("../../services/Produto/CadastrarProdutoService");
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
class CadastrarProdutoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, preco, descricao, id_categoria } = req.body;
            const cadastrarProdutoService = new CadastrarProdutoService_1.CadastrarProdutoService();
            if (!req.files || Object.keys(req.files).length === 0) {
                throw new Error("Erro ao fazer upload de arquivo");
            }
            else {
                const imagem = req.files['file'];
                const imagemApi = yield new Promise((resolve, reject) => {
                    cloudinary_1.v2.uploader.upload_stream({}, function (error, result) {
                        if (error) {
                            reject(error);
                            return;
                        }
                        resolve(result);
                    }).end(imagem.data);
                });
                console.log(imagemApi);
                const banner = imagemApi.url;
                const produto = yield cadastrarProdutoService.execute({ nome, preco, descricao, banner, id_categoria });
                return res.json({});
            }
        });
    }
}
exports.CadastrarProdutoController = CadastrarProdutoController;
