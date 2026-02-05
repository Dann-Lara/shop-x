import { ENV } from '../config/env.js';

/**
 * Genera un enlace de WhatsApp con un mensaje predeterminado o personalizado.
 * @param {string} message - El texto que aparecerá en el chat del usuario.
 */

export const getWhatsAppLink = (message = "") => {
    const baseUrl = `https://wa.me/${ENV.WHATSAPP_NUMBER}`;
    if (!message) return baseUrl;
    
    const encodedMessage = encodeURIComponent(message);
    return `${baseUrl}?text=${encodedMessage}`;
};

export const getMapsLink = () => ENV.GOOGLE_MAPS_LINK;