"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = isAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    // Receber o token
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).end;
    }
    const [, authToken] = token.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(authToken, process.env.JWT_SECRET);
        // Recuperar o id do token e coloccar dentro de uma variável dentro do request
        req.user_id = sub;
        return next();
    }
    catch (err) {
        return res.status(401).end();
    }
}
