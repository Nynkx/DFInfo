package controllers

import (
	"github.com/nynkx/dfinfo/api/models"

	"github.com/gin-gonic/gin"
)

var JobsModel = new(models.Jobs)

type JobsController struct{}

func (controller JobsController) GetAll(ctx *gin.Context) {

	result, err := JobsModel.GetAll()

	if err != nil {
		ctx.Error(err)
		return
	}

	ctx.JSON(200, result)

	return
}
