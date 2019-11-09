set message=%1
if "%1"=="" set message=atualizacao
git checkout master
git add .
git commit -m "%message%"
git push origin master
git subtree push --prefix site/dist origin gh-pages