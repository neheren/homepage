#!/bin/bash

name="littevalley"


docker stop $name && docker rm $name
docker build -t $name .

if [[ $* == *--dev* ]]; then
    echo "DEVELOPMENT MODE ACTIVE (changes will be picked up)."
    docker run --name $name -d -p 8080:80 -v $(pwd)/src:/usr/share/nginx/html $name
    command -v browser-sync >/dev/null 2>&1 || npm i -g browser-sync
    browser-sync start --proxy "localhost:8080" --files "src/**/*.*"
else
    docker run --name $name -d -p 8080:80 $name
    open http://localhost:8080/
fi

