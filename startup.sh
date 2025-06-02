#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Install dependencies
echo "Installing dependencies..."
npm install --legacy-peer-deps

# Build the project
echo "Building the project..."
npm run build

# Start the application on port 9000 (as defined in package.json start script)
echo "Starting the application on port 9000..."
npm run start
