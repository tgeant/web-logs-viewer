source $(pwd)/config/config_deploy

docker build -t $SERVER_NAME'_'$SERVER_MODE .
