# Loyiha endi Next.js'da — shuning uchun ikki bosqich: builder va runner.
# (Avvalgi izohda aytilganidek: build bosqichi paydo bo'lsa, 2 stage ishlatiladi.)

# ---------- 1-bosqich: yig'ish ----------
FROM node:24-alpine AS builder
WORKDIR /app

# Avval faqat manifestlar — qatlam keshi buzilmasin
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# next.config.mjs'dagi output: "standalone" tufayli
# .next/standalone ichida minimal server yig'iladi
RUN npm run build

# ---------- 2-bosqich: ishga tushirish ----------
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# standalone server + statik fayllar
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
