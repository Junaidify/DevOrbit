# use Node JS base image
FROM node:18

# set Working Directory 
WORKDIR /app

# Copy package file and install dependances
COPY package*.json ./
RUN npm install

# Copy all the backend Files
COPY . .

# Expose backend PORT 
EXPOSE 5000

# Start the server
CMD [ "node", "index.js" ]