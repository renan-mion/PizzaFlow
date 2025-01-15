import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    nome: string;
    email: string;
    senha: string;
}

class CadastrarUsuarioService {
    async execute({nome, email, senha}: UserRequest) {
        // Verificar se ele enviou um email
        if(!email) {
            throw new Error("Email incorreto");
        }

        // Verificar se esse email já está cadastrado na plataforma
        const usuarioJaExiste = await prismaClient.user.findFirst({where:{
            email:email
        }})

        if(usuarioJaExiste) {
            throw new Error("Usuário já existe");
        }

        const senhaHash = await hash(senha, 8);

        // Cadastrar novo usuário
        const usuario = await prismaClient.user.create({
            data:{
                nome: nome,
                email: email,
                senha: senhaHash
            },
            select:{
                id: true,
                nome: true,
                email: true
            }
        });

        return usuario;
    }
}
export { CadastrarUsuarioService };