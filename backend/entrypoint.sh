#!/bin/bash
set -e
# NOTE: Make sure the file is encoded with LF (Unix) line endings.

# Run Prisma commands
echo "Database is up. Running Prisma commands..."
npm run prisma:generate

# Start the application
echo "Starting the application..."
node index.js
