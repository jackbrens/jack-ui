@echo off
echo building...
call build.bat
echo building-complete

REM 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'



REM 如果发布到 https://gitee.com/<USERNAME>/<REPO>
git push https://gitee.com/jackbrens/jack-ui.git master

cd ..
cd ..
cd ..
echo Auto-Deploy-Complete
