FROM node:9

# create app directory
WORKDIR /usr/src/app

# install app dependencies
# a wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn install
# if you are building your code for production
# RUN npm install --only=production

# bundle app source
COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
