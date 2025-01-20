import prismaClient from "../../prisma";

interface ProductRequest {
    id_categoria: string
}

class FiltrarProdutosService {
    async execute({ id_categoria }: ProductRequest) {
        const produtos = await prismaClient.produto.findMany({
            where: {
                fk_Id_Categoria: id_categoria
            }
        })

        return produtos;
    }
}

export { FiltrarProdutosService }