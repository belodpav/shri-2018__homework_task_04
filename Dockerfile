FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN apk add --no-cache git python make g++
RUN git clone --mirror https://github.com/belodpav/shri-2018__test-repo.git test-repo/.git
ENV REPO /usr/src/app/test-repo
RUN npm install --only=production

CMD npm run dock:prod