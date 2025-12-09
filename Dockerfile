# ============================
# 1. Build Stage
# ============================
FROM node:lts-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install

COPY . .
RUN npm run build


# ============================
# 2. Run Stage (Static Server)
# ============================
FROM node:lts-alpine

WORKDIR /app

# Install static server globally
RUN npm install -g serve

# Copy built Astro site
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Serve static files at port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]