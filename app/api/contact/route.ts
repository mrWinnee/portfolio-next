import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const data = await resend.emails.send({
            from: "My portfolio contact form",
            to: "yassinih490@gmail.com",
            subject: "New Contact Form Submission",
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}
