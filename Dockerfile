# Build Stage
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Run Stage
FROM node:20-alpine
WORKDIR /app

# Copy the entire dist folder to keep browser/ and server/ relative to each other
COPY --from=build /app/dist/musambi-console /app/dist/musambi-console

# Cloud Run defaults to 8080, but we'll use the variable to be safe
ENV PORT=8080
EXPOSE 8080

# Angular SSR entry point
# We use 'sh -c' so that the $PORT environment variable is expanded correctly
CMD ["sh", "-c", "node dist/musambi-console/server/server.mjs --port=$PORT --host=0.0.0.0"]
