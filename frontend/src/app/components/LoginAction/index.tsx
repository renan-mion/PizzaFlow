"use server"

import { api } from '@/services/api';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function loginAction(formData: FormData) {

    const email = formData.get("email");
    const senha = formData.get("senha");

    try {
        const response = await api.post('/login', {
            email,
            senha
        });

        if (!response.data.token) {
            return;
        }

        console.log(response.data);

        const cookie = await cookies();

        const tempoExpiracao = 1000 * 60 * 60 * 24 * 30;

        cookie.set("session", response.data.token, {
            maxAge: tempoExpiracao,
            path: "/",
            httpOnly: false,
            secure: process.env.NODE_ENV === "production"
        })

    } catch (err) {
        console.log("Erro");
        console.log(err);
    }

    redirect("/dashboard");
}