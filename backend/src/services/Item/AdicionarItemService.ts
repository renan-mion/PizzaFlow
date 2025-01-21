import prismaClient from "../../prisma";

interface ItemRequest {
    quantidade: number,
    id_pedido: string,
    id_produto: string
}

class AdicionarItemService {
    async execute({ quantidade, id_pedido, id_produto}: ItemRequest) {
        const item = await prismaClient.item.create({
            data: {
                quantidade: quantidade,
                fk_Id_Pedido: id_pedido,
                fk_Id_Produto: id_produto
            }
        })

        return item;
    }
}

export { AdicionarItemService }