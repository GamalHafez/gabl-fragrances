/** import * as brevo from '@getbrevo/brevo';

const SENDER = {
  email: process.env.EMAIL_SENDER_ADDRESS ?? 'no-reply@example.com',
  name: 'Gabal Fragrances',
};

const isEmailConfigured = Boolean(process.env.BREVO_API_KEY);

let apiInstance: brevo.TransactionalEmailsApi | null = null;
if (isEmailConfigured) {
  apiInstance = new brevo.TransactionalEmailsApi();
  apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY!,
  );
}

type OrderConfirmationData = {
  orderNumber: number;
  customerName: string;
  customerContact: string;
  total: string;
  items: {
    productName: string;
    sizeML: number;
    quantity: number;
    unitPrice: string;
  }[];
};

export const emailService = {
  async sendOrderConfirmation(order: OrderConfirmationData) {
    if (!isEmailConfigured || !apiInstance) {
      console.log(
        `[email:disabled] Would send order confirmation for #${order.orderNumber} to ${order.customerContact}`,
      );
      return;
    }

    const email = new brevo.SendSmtpEmail();
    email.to = [{ email: order.customerContact, name: order.customerName }];
    email.sender = SENDER;
    email.subject = `Order #${order.orderNumber} confirmed — Gabal Fragrances`;
    email.htmlContent = buildOrderConfirmationHtml(order);

    try {
      await apiInstance.sendTransacEmail(email);
    } catch (error) {
      console.error('Failed to send order confirmation email:', error);
    }
  },
};

function buildOrderConfirmationHtml(order: OrderConfirmationData): string {
  const itemsHtml = order.items
    .map(
      (item) =>
        `<li>${item.productName} (${item.sizeML}ml) × ${item.quantity} — ${item.unitPrice} EGP</li>`,
    )
    .join('');

  return `
    <h1>Thanks, ${order.customerName}!</h1>
    <p>Your order #${order.orderNumber} has been confirmed.</p>
    <ul>${itemsHtml}</ul>
    <p><strong>Total: ${order.total} EGP</strong></p>
  `;
}
*/
