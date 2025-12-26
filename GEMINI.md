У файлі src/app/components/AuthModal.tsx заміни рядок з fetch на цей (БЕЗ localhost):

const response = await fetch(\${import.meta.env.VITE_API_URL}/api/auth/${endpoint}`, {`

Після цього:

Виконай git add .

Виконай git commit -m "fix: total removal of localhost from build"

Виконай git push

Скажи мені, коли закінчиш.