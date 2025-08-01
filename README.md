# 🔧 Playwright Test Project
**Course**: Yet Another JS Course  
**Date**: July 28  

## 📋 Summary

Цей репозиторій створений для автоматизації тестування за допомогою **Playwright** з **TypeScript**.  
Проєкт буде використовуватись для виконання практичних завдань протягом кількох тижнів курсу.

## 📁 Структура проєкту

.
├── tests/ # Тестові файли
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md

less
Copy
Edit

## 🚀 Як запустити

> ⚠️ Встанови [Node.js](https://nodejs.org/) перед початком роботи

1. Клонуй репозиторій:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Встанови залежності:

bash
Copy
Edit
npm install
Запусти тести:

bash
Copy
Edit
npx playwright test
⚙️ Технології
Playwright

TypeScript

Node.js

❌ .gitignore
У репозиторії налаштовано .gitignore, який ігнорує:

node_modules/

.playwright/

test-results/

інші згенеровані файли, які не варто трекати

🛠 Поради
Не пуш у main – працюємо в окремій гілці

Код має бути чистим, без зайвого

На цьому етапі не використовуємо Page Object Pattern або складні підходи

📚 Корисні посилання
Playwright Docs – Getting Started

Playwright Best Practices

YouTube: First Playwright test

