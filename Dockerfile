# 1. Node.js 24-alpine bazaviy imidjidan foydalanamiz
FROM node:24-alpine

# 2. Konteyner ichidagi asosiy ishchi katalogni belgilaymiz
WORKDIR /app

# 3. Statik fayllarni tarqatish uchun 'serve' paketini global o'rnatamiz
RUN npm install -g serve

# 4. Loyiha fayllarini konteynerga nusxalaymiz
# Eslatma: Ushbu loyihada build (yig'ish) jarayoni talab etilmaydi (tayyor HTML/statik fayllar).
# Agar kelgusida loyihaga build bosqichi qo'shilsa, faqat 2 ta stage (builder va runner) ishlatiladi.
COPY . .

# 5. Loyihani serve orqali 3000-portda ishga tushiramiz
# Eslatma: Talabga muvofiq USER, EXPOSE va boshqa ortiqcha qo'shimchalar ishlatilmadi
CMD ["serve", "-s", ".", "-l", "3000"]
