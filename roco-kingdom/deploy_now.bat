@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo ╔══════════════════════════════════════════╗
echo ║     洛克王国攻略站 - Vercel 部署       ║
echo ╚══════════════════════════════════════════╝
echo.
echo 首次部署会打开浏览器进行登录验证
echo 登录后 Vercel 会自动完成部署
echo.
echo 按任意键开始部署...
pause >nul
echo.
npx vercel --prod
echo.
echo ─────────────────────────────────────────
echo  部署完成！按任意键退出...
pause >nul
