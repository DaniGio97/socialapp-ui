@echo off
REM Script per build Angular e copia su cartella IIS
echo Build del progetto Angular in corso...

REM Costruisci il progetto Angular in modalità production
call npm run build

REM Percorso di destinazione per IIS (modificabile se necessario)
SET DEST_PATH="C:\inetpub\wwwroot\socialapp"

REM Cancella vecchi file
IF EXIST %DEST_PATH% (
    echo Rimozione vecchi file...
    rmdir /S /Q %DEST_PATH%
)

REM Crea la cartella di destinazione
mkdir %DEST_PATH%

REM Copia i nuovi file generati
xcopy /E /I /Y .\dist\socialapp-ui\browser\* %DEST_PATH%

echo Deploy completato con successo!
pause
