import prismaClient from "../../prisma";

interface CategoryRequest {
    nome: string
}

class CadastrarCategoriaService {
    async execute({ nome }: CategoryRequest) {
        if (nome == '') {
            throw new Error("Nome inválido");
        }

        const categoria = await prismaClient.categoria.create({
            data: {
                nome: nome
            },
            select: {
                id: true,
                nome: true
            }
        })

        return categoria;
    }
}

export { CadastrarCategoriaService }