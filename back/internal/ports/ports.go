package ports

import (
	"context"
	"github.com/ervitis/control-panel/internal/domain"
)

type (
	IUserService interface {
		Filter(context.Context, domain.Filter) []domain.User
	}
)
