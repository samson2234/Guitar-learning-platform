@echo off
echo.
echo ==========================================
echo   StringMaster Next.js Launcher
echo ==========================================
echo.

:: Check if Node is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not found on this computer.
    echo Please install it from https://nodejs.org/
    echo.
    pause
    exit /b
)

echo [INFO] Node.js found. Verifying version...
node --version
echo.

echo [INFO] Installing dependencies (this may take a minute)...
call npm.cmd install
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies.
    pause
    exit /b
)

echo.
echo [INFO] Starting development server...
echo [INFO] Once started, open http://localhost:3000 in your browser.
echo.

call npm.cmd run dev

pause
