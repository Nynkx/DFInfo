package models

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
)

type Servers struct {
	Rows []struct {
		ServerID   string `json:"serverId"`
		ServerName string `json:"serverName"`
	} `json:"rows"`
}

func (h Servers) GetAll() (*Servers, error) {
	url := "https://api.dfoneople.com/df/servers?apikey=" + os.Getenv("API_KEY")

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

	var data *Servers
	jsonErr := json.Unmarshal(body, &data)

	if jsonErr != nil {
		return nil, jsonErr
	}

	return data, nil
}
