FROM golang:1.26-alpine as builder

RUN apk update && apk upgrade && \
     apk add --no-cache zsh git openssh

SHELL [ "/bin/zsh", "-c" ]

WORKDIR /app

RUN go install github.com/air-verse/air@latest

COPY go.mod go.sum ./
RUN go mod download

COPY . .

EXPOSE 4000


CMD ["air", "-c", ".air.toml"]
