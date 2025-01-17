import prismaClient from "../../prisma";

class PerfilUsuarioService {
    async execute(user_id: string) {
        const usuario = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }, select: {
                id: true,
                nome: true,
                email: true
            }
        })

        return usuario;
    }
}

export { PerfilUsuarioService }