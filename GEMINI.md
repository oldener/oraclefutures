Тепер потрібно синхронізувати AuthModal з системою перекладу. Зроби наступне:

Translations: Переконайся, що у файлі src/app/i18n/translations.ts у об'єктах en та ua є секція auth з усіма полями (title, username, email, password, confirm, submit).

AuthModal Hook: Відкрий AuthModal.jsx (або .tsx).

Видали будь-який захардкоджений український або англійський текст.

Імпортуй хук: import { useLanguage } from '../i18n/LanguageContext'; (перевір правильність шляху).

Всередині компонента отримай поточні переклади: const { t } = useLanguage();.

Заміни всі тексти в інпутах та заголовках на змінні з t.auth, наприклад: {t.auth.title}, {t.auth.username}, {t.auth.submit}.

Validation Messages: Також заміни повідомлення про помилки (наприклад, 'Password too short') на переклади з контексту t.auth.errorPasswordShort тощо.

Після цього при зміні мови в хедері модальне вікно має змінюватися миттєво разом з усім сайтом.