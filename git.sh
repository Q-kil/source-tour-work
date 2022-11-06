#!/bin/bash

echo 'git auto push start...'
# msg=$1
git add .
git commit -m "${1:-update}"
# git pull origin main
git push origin main
echo 'git auto push end !'