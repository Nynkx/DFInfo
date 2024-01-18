package models

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
)

import (
	"github.com/nynkx/dfinfo_server/utils"
)

type Character struct {
	ServerId      string `json:"serverId"`
	CharacterId   string `json:"characterId"`
	CharacterName string `json:"characterName"`
	Level         int    `json:"level"`
	JobId         string `json:"jobId"`
	JobGrowId     string `json:"jobGrowId"`
	JobName       string `json:"JobName"`
	JobGrowname   string `json:"JobGrowname"`
	Fame          int    `json:"fame"`
}

// type JobGrow struct {
// 	JobGrowId   string   `json:"jobGrowId"`
// 	JobGrowName string   `json:"jobGrowName"`
// 	Next        *JobGrow `json:"next,omitempty"`
// }

type Characters struct {
	Rows []Character `json:"rows"`
}

type RequestObj struct {
	Server  string
	Queries map[string]string
}

func (jobs Characters) Get(reqData *RequestObj) (*Characters, error) {
	reqData.Queries["apikey"] = os.Getenv("API_KEY")

	builder := utils.URLBuilder{}

	url := builder.Build(os.Getenv("BASE_URL")+"/servers/"+reqData.Server+"/characters", reqData.Queries)

	fmt.Println(url)

	res, err := http.Get(url)

	if err != nil {
		return nil, err
	}

	defer res.Body.Close()

	body, bodyErr := io.ReadAll(res.Body)
	if bodyErr != nil {
		return nil, bodyErr
	}

	var data *Characters
	jsonErr := json.Unmarshal(body, &data)

	if jsonErr != nil {
		return nil, jsonErr
	}

	return data, nil
}
