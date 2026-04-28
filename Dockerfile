FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24-slim

WORKDIR /app
COPY build ./build
COPY server .
COPY node_modules ./node_modules

ENV NODE_ENV=production
EXPOSE 8080

CMD ["--es-module-specifier-resolution=node", "backend/server.js"]