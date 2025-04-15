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