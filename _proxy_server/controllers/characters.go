package controllers

import (
	"fmt"
)

import (
	"github.com/nynkx/dfinfo_server/models"

	"github.com/gin-gonic/gin"
)

var CharactersModel = new(models.Characters)

type CharactersController struct{}

func (controller CharactersController) GetAll(ctx *gin.Context) {

	queriesObj := make(map[string]string)

	queries := ctx.Request.URL.Query()

	for query := range queries {
		queriesObj[query] = queries[query][0]
	}

	fmt.Println(queriesObj)

	result, err := CharactersModel.Get(queriesObj)

	if err != nil {
		ctx.Error(err)
		return
	}

	ctx.JSON(200, result)
	// ctx.JSON(200, gin.H{})

	return
}
