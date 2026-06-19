FROM node:20-alpine
WORKDIR /app
COPY . .
ENV NODE_ENV=production
# Railway/Heroku geven zelf een PORT mee; server.js leest process.env.PORT
CMD ["node", "server.js"]
