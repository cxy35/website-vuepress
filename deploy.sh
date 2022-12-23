# 部署方法1：https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages
# 手动执行该脚本完成部署，或者你可以在你的持续集成的设置中，设置在每次 push 代码时自动运行该脚本
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'vuepress.cxy35.top' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:cxy35/website-vuepress.git master:gh-pages

cd -
rm -rf docs/.vuepress/dist