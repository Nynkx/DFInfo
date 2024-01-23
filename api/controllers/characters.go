package controllers

import (
	"fmt"
)

import (
	"github.com/nynkx/dfinfo/api/models"

	"github.com/gin-gonic/gin"
)

var CharactersModel = new(models.Characters)

type CharactersController struct{}

func (controller CharactersController) GetAll(ctx *gin.Context) {

	queriesObj := make(map[string]string)

	queries := ctx.Request.URL.Query()

	var requestData *models.RequestObj = &models.RequestObj{}

	requestData.Server = "all"

	for query := range queries {
		if query == "server" {
			requestData.Server = queries[query][0]
		}
		queriesObj[query] = queries[query][0]
	}
	requestData.Queries = queriesObj

	fmt.Println(queriesObj)

	result, err := CharactersModel.Get(requestData)

	if err != nil {
		ctx.Error(err)
		return
	}

	ctx.JSON(200, result)
	// ctx.JSON(200, gin.H{})

	return
}
