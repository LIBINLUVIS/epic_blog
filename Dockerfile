FROM node as build

WORKDIR /blog
COPY package*.json .
RUN npm i --force
COPY . .
RUN npm run build

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /blog/build /usr/share/nginx/html


