#!/bin/bash

# Start both backend and frontend servers
# Usage: npm run dev-all (if configured in root package.json)

echo "Starting WhatsUp Backend and Frontend..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if backend directory exists
if [ ! -d "backend" ]; then
    echo "Error: backend directory not found"
    exit 1
fi

# Check if frontend directory exists
if [ ! -d "frontend" ]; then
    echo "Error: frontend directory not found"
    exit 1
fi

echo -e "${BLUE}Installing backend dependencies...${NC}"
cd backend
npm install
cd ..

echo -e "${BLUE}Installing frontend dependencies...${NC}"
cd frontend
npm install
cd ..

echo -e "${GREEN}Dependencies installed successfully!${NC}"
echo ""
echo -e "${BLUE}Starting servers...${NC}"
echo "Backend running on: http://localhost:5000"
echo "Frontend running on: http://localhost:5173"
echo ""

# Start both servers in parallel
cd backend && npm run dev &
BACKEND_PID=$!

cd ../frontend && npm run dev &
FRONTEND_PID=$!

# Handle Ctrl+C to kill both processes
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; echo ''; echo 'Servers stopped'" EXIT

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
