@echo off
echo ========================================
echo MySQL Database Setup
echo ========================================
echo.

echo Creating database 'monitoring_db'...
mysql -u root -e "CREATE DATABASE IF NOT EXISTS monitoring_db;"

if %errorlevel% equ 0 (
    echo.
    echo ✓ Database created successfully!
    echo.
    echo Next steps:
    echo 1. Run: npm run db:push
    echo 2. Run: npm run db:seed
    echo 3. Run: npm run dev
    echo.
) else (
    echo.
    echo ✗ Failed to create database.
    echo.
    echo Please make sure:
    echo - MySQL server is running
    echo - MySQL is in your PATH
    echo - User 'root' has no password or update .env file
    echo.
)

pause
