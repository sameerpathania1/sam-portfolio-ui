# First stage: Build the React app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy all source files and build the React app
COPY . .
RUN npm run build

# Second stage: Serve the built app with Express
FROM node:20-alpine

WORKDIR /app

# Copy built React app from the builder stage
COPY --from=builder /app/build ./build

# Install a minimal Express server
RUN npm install express path http-proxy-middleware

# Create a simple Express server with API proxy
RUN echo "const express = require('express'); \
          const path = require('path'); \
          const { createProxyMiddleware } = require('http-proxy-middleware'); \
          const app = express(); \
          app.use(express.static(path.join(__dirname, 'build'))); \
          app.use('/api', createProxyMiddleware({ target: 'http://portfolio-backend:3001', changeOrigin: true })); \
          app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html'))); \
          app.listen(3000, () => console.log('Server running on port 3000'));" > server.js

          
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
