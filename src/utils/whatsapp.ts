/**
 * Утилиты для работы с WhatsApp
 */

export interface WhatsAppConfig {
  phoneNumber?: string;
  defaultMessage?: string;
}

/**
 * Открывает WhatsApp с заданным сообщением
 * @param message - сообщение для отправки
 * @param phoneNumber - номер телефона (опционально)
 */
export const openWhatsApp = (message: string, phoneNumber?: string): void => {
  let url = 'https://wa.me/';
  
  if (phoneNumber) {
    // Убираем все символы кроме цифр из номера телефона
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    url += cleanPhone;
  }
  
  url += `?text=${encodeURIComponent(message)}`;
  
  window.open(url, '_blank');
};

/**
 * Создает сообщение для бонуса
 */
export const createBonusMessage = (): string => {
  return `Сәлем! 20% жеңілдікпен курсқа тіркелгім келеді.`;
}; 