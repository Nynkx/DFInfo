package models

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
)

type Job struct {
	JobId   string    `json:"jobId"`
	JobName string    `json:"jobName"`
	Rows    []JobGrow `json:"rows"`
}

type JobGrow struct {
	JobGrowId   string   `json:"jobGrowId"`
	JobGrowName string   `json:"jobGrowName"`
	Next        *JobGrow `json:"next,omitempty"`
}

type Jobs struct {
	Rows []Job `json:"rows"`
}

func (h Jobs) GetAll() (*Jobs, error) {
	url := "https://api.dfoneople.com/df/jobs?apikey=" + os.Getenv("API_KEY")

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

	var data *Jobs
	jsonErr := json.Unmarshal(body, &data)

	if jsonErr != nil {
		return nil, jsonErr
	}

	return data, nil
}
