# Use the official Node.js image.
FROM node:16

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install app dependencies.
RUN npm install

# Copy application code.
COPY . .

# Expose the port the app runs on.
EXPOSE 5000

# Start the app.
CMD ["node", "server.js"]
