# Build Stage
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Run Stage
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist/musambi-console /app/dist/musambi-console
EXPOSE 8080
# Angular SSR entry point
CMD ["node", "dist/musambi-console/server/server.mjs"]
