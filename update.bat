git checkout master
git add .
git commit -m "%1"
git push origin master
git subtree push --prefix site/dist origin gh-pages