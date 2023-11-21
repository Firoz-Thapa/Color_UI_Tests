#!/bin/bash

git init 
npm init -y

touch .env.example

cat <<EOF >> ".env.example"
API_URL = <http://example.com/color-picker
EOF

touch .gitignore
echo "node_modules" >> .gitignore

mkdir test
touch test/test.spec.js
touch test/color-ui.spec.js

npm i --save-dev mocha chai selenium-webdriver

touch readme.md

