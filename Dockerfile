FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app
COPY build ./build
COPY server .

ENV NODE_ENV production
EXPOSE 8080

CMD ["--es-module-specifier-resolution=node", "backend/server.js"]