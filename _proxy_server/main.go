package main

import (
	"fmt"
	"os"
)

import (
	"github.com/joho/godotenv"
)

import (
	"github.com/nynkx/dfinfo_server/server"
)

func main() {
	envErr := godotenv.Load(".env.local")

	if envErr != nil {
		fmt.Sprintln("Error opening env")
		os.Exit(1)
	}

	server.Init()

}
