🔧 Playwright Test Project
📋 Summary
Цей репозиторій створений для автоматизації тестування за допомогою Playwright з TypeScript.
Проєкт використовується для виконання практичних завдань курсу та демонстрації базових можливостей автоматизованого тестування.

📁 Структура проєкту

```bash
├── tests/                 # Тестові файли
├── playwright.config.ts   # Конфігурація Playwright
├── package.json           # Опис проєкту та залежностей
├── tsconfig.json          # Налаштування TypeScript
└── README.md
```

🚀 Як запустити цей проект
Клонувати репозиторій та перейти в папку проєкту

```bash
git clone https://github.com/Luseka-star/auto_js_project.git
cd auto_js_project
```

Встановити залежності

```bash
npm install
npm init playwright@latest
```

Встановити браузери для Playwright

```bash
npx playwright install

```

Запустити всі тести

```bash
npx playwright test
```
Запустити конкретний тест

```bash
npx playwright test tests/login.spec.ts
```
Запустити тести в UI-режимі

```bash
npx playwright test --ui
```

⚙️ Технології
```bash
Playwright
TypeScript
Node.js
```

🛠 Поради
Не пушити зміни напряму в main — працювати у власних гілках і створювати Pull Request.

Перед пушем завжди переконуйтесь, що тести проходять локально.

