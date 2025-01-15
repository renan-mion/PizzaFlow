import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

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

        // Gerar token após login dar certo
        const token = sign({
            nome: usuario.nome,
            email: usuario.email
        },  process.env.JWT_SECRET, {
            subject: usuario.id, 
            expiresIn: '30d'
        }
        );

        return { 
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            token: token
        };
    }
}

export { AuthUsuarioService };