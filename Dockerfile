FROM node:12.22.12-alpine
LABEL authors="aarancis"

EXPOSE 4201

RUN apk add --update tini
WORKDIR '/app'

COPY ./package.json ./

RUN npm install

COPY . .

# Serve files on port 3000
CMD ["npm", "run", "serve:frontend-colas"]
