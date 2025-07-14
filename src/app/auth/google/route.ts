"use server";

import { NextRequest, NextResponse } from "next/server";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

export async function POST(req: NextRequest) {
    const { token } = await req.json();

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();

        if (!payload) {
            return NextResponse.json({ error: "Token inválido" }, { status: 401 });
        }

        const { email, name, sub, picture, email_verified } = payload;

        return NextResponse.json({
            authenticated: true,
            user: { id: sub, name, email, picture, email_verified },
        });
    } catch (err) {
        return NextResponse.json({ error: "Error al verificar token" }, { status: 401 });
    }
}
