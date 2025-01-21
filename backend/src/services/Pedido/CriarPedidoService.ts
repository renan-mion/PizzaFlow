import prismaClient from "../../prisma";

interface OrderRequest {
    mesa: number,
    nome: string
}

class CriarPedidoService {
    async execute({ mesa, nome }: OrderRequest) {
        const pedido = await prismaClient.pedido.create({
            data: {
                mesa: mesa,
                nome: nome
            }
        })

        return pedido;
    }
}

export { CriarPedidoService }