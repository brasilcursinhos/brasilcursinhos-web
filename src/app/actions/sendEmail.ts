'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: { nome: string; email: string; mensagem: string }) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'contato@brasilcursinhos.org',
      subject: `[CONTATO SITE] Mensagem de ${formData.nome}`,
      html: `<p><strong>Nome:</strong> ${formData.nome}</p>
             <p><strong>E-mail:</strong> ${formData.email}</p>
             <p><strong>Mensagem:</strong><br/>${formData.mensagem}</p>`,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: 'Falha interna no servidor' };
  }
}