# Makefile hemo-conecta
.PHONY: build publish up down logs run-dev

build:
	docker build -t hemo-conecta:latest .

publish:
	docker compose up -d --build front

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

run-dev:
	docker compose up front-dev --build

