package utils

import (
	"fmt"
	"net/url"
)

type URLBuilder struct{}

func (builder URLBuilder) Build(baseUrl string, queries map[string]string) string {
	// count := len(queries)

	// keys := make([]string, count)
	urlObj, err := url.Parse(baseUrl)

	if err != nil {
		return ""
	}

	urlObjQueries := url.Values{}

	for query := range queries {
		fmt.Println(queries[query])

		urlObjQueries.Add(query, queries[query])
	}

	urlObj.RawQuery = urlObjQueries.Encode()

	// println(urlObj.String())

	return urlObj.String()

}
