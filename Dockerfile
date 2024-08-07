FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app
COPY build ./build
COPY server .

ENV NODE_ENV production
EXPOSE 8080

CMD ["--import=./backend/register.js", "--es-module-specifier-resolution=node", "backend/server.js"]