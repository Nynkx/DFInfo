package controllers

import (
	"github.com/nynkx/dfinfo/api/models"

	"github.com/gin-gonic/gin"
)

var ServersListModel = new(models.Servers)

type ServersListController struct{}

func (controller ServersListController) GetAll(ctx *gin.Context) {

	result, err := ServersListModel.GetAll()

	if err != nil {
		ctx.Error(err)
		return
	}

	ctx.JSON(200, result)

	return
}
