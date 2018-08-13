source $(pwd)/config/config_deploy

docker run -p $SERVER_PORT:8080 --mount type=bind,source="$(pwd)"/content,target=/app --name $SERVER_NAME'_'$SERVER_MODE $SERVER_NAME'_'$SERVER_MODE node /app/app.js &
