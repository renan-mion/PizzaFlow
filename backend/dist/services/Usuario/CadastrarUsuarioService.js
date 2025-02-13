"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastrarUsuarioService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
class CadastrarUsuarioService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nome, email, senha }) {
            // Verificar se ele enviou um email
            if (!email) {
                throw new Error("Email incorreto");
            }
            // Verificar se esse email já está cadastrado na plataforma
            const usuarioJaExiste = yield prisma_1.default.user.findFirst({ where: {
                    email: email
                } });
            if (usuarioJaExiste) {
                throw new Error("Usuário já existe");
            }
            const senhaHash = yield (0, bcryptjs_1.hash)(senha, 8);
            // Cadastrar novo usuário
            const usuario = yield prisma_1.default.user.create({
                data: {
                    nome: nome,
                    email: email,
                    senha: senhaHash
                },
                select: {
                    id: true,
                    nome: true,
                    email: true
                }
            });
            return usuario;
        });
    }
}
exports.CadastrarUsuarioService = CadastrarUsuarioService;
