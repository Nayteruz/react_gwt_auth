# Сервис авторизации с jsonwebtoken
Данные .env для сервера
```
PORT=5000
DB_URL= //url mongodb
JWT_ACCESS_SECRET=test_test //любая нужная строка
JWT_REFRESH_SECRET=test_test //любая нужная строка
SMTP_HOST=smtp.mail.ru // тут отправляю через mail.ru можно через любой например gmail.com
SMTP_PORT= // порт хоста
SMTP_USER= // почта пользователя с которого будут приходить письма
SMTP_PASSWORD= // пароль от почты, либо в mail.ru для этого генерируется специальный хеш
API_URL= // адрес api backend, например http://localhost:5000
CLIENT_URL= // адрес frontend, например http://localhost:3000
```
