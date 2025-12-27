import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  throw new Error("RESEND_API_KEY is not defined in environment variables");
}
const resend = new Resend(apiKey);

interface EmailParams {
  email: string;
  subject: string;
  html: string;
}

async function sendEmail({ email, subject, html }: EmailParams) {
  const { data, error } = await resend.emails.send({
    from: "Churchify <support@frankmawuli.dev>",
    to: [email],
    subject: subject,
    html: html,
  });

  if (error) {
    throw error;
  }

  console.log({ data });
}

export default sendEmail;
