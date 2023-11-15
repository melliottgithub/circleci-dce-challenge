# Challenge app

## Docker multi-stage builds
- stage 1: build app
- stage 2: production image

## Local build and verification

> Note: the stage 1 run unit tests.

### Build image

```bash
docker build -t dce-challenge .
```

### Verify the production image

```bash
docker run -it -p 1337:1337 dce-challenge
curl http://localhost:1337/challenge
```
