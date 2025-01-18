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
        const produto = await prismaClient.produto.create({
            data: {
                nome: nome,
                preco: preco,
                descricao: descricao,
                banner: banner,
                fk_Id_Categoria: id_categoria
            }
        })
        
        return produto;
    }
}

export { CadastrarProdutoService }