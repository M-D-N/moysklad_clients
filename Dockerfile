FROM node:20-alpine

WORKDIR /app

# 'serve' paketini global o'rnatamiz
RUN npm install -g serve

# Loyiha fayllarini konteynerga nusxalash
COPY . .

# Port sozlamasi (standart: 3000)
ENV PORT=3000
EXPOSE 3000

# Loyihani serve orqali ishga tushirish (-s: SPA rejimi, -l: port)
CMD ["sh", "-c", "serve -s . -l ${PORT}"]
