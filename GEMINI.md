Знайди в усьому проєкті (особливо в папці src/) рядки, де використовується http://localhost:5000.

Заміни їх на ${import.meta.env.VITE_API_URL || 'http://localhost:5000'}.

Переконайся, що в файлі src/app/components/AuthModal.jsx (або подібних) запити fetch тепер виглядають так: fetch(\${import.meta.env.VITE_API_URL}/api/auth/${endpoint}`, ...)`

Перевір файл vite.config.ts або .env — якщо там є proxy, переконайся, що він не заважає.

Після виправлення виведи список файлів, де було знайдено localhost.