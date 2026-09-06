import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "re_dummy_key_for_build";

export const resend = new Resend(resendApiKey);

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "hello@3dotcreatives.com";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export function buildContactEmailHtml(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background-color:#F4EBDD;font-family:Arial,Helvetica,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4EBDD;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">
              <tr>
                <td style="background-color:#303522;padding:32px 40px;">
                  <h1 style="color:#F4EBDD;margin:0;font-size:24px;letter-spacing:2px;">3DOTCREATIVES</h1>
                  <p style="color:#D8C3A5;margin:8px 0 0;font-size:13px;letter-spacing:1px;">NEW WEBSITE INQUIRY</p>
                </td>
              </tr>
              <tr>
                <td style="padding:40px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #F4EBDD;">
                        <span style="color:#59613B;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Name</span><br>
                        <span style="color:#303522;font-size:16px;">${data.name}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #F4EBDD;">
                        <span style="color:#59613B;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</span><br>
                        <span style="color:#303522;font-size:16px;">${data.email}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #F4EBDD;">
                        <span style="color:#59613B;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Phone</span><br>
                        <span style="color:#303522;font-size:16px;">${data.phone || "Not provided"}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #F4EBDD;">
                        <span style="color:#59613B;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Company</span><br>
                        <span style="color:#303522;font-size:16px;">${data.company || "Not provided"}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #F4EBDD;">
                        <span style="color:#59613B;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Service</span><br>
                        <span style="color:#303522;font-size:16px;">${data.service}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;">
                        <span style="color:#59613B;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</span><br>
                        <span style="color:#303522;font-size:16px;line-height:1.6;">${data.message}</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="background-color:#F4EBDD;padding:20px 40px;text-align:center;">
                  <p style="color:#59613B;font-size:12px;margin:0;">Sent from 3dotcreatives contact form</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
