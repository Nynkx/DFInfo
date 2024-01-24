BIN_NAME=app
export GO111MODULE=on

.PHONY: init
init: init-client init-server

.PHONY: init-server
init-server:
	@echo "> Installing the server dependencies ..."
	@go mod tidy -v
	@go get -v ./...
	@go get -u github.com/cosmtrek/air


.PHONY: init-client
init-client:
	@echo "> Installing the client dependencies ..."
	@npm i -D

.PHONY: run-client
run-client:
	@echo "> Starting client..."
	@npm run dev

.PHONY: run-server
run-server:
	@echo "> Starting server..."
	@go run github.com/cosmtrek/air


.PHONY: run
run:
	@echo "> Running app..."
	./node_modules/.bin/concurrently "make run-client" "make run-server"
