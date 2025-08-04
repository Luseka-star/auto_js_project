# 🔧 Playwright Test Project


## 📋 Summary

Цей репозиторій створений для автоматизації тестування за допомогою **Playwright** з **TypeScript**.  
Проєкт буде використовуватись для виконання практичних завдань протягом кількох тижнів курсу.

## 📁 Структура проєкту
```bash
.
├── tests/ # Тестові файли
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```


## 🚀 Як запустити цей проект

1. Клонуй репозиторій та перейди в папку проєкту:

```bash
git clone https://github.com/Luseka-star/auto_js_project.git
cd auto_js_project
git checkout Unit-10
```

2. Встанови залежності:
   ```bash

   npm install
   ```

3. Встанови браузери для Playwright:
    ```bash
      npx playwright install
   ```
   
Запусти всі тести:
  ```bash
        npx playwright test
   ```



⚙️ Технології
Playwright
TypeScript
Node.js

❌ .gitignore
У репозиторії налаштовано .gitignore, який ігнорує:
```bash
node_modules/
.playwright/
test-results/

```
🛠 Поради
Не пуш у main – працюємо в окремій гілці




