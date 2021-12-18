PROJECT = jsbumbling
ID = pikesley/${PROJECT}

build:
	docker build \
		--tag ${ID} .

run:
	docker run \
		--name ${PROJECT} \
		--hostname ${PROJECT}-dev \
		--volume $(shell pwd):/opt/${PROJECT} \
		--interactive \
		--tty \
		--rm \
		--publish 8080:80 \
		${ID} \
		bash

exec:
	docker exec \
		--interactive \
		--tty \
		${PROJECT} \
		bash
