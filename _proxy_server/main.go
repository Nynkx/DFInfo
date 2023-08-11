package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"io"
	"net/http"
	"os"
)

func main() {
	envErr := godotenv.Load(".env.local")
	r := gin.Default()

	r.GET("/servers", func(c *gin.Context) {
		res, err := http.Get("https://api.dfoneople.com/df/servers?apikey=" + os.Getenv("API_KEY"))
		fmt.Sprintln(res.Body)

		if err != nil {
			c.JSON(res.StatusCode, gin.H{})
		}

		body, bodyErr := io.ReadAll(res.Body)

		if bodyErr != nil {
			c.JSON(http.StatusInternalServerError, gin.H{})
		}

		c.JSON(http.StatusOK, body)

	})

	r.Run()

}
