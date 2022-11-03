FROM node
WORKDIR /server
COPY package.json /server
COPY yarn.lock /server
RUN yarn
COPY . /server
CMD ["yarn", "start"]