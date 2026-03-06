@echo off
cd /d ""C:\Users\edgar\OneDrive\Documentos\Proyectos\prueba agrotimes\"
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless --disable-gpu --print-to-pdf=salida.pdf "file:///%cd:\=/%/index.html"
pause