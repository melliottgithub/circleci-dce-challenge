# stage 1: build app
FROM golang:bookworm AS builder

WORKDIR /app

# dependencies
COPY go.mod go.sum ./
RUN go mod download

# copy the rest of the application source code
COPY . .

# build
RUN CGO_ENABLED=0 GOOS=linux go build -o myapp .

# run tests
RUN go run gotest.tools/gotestsum@v1.11.0 .

# stage 2: production image
FROM alpine:latest

WORKDIR /app

# copy runtime files from the previous stage
COPY --from=builder /app/myapp .

# expose ports
EXPOSE 1337

# run the application
CMD ["./myapp"]
