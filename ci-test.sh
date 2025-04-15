#!/bin/sh

# ref: https://www.baeldung.com/linux/use-command-line-arguments-in-bash-script#flags
while getopts t: flag; do
  case "${flag}" in
  t) ticket=${OPTARG} ;;
  esac
done


set -Exe pipefail

pnpm i
chmod +x node_modules/.bin/*
# npm run build


ls
# 复制构建产物
cp -rf .next /www/wwwroot/g-imgs/


# 2. 使用进程管理工具 PM2（推荐方案）
# if pm2 list | grep -q 'g-imgs'; then
#     echo "停止现有应用..."
#     pm2 stop g-imgs --wait-ready
#     pm2 delete g-imgs
# fi

# # 3. 带版本的回滚机制
# sudo mkdir -p "${BACKUP_DIR}"
# [ -d "${DEPLOY_DIR}/.next" ] && sudo cp -rf "${DEPLOY_DIR}/.next" "${BACKUP_DIR}/"

# # 4. 使用PM2守护进程
# pm2 start "npm run start" --name g-imgs --time
# pm2 save
# pm2 logs g-imgs --lines 100