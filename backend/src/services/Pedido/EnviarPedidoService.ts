import prismaClient from "../../prisma";

interface OrderRequest {
    id: string
}

class EnviarPedidoService {
    async execute({ id }: OrderRequest) {
        const pedido = await prismaClient.pedido.update({
            data: {
                rascunho: false
            },
            where: {
                id: id
            }
        })

        return pedido;
    }
}

export { EnviarPedidoService }