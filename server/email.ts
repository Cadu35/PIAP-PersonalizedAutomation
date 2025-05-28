import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function notifyCreadores(projectRequest: any, criadores: any[]): Promise<void> {
  const subject = `Nova Solicitação de Projeto - ${projectRequest.tipoProjet}`;
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1976D2;">Nova Solicitação de Projeto na PIAP</h2>
      
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333;">Detalhes do Projeto</h3>
        <p><strong>Cliente:</strong> ${projectRequest.nome}</p>
        <p><strong>Email:</strong> ${projectRequest.email}</p>
        <p><strong>Tipo:</strong> ${projectRequest.tipoProjet}</p>
        <p><strong>Orçamento:</strong> ${projectRequest.orcamento || 'A definir'}</p>
        <p><strong>Prazo:</strong> ${projectRequest.prazo || 'Flexível'}</p>
        
        <h4 style="color: #333;">Descrição:</h4>
        <p style="background: white; padding: 15px; border-radius: 4px;">${projectRequest.descricao}</p>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://piap.com.br" style="background: #FF9800; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
          Ver Projeto na Plataforma
        </a>
      </div>
      
      <p style="color: #666; font-size: 12px;">
        Este email foi enviado automaticamente pela PIAP - Plataforma de Intermediação para Automação Personalizada.
      </p>
    </div>
  `;

  const textContent = `
    Nova Solicitação de Projeto na PIAP
    
    Cliente: ${projectRequest.nome}
    Email: ${projectRequest.email}
    Tipo: ${projectRequest.tipoProjet}
    Orçamento: ${projectRequest.orcamento || 'A definir'}
    Prazo: ${projectRequest.prazo || 'Flexível'}
    
    Descrição: ${projectRequest.descricao}
    
    Acesse a plataforma PIAP para ver mais detalhes e entrar em contato com o cliente.
  `;

  for (const criador of criadores) {
    await sendEmail({
      to: criador.email,
      from: 'noreply@piap.com.br',
      subject,
      text: textContent,
      html: htmlContent,
    });
  }
}