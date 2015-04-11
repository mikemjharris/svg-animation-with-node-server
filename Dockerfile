FROM node:0.10-onbuild
MAINTAINER Mike Harris "mike.harris@mammal.io"

ADD package.json /tmp/package.json

RUN mkdir -p /var/log/www/
VOLUME /var/log/www/

ADD . /var/www/

WORKDIR /var/www/

CMD node ./server/server.js

EXPOSE 6000
