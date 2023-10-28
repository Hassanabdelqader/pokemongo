# Use an official Node.js runtime as the base image
FROM node:21

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that your Express.js application listens on (e.g., 3000)
EXPOSE 8080

# Start the Express.js application using wait-for-it.sh
CMD ["node", "src/index.js"]

