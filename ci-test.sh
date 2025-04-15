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
npm run build


if netstat -tuln | grep -q ':8080'; then
    echo "发现 8080 端口占用，终止现有进程..."
    sudo pkill -f 'next start -p 8080' || true
fi

# 复制构建产物
sudo cp -rf .next /www/wwwroot/g-imgs/
