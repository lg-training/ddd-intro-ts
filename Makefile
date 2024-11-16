db-up:
	npx prisma init --datasource-provider sqlite

db-migrate:
	npx prisma migrate dev


app-install:
	yarn install

app-build: db-migrate
	yarn build

app-start:
	yarn start

app-run: db-migrate
	yarn run dev


post-logbook:
	curl -X POST --location $(API_URL) \
		-H "Content-Type: application/json" \
		-d $(POST_PAYLOAD)

get-logbook:
	curl -X GET --location $(API_URL)\
		-H "Content-Type: application/json" \
		-d $(GET_PAYLOAD)



API_URL = "http://localhost:8080/logbooks"
NAME= example
LOGBOOK_ID=95dfa145-e9c5-4d8f-8532-7c143c219b15
POST_PAYLOAD='{\
			"name": "$(NAME)"\
}'

GET_PAYLOAD='{\
			"id": "$(LOGBOOK_ID)"\
}'