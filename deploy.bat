@echo off
echo ========================================
echo    DeepIotics - Hostinger Deployment
echo ========================================
echo.

echo [1/4] Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed!
    pause
    exit /b 1
)

echo.
echo [2/4] Building project for production...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo.
echo [3/4] Creating deployment package...
cd dist
if exist "..\dist.zip" del "..\dist.zip"
powershell -command "Compress-Archive -Path '.\*' -DestinationPath '..\dist.zip' -Force"
cd ..

echo.
echo [4/4] Deployment package ready!
echo.
echo ========================================
echo           DEPLOYMENT READY!
echo ========================================
echo.
echo Files ready for Hostinger upload:
echo - dist.zip (Upload and extract in public_html)
echo - OR upload dist/ folder contents directly
echo.
echo Next Steps:
echo 1. Login to Hostinger hPanel
echo 2. Go to File Manager
echo 3. Navigate to public_html
echo 4. Upload dist.zip and extract
echo 5. OR upload all files from dist/ folder
echo.
echo Your website will be live at your domain!
echo ========================================
pause