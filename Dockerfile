# First stage: Build the React app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy all source files and build the React app
COPY . .
RUN npm run build

# Use a minimal image to store the build output
FROM alpine:latest
WORKDIR /output
COPY --from=builder /app/build .

CMD ["cp", "-r", "/output", "/app/build"]
