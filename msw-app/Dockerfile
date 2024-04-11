# Use an official Node runtime as the base image
FROM node:18.17.1
# Set the working directory in the Docker image to /msw-app
WORKDIR /msw-app
# Copy package.json and package-lock.json into the image
COPY package*.json ./
# Install the application dependencies inside the Docker image
RUN npm install
# Copy the rest of the application's source code into the Docker image
COPY . .
# Expose port 3000 to have it mapped by Docker daemon
EXPOSE 3000
# Define the command to run the app using CMD which defines the runtime
CMD [ "npm", "start" ]
