package server

import (
	"github.com/gin-gonic/gin"
	"github.com/nynkx/dfinfo_server/controllers"
)

func addServersListRoutes(router *gin.Engine) {
	servers := new(controllers.ServersListController)

	router.GET("/servers", servers.GetAll)
}

func addJobsRoutes(router *gin.Engine) {
	jobs := new(controllers.JobsController)

	router.GET("/jobs", jobs.GetAll)
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func newRouter() *gin.Engine {
	router := gin.New()

	router.Use(CORSMiddleware())

	router.Use(gin.Logger())

	addServersListRoutes(router)
	addJobsRoutes(router)

	return router
}
