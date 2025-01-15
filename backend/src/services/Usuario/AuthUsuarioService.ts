import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest {
    email: string;
    senha: string;
}

class AuthUsuarioService {
    async execute({ email, senha }: AuthRequest) {
        // Verficando se o email existe
        const usuario = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if (!usuario) {
            throw new Error ("Email incorreto");
        }

        // Verificar se a senha está correta
        const senhaCombina = await compare(senha, usuario.senha);

        if (!senhaCombina) {
            throw new Error("Senha incorreta")
        }

        return { login: "Usuário logado com sucesso"};
    }
}

export { AuthUsuarioService };