# Настройка переменных окружения

## Создание .env файла

1. Скопируйте `.env.example` в `.env`:
```bash
cp .env.example .env
```

2. Заполните переменные в `.env` файле:

```env
# Google Apps Script URL
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# WhatsApp Configuration
VITE_WHATSAPP_PHONE_NUMBER=+77771234567

# Meta Pixel Configuration
VITE_META_PIXEL_ID=YOUR_PIXEL_ID

# Google Sheets Configuration
VITE_GOOGLE_SHEETS_ID=YOUR_SHEETS_ID
```

## Описание переменных

- `VITE_GOOGLE_APPS_SCRIPT_URL` - URL вашего Google Apps Script
- `VITE_WHATSAPP_PHONE_NUMBER` - номер телефона для WhatsApp (в международном формате)
- `VITE_META_PIXEL_ID` - ID вашего Meta Pixel
- `VITE_GOOGLE_SHEETS_ID` - ID вашей Google Sheets таблицы

## Важно

- Файл `.env` добавлен в `.gitignore` и не будет загружен в репозиторий
- Все переменные должны начинаться с `VITE_` для работы с Vite
- После изменения `.env` файла перезапустите сервер разработки
