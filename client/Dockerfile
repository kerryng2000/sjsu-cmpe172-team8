#FROM node:10.16-alpine
#RUN mkdir -p /usr/src/app
#WORKDIR /src/app
#COPY package*.json ./
#RUN npm ci
#COPY . .
#EXPOSE 8080
#CMD ["npm","start"]
# Dockerfile for React client

# Build react client
FROM node:10.16-alpine

# Working directory be app
WORKDIR /usr/src/app

COPY package*.json ./

###  Installing dependencies

RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]