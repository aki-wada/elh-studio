@echo off
setlocal DisableDelayedExpansion
rem Open the HTML next to this launcher. No Python or web server is used.
set "HYDROPS_HTML=%~dp0ELH_Studio.html"
if not exist "%HYDROPS_HTML%" goto missing_html

rem ELH Studio works only in Google Chrome (1.3.1): look for Chrome in its standard install locations.
for %%B in ("%ProgramW6432%\Google\Chrome\Application\chrome.exe" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" "%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe") do (
    if exist "%%~B" (
        set "HYDROPS_BROWSER=%%~B"
        goto launch
    )
)
echo Google Chrome was not found in standard locations.
echo Install Google Chrome, or right-click ELH_Studio.html and open it with Chrome.
pause
exit /b 1

:launch
start "" "%HYDROPS_BROWSER%" --new-window "%HYDROPS_HTML%"
exit /b %errorlevel%

:missing_html
echo ELH_Studio.html was not found next to this BAT file.
echo Extract the entire distribution ZIP before running this launcher.
pause
exit /b 1
