@echo off
chcp 65001 >nul
echo.
echo ==========================================
echo   洛克王国攻略站 - 部署脚本
echo ==========================================
echo.
echo  请选择部署平台:
echo.
echo   [1] Vercel (推荐) - 全球CDN最快
echo   [2] Netlify - 最简单，可拖拽上传
echo   [3] GitHub Pages - 最稳定
echo   [4] Surge.sh - 无需注册账号
echo.

set /p choice="请输入数字 (1/2/3/4): "

if "%choice%"=="1" goto vercel
if "%choice%"=="2" goto netlify
if "%choice%"=="3" goto github
if "%choice%"=="4" goto surge
echo 无效选择
pause
exit /b

:vercel
echo.
echo === Vercel 部署 ===
echo 首次使用会打开浏览器登录，之后一键部署。
echo.
npx vercel --prod
echo.
echo 部署完成！Vercel 会自动复制链接到剪贴板。
pause
exit /b

:netlify
echo.
echo === Netlify 部署 ===
echo 首次使用会打开浏览器登录。
echo.
npx netlify-cli deploy --prod --dir=.
echo.
echo 部署完成！
pause
exit /b

:github
echo.
echo === GitHub Pages 部署 ===
echo 请确保你已有 GitHub 仓库。
echo.
echo 方式1: 直接上传 dist 文件夹到 GitHub
echo   1. 访问 https://github.com/new 创建新仓库
echo   2. 将 roco-kingdom 文件夹所有内容推送到仓库
echo   3. Settings - Pages - 选择 main 分支 - Save
echo.
echo 方式2: 使用 gh-pages 一键部署
echo   运行: npx gh-pages -d .
echo.
start https://github.com/new
pause
exit /b

:surge
echo.
echo === Surge.sh 部署 ===
echo 只需输入邮箱和密码即可部署。
echo.
npx surge .
echo.
pause
exit /b
