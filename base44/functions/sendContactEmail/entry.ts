import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 });
    }

    const emailBody = `
Neue Kontaktanfrage von der Website:

Name: ${name}
E-Mail: ${email}
Unternehmen: ${company || '—'}

Nachricht:
${message}
    `.trim();

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: 'info@stahlcomputer.de',
      subject: `Neue Anfrage von ${name}`,
      body: emailBody,
      from_name: 'Stahl Computer Systemhaus Website',
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});