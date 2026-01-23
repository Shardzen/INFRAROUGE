@echo off
echo ====================================
echo  INFRAROUGE - BUILD ET DEPLOIEMENT
echo ====================================
echo.

echo [1/3] Installation des dependances...
call npm install

echo.
echo [2/3] Build de production...
call npm run build

echo.
echo [3/3] Pret pour le deploiement!
echo.
echo OPTIONS DE DEPLOIEMENT:
echo.
echo 1. Netlify CLI:
echo    netlify deploy --prod
echo.
echo 2. Drag and Drop:
echo    Ouvrir https://app.netlify.com/drop
echo    Glisser le dossier 'dist'
echo.
echo 3. Git Push:
echo    Connecter le repo a Netlify
echo    Push vers main/master
echo.

pause
