# FROM node:15.13-alpine
# WORKDIR /blog
# ENV PATH="./node_modules/.bin:$PATH"
# COPY . .
# RUN npm run build
# CMD ["npm","start"]
# FROM node:alpine
# WORKDIR /blog
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# RUN npm i --force
# CMD ["npm", "run", "start"]
FROM node as build

WORKDIR /blog
COPY package*.json .
RUN npm i --force
COPY . .
RUN npm run build

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /blog/build /usr/share/nginx/html


