@echo off
echo Starting BETMAN 688 Development Server with Tunnel...
echo.

echo [1] Starting Development Server...
cd /d "c:\Users\User\Desktop\New folder\gaming-link-bio"
start /B npm run dev

echo.
echo [2] Waiting for server to start...
timeout /t 10

echo.
echo [3] Starting ngrok tunnel...
cd /d "c:\Users\User\Desktop\New folder\gaming-link-bio"
npx localtunnel --port 3000

echo.
echo Tunnel and Development Server are running!
echo Press Ctrl+C to stop both services
pause
