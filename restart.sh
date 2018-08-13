#!/bin/bash

source $(pwd)/config/config_deploy

docker kill $SERVER_NAME'_'$SERVER_MODE
docker rm $SERVER_NAME'_'$SERVER_MODE
./run.sh
