# First stage: Build the React app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy all source files and build the React app
COPY . .
RUN npm run build

# Use a minimal image to store and serve the build output
FROM alpine:latest

WORKDIR /usr/share/nginx/html

# Copy React build from the builder stage
COPY --from=builder /app/build .

# Ensure correct permissions
RUN chmod -R 755 /usr/share/nginx/html

CMD ["sh", "-c", "cp -r /usr/share/nginx/html /frontend_build"]