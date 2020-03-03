install:
	docker-compose -f docker-compose.builder.yml run --rm install
dev:
	docker-compose up --build
dev-headless:
	docker-compose up --build -d
stop:
	docker-compose stop
