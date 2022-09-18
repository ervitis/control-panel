.PHONY: help

help: ## Show this help
	@echo "Help"
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m  %-30s\033[93m %s\n", $$1, $$2}'


front-api-generate-v1: ## Generate API V1 for frontend
	@echo "front-api-generate-v1"
	declare -A APIV1FILES=( ["login"]="login.yaml" ["users"]="users.yaml" )\
	; for apitype in "$${!APIV1FILES[@]}" ; do \
		filename=$${APIV1FILES[$${apitype}]}; \
		echo "Cleaning API v1 old files for "$${filename} && \
		rm -rf ./front/src/api/v1/$${apitype} && \
		echo "Creating API v1 for "$${filename} && \
		bash runtime_container.sh run -v ./api/schemas/:/tmp/ docker.io/openapitools/openapi-generator:cli-6.0.x generate -g typescript-axios -i /tmp/v1/$${filename} -o /tmp/apigen/v1/$${apitype} && \
		mkdir -p ./front/src/api/v1 && \
		echo "Moving file "$${filename}" from ./api/schemas/apigen/v1/"$${apitype}" to ./front/src/api/v1/"$${apitype} && \
		mv -f ./api/schemas/apigen/v1/$${apitype} ./front/src/api/v1/$${apitype} && \
		sleep 2; \
	done ;\
	rm -rf ./api/schemas/apigen && \
	rm -rf ./api/schemas/hsperfdata_root

front-dev-start: ## Start server for dev environment
	(cd ./front && yarn start)
