FROM gcr.io/distroless/nodejs:18

WORKDIR /app
COPY build ./build
COPY server ./server

ENV NODE_ENV production
EXPOSE 8080

CMD ["--experimental-modules", "--es-module-specifier-resolution=node", "server/build/server.js"]
