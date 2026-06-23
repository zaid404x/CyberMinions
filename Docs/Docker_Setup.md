# Docker Setup

## Build Image

docker build -t app:v1 .

## Verify

docker images

## Push Image

docker tag app:v1 username/app:v1

docker push username/app:v1
