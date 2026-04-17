import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`,
            to: "info@pugliacompliance.com",
            replyTo: email,
            subject: "Nuovo contatto dal sito Puglia Compliance",
            text: `Nome: ${name}\nEmail: ${email}\nMessaggio: ${message}`,
            html: `<p><strong>Nome:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Messaggio:</strong><br>${message}</p>`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
                debug: {
                    SMTP_USER: process.env.SMTP_USER ?? "MISSING",
                    SMTP_PASS: process.env.SMTP_PASS ? "SET" : "MISSING",
                },
            },
            { status: 500 }
        );
    }
}
