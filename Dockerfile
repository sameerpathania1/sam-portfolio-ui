FROM node:20-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy all source files
COPY . .

# Build the React app
RUN npm run build

# Install a minimal Express server
RUN npm install express path

# Create a simple Express server
RUN echo "const express = require('express'); \
          const path = require('path'); \
          const app = express(); \
          app.use(express.static(path.join(__dirname, 'build'))); \
          app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html'))); \
          app.listen(3000, () => console.log('Server running on port 3000'));" > server.js

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
