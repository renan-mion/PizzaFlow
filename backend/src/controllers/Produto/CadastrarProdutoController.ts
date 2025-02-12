import { request, Request, Response } from "express";
import { CadastrarProdutoService } from "../../services/Produto/CadastrarProdutoService";
import { UploadedFile } from "express-fileupload";

import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

class CadastrarProdutoController {
    async handle(req: Request, res: Response) {
        const { nome, preco, descricao, id_categoria } = req.body;

        const cadastrarProdutoService = new CadastrarProdutoService();

        if (!req.files || Object.keys(req.files).length === 0) {
            throw new Error("Erro ao fazer upload de arquivo");
        } else {
            const imagem = req.files['file'] as UploadApiResponse;

            const imagemApi: UploadApiResponse = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({}, function(error, result) {
                                        if (error) {
                        reject(error);
                        return;
                    }

                    resolve(result);
                }).end(imagem.data)
            })

            console.log(imagemApi);
            const banner = imagemApi.url;
            const produto = await cadastrarProdutoService.execute({ nome, preco, descricao, banner , id_categoria });

            return res.json({});
        }
    }
}

export { CadastrarProdutoController }

