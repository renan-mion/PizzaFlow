import prismaClient from "../../prisma"

class ListarCategoriaService {
    async execute() {
        const categorias = await prismaClient.categoria.findMany({
            select: {
                id: true,
                nome: true
            }
        })

        return categorias
    }
}

export { ListarCategoriaService }