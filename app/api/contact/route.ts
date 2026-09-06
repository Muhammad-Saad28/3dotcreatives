import { NextResponse } from "next/server";
import { resend, CONTACT_EMAIL, buildContactEmailHtml, type ContactFormData } from "@/lib/resend";

interface RequestBody {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.service || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const formData: ContactFormData = {
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim() || "",
      company: body.company?.trim() || "",
      service: body.service,
      message: body.message.trim(),
    };

    await resend.emails.send({
      from: `3dotcreatives Contact <${CONTACT_EMAIL}>`,
      to: CONTACT_EMAIL,
      subject: `New Website Inquiry — ${formData.name}`,
      html: buildContactEmailHtml(formData),
      replyTo: formData.email,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
