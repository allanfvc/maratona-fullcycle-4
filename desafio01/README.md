# Sample REST API with Golang

## How to Run
```
npm install
npm start
```

## Building docker image
```
docker build -t allanfvc/mfc-desafio01:<VERSION_TAG> . 
```

## Running docker image
```
docker run -it -p 8080:8080 allanfvc/mfc-desafio01:<VERSION_TAG>
```

## Pushing to DockerHub
```
docker login 
docker push allanfvc/mfc-desafio01:<VERSION_TAG>
```

## Docker image
Docker image are available at [DockerHub](https://hub.docker.com/r/allanfvc/mfc-desafio01).
