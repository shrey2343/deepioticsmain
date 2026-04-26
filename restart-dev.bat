@echo off
echo Stopping any running Node processes...
taskkill /F /IM node.exe 2>nul

echo Clearing Vite cache...
if exist node_modules\.vite rmdir /s /q node_modules\.vite
if exist dist rmdir /s /q dist

echo Starting dev server on port 3000...
start cmd /k npm run dev

echo.
echo Dev server is starting...
echo Open http://localhost:3000 in your browser
echo Press Ctrl+Shift+R to hard refresh the page
echo.
pause
