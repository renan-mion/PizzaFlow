import prismaClient from "../../prisma";

interface ProductRequest {
    nome: string,
    preco: string,
    descricao: string,
    banner: string,
    id_categoria: string
}

class CadastrarProdutoService {
    async execute({ nome, preco, descricao, banner, id_categoria }: ProductRequest) {
        return { ok: true }
    }
}

export { CadastrarProdutoService }