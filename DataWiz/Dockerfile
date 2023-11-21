# Use an official Node runtime as a base image
FROM node:18.13.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Vite project
RUN npm run build

# Stage 2: Use a smaller image for serving the application
FROM nginx:alpine

# Copy the build output from the previous stage to the NGINX public directory
COPY --from=0 /usr/src/app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run the Nginx server
CMD ["nginx", "-g", "daemon off;"]