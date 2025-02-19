import prismaClient from "../../prisma";

class ListarPedidosService {
    async execute() {
        const pedidos = await prismaClient.pedido.findMany({
            where: {
                rascunho: false,
                AND: {
                    status: false
                }
            },
            orderBy: {
                data_Criacao: 'desc'
            }
        })

        return pedidos;
    }
}

export { ListarPedidosService }