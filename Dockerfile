FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app
COPY build ./build
COPY server ./server

ENV NODE_ENV production
EXPOSE 8080

CMD ["--import=./server/build/register.js", "--es-module-specifier-resolution=node", "server/build/server.js"]