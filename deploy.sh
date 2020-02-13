###
 # @Author: your name
 # @Date: 2020-02-13 08:46:03
 # @LastEditTime : 2020-02-13 17:01:50
 # @LastEditors  : Please set LastEditors
 # @Description: In User Settings Edit
 # @FilePath: \vuepress-theme-dva-devloping\deploy.sh
 ###

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'fix:fix some bugs'


# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:lhj233/lhj233.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -