#!/usr/bin/env sh

. "$(dirname -- "$0")/_/husky.sh"

echo "Runnig linting..."

yarn lint

echo "Runnig build..."

yarn build

echo "LET'S F**KING GOO!"

git add .