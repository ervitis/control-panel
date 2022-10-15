package main

import (
	"encoding/json"
	"github.com/ervitis/control-panel/common/global/mock"
	"github.com/ervitis/control-panel/internal/domain"
	"github.com/ervitis/control-panel/internal/ports"
	"github.com/ervitis/control-panel/internal/services/user"
	"log"
	"net/http"
)

type requestBody struct {
	Name     string `json:"name"`
	Birthday string `json:"birthday"`
}

type responseBody struct {
	ID       uint64 `json:"id"`
	Name     string `json:"name"`
	Birthday string `json:"birthday"`
}

/*
{"name": "victor", "birthday": "2020-10-04"}
*/

var (
	svc ports.IUserService
)

func init() {
	svc = user.NewUserService()
	mock.Users = user.LoadMockList()
}

func main() {
	http.HandleFunc("/filter", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}

		var body requestBody
		if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
			log.Println(err)
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		filters := domain.NewFilter(domain.WithBirthday(body.Birthday), domain.WithName(body.Name))

		b, _ := json.Marshal(svc.Filter(r.Context(), filters))
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write(b)
	})

	if err := http.ListenAndServe(":8085", nil); err != nil {
		log.Panicln(err)
	}

}
