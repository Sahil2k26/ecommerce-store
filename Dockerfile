# Base image
FROM node:22-alpine AS base

# Set working directory
WORKDIR /src

# Install dependencies (leverage caching)
COPY package.json package-lock.json* ./
RUN npm install

# Copy rest of the source code
COPY . .

# Expose Next.js default port
EXPOSE 3001

# Use .env file if present (Next.js handles this automatically)
CMD ["npm", "run", "dev"]
