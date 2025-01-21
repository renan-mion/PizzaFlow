import prismaClient from "../../prisma";

interface OrderRequest {
    id: string
}

class FecharPedidoService {
    async execute({ id }: OrderRequest) {
        const pedido = await prismaClient.pedido.delete({
            where: {
                id: id
            }
        });

        return pedido;
    }
}

export { FecharPedidoService }