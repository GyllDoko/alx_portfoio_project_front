# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine 
# Set the working directory to /react inside the container
WORKDIR /react
# Copy react files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN yarn install --pure-lockfile
# Build the react
RUN yarn build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the react will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the react
CMD [ "npx", "serve", "build" ]