FROM node:4.0

RUN npm install bower -g
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY bower.json /usr/src/app/
RUN bower install --allow-root
COPY . /usr/src/app

EXPOSE 4200

CMD [ "npm", "start" ]
