FROM node:12
MAINTAINER Mike Harris "hello@mikemjharris.com"

ADD package.json /tmp/package.json

RUN mkdir -p /var/log/www/
VOLUME /var/log/www/

ADD . /var/www/

WORKDIR /var/www/

RUN npm install -g bower
RUN bower install
RUN npm install

CMD node ./server/server.js

EXPOSE 8000
