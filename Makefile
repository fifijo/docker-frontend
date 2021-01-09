up:
	docker-compose -f docker/development/docker-compose.yml up -d
stop:
	docker-compose -f docker/development/docker-compose.yml stop
down:
	docker-compose -f docker/development/docker-compose.yml down --remove-orphans
build:
	docker-compose -f docker/development/docker-compose.yml build --no-cache
