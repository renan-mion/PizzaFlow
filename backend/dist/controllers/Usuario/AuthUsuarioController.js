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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUsuarioController = void 0;
const AuthUsuarioService_1 = require("../../services/Usuario/AuthUsuarioService");
class AuthUsuarioController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha } = req.body;
            const authUsuarioService = new AuthUsuarioService_1.AuthUsuarioService();
            const auth = yield authUsuarioService.execute({ email, senha });
            return res.json(auth);
        });
    }
}
exports.AuthUsuarioController = AuthUsuarioController;
