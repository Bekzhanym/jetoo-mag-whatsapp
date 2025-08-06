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
 * Создает сообщение для бонуса на основе результатов теста
 * @param level - уровень пользователя
 * @param score - количество баллов
 * @param correctAnswers - количество правильных ответов
 * @param totalQuestions - общее количество вопросов
 */
export const createBonusMessage = (
  level: string,
  score: number,
  correctAnswers: number,
  totalQuestions: number
): string => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  return `Сәлем! 👋\n\nМен тестті тапсырдым және бонустық сыйлықты алуға қызығушылық танытамын! 🎁\n\n📊 Менің нәтижем:\n• Деңгей: ${level}\n• Ұпай: ${score}\n• Дұрыс жауаптар: ${correctAnswers}/${totalQuestions}\n• Пайыз: ${percentage}%\n\nСіздің деңгейіме арналған арнайы видеосабақты алуға қызығушылық танытамын! 🎬\n\nРахмет! 🙏`;
}; 