import { BrevoClient } from '@getbrevo/brevo';

const SENDER = {
  email: process.env.EMAIL_SENDER_ADDRESS ?? 'no-reply@example.com',
  name: 'Gabal Fragrances',
};

const apiKey = process.env.BREVO_API_KEY;

const brevo = apiKey ? new BrevoClient({ apiKey }) : null;

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

function buildOrderDeliveredHtml(order: OrderConfirmationData): string {
  const itemsHtml = order.items
    .map(
      (item) =>
        `<li>${escapeHtml(item.productName)} (${item.sizeML}ml) × ${item.quantity}</li>`,
    )
    .join('');

  return `
    <!doctype html>
    <html lang="en">
      <body>
        <h1>Your order has been delivered, ${escapeHtml(order.customerName)}!</h1>
        <p>Order #${order.orderNumber} was delivered. We hope you love it.</p>
        <ul>${itemsHtml}</ul>
        <p>Thank you for choosing Gabal Fragrances.</p>
      </body>
    </html>
  `;
}

function buildOrderDeliveredText(order: OrderConfirmationData): string {
  const items = order.items
    .map(
      (item) => `- ${item.productName} (${item.sizeML}ml) x ${item.quantity}`,
    )
    .join('\n');

  return [
    `Your order has been delivered, ${order.customerName}!`,
    `Order #${order.orderNumber} was delivered. We hope you love it.`,
    '',
    items,
    '',
    'Thank you for choosing Gabal Fragrances.',
  ].join('\n');
}

export const emailService = {
  async sendOrderConfirmation(order: OrderConfirmationData) {
    if (!brevo) {
      console.info(
        `[email:disabled] Order #${order.orderNumber}; recipient: ${order.customerContact}`,
      );
      return;
    }

    try {
      await brevo.transactionalEmails.sendTransacEmail({
        to: [
          {
            email: order.customerContact,
            name: order.customerName,
          },
        ],
        sender: SENDER,
        subject: `Order #${order.orderNumber} confirmed — Gabal Fragrances`,
        htmlContent: buildOrderDeliveredHtml(order),
        textContent: buildOrderDeliveredText(order),
      });
    } catch (error) {
      // Email failure must not turn a successfully created order
      // into a failed checkout response.
      console.error(
        `Failed to send confirmation for order #${order.orderNumber}:`,
        error,
      );
    }
  },

  async sendOrderDelivered(order: OrderConfirmationData) {
    if (!brevo) {
      console.info(
        `[email:disabled] Order #${order.orderNumber} delivered; recipient: ${order.customerContact}`,
      );
      return;
    }

    try {
      await brevo.transactionalEmails.sendTransacEmail({
        to: [{ email: order.customerContact, name: order.customerName }],
        sender: SENDER,
        subject: `Order #${order.orderNumber} delivered — Gabal Fragrances`,
        htmlContent: buildOrderDeliveredHtml(order),
        textContent: buildOrderDeliveredText(order),
      });
    } catch (error) {
      console.error(
        `Failed to send delivered email for order #${order.orderNumber}:`,
        error,
      );
    }
  },
};

function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  return value.replace(
    /[&<>"']/g,
    (character) => entities[character] ?? character,
  );
}
