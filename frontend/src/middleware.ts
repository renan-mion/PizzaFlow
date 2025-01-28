import { NextRequest, NextResponse } from "next/server";
import { getCookieServer } from "./lib/cookieServer";
import { headers } from "next/headers";
import { api } from "./services/api";

export async function middleware(req: NextRequest, res: NextResponse) {
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/_next") || pathname === "/") {
        return NextResponse.next();
    }

    const token = await getCookieServer();

    if (pathname.startsWith("/dashboard")) {
        if (token) {
            const isValid = await validateToken(token);

            if (!isValid) {
                return NextResponse.redirect(new URL("/", req.url));
            }
        } else {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }
}

async function validateToken(token: string) {
    if (!token)
        return false;

    try {
        await api.get("perfil", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}