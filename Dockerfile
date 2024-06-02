FROM node:20.5.0

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

CMD ["yarn", "dev"]
