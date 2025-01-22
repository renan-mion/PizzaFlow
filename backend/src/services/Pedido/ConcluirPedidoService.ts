import prismaClient from "../../prisma";

interface OrderRequest {
    id: string
}

class ConcluirPedidoService {
    async execute({ id }: OrderRequest) {
        const pedido = await prismaClient.pedido.update({
            data: {
                status: true
            }, 
            where: {
                id: id
            }
        })

        return pedido;
    }
}

export { ConcluirPedidoService }