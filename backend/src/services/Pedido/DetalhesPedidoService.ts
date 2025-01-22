import prismaClient from "../../prisma";

interface OrderRequest {
    id: string
}

class DetalhesPedidosService {
    async execute({ id }: OrderRequest) {
        const detalhes = await prismaClient.item.findMany({
            where: {
                fk_Id_Pedido: id
            },
            orderBy: {
                data_Criacao: 'desc'
            },
            include: {
                produto: true,
                pedido: true
            }
        })

        return detalhes;
    }
}

export { DetalhesPedidosService }